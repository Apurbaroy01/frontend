"use client";

import { MeteorsDemo } from "@/components/MeteorsDemo";
import Image from "next/image";
import { FiClock, FiFolder } from "react-icons/fi";
import image from '../../../public/apurba.jpg'
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function About() {
    return (
        <section
            id="about"
            className="w-full max-w-6xl mx-auto px-6 mt-20 py-10 text-white scroll-mt-32 relative"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-pink-500/10 blur-3xl"></div>

            {/* Heading */}
            <div className="flex flex-col gap-2 mb-12 text-center">
                <h2 className="text-3xl text-center font-semibold  gap-3">
                    About the Architect
                </h2>
                <p className="text-sm text-zinc-400">
                    My background, mindset, and approach to building scalable systems.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-stretch">

                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col  gap-8">
                    <MeteorsDemo />

                    {/* Stats */}
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Stat 1 */}
                        <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                                <FiClock size={20} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">2+ Years</p>
                                <p className="text-sm text-zinc-400">
                                    Continuous Development
                                </p>
                            </div>

                        </div>

                        {/* Stat 2 */}
                        <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                                <FiFolder size={20} />
                            </div>
                            <div>
                                <p className="text-xl font-semibold">9+ Projects</p>
                                <p className="text-sm text-zinc-400">
                                    Successfully Delivered
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:px-10 mx-auto relative">

                    {/* Background Glow */}
                    <div className="absolute w-[220px] sm:w-[260px] md:w-[300px] h-[220px] sm:h-[260px] md:h-[300px] bg-emerald-500/10 blur-[100px] rounded-full -top-6 sm:-top-8 md:-top-10 -right-6 sm:-right-8 md:-right-10 pointer-events-none" />

                    {/* Image Card */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-1.5 sm:p-2"
                    >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 z-10" />

                        {/* Image */}
                        <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                src={image}
                                alt="apurba"
                                width={400}
                                height={400}
                                className="w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] object-cover rounded-lg sm:rounded-xl"
                            />
                        </motion.div>

                        {/* Badge */}
                        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white">
                            <Icon icon="solar:code-linear" className="text-xs sm:text-sm" />
                            MERN Developer
                        </div>

                        {/* Card Content */}
                        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 z-20">
                            <div className="backdrop-blur-md border text-center border-white/10 rounded-md sm:rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                                <p className="text-xs sm:text-sm text-white font-medium">
                                    Apurba Roy
                                </p>
                                <p className="text-[10px] sm:text-xs text-zinc-400">
                                    Full Stack Developer
                                </p>
                            </div>
                        </div>

                        {/* Glow Border */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />
                        </div>

                        <BorderBeam size={450} duration={10} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}