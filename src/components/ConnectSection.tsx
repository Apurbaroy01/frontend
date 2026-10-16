
import Link from "next/link";
import { Mail, Github, Linkedin, Radar } from "lucide-react";

const socials = [
  { href: "mailto:apurbaroy00011@gmail.com", icon: Mail },
  { href: "https://github.com/Apurbaroy01", icon: Github },
  { href: "https://linkedin.com/in/apurba-roy01", icon: Linkedin },
];

export default function ConnectSection() {
  return (
    <section id="connection" className="w-full mt-5 pt-10 border-t border-white/5 flex flex-col items-center text-center gap-6 pb-12 scroll-mt-28">

      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-purple-400 text-xs font-medium tracking-wide mb-3">
          <Radar size={13} />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Establish Connection
        </h2>
        <p className="text-zinc-400 text-sm mt-1.5 max-w-md">
          Let’s connect and build something meaningful.
        </p>
      </div>

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