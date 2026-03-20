"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { useState } from "react";
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
} from "react-icons/si";

const stack = [
    {
        name: "MongoDB",
        icon: <SiMongodb className="text-emerald-400" size={24} />,
        desc: "NoSQL database with aggregation pipelines",
        category: "backend",
    },
    {
        name: "Express.js",
        icon: <SiExpress size={24} />,
        desc: "Backend API & middleware architecture",
        category: "backend",
    },
    {
        name: "React",
        icon: <SiReact className="text-cyan-400" size={24} />,
        desc: "Dynamic component-based UI",
        category: "frontend",
    },
    {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-400" size={24} />,
        desc: "Event-driven backend runtime",
        category: "backend",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs size={24} />,
        desc: "SSR, routing & fullstack React framework",
        category: "frontend",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-400" size={24} />,
        desc: "Strongly typed JavaScript",
        category: "backend",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" size={24} />,
        desc: "Core programming language",
        category: "frontend",
    },
    {
        name: "Redis",
        icon: <SiRedis className="text-red-400" size={24} />,
        desc: "In-memory caching & queue system",
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
        name: "CloudPanel",
        icon: <SiCpanel size={24} className="text-indigo-400" />,
        desc: "Server control panel for managing web apps",
        category: "backend",
    },
    {
        name: "Linux",
        icon: <SiLinux size={24} className="text-yellow-400" />,
        desc: "Operating system for servers and development",
        category: "backend",
    },
    {
        name: "Git",
        icon: <SiGit size={24} className="text-orange-400" />,
        desc: "Version control system",
        category: "backend",
    },
    {
        name: "GitHub",
        icon: <SiGithub size={24} />,
        desc: "Code hosting & collaboration platform",
        category: "backend",
    },
    {
        name: "Firebase",
        icon: <SiFirebase size={24} className="text-yellow-400" />,
        desc: "Backend services & hosting platform",
        category: "backend",
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
    }
];

const tabs = ["all", "frontend", "backend", "devops", "tools"];

export default function Stack() {

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
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-semibold">Core Infrastructure</h2>
                <p className="text-sm text-zinc-400">
                    Technologies I use to build scalable production systems.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="flex flex-wrap justify-center gap-3 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-5 py-2 text-sm font-medium capitalize rounded-xl transition-all duration-300
                                ${activeTab === tab
                                    ? "text-black bg-white shadow-md"
                                    : "text-zinc-400 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {tab}

                            {/* Active glow effect */}
                            {activeTab === tab && (
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-md -z-10"></span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredStack.map((item, i) => (
                    
                    <div key={i}
                        className=" group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}