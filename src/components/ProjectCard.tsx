"use client";

import { ArrowUpRight, Code2 } from "lucide-react";

type Project = {
    title: string;
    category: string;
    tech: string;
    description: string;
};

const projects: Project[] = [
    {
        title: "Nexus Storefront",
        category: "E-Commerce",
        tech: "React • Node • MongoDB",
        description:
            "High-performance storefront with real-time inventory sync.",
    },
    {
        title: "Omni Dash",
        category: "Data Analytics",
        tech: "MERN • Recharts",
        description:
            "Advanced analytics dashboard with MongoDB aggregation.",
    },
];

export default function ProjectsSection() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-16 flex flex-col gap-12">

            {/* Header */}
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-white">
                    Active Deployments
                </h2>
                <p className="text-sm text-zinc-400">
                    Recent systems engineered and shipped to production.
                </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <ProjectCard key={i} {...project} index={i} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({
    title,
    category,
    tech,
    description,
    index,
}: Project & { index: number }) {
    return (
        <div className="relative rounded-2xl p-[1.5px] overflow-hidden">


            {/* Card */}
            <div
                className={`relative rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 p-5 h-full flex flex-col gap-5`}
            >
                {/* Image */}
                <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex items-center justify-center">
                    <Code2 className="text-zinc-600" size={40} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="px-2 py-1 rounded bg-white/10 border border-white/10">
                            {category}
                        </span>
                        <span>{tech}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">{title}</h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto pt-2">
                    <button className="flex items-center gap-2 text-sm text-white hover:opacity-80 transition">
                        View Live <ArrowUpRight size={16} />
                    </button>

                    <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition">
                        <Code2 size={16} /> Code
                    </button>
                </div>
            </div>
        </div>
    );
}