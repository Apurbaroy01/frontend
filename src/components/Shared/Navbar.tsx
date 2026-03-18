"use client";

import Link from "next/link";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import image from '../../../public/apurba.jpg'
import Image from "next/image";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-2 py-2 flex items-center justify-between shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)]">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-semibold tracking-tighter">
                        <Image className="rounded-full" src={image} alt="apurba" width={80} height={80} />
                    </div>

                    <span className="text-white font-medium tracking-tight text-sm hidden sm:block">
                        Apurba Roy
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full p-1 shadow-inner">
                    <Link
                        href="#stack"
                        className="hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-medium text-zinc-400 rounded-full px-5 py-1.5"
                    >
                        Stack
                    </Link>

                    <Link
                        href="#work"
                        className="hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-medium text-zinc-400 rounded-full px-5 py-1.5"
                    >
                        Deployments
                    </Link>

                    <Link
                        href="#connect"
                        className="hover:text-white hover:bg-white/10 transition-all duration-300 text-xs font-medium text-zinc-400 rounded-full px-5 py-1.5"
                    >
                        Connect
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <button className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors items-center gap-2">
                        <FiAlignRight className="text-base" />
                        <span>Enter AR</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-zinc-300 border border-white/5 hover:bg-white/10 hover:text-white transition-all">
                        {open ? <IoCloseSharp className="text-lg" /> : <FiAlignRight className="text-lg" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {open && (
                <div data-aos="fade-left" className=" mt-3 md:hidden bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                    <div className="flex flex-col gap-2 text-sm">
                        <Link
                            href="#stack"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 rounded-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                            Stack
                        </Link>

                        <Link
                            href="#work"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 rounded-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                            Deployments
                        </Link>

                        <Link
                            href="#connect"
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 rounded-lg text-zinc-300 hover:bg-white/10 hover:text-white transition"
                        >
                            Connect
                        </Link>

                        <button className="mt-2 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-200 transition">
                            <IoCloseSharp />
                            Enter AR
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;