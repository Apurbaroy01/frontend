"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiAlignRight, FiUser, FiLayers, FiFolder, FiBriefcase, FiAward, FiMail } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "/#about", id: "about", icon: FiUser },
  { name: "Stack", href: "/#stack", id: "stack", icon: FiLayers },
  { name: "Deployments", href: "/#work", id: "work", icon: FiFolder },
  { name: "Experience", href: "/#experience", id: "experience", icon: FiBriefcase },
  { name: "Education", href: "/#education", id: "education", icon: FiAward },
  { name: "Contact", href: "/#connection", id: "connection", icon: FiMail },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Active section scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionIds = ["about", "stack", "work", "experience", "education", "connection"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <nav
        className={`transition-all duration-300 rounded-full pl-5 pr-2 py-2 flex items-center justify-between border ${
          scrolled
            ? "bg-zinc-950/75 backdrop-blur-2xl border-white/15 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.9)]"
            : "bg-zinc-950/50 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-400/40 p-0.5 group-hover:border-cyan-400 transition-colors">
            <Image
              className="rounded-full object-cover"
              src="/logo.png"
              alt="Dev Apurba"
              width={32}
              height={32}
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-tight text-sm group-hover:text-cyan-300 transition-colors">
              Dev Apurba
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-0.5 bg-white/[0.04] border border-white/5 rounded-full p-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Direct Let's Talk CTA */}
          <Link
            href="/#connection"
            className="hidden sm:inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-slate-950 px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-md shadow-white/10 hover:shadow-cyan-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-zinc-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
          >
            {open ? <IoCloseSharp className="text-lg" /> : <FiAlignRight className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-3 lg:hidden bg-zinc-950/85 backdrop-blur-2xl border border-white/15 rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5 text-sm">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-white/10 text-cyan-400 font-medium"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <IconComponent className="text-base opacity-75" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-white/10">
                <Link
                  href="/#connection"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md shadow-cyan-500/20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-950 animate-pulse" />
                  <span>Let&apos;s Connect</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;