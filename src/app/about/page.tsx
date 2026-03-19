"use client";

import { MeteorsDemo } from "@/components/MeteorsDemo";
import { FiClock, FiFolder } from "react-icons/fi";

export default function About() {
    return (
        <section
            id="about"
            className="w-full max-w-6xl mx-auto px-6 py-24 text-white scroll-mt-32 relative"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-pink-500/10 blur-3xl"></div>

            {/* Heading */}
            <div className="flex flex-col gap-2 mb-12 text-center">
                <h2 className="text-3xl text-center font-semibold   gap-3">
                    About the Architect
                </h2>
                <p className="text-sm text-zinc-400">
                    My background, mindset, and approach to building scalable systems.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-8">

                {/* Main Card */}
                <div className="col-span-8">
                    <MeteorsDemo></MeteorsDemo>

                </div>



                {/* Stats */}
                <div className="col-span-4 flex flex-col gap-6 w-full ">

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