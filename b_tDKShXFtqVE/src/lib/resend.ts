import { Resend } from "resend";

const DEV_FROM_FALLBACK = "Yorstore <onboarding@resend.dev>";

export type ResendConfig =
  | { ok: true; client: Resend; from: string }
  | { ok: false; reason: "missing_api_key" | "missing_from" };

export function getResendConfig(): ResendConfig {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, reason: "missing_api_key" };
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    (process.env.NODE_ENV === "development" ? DEV_FROM_FALLBACK : "");

  if (!from) {
    return { ok: false, reason: "missing_from" };
  }

  return { ok: true, client: new Resend(apiKey), from };
}
