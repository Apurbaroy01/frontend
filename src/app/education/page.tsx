"use client";

import { Icon } from "@iconify/react";

const timelineData = [
    {
        id: 1,
        date: "2022 — Present",
        title: "Advanced MERN Certification",
        institute: "Modern Web Academy",
        icon: "solar:book-bookmark-linear",
        description:
            "Intensive deep dive into React performance optimization, complex MongoDB aggregation pipelines, and secure Node.js API architecture. Focused on scalable patterns.",
    },
    {
        id: 2,
        date: "2018 — 2022",
        title: "B.Sc. Computer Science",
        institute: "Tech University Institute",
        icon: "solar:diploma-linear",
        description:
            "Specialized in software engineering, advanced data structures, and distributed systems. Graduated with honors, leading the final year full-stack engineering project.",
    },
];

export default function EducationSection() {
    return (
        <section
            id="education"
            className="w-full items-center flex flex-col gap-10 scroll-mt-32"
        >
            {/* Header */}
            <div className="flex flex-col gap-2 text-center items-center">
                <h2 className="text-2xl text-center font-medium tracking-tight text-zinc-100 flex items-center gap-3">
                    Academic Foundation
                </h2>
                <p className="text-sm text-center text-zinc-500">
                    Formal education and continuous learning trajectory.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative w-full max-w-4xl mx-auto mt-4">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

                <div className="flex flex-col gap-12">
                    {timelineData.map((item, index) => {
                        const isReverse = index % 2 !== 0;

                        return (
                            <div
                                key={item.id}
                                className={`relative flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"
                                    } items-start justify-between group`}
                            >
                                {/* Date (Desktop) */}
                                <div
                                    className={`hidden md:block md:w-[calc(50%-3rem)] ${isReverse ? "text-left" : "text-right"
                                        } pt-4`}
                                >
                                    <span className="text-sm font-medium text-white tracking-tight">
                                        {item.date}
                                    </span>
                                </div>

                                {/* Node */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center md:-translate-x-1/2 shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] group-hover:border-white/30 group-hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.2)] transition-all duration-500 z-10 mt-2 md:mt-0">
                                    <div className="w-2 h-2 rounded-full bg-white group-hover:bg-white group-hover:scale-150 transition-all duration-500"></div>
                                </div>

                                {/* Card */}
                                <div className="w-full pl-16 md:pl-0 md:w-[calc(50%-3rem)]">
                                    <div className="relative rounded-3xl p-[1px] bg-white/[0.05] overflow-hidden">
                                        {/* Hover Gradient */}
                                        <div
                                            className={`absolute inset-0 ${isReverse
                                                    ? "bg-gradient-to-bl"
                                                    : "bg-gradient-to-br"
                                                } from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                                        />

                                        {/* Border Beam */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.3)_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        {/* Content */}
                                        <div className="relative z-10 backdrop-blur rounded-[calc(1.5rem-1px)] p-6 md:p-8 h-full border border-white">
                                            <span className="md:hidden text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20 mb-3 inline-block">
                                                {item.date}
                                            </span>

                                            <h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
                                                <Icon
                                                    icon={item.icon}
                                                    width="20"
                                                    height="20"
                                                    className="text-white"
                                                />
                                                {item.title}
                                            </h3>

                                            <span className="text-sm text-white mt-1 block mb-4">
                                                {item.institute}
                                            </span>

                                            <p className="text-sm text-zinc-400 leading-relaxed font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}