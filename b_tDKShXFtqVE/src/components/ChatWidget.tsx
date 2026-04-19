"use client";
import { useState, useRef, useEffect } from "react";

const STEPS = [
  {
    id: "welcome",
    bot: "Hi there! 👋 I can get you a storage quote in under 2 minutes. What brings you here today?",
    type: "choices",
    key: "intent",
    choices: ["Get a quote", "Find storage nearby", "Ask a question"],
  },
  {
    id: "storage_type",
    bot: "Great! What type of storage do you need?",
    type: "choices",
    key: "storageType",
    choices: ["🏠 Home / Personal", "🎓 Student", "🏢 Business", "🚗 Vehicle"],
  },
  {
    id: "postcode",
    bot: "What's your postcode? We'll find your nearest facility.",
    type: "text",
    key: "postcode",
    placeholder: "e.g. LS1 4AW",
  },
  {
    id: "size",
    bot: "How much space do you need?",
    type: "choices",
    key: "size",
    choices: [
      "📦 Small — 25 sq ft (wardrobe)",
      "📦📦 Medium — 50 sq ft (bedroom)",
      "🏠 Large — 75 sq ft (garage)",
      "🤷 Not sure yet",
    ],
  },
  {
    id: "timing",
    bot: "When do you need storage from?",
    type: "choices",
    key: "timing",
    choices: ["🔥 ASAP", "📅 Within 2 weeks", "🗓 Next month", "👀 Just exploring"],
  },
  {
    id: "name",
    bot: "Almost done! What's your name?",
    type: "text",
    key: "name",
    placeholder: "Your full name",
  },
  {
    id: "phone",
    bot: "And your phone number so we can call with your quote?",
    type: "text",
    key: "phone",
    placeholder: "e.g. 07700 900123",
  },
  {
    id: "email",
    bot: "Finally, your email address for confirmation?",
    type: "text",
    key: "email",
    placeholder: "you@example.com",
  },
];

type MessageType = { from: "bot" | "user"; text: string };
type DataType = Record<string, string>;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [data, setData] = useState<DataType>({});
  const [inputVal, setInputVal] = useState("");
  const [showChoices, setShowChoices] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showChoices, showSummary, typing]);

  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      showBotMessage(STEPS[0].bot, true);
    }
  }, [open]);

  function showBotMessage(text: string, withChoices = false) {
    setTyping(true);
    setShowChoices(false);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text }]);
      if (withChoices) setTimeout(() => setShowChoices(true), 100);
    }, 700);
  }

  function handleChoice(choice: string) {
    const current = STEPS[step];
    setData((d) => ({ ...d, [current.key]: choice }));
    setMessages((m) => [...m, { from: "user", text: choice }]);
    setShowChoices(false);
    nextStep(step + 1);
  }

  function handleText() {
    const val = inputVal.trim();
    if (!val) return;
    const current = STEPS[step];
    if (current.key === "email" && !/\S+@\S+\.\S+/.test(val)) {
      inputRef.current?.focus();
      return;
    }
    const newData = { ...data, [current.key]: val };
    setData(newData);
    setMessages((m) => [...m, { from: "user", text: val }]);
    setInputVal("");
    if (step === STEPS.length - 1) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((m) => [...m, { from: "bot", text: "Here's a summary of your enquiry:" }]);
        setTimeout(() => setShowSummary(true), 100);
      }, 700);
    } else {
      nextStep(step + 1);
    }
  }

  function nextStep(nextIdx: number) {
    setStep(nextIdx);
    const next = STEPS[nextIdx];
    if (!next) return;
    showBotMessage(next.bot, next.type === "choices");
  }

  async function submitEnquiry() {
    setShowSummary(false);
    setTyping(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {}
    setTyping(false);
    setSubmitted(true);
  }

  const currentStep = STEPS[step];
  const progress = Math.round((step / STEPS.length) * 100);

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 9999,
          width: 60, height: 60, borderRadius: "50%", border: "none",
          background: "linear-gradient(135deg, #2196F3, #0F2D52)",
          cursor: "pointer", boxShadow: "0 4px 20px rgba(21,101,192,.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform .2s",
        }}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6V10h12v2zm0-3H6V7h12v2z" />
          </svg>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: 96, right: 24, zIndex: 9998,
          width: 360, maxWidth: "calc(100vw - 32px)",
          height: 540, maxHeight: "calc(100vh - 120px)",
          background: "#fff", borderRadius: 18,
          boxShadow: "0 8px 40px rgba(15,45,82,.18)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          fontFamily: "var(--font-poppins, sans-serif)",
        }}>

          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #0F2D52, #1565C0)",
            padding: "16px 20px", display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "rgba(255,255,255,.15)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
            }}>📦</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>YorStore Assistant</div>
              <div style={{ color: "rgba(255,255,255,.65)", fontSize: 11, marginTop: 1 }}>Typically replies in seconds</div>
            </div>
            <div style={{
              marginLeft: "auto", width: 8, height: 8, borderRadius: "50%",
              background: "#4CAF50", boxShadow: "0 0 0 2px rgba(255,255,255,.3)",
            }} />
          </div>

          {/* Progress bar */}
          <div style={{ height: 3, background: "#E3F2FD" }}>
            <div style={{
              height: "100%", background: "#2196F3",
              width: `${progress}%`, transition: "width .4s",
            }} />
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}>
                {m.from === "bot" && (
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#2196F3,#0F2D52)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>📦</div>
                )}
                <div style={{
                  maxWidth: "78%", padding: "9px 13px", fontSize: 13, lineHeight: 1.5,
                  borderRadius: m.from === "bot" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                  background: m.from === "bot" ? "#F0F7FF" : "linear-gradient(135deg,#2196F3,#1565C0)",
                  color: m.from === "bot" ? "#1A2E45" : "#fff",
                  border: m.from === "bot" ? "1px solid #E3F2FD" : "none",
                }}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#2196F3,#0F2D52)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>📦</div>
                <div style={{ background: "#F0F7FF", border: "1px solid #E3F2FD", borderRadius: "16px 16px 16px 4px", padding: "10px 14px", display: "flex", gap: 4 }}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: "50%", background: "#8FA8C8",
                      animation: "bounce 1s infinite", animationDelay: `${i * 0.15}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            {showSummary && (
              <div style={{ background: "#F0F7FF", border: "1px solid #E3F2FD", borderRadius: 12, padding: "12px 14px", fontSize: 12, lineHeight: 1.9, margin: "4px 0" }}>
                <strong style={{ color: "#0F2D52" }}>📋 Your Enquiry</strong><br />
                <strong>Type:</strong> {data.storageType}<br />
                <strong>Size:</strong> {data.size}<br />
                <strong>Postcode:</strong> {data.postcode}<br />
                <strong>Timing:</strong> {data.timing}<br />
                <strong>Name:</strong> {data.name}<br />
                <strong>Phone:</strong> {data.phone}<br />
                <strong>Email:</strong> {data.email}
              </div>
            )}

            {/* Success */}
            {submitted && (
              <div style={{ textAlign: "center", padding: "16px 8px" }}>
                <div style={{ fontSize: 36 }}>🎉</div>
                <div style={{ color: "#0F2D52", fontWeight: 700, fontSize: 15, marginTop: 8 }}>Enquiry received!</div>
                <div style={{ color: "#8FA8C8", fontSize: 12, marginTop: 6 }}>
                  We'll call you on <strong>{data.phone}</strong> within 2 hours.
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Choices */}
          {showChoices && !submitted && currentStep?.type === "choices" && (
            <div style={{ padding: "4px 14px 12px", display: "flex", flexWrap: "wrap", gap: 7 }}>
              {currentStep.choices?.map((c) => (
                <button key={c} onClick={() => handleChoice(c)} style={{
                  background: "#fff", border: "1.5px solid #2196F3",
                  color: "#1565C0", borderRadius: 24, padding: "7px 14px",
                  fontSize: 12, fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit", transition: "all .15s",
                }}>
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Submit button */}
          {showSummary && !submitted && (
            <div style={{ padding: "4px 14px 12px" }}>
              <button onClick={submitEnquiry} style={{
                width: "100%", padding: "11px 0",
                background: "linear-gradient(135deg,#2196F3,#0F2D52)",
                color: "#fff", border: "none", borderRadius: 24,
                fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
              }}>
                ✅ Submit Enquiry
              </button>
            </div>
          )}

          {/* Text input */}
          {!showChoices && !showSummary && !submitted && currentStep?.type === "text" && !typing && (
            <div style={{ padding: "10px 12px", borderTop: "1px solid #E3F2FD", display: "flex", gap: 8 }}>
              <input
                ref={inputRef}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleText()}
                placeholder={currentStep.placeholder}
                style={{
                  flex: 1, border: "1.5px solid #E3F2FD", borderRadius: 24,
                  padding: "9px 14px", fontSize: 13, outline: "none",
                  fontFamily: "inherit", color: "#1A2E45",
                }}
              />
              <button onClick={handleText} style={{
                width: 38, height: 38, borderRadius: "50%", border: "none",
                background: "linear-gradient(135deg,#2196F3,#1565C0)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
