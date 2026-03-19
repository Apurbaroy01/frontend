"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Radar } from "lucide-react";

const socials = [
  { href: "mailto:your@email.com", icon: Mail },
  { href: "https://github.com/yourusername", icon: Github },
  { href: "https://linkedin.com/in/yourusername", icon: Linkedin },
];

export default function ConnectSection() {
  return (
    <section className="w-full mt-5 pt-10 border-t border-white/5 flex flex-col items-center text-center gap-6 pb-12">

      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
        <Radar size={20} className="text-zinc-300" />
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Establish Connection
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base text-zinc-400 max-w-md">
        Let’s connect and build something meaningful.
      </p>

      {/* Social */}
      <div className="flex gap-4 mt-4">
        {socials.map(({ href, icon: Icon }, i) => (
          <Link
            key={i}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition"
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>

    </section>
  );
}