import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
    return (
        <div className="">
            <div className=" w-full relative">

                <div className="flex-1 relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-2 w-2 text-gray-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                            />
                        </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        Engineering Digital Precision
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        I am <span className="text-white font-medium">Apurba Roy</span>, a
                        dedicated software engineer focused on building modern,
                        scalable web applications using the{" "}
                        <span className="text-purple-400 font-medium">MERN stack</span>.
                        I specialize in connecting clean UI with powerful backend systems.
                    </p>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        I don’t just write code — I design systems. From optimizing MongoDB
                        queries to crafting smooth React interfaces, I focus on performance,
                        scalability, and clean architecture that delivers real-world impact.
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}