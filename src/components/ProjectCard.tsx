"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


export default function ProjectsSection() {

    const projects = [
        {
            id: 1,
            title: "Gitvn Shop",
            description:
                "A modern eCommerce platform with secure authentication, product management, shopping cart, and online order processing.",
            category: "E-Commerce",
            image: "https://i.ibb.co.com/0RjfnzGw/Screenshot-2026-07-18-223956.png",
            link: "https://gitvnshop.com/",
            createdAt: "2026-07-10",
            languages: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            accent: "from-cyan-500 via-sky-500 to-blue-500",
        },
        {
            id: 2,
            title: "Doctor Appointment",
            description:
                "Online doctor appointment booking system with patient, doctor, and admin dashboards.",
            category: "Healthcare",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=80",
            link: "https://example.com",
            createdAt: "2026-06-18",
            languages: ["Next.js", "Express.js", "MongoDB"],
            accent: "from-emerald-500 via-teal-500 to-cyan-500",
        },
        {
            id: 3,
            title: "IT Company Portfolio",
            description:
                "Professional company website showcasing services, projects, blogs, and contact information.",
            category: "Portfolio",
            image: "https://i.ibb.co.com/dsL2Jk63/Screenshot-2026-07-18-225008.png",
            link: "https://www.airtech.com.bd/",
            createdAt: "2026-05-25",
            languages: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            accent: "from-violet-500 via-fuchsia-500 to-pink-500",
        },
        
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-5 text-white relative">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-semibold">Active Deployments</h2>
                <p className="text-sm text-zinc-400">Recent systems engineered and shipped to production.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="group overflow-hidden rounded-lg border  bg-white/[0.04] transition hover:-translate-y-1 border-cyan-300 shadow-2xl shadow-cyan-300/10 hover:border-cyan-300/40   backdrop-blur-md group-hover:bg-white/5"
                    >
                        <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                            {/* Top Gradient */}
                            <div
                                className={`absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r ${project.accent}`}
                            />

                            {/* Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                            {/* Top Bar */}
                            <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </div>

                                <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                                    Live App
                                </span>
                            </div>

                            {/* Languages on Image */}
                            <div className="absolute bottom-2 left-2 right-2 z-20 flex flex-wrap gap-1">
                                {project.languages?.map((lang) => (
                                    <span
                                        key={lang}
                                        className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-2">
                            <div className="flex items-center justify-between">
                                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                                    {project?.category}
                                </span>

                                <span className="text-[10px] text-slate-200">
                                    {new Intl.DateTimeFormat("en-US", {
                                        month: "short",
                                        year: "numeric",
                                    }).format(new Date(project.createdAt))}
                                </span>
                            </div>

                            <h3 className="p-1 line-clamp-1 text-lg md:text-xl font-bold text-white transition group-hover:text-cyan-300">
                                {project?.title}
                            </h3>

                            <p className=" text-xs leading-5 text-slate-300">
                                {project?.description}
                            </p>

                            {/* Footer - Always Bottom */}
                            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-2">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-1 rounded-xl bg-cyan-500/10 px-2 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:text-cyan-200"
                                >
                                    View Live
                                    <FiArrowUpRight className="h-4 w-4" />
                                </Link>

                                <div className="flex items-center gap-2 text-xs text-slate-200">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                    Active
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    )
}
