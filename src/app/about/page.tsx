"use client";

import { MeteorsDemo } from "@/components/MeteorsDemo";
import Image from "next/image";
import { FiClock, FiFolder } from "react-icons/fi";
import image from '../../../public/apurba.jpg'
import { BorderBeam } from "@/components/ui/border-beam";

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

            <div className="flex flex-col md:flex-row gap-8 items-stretch">

                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-8">
                    <MeteorsDemo />

                    {/* Stats */}
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Stat 1 */}
                        <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                                <FiClock size={20} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">3+ Years</p>
                                <p className="text-sm text-zinc-400">
                                    Continuous Development
                                </p>
                            </div>
                            <BorderBeam size={165} duration={15} delay={5}/>
                        </div>

                        {/* Stat 2 */}
                        <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                                <FiFolder size={20} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">15+ Projects</p>
                                <p className="text-sm text-zinc-400">
                                    Successfully Delivered
                                </p>
                            </div>
                            <BorderBeam size={165} duration={15} />
                        </div>

                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 md:px-13 mx-auto ">

                    {/* Image Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2">
                        <Image
                            src={image}
                            alt="apurba"
                            width={300}
                            height={300}
                            className="w-full object-cover rounded-xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}