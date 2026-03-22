"use client";

import { Icon } from "@iconify/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    id: 1,
    date: "2025 — Present",
    title: "Industrial Attachment (Web Development)",
    institute: "TechLabs",
    icon: "solar:code-linear",
    description:
      "Hands-on industry training focused on real-world web development, MERN stack projects, and production-level application building.",
  },
  {
    id: 2,
    date: "2024",
    title: "Web Development Course",
    institute: "Programming Hero",
    icon: "solar:book-bookmark-linear",
    description:
      "Completed full-stack web development course covering React, Node.js, MongoDB, and modern frontend tools.",
  },
  {
    id: 3,
    date: "2020 — 2024",
    title: "Diploma in Computer Engineering",
    institute: "Mangrove Institute of Science & Technology",
    icon: "solar:diploma-linear",
    description:
      "Focused on core computer engineering concepts, programming fundamentals, networking, and software development.",
  },
  {
    id: 4,
    date: "2018 — 2020",
    title: "Secondary School Certificate (SSC)",
    institute: "Kotalipara High School",
    icon: "solar:book-linear",
    description:
      "Completed secondary education with a focus on science and mathematics.",
  },
];

export default function EducationSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-transparent w-full py-20 flex flex-col items-center overflow-hidden">

      {/* 🔥 Background Depth */}
      <div className="absolute w-[600px] h-[600px]  blur-[140px] rounded-full top-[-200px]" />
      <div className="absolute w-[400px] h-[400px]  blur-[120px] rounded-full bottom-[-150px]" />

      {/* Header */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-semibold text-white tracking-tight">
          Education Timeline
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          A journey through structured learning and growth
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div ref={ref} className="relative w-full max-w-5xl">

        {/* 🔥 Base Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2" />

        {/* 🔥 Animated Progress Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 w-[2px] bg-blue-300 -translate-x-1/2"
        />

        <div className="flex flex-col gap-24">
          {timelineData.map((item, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center`}
              >
                {/* LEFT / RIGHT CARD */}
                <div className="w-full md:w-1/2 px-6">
                  <motion.div
                    whileHover={{ scale: 1.04, y: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative group"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

                    {/* Card */}
                    <div className="relative bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 transition duration-500">
                      
                      <span className="text-xs text-emerald-400">
                        {item.date}
                      </span>

                      <h3 className="text-lg font-semibold text-white mt-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-zinc-400 mt-1">
                        {item.institute}
                      </p>

                      <p className="text-sm text-zinc-500 mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* 🔥 Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/20 flex items-center justify-center shadow-xl"
                  >
                    <Icon icon={item.icon} className="text-white text-xl" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}