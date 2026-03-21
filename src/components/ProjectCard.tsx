"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import dynamic from "next/dynamic";

const IconCloud = dynamic(
    () => import("./ui/interactive-icon-cloud").then(m => m.IconCloud),
    { ssr: false }
);

type Project = {
    title: string;
    category: string;
    tech: string;
    description: string;
};

const ICON_SLUGS = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
    "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "sonarqube", "figma",
];

const PROJECTS: Project[] = [
    {
        title: "Nexus Storefront",
        category: "E-Commerce",
        tech: "React • Node • MongoDB",
        description: "High-performance storefront with real-time inventory sync.",
    },
    {
        title: "Omni Dash",
        category: "Data Analytics",
        tech: "MERN • Recharts",
        description: "Advanced analytics dashboard with MongoDB aggregation.",
    },
];

export default function ProjectsSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12">
            <Header />

            <div className="grid md:grid-cols-2 gap-8">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={i} {...project} />
                ))}
            </div>
        </section>
    );
}

function Header() {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">
                Active Deployments
            </h2>
            <p className="text-sm text-zinc-400">
                Recent systems engineered and shipped to production.
            </p>
        </div>
    );
}

function ProjectCard({ title, category, tech, description }: Project) {
    return (
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/0  overflow-hidden">

            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.15),transparent_70%)] pointer-events-none" />

            <div className="relative rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-5 h-full flex flex-col gap-5">

                <CardImage />
                <CardContent title={title} category={category} tech={tech} description={description} />
                <CardActions />

            </div>
        </div>
    );
}

function CardImage() {
    return (
        <div className="relative aspect-video rounded-xl overflow-visible border border-white/10 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">

            {/* Base Icon */}
            <Code2 className="text-zinc-600 z-10" size={40} />

            {/* Overlay */}
            <div className="absolute -top-30 -right-20  flex items-center justify-center opacity-100 overflow-visible">
                <div className="w-[60%] h-[60%]">
                    <IconCloud iconSlugs={ICON_SLUGS} />
                </div>
            </div>

        </div>
    );
}

function CardContent({ title, category, tech, description }: Project) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10">
                    {category}
                </span>
                <span className="text-zinc-500">{tech}</span>
            </div>

            <h3 className="text-lg font-semibold text-white">{title}</h3>

            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                {description}
            </p>
        </div>
    );
}

function CardActions() {
    return (
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">

            <button className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition">
                View Live <ArrowUpRight size={16} />
            </button>

            <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
                <Code2 size={16} /> Code
            </button>

        </div>
    );
}