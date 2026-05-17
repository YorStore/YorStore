import { NextResponse } from "next/server";
import {
  ENQUIRY_TO_EMAIL,
  buildEnquiryEmail,
  validateEnquiry,
} from "@/lib/enquiry";
import { getResendConfig } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SEND_FAILURE =
  "We could not send your enquiry right now. Please try again or call us directly.";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = validateEnquiry(body);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const resendConfig = getResendConfig();
    if (!resendConfig.ok) {
      console.error("[enquiry] Resend not configured:", resendConfig.reason);
      return NextResponse.json({ error: SEND_FAILURE }, { status: 503 });
    }

    const { data } = validated;
    const { subject, text, html } = buildEnquiryEmail(data);

    const { error } = await resendConfig.client.emails.send({
      from: resendConfig.from,
      to: [ENQUIRY_TO_EMAIL],
      replyTo: data.email || undefined,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[enquiry] Resend send failed:", error);
      return NextResponse.json({ error: SEND_FAILURE }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] Unexpected error:", err);
    return NextResponse.json({ error: SEND_FAILURE }, { status: 500 });
  }
}
