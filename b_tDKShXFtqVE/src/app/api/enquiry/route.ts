import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  ENQUIRY_TO_EMAIL,
  buildEnquiryEmail,
  validateEnquiry,
} from "@/lib/enquiry";

export const runtime = "nodejs";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function getFromAddress(): string | null {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  return from && from.length > 0 ? from : null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = validateEnquiry(body);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    if (!resend) {
      console.error("[enquiry] RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please call us directly." },
        { status: 503 }
      );
    }

    const from = getFromAddress();
    if (!from) {
      console.error("[enquiry] RESEND_FROM_EMAIL is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please call us directly." },
        { status: 503 }
      );
    }

    const { data } = validated;
    const { subject, text, html } = buildEnquiryEmail(data);

    const replyTo = data.email || undefined;

    const { error } = await resend.emails.send({
      from,
      to: [ENQUIRY_TO_EMAIL],
      replyTo,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[enquiry] Resend error:", error);
      return NextResponse.json(
        { error: "We could not send your enquiry. Please try again or call us." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
