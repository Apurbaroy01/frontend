

import Image from "next/image";
import { FaGithub, FaLinkedin, FaDribbble, FaDownload } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BadgeCheck, CheckIcon } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";

export default function HeroPage() {
  return (
    <section className="relative  flex items-center justify-center  text-white overflow-hidden">

      <div className="relative z-10 max-w-4xl text-center px-6">

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-30 h-30">

            <BorderBeam
              borderWidth={5}
              size={70}
              duration={4}
              colorFrom="#ffaa90"
              colorTo="#9c40ff"
              className="rounded-full"
            />

            {/* Image */}
            <Image
              src="/mee.jpeg"
              alt="apurba"
              fill
              className="rounded-full object-cover border-2 border-gray-700 shadow-lg p-1"
              sizes="80px"
              priority
            />

            {/* Verified badge */}
            <span className="absolute right-1 bottom-1 flex h-8 w-8 items-center justify-center ">
              <BadgeCheck
                className="h-7 w-7 fill-[#1877F2] text-white drop-shadow-[0_0_4px_rgba(24,119,242,0.5)]"
                strokeWidth={1.5}
              />
            </span>

          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
          Hey, I'm{" "}
          <span className="text-purple-400">Apurba Roy ✨</span>
          <br />
          A{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Full Stack Software Engineer
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          I build fast, scalable, and secure web applications using the MERN stack,
          delivering clean architecture and seamless user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            <FiMail /> Contact Me
          </button>

          <Link href="https://drive.google.com/file/d/1Gx6qudLXN2DNE1FC06neNcEadue32SIb/view" target="_blank" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
            <FaDownload /> Resume
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6 text-xl text-gray-400">
          <Link href="https://github.com/Apurbaroy01" target="_blank">
            <FaGithub className="hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://apurbaroy.netlify.app" target="_blank">
            <FaDribbble className="hover:text-white cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/apurba-roy01" target="_blank">
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
}