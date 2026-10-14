"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface Project {
    id: number;
    title: string;
    tagline: string;
    description: string;
    category: "E-Commerce" | "Full-Stack" | "Web Platforms";
    image: string;
    link: string;
    createdAt: string;
    languages: string[];
    featured?: boolean;
    glowColor: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Gitvn Shop",
        tagline: "Modern Full-Stack eCommerce Platform",
        description:
            "Engineered with Next.js, Node.js, Express, and MongoDB. Features secure JWT authentication, rich product catalog, shopping cart, and online order processing.",
        category: "E-Commerce",
        image: "https://i.ibb.co.com/0RjfnzGw/Screenshot-2026-07-18-223956.png",
        link: "https://gitvnshop.com/",
        createdAt: "2026",
        languages: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        featured: true,
        glowColor: "rgba(6, 182, 212, 0.22)", // Cyan
    },
    {
        id: 2,
        title: "Next Level Solar USA",
        tagline: "Enterprise Clean Energy Solutions Platform",
        description:
            "Engineered for CYBRFLUX (USA). Features product and service pipelines, automated customer lead capture, role-based admin dashboard, and high-performance APIs.",
        category: "Web Platforms",
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
        link: "https://nextlevelsolarusa.com/",
        createdAt: "2026",
        languages: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "REST APIs"],
        featured: false,
        glowColor: "rgba(168, 85, 247, 0.22)", // Purple
    },
    {
        id: 3,
        title: "Airtech IT Systems",
        tagline: "Digital IT Services & Training Platform",
        description:
            "Enterprise training management and corporate web platform built for Airtech IT. Features dynamic course systems, mentor portals, and responsive UI architecture.",
        category: "Full-Stack",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "https://www.airtech.com.bd/",
        createdAt: "2025",
        languages: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        featured: false,
        glowColor: "rgba(16, 185, 129, 0.22)", // Emerald
    },
];

const categories = ["All", "E-Commerce", "Full-Stack", "Web Platforms"] as const;
type CategoryFilter = (typeof categories)[number];

function ProjectCardItem({ project }: { project: Project }) {
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
        <motion.article
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-2xl p-4 sm:p-5 transition-all duration-300 shadow-2xl hover:border-cyan-400/40 hover:shadow-cyan-500/10"
        >
            {/* 1. Dynamic Cursor Spotlight (Follows mouse) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${project.glowColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* 2. Spotlight Border Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-cyan-400/60"
                style={{
                    maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 70%
            )
          `,
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 70%
            )
          `,
                }}
            />

            {/* 3. Magic UI BorderBeam on Featured Project */}
            {project.featured && (
                <BorderBeam
                    size={200}
                    duration={8}
                    colorFrom="#06b6d4"
                    colorTo="#a855f7"
                    borderWidth={1.5}
                />
            )}

            {/* ── CARD MEDIA CONTAINER ── */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                {/* Top Browser Dots Bar */}
                <div className="absolute left-3 right-3 top-3 z-30 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                        <span className="h-2 w-2 rounded-full bg-rose-500/90" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/90" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/90" />
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-emerald-400 backdrop-blur-md border border-emerald-500/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE</span>
                    </div>
                </div>

                {/* Project Thumbnail Image */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Floating Quick Action Overlay */}
                <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]"
                    aria-label={`Visit ${project.title}`}
                >
                    <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 text-xs shadow-lg shadow-cyan-500/30 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>Explore Live System</span>
                        <ArrowUpRight size={14} />
                    </span>
                </Link>
            </div>

            {/* ── CARD CONTENT ── */}
            <div className="relative z-10 flex flex-1 flex-col justify-between pt-4">
                <div>
                    {/* Category & Year Header */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                            <Sparkles size={11} className="text-cyan-400" />
                            {project.category}
                        </span>

                        <span className="text-[11px] text-zinc-400 font-medium font-mono">
                            {project.createdAt}
                        </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                        <ArrowUpRight
                            size={17}
                            className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-cyan-400"
                        />
                    </h3>

                    <p className="text-xs font-medium text-cyan-400/90 mb-2">
                        {project.tagline}
                    </p>

                    <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                    </p>
                </div>

                {/* Technologies & Action Footer */}
                <div>
                    {/* Tech Chips */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        {project.languages.map((lang) => (
                            <span
                                key={lang}
                                className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] font-medium text-zinc-300 group-hover:text-white group-hover:border-white/20 transition-colors"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function ProjectsSection() {
    const [activeTab, setActiveTab] = useState<CategoryFilter>("All");

    const filteredProjects =
        activeTab === "All"
            ? projects
            : projects.filter((p) => p.category === activeTab);

    return (
        <section
            id="work"
            className="relative bg-transparent w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center overflow-hidden scroll-mt-24 text-white"
        >
            {/* Background Ambient Glows */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full top-[-100px] -left-20 pointer-events-none" />
            <div className="absolute w-[450px] h-[450px] bg-blue-500/10 blur-[130px] rounded-full bottom-[-80px] -right-20 pointer-events-none" />

            {/* Header Section */}
            <div className="text-center mb-12 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-cyan-400 text-xs font-medium tracking-wide mb-3">
                    <FolderGit2 size={13} />
                    <span>Featured Deployments</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                    Active Deployments
                </h2>
                <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto leading-relaxed">
                    Production systems, full-stack architectures, and web platforms engineered and shipped to live environments.
                </p>

                {/* ── INTERACTIVE CATEGORY FILTER TABS ── */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                    {categories.map((cat) => {
                        const isActive = activeTab === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${isActive
                                        ? "text-slate-950 font-semibold"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeWorkFilter"
                                        className="absolute inset-0 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/25"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── PROJECTS GRID ── */}
            <div className="relative z-10 w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <ProjectCardItem key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
