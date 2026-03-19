"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-white/[0.02] backdrop-blur-2xl mt-10 py-5 px-6">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-zinc-500 text-center md:text-left">
          © {new Date().getFullYear()} Apurba Roy. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#work" className="hover:text-white transition">
            Work
          </Link>
          <Link href="#connect" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Apurbaroy01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition hover:scale-110"
          >
            <Github size={18} />
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition hover:scale-110"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="mailto:your@email.com"
            className="text-zinc-400 hover:text-white transition hover:scale-110"
          >
            <Mail size={18} />
          </Link>
        </div>

      </div>
    </footer>
  );
}