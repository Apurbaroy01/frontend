"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GraduationCap, Calendar, Sparkles, Building2 } from "lucide-react";
import { Icon } from "@iconify/react";
import { BorderBeam } from "@/components/ui/border-beam";

interface EducationItem {
  id: number;
  date: string;
  title: string;
  institute: string;
  type: string;
  isCurrent?: boolean;
  icon: string;
  highlights?: string;
  glowColor: string;
}

const educationData: EducationItem[] = [
  {
    id: 5,
    date: "2026 — Present",
    title: "Next Level AI-Driven Software Engineering Bootcamp",
    institute: "Programming Hero",
    type: "Advanced Bootcamp",
    isCurrent: true,
    icon: "solar:code-linear",
    highlights: "Completed full-stack web development course covering TypeScript, Next.js, Node.js, MongoDB, Docker, Nginx, Prisma, PostgreSQL, AWS and modern frontend tools.",
    glowColor: "rgba(168, 85, 247, 0.18)", // Purple glow
  },
  {
    id: 4,
    date: "2025 — Present",
    title: "Industrial Attachment (Web Development)",
    institute: "TechLabs",
    type: "Industry Training",
    isCurrent: true,
    icon: "solar:laptop-minimalistic-linear",
    highlights: "Hands-on industry training focused on real-world web development, MERN stack projects, and production-level application building.",
    glowColor: "rgba(6, 182, 212, 0.18)", // Cyan glow
  },
  {
    id: 3,
    date: "2024",
    title: "Complete Web Development Course",
    institute: "Programming Hero",
    type: "Professional Certification",
    isCurrent: false,
    icon: "solar:code-circle-linear",
    highlights: "Completed full-stack web development course covering React, Node.js, MongoDB, and modern frontend tools.",
    glowColor: "rgba(16, 185, 129, 0.18)", // Emerald glow
  },
  {
    id: 2,
    date: "2020 — 2024",
    title: "Diploma in Computer Engineering",
    institute: "Mangrove Institute of Science & Technology",
    type: "Engineering Diploma",
    isCurrent: false,
    icon: "solar:diploma-linear",
    highlights: "Focused on core computer engineering concepts, programming fundamentals, networking, and software development.",
    glowColor: "rgba(59, 130, 246, 0.18)", // Blue glow
  },
  {
    id: 1,
    date: "2018 — 2020",
    title: "Secondary School Certificate (SSC)",
    institute: "Kotalipara High School",
    type: "Science",
    isCurrent: false,
    icon: "solar:book-linear",
    highlights: "Completed secondary education with a focus on science and mathematics.",
    glowColor: "rgba(236, 72, 153, 0.18)", // Pink glow
  },
];

function EducationCard({
  item,
}: {
  item: EducationItem;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl"
    >
      {/* 1. Dynamic Cursor Spotlight (Follows mouse) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${item.glowColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Spotlight Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-purple-400/60"
        style={{
          maskImage: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 70%
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              220px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* 3. Magic UI BorderBeam for Active Ongoing Item */}
      {item.isCurrent && item.id === 5 && (
        <BorderBeam
          size={180}
          duration={7}
          colorFrom="#a855f7"
          colorTo="#06b6d4"
          borderWidth={1.5}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top: Title & Status */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-purple-300 font-medium">
              <Calendar size={12} className="text-purple-400" />
              {item.date}
            </span>
            {item.isCurrent && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ongoing
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
            {item.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1 text-zinc-200 font-medium">
              <Building2 size={12} className="text-purple-400" />
              {item.institute}
            </span>
            <span className="text-zinc-600">•</span>
            <span>{item.type}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          <li
            className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-snug"
          >
            <Sparkles
              size={13}
              className="text-purple-400 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <span>{item.highlights}</span>
          </li>

        </ul>

      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative bg-transparent w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center overflow-hidden scroll-mt-24"
    >
      {/* Background Depth Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full top-[-100px] -left-20 pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] bg-blue-500/10 blur-[130px] rounded-full bottom-[-80px] -right-20 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-purple-400 text-xs font-medium tracking-wide mb-3">
          <GraduationCap size={13} />
          <span>Academic & Training</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Education Timeline
        </h2>
        <p className="text-zinc-400 text-sm mt-1.5 max-w-md mx-auto">
          A journey through structured learning, engineering bootcamps, and academic foundations.
        </p>
      </div>

      {/* ── 2-SIDED TREE TIMELINE CONTAINER ── */}
      <div className="relative w-full z-10">
        {/* Central Tree Line (left on mobile, center on md+) */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/40 via-cyan-500/25 to-transparent -translate-x-1/2" />

        {/* Central Traveling Laser Beam */}
        <motion.div
          className="absolute left-4 md:left-1/2 w-[3px] h-36 bg-gradient-to-b from-transparent via-purple-400 to-transparent blur-[1px] shadow-[0_0_12px_#a855f7] -translate-x-1/2 pointer-events-none"
          animate={{
            top: ["0%", "85%", "0%"],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Alternating Branches Stack */}
        <div className="flex flex-col gap-4 md:gap-6">
          {educationData.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center w-full ${isRight ? "md:justify-end" : "md:justify-start"
                  }`}
              >
                {/* ── CENTER TREE NODE (positioned on the trunk) ── */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center top-6 md:top-1/2 md:-translate-y-1/2">
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#080d12] border-2 border-purple-400/80 flex items-center justify-center shadow-[0_0_14px_rgba(168,85,247,0.8)] hover:scale-125 transition-transform duration-300">
                      <Icon icon={item.icon} className="text-purple-300 text-sm" />
                    </div>
                    {item.isCurrent && (
                      <div className="absolute w-12 h-12 rounded-full border border-purple-400/40 animate-ping pointer-events-none" />
                    )}
                  </div>
                </div>

                {/* ── CARD (takes left or right 50% on desktop, full width on mobile) ── */}
                <div
                  className={`w-full pl-8 md:pl-0 md:w-1/2 ${isRight ? "md:pl-8" : "md:pr-8"
                    }`}
                >
                  <EducationCard item={item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}