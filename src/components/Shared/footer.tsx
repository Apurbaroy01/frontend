"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-10 w-full overflow-hidden border-t border-white/10 bg-white/[0.02] px-6 py-10 backdrop-blur-2xl">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300"
            >
              Dev Apurba
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-400">
              Full Stack Developer building thoughtful digital experiences and
              scalable web applications.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <div className="mt-3 flex flex-col items-start gap-2 text-sm text-zinc-400">
              <Link href="/#about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/#stack" className="transition hover:text-white">
                Stack
              </Link>
              <Link href="/#work" className="transition hover:text-white">
                Work
              </Link>
              <Link href="/#education" className="transition hover:text-white">
                Education
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Let&apos;s connect</h2>
            <p className="mt-3 text-sm text-zinc-400">
              Have a project in mind? Get in touch.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://github.com/Apurbaroy01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Github size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/apurba-roy01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="mailto:apurbaroy00011@gmail.com"
                aria-label="Send an email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Mail size={16} />
              </Link>
            </div>
            <Link
              href="/#connection"
              className="mt-4 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Apurba Roy. All rights reserved.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-white"
          >
            Back to top
            <ArrowUp size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}