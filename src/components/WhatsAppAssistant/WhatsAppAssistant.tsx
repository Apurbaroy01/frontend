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
const SYSTEM_PROMPT = `You are the official WhatsApp AI assistant for Apurba Roy (Dev Apurba Roy), a passionate Software Engineer and MERN Stack Developer & Instructor based in Khulna, Bangladesh.

PERSONAL & DEMOGRAPHIC INFORMATION:
- Full Name: Apurba Roy (Dev Apurba Roy)
- Date of Birth: May 8, 2004
- Gender: Male
- Current Location: Sonadanga, Khulna, Bangladesh (GMT+6)
- Nationality: Bangladeshi
- Languages: Bengali (Native), English (Professional)

PROFESSIONAL EXPERIENCE & ROLES:
- Current Role: Software Engineer at Airtech IT (Khulna, Bangladesh) and MERN Stack Instructor / Trainer.
  * Conducts hands-on training sessions covering MongoDB, Express.js, React/Next.js, Node.js.
  * Mentors junior developers/trainees on clean code architecture, Git workflows, and capstone deployments.
- Industrial Attachment Trainer at City IT Park (Khulna).
- Software Engineer at CYBRFLUX (September 2026 – Present, Remote - USA):
  * Engineered financial services web applications (Next Level Wealth, Next Level Solar) using Next.js, Node.js, Express, MongoDB, Mongoose, and Redis.
  * Built product management, role-based admin dashboard, REST APIs, and backend optimization.
- Overall Experience: 2+ Years of continuous web engineering, system architecture, and modern DevOps.

EDUCATION & STUDENT DETAILS:
- Currently Pursuing: Diploma in Computer Engineering at Mangrove Institute of Science & Technology (2021–2025).
- Programming Hero: Enrolled as an active student in the 7th batch of "Next Level Web Development" / "Next Level AI-Driven Software Engineering Bootcamp" (Student ID: L2B7-1304).
- TechLabs: Web Development Industrial Attachment Training (2025).
- Programming Hero: Complete Web Development Course (2025).
- Secondary School Certificate (SSC): Rajapur Adarsha High School (2020–2021).
- Reference: Jhankar Mahbub (Founder, Programming Hero).

TECHNICAL SKILLS & TECH STACK:
- Programming Languages & Frameworks: JavaScript (ES6+), TypeScript, React.js, Next.js (App Router, SSR, SSG), Node.js, Express.js.
- Databases & Caching: MongoDB (Mongoose), PostgreSQL, Prisma ORM, Redis server, Supabase.
- Web Scraping & Data Extraction: Cheerio, Axios, ExcelJS (Node.js) and Python (Pandas, BeautifulSoup).
- Frontend & Styling: Tailwind CSS, DaisyUI, Material UI, Shadcn UI, Hero UI, Framer Motion, React Query, React Router, Socket.io, HTML5, CSS3.
- DevOps, Cloud & Server Infrastructure:
  * Docker & Docker Compose containerization
  * Hostinger VPS server deployment & maintenance
  * Nginx reverse proxy configuration & SSL integration
  * CloudPanel & Linux server administration
  * Vercel, Netlify, Render
- Authentication & Security: Better-Auth, Firebase Authentication, JWT (JSON Web Tokens), Role-Based Access Control (RBAC).
- Tools & Dev Environment: VS Code, Git, GitHub, Postman, NPM, CloudPanel.

FEATURED PROJECTS:
1. Enterprise Resource Planning (ERP) Web System:
   - Built with Next.js, Node.js, Express.js, MongoDB, Mongoose.
   - Comprehensive resource management for businesses covering employee management, attendance tracking, salary/payroll, asset tracking, product inventory, and granular permission-based access control.
2. E-Commerce Web Application (Gitvn Shop & Modern Stores):
   - Built with Next.js, Node.js, Express.js, MongoDB, Tailwind CSS.
   - Includes full product catalog, search & filter, cart, secure checkout, payment gateway integration, JWT authentication, and comprehensive role-based admin dashboard.
3. Doctor Appointment Management System:
   - Tech Stack: Next.js, Node.js, Mongoose, Redis server, MongoDB, Docker, Nginx.
   - Web system for booking appointments and scheduling, role-based access for Patients, Doctors, and Admins, specialty search, and admin control.
4. Financial Web Applications (CYBRFLUX Remote USA):
   - Next Level Wealth & Next Level Solar (Next.js, Node.js, MongoDB, Redis).
5. Secure Authentication Systems:
   - Better Auth, Firebase Authentication, and JWT with token authorization & Firebase Admin verification.

CONTACT & RESUME:
- WhatsApp / Phone: +8801311271610 (01311271610)
- Email: apurbaroy00011@gmail.com
- Portfolio Website: https://apurbaroy.vercel.app/
- GitHub: https://github.com/apurbaroy01
- LinkedIn: https://www.linkedin.com/in/apurba-roy01
- Resume (Google Docs): https://docs.google.com/document/d/1CgOpQREfjU4EgBg_HQWmFKSpUbdMjJeN1ILGkwo-Rvk/edit?tab=t.0

TONE & FORMATTING RULES:
- Keep answers short, friendly, accurate, and easy to read on mobile.
- Use WhatsApp formatting ONLY: *bold*, _italics_, ~strikethrough~
- 1-2 emojis max per message.
- NEVER sound robotic. Be a friendly, professional representative for Apurba Roy.
- When asked for a resume or CV, always share the Google Docs link: https://docs.google.com/document/d/1CgOpQREfjU4EgBg_HQWmFKSpUbdMjJeN1ILGkwo-Rvk/edit?tab=t.0
- Guide visitors and clients to reach out directly via WhatsApp (+8801311271610) or Email (apurbaroy00011@gmail.com).`;

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
  { label: "💼 Experience", msg: "Tell me about Apurba's professional experience and job roles." },
  { label: "⚡ Tech Stack", msg: "What is Apurba's tech stack and skills?" },
  { label: "🚀 Projects & ERP", msg: "What projects has Apurba built (E-Commerce, ERP)?" },
  { label: "🎓 Education & ID", msg: "What is Apurba's educational background and student ID?" },
  { label: "🕷️ Data Scraping", msg: "Tell me about Apurba's data scraping skills with Cheerio & Python." },
  { label: "📄 Resume / CV", msg: "Can you share Apurba's resume Google Doc?" },
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
const PORTFOLIO_URL = "https://apurbaroy.vercel.app/";
const RESUME_URL = "https://docs.google.com/document/d/1CgOpQREfjU4EgBg_HQWmFKSpUbdMjJeN1ILGkwo-Rvk/edit?tab=t.0";
const EMAIL = "apurbaroy00011@gmail.com";
const GITHUB_URL = "https://github.com/apurbaroy01";
const LINKEDIN_URL = "https://www.linkedin.com/in/apurba-roy01";

export default function WhatsAppAssistant() {
  const [toastMsg, setToastMsg] = useState("");
  const [botStatus, setBotStatus] = useState("online");
  const [chatEnded, setChatEnded] = useState(false);

  const [msgs, setMsgs] = useState<Msg[]>([
    {
      id: 1,
      from: "bot",
      text: "Hey! 👋 I'm Apurba Roy's AI Assistant.\n\nAsk me anything about Apurba's skills, experience at Airtech IT, projects (ERP, E-Commerce), education (Programming Hero Batch 7), or tap WhatsApp above to connect directly! 🚀",
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

    // 1. Thanks / Farewell
    if (text.includes("thank") || text.includes("thanks") || text.includes("dhonnobad") || text.includes("ধন্যবাদ")) {
      setChatEnded(true);
      return "Thank you for reaching out to Apurba Roy! 🌟\n\nWe appreciate your time and interest, and look forward to speaking with you on WhatsApp (01311271610). Have a wonderful day ahead!";
    }

    // 2. Personal & Demographic Info (Age, DOB, Birthday, Gender, Location, Address)
    if (
      text.includes("dob") ||
      text.includes("birth") ||
      text.includes("born") ||
      text.includes("age") ||
      text.includes("boyos") ||
      text.includes("বয়স") ||
      text.includes("jonmo") ||
      text.includes("জন্ম") ||
      text.includes("gender") ||
      text.includes("male") ||
      text.includes("location") ||
      text.includes("address") ||
      text.includes("khulna") ||
      text.includes("sonadanga") ||
      text.includes("thikana") ||
      text.includes("ঠিকানা") ||
      text.includes("বাসা") ||
      text.includes("লোকেশন") ||
      text.includes("kothay thake") ||
      text.includes("kothay")
    ) {
      return (
        "👤 *Apurba Roy's Personal Details:*\n\n" +
        "• *Full Name:* Apurba Roy\n" +
        "• *Date of Birth:* May 8, 2004\n" +
        "• *Gender:* Male\n" +
        "• *Current Location:* Sonadanga, Khulna, Bangladesh 🇧🇩\n" +
        "• *Profession:* Software Engineer at Airtech IT & MERN Stack Instructor\n\n" +
        `🌐 Portfolio: ${PORTFOLIO_URL}\n` +
        `📄 Google Doc Resume: ${RESUME_URL}`
      );
    }

    // 3. Professional Experience & Job Roles (Airtech IT, City IT Park, CYBRFLUX, Instructor, Trainer)
    if (
      text.includes("airtech") ||
      text.includes("cybrflux") ||
      text.includes("city it") ||
      text.includes("instructor") ||
      text.includes("trainer") ||
      text.includes("mentor") ||
      text.includes("job") ||
      text.includes("profession") ||
      text.includes("career") ||
      text.includes("company") ||
      text.includes("কোম্পানি") ||
      text.includes("চাকরি") ||
      text.includes("অভিজ্ঞতা")
    ) {
      return (
        "💼 *Apurba Roy's Professional Experience:*\n\n" +
        "1. *Software Engineer & Trainer* — *Airtech IT* (Khulna, Bangladesh)\n" +
        "   • Full-stack MERN application engineering and modern DevOps.\n" +
        "   • Hands-on training on MongoDB, Express, React/Next.js & Node.js, mentoring junior developers.\n\n" +
        "2. *MERN Stack Instructor* — *City IT Park* (Khulna)\n" +
        "   • Mentoring students on clean code architecture, Git workflows, and capstone deployments.\n\n" +
        "3. *Software Engineer* — *CYBRFLUX* (Remote - USA)\n" +
        "   • Engineered financial services platforms (*Next Level Wealth*, *Next Level Solar*) using Next.js, Node.js, Express, MongoDB & Redis.\n\n" +
        "• *Total Experience:* 2+ Years of continuous production engineering."
      );
    }

    // 4. Education & Student Info (Diploma, Programming Hero, Batch 7, Student ID, TechLabs)
    if (
      text.includes("education") ||
      text.includes("study") ||
      text.includes("diploma") ||
      text.includes("student") ||
      text.includes("batch") ||
      text.includes("id") ||
      text.includes("l2b7") ||
      text.includes("programming hero") ||
      text.includes("techlabs") ||
      text.includes("mangrove") ||
      text.includes("college") ||
      text.includes("school") ||
      text.includes("institute") ||
      text.includes("ssc") ||
      text.includes("পড়াশোনা") ||
      text.includes("ডিপ্লোমা") ||
      text.includes("কোর্স") ||
      text.includes("ছাত্র")
    ) {
      return (
        "🎓 *Apurba Roy's Educational Background:*\n\n" +
        "1. *Diploma in Computer Engineering* (2021–2025)\n" +
        "   • Mangrove Institute of Science & Technology (Currently pursuing Diploma in Engineering).\n\n" +
        "2. *Next Level AI-Driven Web Development (Batch 7)*\n" +
        "   • Programming Hero — *Student ID: L2B7-1304*.\n\n" +
        "3. *Industrial Attachment in Web Development* (2025)\n" +
        "   • TechLabs (Hands-on MERN & architecture training).\n\n" +
        "4. *Complete Web Development Course* (2025)\n" +
        "   • Programming Hero.\n\n" +
        "5. *Secondary School Certificate (SSC)*\n" +
        "   • Rajapur Adarsha High School (2020–2021).\n\n" +
        "• *Reference:* Jhankar Mahbub (Founder, Programming Hero)."
      );
    }

    // 5. Data Scraping & Extraction (Cheerio, Axios, Python, Pandas, BeautifulSoup)
    if (
      text.includes("scrap") ||
      text.includes("extract") ||
      text.includes("cheerio") ||
      text.includes("axios") ||
      text.includes("exceljs") ||
      text.includes("python") ||
      text.includes("pandas") ||
      text.includes("beautifulsoup") ||
      text.includes("স্ক্র্যাপিং")
    ) {
      return (
        "🕷️ *Data Scraping & Extraction Skills:*\n\n" +
        "• *Node.js Tools:* Cheerio, Axios, ExcelJS (HTML parsing, high-speed HTTP crawling & automated Excel report creation)\n" +
        "• *Python Tools:* BeautifulSoup, Pandas (web data mining, data cleaning, analysis & automation)\n\n" +
        "Apurba specializes in reliable web scraping pipelines and data automation solutions!"
      );
    }

    // 6. DevOps, Docker, Nginx, Server, VPS, Linux, CloudPanel
    if (
      text.includes("devops") ||
      text.includes("docker") ||
      text.includes("nginx") ||
      text.includes("vps") ||
      text.includes("hostinger") ||
      text.includes("cloudpanel") ||
      text.includes("linux") ||
      text.includes("deploy") ||
      text.includes("ssl") ||
      text.includes("server")
    ) {
      return (
        "🛠️ *DevOps & Server Infrastructure:*\n\n" +
        "• *Containerization:* Docker & Docker Compose\n" +
        "• *Reverse Proxy & Web Server:* Nginx with SSL & custom domains\n" +
        "• *Hosting & Servers:* Hostinger VPS, Linux administration, CloudPanel\n" +
        "• *Cloud Deployments:* Vercel, Netlify, Render\n" +
        "• *Security & Auth:* Better-Auth, Firebase Authentication, JWT & RBAC"
      );
    }

    // 7. Projects & ERP (ERP, E-Commerce, Gitvn Shop, Doctor Appointment, CYBRFLUX)
    if (
      text.includes("project") ||
      text.includes("erp") ||
      text.includes("commerce") ||
      text.includes("gitvn") ||
      text.includes("doctor") ||
      text.includes("appointment") ||
      text.includes("wealth") ||
      text.includes("solar") ||
      text.includes("প্রজেক্ট") ||
      text.includes("কাজ")
    ) {
      return (
        "🚀 *Key Featured Projects:*\n\n" +
        "1. *Enterprise Resource Planning (ERP) System*\n" +
        "   • Comprehensive enterprise software: employee records, attendance tracking, salary/payroll, asset tracking, inventory & permission-based RBAC.\n\n" +
        "2. *E-Commerce Web Application (Gitvn Shop)*\n" +
        "   • Next.js, Node.js, Express, MongoDB, Tailwind CSS.\n" +
        "   • Product catalog, shopping cart, online payment integration, and role-based admin portal.\n\n" +
        "3. *Doctor Appointment Management System*\n" +
        "   • Next.js, Node.js, Redis, MongoDB, Docker, Nginx.\n" +
        "   • Patient scheduling, doctor slot management & admin control.\n\n" +
        "4. *Financial Platforms (CYBRFLUX USA)*\n" +
        "   • Next Level Wealth & Next Level Solar.\n\n" +
        `🌐 Explore them on his portfolio:\n${PORTFOLIO_URL}`
      );
    }

    // 8. Technical Skills & Tech Stack
    if (
      text.includes("skill") ||
      text.includes("stack") ||
      text.includes("tech") ||
      text.includes("technologies") ||
      text.includes("mern") ||
      text.includes("frontend") ||
      text.includes("backend") ||
      text.includes("database") ||
      text.includes("react") ||
      text.includes("next") ||
      text.includes("node") ||
      text.includes("mongo") ||
      text.includes("prisma") ||
      text.includes("postgres") ||
      text.includes("redis") ||
      text.includes("স্কিল")
    ) {
      return (
        "⚡ *Apurba Roy's Technical Stack:*\n\n" +
        "• *Languages & Frameworks:* JavaScript (ES6+), TypeScript, React.js, Next.js (App Router, SSR), Node.js, Express.js\n" +
        "• *Databases & Caching:* MongoDB (Mongoose), PostgreSQL, Prisma ORM, Redis server, Supabase\n" +
        "• *Data Scraping:* Cheerio, Axios, ExcelJS, Python (Pandas, BeautifulSoup)\n" +
        "• *Realtime & Security:* Socket.io, Better-Auth, Firebase Auth, JWT\n" +
        "• *DevOps:* Docker, Docker Compose, Nginx, Hostinger VPS, CloudPanel, Linux\n" +
        "• *UI Styling:* Tailwind CSS, DaisyUI, Material UI, Shadcn UI, Hero UI, Framer Motion\n" +
        "• *Tools:* VS Code, Git, GitHub, Postman, NPM"
      );
    }

    // 9. Resume / CV / Google Doc
    if (
      text.includes("resume") ||
      text.includes("cv") ||
      text.includes("doc") ||
      text.includes("document") ||
      text.includes("google doc") ||
      text.includes("profile") ||
      text.includes("download") ||
      text.includes("রেজুমে") ||
      text.includes("সিভি")
    ) {
      return (
        "📄 *Apurba Roy's Official Resume:*\n\n" +
        "You can view and read Apurba's latest verified resume directly on Google Docs:\n" +
        `${RESUME_URL}\n\n` +
        "It includes verified details of his software engineering roles at Airtech IT, CYBRFLUX, education, technical stack, and references."
      );
    }

    // 10. Contact Details & Socials
    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("phone") ||
      text.includes("number") ||
      text.includes("reach") ||
      text.includes("call") ||
      text.includes("whatsapp") ||
      text.includes("যোগাযোগ") ||
      text.includes("নাম্বার")
    ) {
      return (
        "📬 *Get in Touch with Apurba Roy:*\n\n" +
        `• *WhatsApp / Phone:* +${WA_NUMBER} (01311271610)\n` +
        `• *Email:* ${EMAIL}\n` +
        `• *Location:* Sonadanga, Khulna, Bangladesh\n` +
        `• *Portfolio:* ${PORTFOLIO_URL}\n` +
        `• *GitHub:* ${GITHUB_URL}\n` +
        `• *LinkedIn:* ${LINKEDIN_URL}\n` +
        `• *Resume:* ${RESUME_URL}\n\n` +
        "Tap the *WhatsApp* button at the top to chat with him right now!"
      );
    }

    // 11. GitHub & Socials
    if (
      text.includes("github") ||
      text.includes("linkedin") ||
      text.includes("social")
    ) {
      return (
        "🌐 *Apurba Roy's Online Profiles:*\n\n" +
        `• *GitHub:* ${GITHUB_URL}\n` +
        `• *LinkedIn:* ${LINKEDIN_URL}\n` +
        `• *Portfolio:* ${PORTFOLIO_URL}\n` +
        `• *Resume:* ${RESUME_URL}`
      );
    }

    // 12. Services & Freelance Hire
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
        "• *Full-Stack Web Applications* (Next.js, React, Node.js, Express, MongoDB, PostgreSQL)\n" +
        "• *Enterprise Resource Planning (ERP) Systems*\n" +
        "• *E-Commerce Solutions & Portals*\n" +
        "• *Web Scraping & Data Extraction Pipelines* (Cheerio, Python BeautifulSoup/Pandas)\n" +
        "• *DevOps, Docker Containerization & Hostinger VPS Setup*\n\n" +
        "Tap the *WhatsApp* button above to discuss your project requirements!"
      );
    }

    // 13. General About / Overview
    if (
      text.includes("who") ||
      text.includes("about") ||
      text.includes("apurba") ||
      text.includes("bio") ||
      text.includes("tell me") ||
      text.includes("কে")
    ) {
      return (
        "👨‍💻 *Apurba Roy (Dev Apurba Roy)*\n\n" +
        "• *Role:* Software Engineer at Airtech IT & MERN Stack Instructor\n" +
        "• *Location:* Khulna, Bangladesh\n" +
        "• *Date of Birth:* May 8, 2004\n" +
        "• *Experience:* 2+ Years of continuous web engineering & 9+ production systems\n" +
        "• *Specialization:* Next.js, Node.js, MongoDB, PostgreSQL, Docker, Nginx & Data Scraping\n\n" +
        `🌐 Portfolio: ${PORTFOLIO_URL}\n` +
        `📄 Google Doc Resume: ${RESUME_URL}`
      );
    }

    // 14. Availability & Working Hours
    if (
      text.includes("hour") ||
      text.includes("time") ||
      text.includes("when") ||
      text.includes("available")
    ) {
      return (
        "⏰ *Working Hours:*\n\n" +
        "Apurba is actively available *Mon-Fri, 9:00 AM - 6:00 PM (BD Time)*.\n\n" +
        "Feel free to message on WhatsApp anytime (+8801311271610) — he will reply as soon as possible!"
      );
    }

    // 15. Urgent / ASAP
    if (text.includes("urgent") || text.includes("asap") || text.includes("critical")) {
      return `[URGENT] I have flagged your message as high priority for Apurba Roy (+${WA_NUMBER}). 🚨 He will get back to you shortly!`;
    }

    // 16. Greetings
    if (
      text.includes("hi") ||
      text.includes("hello") ||
      text.includes("hey") ||
      text.includes("aoa") ||
      text.includes("salam") ||
      text.includes("vai") ||
      text.includes("bhai") ||
      text.includes("shunchen")
    ) {
      return "Hey there! 👋 I'm Apurba Roy's AI Assistant. How can I help you regarding his software engineering work at Airtech IT, skills, projects (ERP, E-Commerce), education, or resume?";
    }

    // Default Fallback
    return (
      `_I've noted this inquiry for Apurba Roy (+${WA_NUMBER}). He'll get back to you soon!_ 👍\n\n` +
      `You can also reach him directly via WhatsApp or email: ${EMAIL}\n` +
      `📄 Google Doc Resume: ${RESUME_URL}`
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
            src="/me.jpg"
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
