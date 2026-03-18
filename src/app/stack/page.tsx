"use client";

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
} from "react-icons/si";

const stack = [
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-emerald-400" size={24} />,
    desc: "NoSQL database with aggregation pipelines",
  },
  {
    name: "Express.js",
    icon: <SiExpress size={24} />,
    desc: "Backend API & middleware architecture",
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" size={24} />,
    desc: "Dynamic component-based UI",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-400" size={24} />,
    desc: "Event-driven backend runtime",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={24} />,
    desc: "SSR, routing & fullstack React framework",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400" size={24} />,
    desc: "Strongly typed JavaScript",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" size={24} />,
    desc: "Core programming language",
  },
  {
    name: "Redis",
    icon: <SiRedis className="text-red-400" size={24} />,
    desc: "In-memory caching & queue system",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-300" size={24} />,
    desc: "Containerization for consistent deployment",
  },
  {
    name: "Docker Compose",
    icon: <SiDocker className="text-blue-500" size={24} />,
    desc: "Multi-container orchestration",
  },
  {
    name: "Nginx",
    icon: <SiNginx className="text-green-500" size={24} />,
    desc: "Reverse proxy & load balancing",
  },
];

export default function Stack() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 text-white relative">
      
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-green-500/10 blur-3xl"></div>

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold">Core Infrastructure</h2>
        <p className="text-sm text-zinc-400">
          Technologies I use to build scalable production systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stack.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
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