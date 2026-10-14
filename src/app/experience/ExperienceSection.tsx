"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  type: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  link?: string;
  highlights: string[];
  technologies: string[];
  glowColor: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Industrial Attachment Trainer",
    company: "City IT Park",
    type: "Contract",
    location: "khulna, Bangladesh",
    period: "2026 — Present",
    isCurrent: true,
    highlights: [
      "Designed and conducted hands-on training sessions covering MongoDB, Express.js, React/Next.js, and Node.js.",
      "Mentored junior developers/trainees on clean code architecture, Git workflows, and capstone project deployments.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
    ],
    glowColor: "rgba(6, 182, 212, 0.18)", // Cyan glow
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "CYBRFLUX",
    type: "Full Time",
    location: "Remote - USA",
    period: "2026 — Present",
    isCurrent: true,
    link: "https://nextlevelsolarusa.com/",
    highlights: [
      "Implemented product management, authentication, and role-based admin dashboard.",
      "Integrated REST APIs and optimized backend performance.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],
    glowColor: "rgba(168, 85, 247, 0.18)", // Purple glow
  },
  {
    id: 3,
    role: "Software Engineer & Trainer",
    company: "Airtech IT",
    type: "Full-Time",
    location: "Khulna, Bangladesh",
    period: "2025 — 2026",
    isCurrent: false,
    link: "https://www.airtech.com.bd/",
    highlights: [
      "Designed and conducted hands-on training sessions covering MongoDB, Express.js, React/Next.js, and Node.js.",
      "Mentored junior developers/trainees on clean code architecture, Git workflows, and capstone project deployments.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Docker",
    ],
    glowColor: "rgba(6, 182, 212, 0.18)", // Cyan glow
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
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
    <div className="relative group">
      {/* ── TIMELINE CONNECTOR NODE ── */}
      <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-6 z-20 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#080d12] border-2 border-cyan-400/80 flex items-center justify-center shadow-[0_0_14px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300">
            <div className="w-2 h-2 rounded-full bg-cyan-300" />
          </div>
          {exp.isCurrent && (
            <div className="absolute w-7 h-7 rounded-full border border-cyan-400/40 animate-ping pointer-events-none" />
          )}
        </div>
      </div>

      {/* ── SPOTLIGHT CARD (Aceternity / Magic UI inspired) ── */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.12 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -3 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl"
      >
        {/* 1. Dynamic Cursor Spotlight (Follows mouse) */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                ${exp.glowColor},
                transparent 80%
              )
            `,
          }}
        />

        {/* 2. Spotlight Border Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-cyan-400/60"
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

        {/* 3. Magic UI BorderBeam for Active Current Role */}
        {exp.isCurrent && (
          <BorderBeam
            size={180}
            duration={7}
            colorFrom="#06b6d4"
            colorTo="#a855f7"
            borderWidth={1.5}
          />
        )}

        {/* ── CARD CONTENT ── */}
        <div className="relative z-10">
          {/* Top Bar: Role & Meta info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3.5">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                {exp.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-zinc-400">
                <span className="text-zinc-200 font-medium">{exp.company}</span>
                <span className="text-zinc-600">•</span>
                <span>{exp.type}</span>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-cyan-400 hover:text-cyan-300 transition-colors ml-1 font-medium"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>

            {/* Period & Location Pills */}
            <div className="flex items-center gap-2 text-xs text-zinc-400 self-start sm:self-auto">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                <Calendar size={12} className="text-cyan-400" />
                {exp.period}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                <MapPin size={12} className="text-purple-400" />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Short Bullet Highlights */}
          <ul className="space-y-1.5 mb-4">
            {exp.highlights.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-snug"
              >
                <Sparkles
                  size={13}
                  className="text-cyan-400 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Tech Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-zinc-400 group-hover:text-zinc-200 hover:border-cyan-400/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-transparent w-full max-w-5xl mx-auto px-6 py-16 flex flex-col items-center overflow-hidden scroll-mt-24"
    >
      {/* Background Glow Orbs */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 blur-[130px] rounded-full top-[-80px] -left-20 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-60px] -right-20 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-14 z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-400 text-xs font-medium tracking-wide mb-3">
          <Briefcase size={13} />
          <span>Work Experience</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Professional Journey
        </h2>
        <p className="text-zinc-400 text-sm mt-1.5 max-w-md mx-auto">
          Proven experience in building scalable web apps and shipping to production.
        </p>
      </div>

      {/* ── TIMELINE TRACK WITH CONTINUOUS LASER BEAM ── */}
      <div className="relative w-full pl-6 sm:pl-8 md:pl-10 z-10">
        {/* Base Track Line */}
        <div className="absolute left-[3px] sm:[left-3px] md:left-[3px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent" />

        {/* Animated Traveling Laser Beam (Magic/Aceternity effect) */}
        <motion.div
          className="absolute left-[3px] sm:[left-3px] md:left-[3px] w-[2px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px] shadow-[0_0_10px_#06b6d4]"
          animate={{
            top: ["0%", "75%", "0%"],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Cards Stack */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
