import React from "react";
import { Meteors } from "@/components/ui/meteors";

export function MeteorsDemo() {
    return (
        <div className="">
            <div className=" w-full max-w-full mx-auto relative">

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
                        I’m <span className="text-white font-medium">Apurba Roy</span>, a
                        Full Stack Software Engineer ( MERN ) Building scalable web applications from Design to Deployment.
                    </p>

                    <p className="font-normal text-base text-slate-500  relative z-50">
                        I build scalable and secure full-stack applications with the MERN stack,
                        specializing in React, Next.js, Node.js, and MongoDB while focusing on
                        performance optimization, clean architecture, and intuitive user experiences
                        that are built to grow with business needs.
                    </p>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                </div>
            </div>
        </div>
    );
}