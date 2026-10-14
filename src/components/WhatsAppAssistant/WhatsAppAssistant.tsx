import { useState, useRef, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { BsWhatsapp, BsCheck2All } from "react-icons/bs";
import { MdSend, MdMic, MdEmojiEmotions, MdAttachFile, MdLock } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";

/* ─────────────── TYPES ─────────────── */
interface Msg {
  id: number;
  from: "bot" | "user";
  text: string;
  time: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/* ─────────────── SYSTEM PROMPT ─────────────── */
const SYSTEM_PROMPT = `You are the official WhatsApp AI assistant for Apurba Roy (Dev Apurba Roy), a passionate Full-Stack Software Engineer and MERN Stack Developer based in Bangladesh.

PROFILE OVERVIEW:
- Name: Apurba Roy (Dev Apurba Roy)
- Title: Full Stack Software Engineer | MERN Stack Developer
- Location: Bangladesh (GMT+6)
- Experience: 2+ Years of Continuous Development, 9+ Successfully Delivered Production Projects
- Email: apurbaroy00011@gmail.com
- WhatsApp / Phone: +8801311271610 (01311271610)
- Portfolio: https://apurbaroy.vercel.app
- GitHub: https://github.com/Apurbaroy01
- LinkedIn: https://www.linkedin.com/in/apurba-roy01
- Facebook: https://www.facebook.com/Apurbaroy01
- Resume Link: https://docs.google.com/document/d/1CgOpQREfjU4EgBg_HQWmFKSpUbdMjJeN1ILGkwo-Rvk/edit?usp=sharing
- Working Hours: Mon-Fri, 9:00 AM - 6:00 PM (BD Time) — Available for freelance & full-time roles worldwide.

TECHNICAL SKILLS & STACK:
- Frontend: React.js, Next.js (App Router, SSR, SSG), TypeScript, JavaScript (ES6+), Tailwind CSS, Framer Motion, Hero UI, DaisyUI, Radix UI, React Query, React Router, HTML5, CSS3.
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, WebSockets (Socket.io), Redis caching.
- Databases: MongoDB (Mongoose), PostgreSQL, Prisma ORM, Supabase.
- DevOps, Cloud & Tools: Docker, Nginx, AWS, Git, GitHub, Linux, Vercel, Netlify, cPanel, Hostinger, Postman, Firebase, Auth0.

FEATURED PROJECTS:
1. Gitvn Shop (https://gitvnshop.com/):
   - A full-featured modern eCommerce platform with secure JWT authentication, rich product catalog, shopping cart, checkout, online payment integration, and complete admin dashboard.
   - Built with Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
2. Interactive Portfolios & 3D Web Apps:
   - Modern, high-performance web experiences with smooth Framer Motion animations, responsive layouts, and interactive UI components.
3. Over 9+ production-ready client and enterprise projects delivered successfully.

EDUCATION & TRAINING:
1. 2026 — Present: Next Level AI-Driven Software Engineering Bootcamp (Programming Hero)
   - Advanced full-stack mastery: TypeScript, Next.js, Node.js, MongoDB, Docker, Nginx, Prisma, PostgreSQL, AWS, and system architecture.
2. 2025 — Present: Industrial Attachment in Web Development (TechLabs)
   - Hands-on industry training on production-grade MERN architecture and client delivery.
3. 2024: Complete Web Development Course (Programming Hero)
   - Intensive React, Node.js, Express, and MongoDB curriculum.
4. 2020 — 2024: Diploma in Computer Engineering (Mangrove Institute of Science & Technology)
   - Core computer science fundamentals, programming logic, data structures, and networking.
5. 2018 — 2020: Secondary School Certificate (SSC) in Science (Kotalipara High School).

SERVICES OFFERED:
1. Full-Stack Web Applications (React / Next.js + Node.js / Express + MongoDB / PostgreSQL)
2. Custom eCommerce Solutions (Storefront, cart, payment gateways, admin dashboards)
3. High-Converting Landing Pages & Corporate Websites
4. Interactive & 3D Portfolios (Three.js, WebGL, Framer Motion)
5. RESTful API Architecture & Third-Party System Integrations
6. Database Schema Design, Performance Optimization & Cloud Deployment

TONE & FORMATTING RULES:
- Keep answers short, friendly, accurate, and easy to read on mobile.
- Use WhatsApp formatting ONLY: *bold*, _italics_, ~strikethrough~
- 1-2 emojis max per message.
- NEVER sound robotic. Be a friendly, professional representative for Apurba.
- Guide potential clients or employers to reach out directly to Apurba on WhatsApp (+8801311271610) or via Email (apurbaroy00011@gmail.com).`;

/* ─────────────── FORMATTING ─────────────── */
function parseWA(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*([^*\n]+)\*/g, "<b>$1</b>")
    .replace(/_([^_\n]+)_/g, "<i>$1</i>")
    .replace(/~([^~\n]+)~/g, "<s>$1</s>")
    .replace(
      /```([\s\S]*?)```/g,
      '<code style="background:#1a2530;padding:2px 6px;border-radius:3px;font-size:12px;font-family:monospace">$1</code>'
    )
    .replace(
      /(https?:\/\/[^\s<>"]+)/g,
      '<a href="$1" target="_blank" rel="noopener" style="color:#53bdeb;word-break:break-all">$1</a>'
    )
    .replace(/\n/g, "<br>");
}

/* ─────────────── QUICK REPLIES ─────────────── */
const QUICK = [
  { label: "👨‍💻 About Apurba", msg: "Tell me about Apurba Roy." },
  { label: "⚡ Tech Stack", msg: "What is Apurba's tech stack and skills?" },
  { label: "🚀 Featured Projects", msg: "What projects has Apurba built?" },
  { label: "🎓 Education", msg: "What is Apurba's educational background?" },
  { label: "📄 Resume", msg: "Can you share Apurba's resume?" },
  { label: "📬 Contact Details", msg: "How can I contact Apurba Roy?" },
];

/* ─────────────── COLORS ─────────────── */
const C = {
  bg: "#0b141a",
  panel: "#202c33",
  bot: "#202c33",
  user: "#005c4b",
  text: "#e9edef",
  sub: "#8696a0",
  green: "#00a884",
  blueTick: "#53bdeb",
  input: "#2a3942",
  border: "#222d34",
  toast: "#182229",
  card: "#111b21",
};

/* ─────────────── STYLES ─────────────── */
const CSS = `
  @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes toastSlide { from{opacity:0;transform:translate(-50%, -20px)} to{opacity:1;transform:translate(-50%, 0)} }
  .msg { animation: fadeUp 0.18s ease forwards; }
  .dot { border-radius:50%; background:#8696a0; animation: bounce 1.1s infinite ease-in-out; }
  .chip:hover { background:rgba(0,168,132,0.2) !important; border-color:#00a884 !important; }
  .send:hover { filter:brightness(1.15); }
  .icon-btn { cursor:pointer; padding:6px; border-radius:50%; transition:background 0.2s; }
  .icon-btn:hover { background: rgba(255,255,255,0.08); }
  .toast { animation: toastSlide 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
  ::-webkit-scrollbar { width:4px; }
  ::-webkit-scrollbar-thumb { background:#374045; border-radius:2px; }
  input::placeholder { color:#8696a0; }
  input:focus { outline:none; }
`;

function ts() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/* ─────────────── CONFIG ─────────────── */
const WA_NUMBER = "8801311271610"; // Apurba Roy — BD country code
const PORTFOLIO_URL = "https://apurbaroy.vercel.app";
const RESUME_URL = "https://docs.google.com/document/d/1CgOpQREfjU4EgBg_HQWmFKSpUbdMjJeN1ILGkwo-Rvk/edit?usp=sharing";
const EMAIL = "apurbaroy00011@gmail.com";
const GITHUB_URL = "https://github.com/Apurbaroy01";
const LINKEDIN_URL = "https://www.linkedin.com/in/apurba-roy01";

export default function WhatsAppAssistant() {
  const [toastMsg, setToastMsg] = useState("");
  const [botStatus, setBotStatus] = useState("online");
  const [chatEnded, setChatEnded] = useState(false);

  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: 1,
      from: "bot",
      text: "Hey! 👋 I'm Apurba Roy's AI Assistant.\n\nAsk me anything about Apurba's skills, projects, education, or tap WhatsApp above to connect directly! 🚀",
      time: ts(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const history = useRef<ChatMessage[]>([]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  function showToast(msg: string) {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg("");
    }, 3200);
  }

  function handleMediaAttempt() {
    showToast("🚫 Media & voice file sharing is disabled for AI chats.");
  }

  function forwardToRealWhatsApp(customText?: string) {
    let payloadText = customText;
    if (!payloadText) {
      const userLines = msgs
        .filter((m) => m.from === "user")
        .map((m) => `• ${m.text}`)
        .join("\n");

      payloadText =
        `*Inquiry for Apurba Roy*\n\n` +
        (userLines ? `*Chat Summary:*\n${userLines}\n\n` : "") +
        `_Sent via apurbaroy.vercel.app_`;
    }

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(payloadText)}`;
    window.open(waUrl, "_blank");
    showToast("📲 Opening Apurba's WhatsApp...");

    setTimeout(() => {
      setMsgs((p) => [
        ...p,
        {
          id: Date.now(),
          from: "bot",
          text: "Your message has been sent to Apurba Roy! 📲\n\nWould you like to explore services, view the portfolio, or book a call?",
          time: ts(),
        },
      ]);
      setShowChips(true);
    }, 700);
  }

  function getSmartReply(userText: string): string {
    const text = userText.toLowerCase();

    if (text.includes("thank") || text.includes("thanks")) {
      setChatEnded(true);
      return "Thank you for reaching out to Apurba Roy! 🌟\n\nWe appreciate your time and interest, and look forward to speaking with you on WhatsApp (01311271610). Have a wonderful day ahead!";
    }

    if (
      text.includes("who") ||
      text.includes("about") ||
      text.includes("apurba") ||
      text.includes("bio") ||
      text.includes("tell me") ||
      text.includes("experience")
    ) {
      return (
        "👨‍💻 *Apurba Roy (Dev Apurba Roy)*\n\n" +
        "• *Role:* Full Stack Software Engineer & MERN Stack Developer\n" +
        "• *Experience:* 2+ Years of Continuous Development\n" +
        "• *Projects:* 9+ Production Systems Delivered\n" +
        "• *Specialization:* Next.js, React, Node.js, Express, MongoDB & TypeScript\n" +
        "• *Location:* Bangladesh (Available Worldwide 🌍)\n\n" +
        `View his live portfolio: ${PORTFOLIO_URL}`
      );
    }

    if (
      text.includes("skill") ||
      text.includes("stack") ||
      text.includes("tech") ||
      text.includes("technologies") ||
      text.includes("mern") ||
      text.includes("frontend") ||
      text.includes("backend") ||
      text.includes("database")
    ) {
      return (
        "⚡ *Apurba Roy's Technical Stack:*\n\n" +
        "• *Frontend:* React.js, Next.js (App Router, SSR), TypeScript, Tailwind CSS, Framer Motion, Hero UI\n" +
        "• *Backend:* Node.js, Express.js, RESTful APIs, JWT, Socket.io\n" +
        "• *Databases:* MongoDB (Mongoose), PostgreSQL, Prisma ORM, Supabase, Redis\n" +
        "• *DevOps & Tools:* Docker, Nginx, AWS, Git, GitHub, Linux, Vercel, Postman\n\n" +
        "He builds robust, scalable end-to-end web applications!"
      );
    }

    if (
      text.includes("project") ||
      text.includes("work") ||
      text.includes("gitvn") ||
      text.includes("demo") ||
      text.includes("portfolio")
    ) {
      return (
        "🚀 *Featured Projects by Apurba Roy:*\n\n" +
        "1. *Gitvn Shop* (https://gitvnshop.com/)\n" +
        "   Modern eCommerce with authentication, cart, checkout, payments & admin panel (Next.js, Node.js, MongoDB, Tailwind).\n\n" +
        "2. *Active Deployments:*\n" +
        "   Over 9+ successfully delivered production systems across web platforms, business landing pages, and APIs.\n\n" +
        `🌐 Check them out live on his portfolio:\n${PORTFOLIO_URL}`
      );
    }

    if (
      text.includes("education") ||
      text.includes("study") ||
      text.includes("diploma") ||
      text.includes("bootcamp") ||
      text.includes("college") ||
      text.includes("school") ||
      text.includes("institute")
    ) {
      return (
        "🎓 *Apurba's Educational Timeline:*\n\n" +
        "• *2026 — Present:* Next Level AI-Driven Software Engineering Bootcamp (Programming Hero)\n" +
        "• *2025 — Present:* Industrial Attachment in Web Development (TechLabs)\n" +
        "• *2024:* Web Development Course (Programming Hero)\n" +
        "• *2020 — 2024:* Diploma in Computer Engineering (Mangrove Institute of Science & Technology)\n" +
        "• *2018 — 2020:* SSC in Science (Kotalipara High School)"
      );
    }

    if (
      text.includes("resume") ||
      text.includes("cv") ||
      text.includes("profile") ||
      text.includes("download")
    ) {
      return (
        "📄 *Apurba Roy's Resume & CV:*\n\n" +
        `You can review and download Apurba's latest Resume here:\n${RESUME_URL}\n\n` +
        "Feel free to reach out directly if you'd like to schedule an interview!"
      );
    }

    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("phone") ||
      text.includes("number") ||
      text.includes("reach") ||
      text.includes("call")
    ) {
      return (
        "📬 *Get in Touch with Apurba Roy:*\n\n" +
        `• *WhatsApp:* +${WA_NUMBER}\n` +
        `• *Email:* ${EMAIL}\n` +
        `• *GitHub:* ${GITHUB_URL}\n` +
        `• *LinkedIn:* ${LINKEDIN_URL}\n` +
        `• *Portfolio:* ${PORTFOLIO_URL}\n\n` +
        "Tap the *WhatsApp* button above to chat with him right now!"
      );
    }

    if (
      text.includes("github") ||
      text.includes("linkedin") ||
      text.includes("facebook") ||
      text.includes("social")
    ) {
      return (
        "🌐 *Apurba Roy's Social & Code Profiles:*\n\n" +
        `• *GitHub:* ${GITHUB_URL}\n` +
        `• *LinkedIn:* ${LINKEDIN_URL}\n` +
        `• *Facebook:* https://www.facebook.com/Apurbaroy01\n` +
        `• *Portfolio:* ${PORTFOLIO_URL}`
      );
    }

    if (
      text.includes("service") ||
      text.includes("offer") ||
      text.includes("hire") ||
      text.includes("freelance") ||
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("budget")
    ) {
      return (
        "💼 *Services Offered by Apurba Roy:*\n\n" +
        "• *Full-Stack Web Apps* (Next.js, React, Node.js, Express, MongoDB)\n" +
        "• *eCommerce Platforms* (Cart, Payments, Admin Dashboard)\n" +
        "• *High-Converting Landing Pages & Business Websites*\n" +
        "• *REST APIs & Database Architecture*\n" +
        "• *Bug Fixing, Optimization & Deployment*\n\n" +
        "Tap the *WhatsApp* button above to discuss your project requirements and get a custom quote!"
      );
    }

    if (
      text.includes("hour") ||
      text.includes("time") ||
      text.includes("when") ||
      text.includes("available")
    ) {
      return (
        "⏰ *Working Hours:*\n\n" +
        "Apurba is actively available *Mon-Fri, 9:00 AM - 6:00 PM (BD Time)*.\n\n" +
        "Feel free to send a message on WhatsApp anytime — he will respond as soon as possible!"
      );
    }

    if (text.includes("urgent") || text.includes("asap") || text.includes("critical")) {
      return `[URGENT] I have flagged your message as high priority for Apurba Roy (+${WA_NUMBER}). 🚨 He will get back to you shortly!`;
    }

    if (
      text.includes("hi") ||
      text.includes("hello") ||
      text.includes("hey") ||
      text.includes("aoa") ||
      text.includes("salam")
    ) {
      return "Hey there! 👋 I'm Apurba Roy's AI Assistant. How can I help you with web development, his projects, or contacting him today?";
    }

    return (
      `_I've noted this inquiry for Apurba Roy (+${WA_NUMBER}). He'll get back to you soon!_ 👍\n\n` +
      `You can also reach him directly via WhatsApp or email: ${EMAIL}`
    );
  }

  async function send(override?: string) {
    const text = (override || input).trim();
    if (!text || loading || chatEnded) return;

    setShowChips(false);
    setMsgs((p) => [...p, { id: Date.now(), from: "user", text, time: ts() }]);
    history.current.push({ role: "user", content: text });
    setInput("");
    setLoading(true);
    setBotStatus("typing...");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: history.current,
        }),
      });
      if (!res.ok) throw new Error("API call failed");
      const data = await res.json();
      const reply = data.content?.[0]?.text || getSmartReply(text);
      if (text.toLowerCase().includes("thank")) {
        setChatEnded(true);
      }
      history.current.push({ role: "assistant", content: reply });
      setMsgs((p) => [
        ...p,
        { id: Date.now() + 1, from: "bot", text: reply, time: ts() },
      ]);
    } catch {
      await new Promise((r) => setTimeout(r, 800));
      const reply = getSmartReply(text);
      history.current.push({ role: "assistant", content: reply });
      setMsgs((p) => [
        ...p,
        { id: Date.now() + 1, from: "bot", text: reply, time: ts() },
      ]);
    } finally {
      setLoading(false);
      setBotStatus("online");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: C.bg,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{CSS}</style>

      {/* ── TOAST NOTIFICATION ── */}
      {toastMsg && (
        <div
          className="toast"
          style={{
            position: "absolute",
            top: 65,
            left: "50%",
            background: C.toast,
            color: C.text,
            border: `1px solid ${C.border}`,
            padding: "8px 16px",
            borderRadius: 20,
            fontSize: 12.5,
            boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            gap: 8,
            maxWidth: "88%",
            textAlign: "center",
          }}
        >
          {toastMsg}
        </div>
      )}

      {/* ── HEADER ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 42px 8px 12px",
          background: C.panel,
          borderBottom: `1px solid ${C.border}`,
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            border: "2px solid #00a884",
          }}
        >
          <Image
            src="/apurba.jpg"
            alt="Apurba Roy"
            fill
            style={{ objectFit: "cover" }}
            sizes="40px"
          />
          <div
            style={{
              position: "absolute",
              bottom: 1,
              right: 1,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#00a884",
              border: `2px solid ${C.panel}`,
            }}
          />
        </div>

        {/* Name & status */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              color: C.text,
              fontWeight: 600,
              fontSize: 15,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Apurba Roy
          </div>
          <div
            style={{
              color: botStatus === "typing..." ? C.green : C.sub,
              fontSize: 12,
              marginTop: 1,
              fontStyle: botStatus === "typing..." ? "italic" : "normal",
            }}
          >
            {botStatus === "typing..." ? "typing..." : "online"}
          </div>
        </div>

        {/* Direct WhatsApp button */}
        <button
          onClick={() => forwardToRealWhatsApp()}
          title="Open in Real WhatsApp"
          style={{
            background: C.green,
            border: "none",
            color: "white",
            padding: "5px 12px",
            borderRadius: 14,
            fontSize: 11.5,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <BsWhatsapp size={13} /> WhatsApp
        </button>
      </div>

      {/* ── MESSAGES CONTAINER ── */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px 12px 6px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          backgroundImage: "radial-gradient(#1f2c34 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundColor: C.bg,
        }}
      >
        {/* Date chip */}
        <div style={{ textAlign: "center", margin: "4px 0 10px" }}>
          <span
            style={{
              background: "#182229",
              color: C.sub,
              fontSize: 11,
              padding: "4px 12px",
              borderRadius: 8,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Today
          </span>
        </div>

        {/* Security Notice Banner */}
        <div
          style={{
            background: "#182229",
            border: `1px solid ${C.border}`,
            color: "#ffd279",
            fontSize: 11,
            padding: "8px 12px",
            borderRadius: 8,
            textAlign: "center",
            lineHeight: 1.4,
            margin: "0 10px 10px",
          }}
        >
          <MdLock size={12} style={{ marginRight: 4, verticalAlign: "middle" }} />
          Messages are end-to-end encrypted with Apurba Roy&apos;s AI Assistant.
        </div>

        {msgs.map((msg) => {
          const isBot = msg.from === "bot";
          return (
            <div
              key={msg.id}
              className="msg"
              style={{
                display: "flex",
                justifyContent: isBot ? "flex-start" : "flex-end",
                marginBottom: 2,
              }}
            >
              <div
                style={{
                  maxWidth: "84%",
                  background: isBot ? C.bot : C.user,
                  color: C.text,
                  padding: "8px 11px 6px",
                  borderRadius: isBot ? "0 10px 10px 10px" : "10px 0 10px 10px",
                  fontSize: 14,
                  lineHeight: 1.45,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  wordBreak: "break-word",
                  position: "relative",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: parseWA(msg.text) }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 3,
                    marginTop: 4,
                  }}
                >
                  <span style={{ color: C.sub, fontSize: 10.5 }}>{msg.time}</span>
                  {!isBot && (
                    <BsCheck2All
                      size={15}
                      style={{ color: C.blueTick, marginLeft: 2 }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {loading && (
          <div
            className="msg"
            style={{ display: "flex", justifyContent: "flex-start", marginTop: 2 }}
          >
            <div
              style={{
                background: C.bot,
                borderRadius: "0 10px 10px 10px",
                padding: "10px 14px",
                display: "flex",
                gap: 5,
                alignItems: "center",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="dot"
                  style={{ width: 7, height: 7, animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Quick reply chips */}
        {showChips && !loading && !chatEnded && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              margin: "14px 0 6px",
              justifyContent: "center",
            }}
          >
            {QUICK.map((q) => (
              <button
                key={q.label}
                className="chip"
                onClick={() => send(q.msg)}
                style={{
                  background: "rgba(0,168,132,0.08)",
                  border: `1px solid ${C.green}`,
                  color: C.green,
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 12.5,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s",
                  fontWeight: 500,
                }}
              >
                {q.label}
              </button>
            ))}
          </div>
        )}

        {/* Professional Concluded Session Banner */}
        {chatEnded && (
          <div
            className="msg"
            style={{
              background: "#182229",
              border: `1px solid ${C.green}`,
              borderRadius: 12,
              padding: "14px 16px",
              margin: "14px auto 6px",
              textAlign: "center",
              maxWidth: "92%",
              color: C.text,
              boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: C.green,
                marginBottom: 4,
              }}
            >
              ✓ Session Concluded
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: C.sub,
                marginBottom: 12,
                lineHeight: 1.4,
              }}
            >
              Thank you for reaching out! Apurba will get back to you soon via WhatsApp.
            </div>
            <button
              onClick={() => {
                setChatEnded(false);
                setMsgs([
                  {
                    id: Date.now(),
                    from: "bot",
                    text: "Hey! 👋 I'm Apurba Roy's AI Assistant. How can I help you today?",
                    time: ts(),
                  },
                ]);
                setShowChips(true);
              }}
              style={{
                background: C.green,
                color: "white",
                border: "none",
                padding: "7px 16px",
                borderRadius: 18,
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              🔄 Start New Session
            </button>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* ── INPUT BAR ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 10px",
          background: C.panel,
          borderTop: `1px solid ${C.border}`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            background: C.input,
            borderRadius: 24,
            padding: "8px 12px",
            gap: 8,
            opacity: chatEnded ? 0.6 : 1,
          }}
        >
          <span
            style={{
              color: C.sub,
              display: "flex",
              alignItems: "center",
              cursor: chatEnded ? "not-allowed" : "pointer",
            }}
            onClick={() => !chatEnded && showToast("Emoji picker coming soon!")}
          >
            <MdEmojiEmotions size={22} />
          </span>
          <input
            value={input}
            disabled={chatEnded}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={chatEnded ? "Session completed — Thank you!" : "Message"}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: C.text,
              fontSize: 14.5,
              caretColor: C.green,
            }}
          />
          <span
            style={{
              color: C.sub,
              display: "flex",
              alignItems: "center",
              cursor: chatEnded ? "not-allowed" : "pointer",
            }}
            onClick={() => !chatEnded && handleMediaAttempt()}
            title="Attach media (disabled)"
          >
            <MdAttachFile size={20} />
          </span>
        </div>

        <button
          className="send"
          disabled={chatEnded}
          onClick={() => {
            if (chatEnded) return;
            if (input.trim()) {
              send();
            } else {
              handleMediaAttempt();
            }
          }}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: chatEnded ? C.border : input.trim() ? C.green : C.border,
            border: "none",
            cursor: chatEnded ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            flexShrink: 0,
            transition: "background 0.2s",
            color: "white",
            opacity: chatEnded ? 0.5 : 1,
          }}
          title={input.trim() ? "Send message" : "Voice recording (disabled)"}
        >
          {input.trim() ? <MdSend size={20} /> : <MdMic size={20} />}
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: 10,
          color: C.sub,
          paddingBottom: 5,
          paddingTop: 3,
          background: C.panel,
        }}
      >
        <RiRobot2Line
          size={11}
          style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }}
        />
        Apurba Roy · AI Assistant · apurbaroy.vercel.app
      </div>
    </div>
  );
}
