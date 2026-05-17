export const ENQUIRY_TO_EMAIL = "hello@yorstore.co.uk";

export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  source: string;
  website?: string;
};

export type EnquiryValidationResult =
  | { ok: true; data: EnquiryPayload }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(body: unknown): EnquiryValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const raw = body as Record<string, unknown>;

  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { ok: false, error: "Invalid request." };
  }

  const name = trimStr(raw.name, 100);
  const phone = trimStr(raw.phone, 30);
  const email = trimStr(raw.email, 254).toLowerCase();
  const serviceType = trimStr(raw.serviceType, 200);
  const message = trimStr(raw.message, 5000);
  const source = trimStr(raw.source, 500);

  if (name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }

  if (!phone && !email) {
    return { ok: false, error: "Please enter a phone number or email address." };
  }

  if (email && !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (phone && phone.length < 5) {
    return { ok: false, error: "Please enter a valid phone number." };
  }

  if (!serviceType) {
    return { ok: false, error: "Missing service type." };
  }

  return {
    ok: true,
    data: { name, phone, email, serviceType, message, source },
  };
}

function trimStr(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function formatEnquiryTimestamp(): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(new Date());
}

export function buildEnquiryEmail(data: EnquiryPayload) {
  const submittedAt = formatEnquiryTimestamp();
  const subject = `[Yorstore] ${data.serviceType} — ${data.name}`;

  const lines = [
    `New enquiry from ${data.name}`,
    "",
    `Service: ${data.serviceType}`,
    `Page: ${data.source || "Website"}`,
    `Submitted: ${submittedAt}`,
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone || "—"}`,
    `Email: ${data.email || "—"}`,
    "",
    "Message:",
    data.message || "(No message provided)",
  ];

  const text = lines.join("\n");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;background:#f8fafc;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#0f2744;padding:20px 24px;">
              <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#93c5fd;">Yorstore enquiry</p>
              <h1 style="margin:8px 0 0;font-size:20px;font-weight:700;color:#ffffff;">${escapeHtml(data.serviceType)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                ${row("Name", data.name)}
                ${row("Phone", data.phone || "—")}
                ${row("Email", data.email ? `<a href="mailto:${escapeHtml(data.email)}" style="color:#2563eb;">${escapeHtml(data.email)}</a>` : "—")}
                ${row("Service", data.serviceType)}
                ${row("Page", data.source || "Website")}
                ${row("Submitted", submittedAt)}
              </table>
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#64748b;">Message</p>
              <p style="margin:0;padding:16px;background:#f1f5f9;border-radius:8px;white-space:pre-wrap;color:#334155;">${escapeHtml(data.message || "(No message provided)")}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  return { subject, text, html, submittedAt };
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:13px;color:#64748b;width:110px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a;vertical-align:top;">${value}</td>
    </tr>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
