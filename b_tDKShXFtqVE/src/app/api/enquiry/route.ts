import { NextResponse } from "next/server";
import {
  ENQUIRY_TO_EMAIL,
  buildEnquiryEmail,
  validateEnquiry,
} from "@/lib/enquiry";
import { getResendConfig, logResendDiagnostics } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SEND_FAILURE =
  "We could not send your enquiry right now. Please try again or call us directly.";

export async function POST(request: Request) {
  logResendDiagnostics("POST received");

  try {
    const body = await request.json();
    const validated = validateEnquiry(body);

    if (!validated.ok) {
      console.warn("[enquiry] validation failed:", validated.error);
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const resendConfig = getResendConfig();
    if (!resendConfig.ok) {
      logResendDiagnostics("Resend config missing", { reason: resendConfig.reason });
      return NextResponse.json({ error: SEND_FAILURE }, { status: 503 });
    }

    const { data } = validated;
    const { subject, text, html } = buildEnquiryEmail(data);

    logResendDiagnostics("sending email", {
      to: ENQUIRY_TO_EMAIL,
      from: resendConfig.from,
      subject,
      serviceType: data.serviceType,
      source: data.source,
    });

    const result = await resendConfig.client.emails.send({
      from: resendConfig.from,
      to: [ENQUIRY_TO_EMAIL],
      replyTo: data.email || undefined,
      subject,
      text,
      html,
    });

    if (result.error) {
      console.error("[enquiry] Resend send failed:", JSON.stringify(result.error, null, 2));
      return NextResponse.json({ error: SEND_FAILURE }, { status: 502 });
    }

    console.log("[enquiry] email sent:", result.data?.id ?? "ok");
    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[enquiry] Unexpected error:", err);
    return NextResponse.json({ error: SEND_FAILURE }, { status: 500 });
  }
}
