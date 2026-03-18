"use client";

import { FiUser, FiClock, FiFolder } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-6 py-24 text-white scroll-mt-32 relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-pink-500/10 blur-3xl"></div>

      {/* Heading */}
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-3xl font-semibold tracking-tight flex items-center gap-3">
          About the Architect
        </h2>
        <p className="text-sm text-zinc-400">
          My background, mindset, and approach to building scalable systems.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Main Card */}
        <div className="flex-1 relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 overflow-hidden">
          
          {/* Icon Glow */}
          <div className="absolute -top-12 -right-12 text-white/5">
            <FiUser size={180} />
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-4">
              Engineering Digital Precision
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              I am <span className="text-white font-medium">Apurba Roy</span>, a
              dedicated software engineer focused on building modern,
              scalable web applications using the{" "}
              <span className="text-purple-400 font-medium">MERN stack</span>.
              I specialize in connecting clean UI with powerful backend systems.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              I don’t just write code — I design systems. From optimizing MongoDB
              queries to crafting smooth React interfaces, I focus on performance,
              scalability, and clean architecture that delivers real-world impact.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-6 w-full md:w-[35%]">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
              <FiClock size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold">3+ Years</p>
              <p className="text-sm text-zinc-400">
                Continuous Development
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
              <FiFolder size={24} />
            </div>
            <div>
              <p className="text-2xl font-semibold">15+ Projects</p>
              <p className="text-sm text-zinc-400">
                Successfully Delivered
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}