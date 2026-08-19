"use client";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiRedis,
    SiDocker,
    SiNginx,
    SiJsonwebtokens,
    SiJson,
    SiFastapi,
    SiSocketdotio,
    SiNpm,
    SiPostman,
    SiFirebase,
    SiGithub,
    SiGit,
    SiLinux,
    SiCpanel,
    SiAuth0,
    SiHostinger,
    SiVercel,
    SiNetlify,
    SiHtml5,
    SiRadixui,
    SiMui,
    SiCss,
    SiTailwindcss,
    SiReactquery,
    SiReactrouter,
    SiVsco,
    SiHeroui,
    SiPostgresql,
    SiPrisma,
    SiSupabase,
} from "react-icons/si";

const stack = [
    // ==================== FRONTEND ====================
    {
        name: "React",
        icon: <SiReact className="text-cyan-400" size={24} />,
        desc: "Dynamic component-based UI",
        category: "frontend",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs size={24} />,
        desc: "SSR, routing & fullstack React framework",
        category: "frontend",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500" size={24} />,
        desc: "Type-safe JavaScript development",
        category: "frontend",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" size={24} />,
        desc: "Core programming language",
        category: "frontend",
    },
    {
        name: "Hero UI",
        icon: <SiHeroui className="text-purple-500" size={24} />,
        desc: "Modern React UI components",
        category: "frontend",
    },
    {
        name: "React Router",
        icon: <SiReactrouter size={24} className="text-red-400" />,
        desc: "Routing library for React",
        category: "frontend",
    },
    {
        name: "React Query",
        icon: <SiReactquery size={24} className="text-pink-500" />,
        desc: "Data fetching & caching",
        category: "frontend",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={24} className="text-cyan-400" />,
        desc: "Utility-first CSS framework",
        category: "frontend",
    },
    {
        name: "DaisyUI",
        icon: <SiCss size={24} className="text-teal-400" />,
        desc: "Tailwind component library",
        category: "frontend",
    },
    {
        name: "Material UI",
        icon: <SiMui size={24} className="text-blue-500" />,
        desc: "React UI component library",
        category: "frontend",
    },
    {
        name: "Shadcn UI",
        icon: <SiRadixui size={24} />,
        desc: "Accessible UI components",
        category: "frontend",
    },
    {
        name: "HTML5",
        icon: <SiHtml5 size={24} className="text-orange-500" />,
        desc: "Markup language for web",
        category: "frontend",
    },
    {
        name: "CSS3",
        icon: <SiCss size={24} className="text-blue-400" />,
        desc: "Styling language for web",
        category: "frontend",
    },

    // ==================== BACKEND ====================
    {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-400" size={24} />,
        desc: "Event-driven backend runtime",
        category: "backend",
    },
    {
        name: "Express.js",
        icon: <SiExpress size={24} />,
        desc: "Backend API & middleware architecture",
        category: "backend",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-400" size={24} />,
        desc: "Strongly typed JavaScript",
        category: "backend",
    },
    {
        name: "Mongoose",
        icon: <SiMongodb className="text-green-600" size={24} />,
        desc: "Elegant MongoDB object modeling",
        category: "backend",
    },
    {
        name: "Prisma",
        icon: <SiPrisma className="text-gray-200" size={24} />,
        desc: "Type-safe database ORM",
        category: "backend",
    },
    {
        name: "Better Auth",
        icon: <ShieldCheck className="text-green-500" size={24} />,
        desc: "Secure authentication for web apps",
        category: "backend",
    },
    {
        name: "JWT Auth",
        icon: <SiJsonwebtokens size={24} className="text-pink-400" />,
        desc: "Token-based authentication",
        category: "backend",
    },
    {
        name: "OAuth",
        icon: <SiAuth0 size={24} className="text-orange-400" />,
        desc: "Third-party authentication system",
        category: "backend",
    },
    {
        name: "Firebase Auth",
        icon: <SiFirebase size={24} className="text-yellow-500" />,
        desc: "Authentication with Firebase",
        category: "backend",
    },
    {
        name: "Socket.io",
        icon: <SiSocketdotio size={24} />,
        desc: "Real-time communication",
        category: "backend",
    },
    {
        name: "REST API",
        icon: <SiFastapi size={24} className="text-green-400" />,
        desc: "RESTful API architecture",
        category: "backend",
    },
    {
        name: "JSON",
        icon: <SiJson size={24} className="text-yellow-300" />,
        desc: "Data format for APIs",
        category: "backend",
    },
    {
        name: "Docker",
        icon: <SiDocker className="text-blue-300" size={24} />,
        desc: "Containerization for consistent deployment",
        category: "backend",
    },
    {
        name: "Docker Compose",
        icon: <SiDocker className="text-blue-500" size={24} />,
        desc: "Multi-container orchestration",
        category: "backend",
    },
    {
        name: "Nginx",
        icon: <SiNginx className="text-green-500" size={24} />,
        desc: "Reverse proxy & load balancing",
        category: "backend",
    },
    {
        name: "VPS Server",
        icon: <SiLinux size={24} className="text-gray-300" />,
        desc: "Self-managed virtual private server deployment",
        category: "backend",
    },
    {
        name: "Hostinger VPS",
        icon: <SiHostinger size={24} className="text-purple-400" />,
        desc: "Cloud VPS hosting platform",
        category: "backend",
    },
    {
        name: "Vercel",
        icon: <SiVercel size={24} />,
        desc: "Frontend deployment platform",
        category: "backend",
    },
    {
        name: "Netlify",
        icon: <SiNetlify size={24} className="text-cyan-400" />,
        desc: "Static site hosting & CI/CD",
        category: "backend",
    },
    {
        name: "Firebase",
        icon: <SiFirebase size={24} className="text-yellow-400" />,
        desc: "Backend services & hosting platform",
        category: "backend",
    },

    // ==================== DATABASE ====================
    {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-sky-600" size={24} />,
        desc: "Powerful relational database",
        category: "database",
    },
    {
        name: "Supabase",
        icon: <SiSupabase className="text-green-500" size={24} />,
        desc: "PostgreSQL database with additional features",
        category: "database",
    },

    {
        name: "MongoDB",
        icon: <SiMongodb className="text-emerald-400" size={24} />,
        desc: "NoSQL database with aggregation pipelines",
        category: "database",
    },
    {
        name: "Redis ",
        icon: <SiRedis className="text-red-400" size={24} />,
        desc: "In-memory caching & queue system",
        category: "database",
    },


    // ==================== TOOLS ====================
    {
        name: "Linux",
        icon: <SiLinux size={24} className="text-yellow-400" />,
        desc: "Operating system for servers and development",
        category: "tools",
    },
    {
        name: "CloudPanel",
        icon: <SiCpanel size={24} className="text-indigo-400" />,
        desc: "Server control panel for managing web apps",
        category: "tools",
    },
    {
        name: "Git",
        icon: <SiGit size={24} className="text-orange-400" />,
        desc: "Version control system",
        category: "tools",
    },
    {
        name: "GitHub",
        icon: <SiGithub size={24} />,
        desc: "Code hosting & collaboration platform",
        category: "tools",
    },
    {
        name: "Postman",
        icon: <SiPostman size={24} className="text-orange-500" />,
        desc: "API testing and debugging tool",
        category: "tools",
    },
    {
        name: "VS Code",
        icon: <SiVsco size={24} className="text-blue-400" />,
        desc: "Code editor for development",
        category: "tools",
    },
    {
        name: "NPM",
        icon: <SiNpm size={24} className="text-red-500" />,
        desc: "Package manager for JavaScript",
        category: "tools",
    },
];

const tabs = ["all", "frontend", "backend", "database", "tools"];

export default function StackPage() {

    const [activeTab, setActiveTab] = useState("all");

    const filteredStack =
        activeTab === "all"
            ? stack
            : stack.filter((item) => item.category === activeTab);

    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-5 text-white relative">

            {/* Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-green-500/10 blur-3xl"></div>

            {/* Heading */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-semibold">Core Infrastructure</h2>
                <p className="text-sm text-zinc-400">
                    Technologies I use to build scalable production systems.
                </p>
            </motion.div>

            {/* Tabs */}
            <div className="mb-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-md border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-md w-full">
                    {/* Background Glow */}
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-md" />

                    <div className="relative flex flex-wrap items-center justify-center gap-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`group relative overflow-hidden rounded-md px-2 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${activeTab === tab
                                    ? "bg-white text-black shadow-lg"
                                    : "text-zinc-400 hover:text-white"
                                    }`}
                            >
                                {/* Hover Gradient */}
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Active Glow */}
                                {activeTab === tab && (
                                    <>
                                        <span className="absolute inset-0 rounded-xl border border-white/40" />
                                        <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-30 blur-lg" />
                                    </>
                                )}

                                <span className="relative z-10 capitalize">{tab}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredStack.map((item, i) => (

                    <motion.div
                        key={`${item.name}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="flex flex-col gap-4 w-full justify-center items-center">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 group-hover:scale-110 transition duration-300">
                                {item.icon}
                            </div>

                            <div className="text-center">
                                <h3 className="font-medium text-sm md:text-base">{item.name}</h3>
                                <p className="text-[10px] md:text-xs text-zinc-400 mt-1 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}