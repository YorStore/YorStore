import { Resend } from "resend";

const DEV_FROM_FALLBACK = "Yorstore <onboarding@resend.dev>";
/** Verified yorstore.co.uk sender when RESEND_FROM_EMAIL is not set in production */
const PRODUCTION_FROM_FALLBACK = "Yorstore <hello@yorstore.co.uk>";

export type ResendConfig =
  | { ok: true; client: Resend; from: string; apiKeyPresent: true }
  | { ok: false; reason: "missing_api_key" | "missing_from"; apiKeyPresent: boolean };

function readEnv(...keys: string[]): string {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value) return value;
  }
  return "";
}

export function getResendApiKey(): string {
  return readEnv("RESEND_API_KEY", "RESEND_KEY");
}

export function getResendFromAddress(): string {
  const configured = readEnv("RESEND_FROM_EMAIL", "RESEND_FROM");
  if (configured) return configured;

  if (process.env.NODE_ENV === "development") {
    return DEV_FROM_FALLBACK;
  }

  if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") {
    return PRODUCTION_FROM_FALLBACK;
  }

  return PRODUCTION_FROM_FALLBACK;
}

export function getResendConfig(): ResendConfig {
  const apiKey = getResendApiKey();
  const apiKeyPresent = Boolean(apiKey);

  if (!apiKey) {
    return { ok: false, reason: "missing_api_key", apiKeyPresent: false };
  }

  const from = getResendFromAddress();
  if (!from) {
    return { ok: false, reason: "missing_from", apiKeyPresent: true };
  }

  return {
    ok: true,
    client: new Resend(apiKey),
    from,
    apiKeyPresent: true,
  };
}

export function logResendDiagnostics(context: string, extra?: Record<string, unknown>) {
  const apiKey = getResendApiKey();
  console.log(`[enquiry] ${context}`, {
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    apiKeyPresent: Boolean(apiKey),
    apiKeyPrefix: apiKey ? `${apiKey.slice(0, 7)}…` : null,
    from: getResendFromAddress(),
    ...extra,
  });
}
