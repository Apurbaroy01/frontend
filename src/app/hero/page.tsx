"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import image from '../../../public/apurba.jpg'

export default function Hero() {
  return (
    <section className="relative  flex items-center justify-center  text-white overflow-hidden">

      <div className="relative z-10 max-w-4xl text-center px-6">
        
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <Image
            src={image} // replace with your image
            alt="apurba"
            width={80}
            height={80}
            className="rounded-full border border-gray-700"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hey, I'm{" "}
          <span className="text-purple-400">Apurba Roy ✨</span>
          <br />
          A{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Software Developer
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          A fullstack developer with solid foundations in design, passionate
          about crafting seamless user experiences. I thrive at the intersection
          of creativity and functionality.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            <FiMail /> Contact Me
          </button>

          <button className="px-5 py-2 rounded-lg border border-gray-600 hover:bg-gray-800 transition">
            View Projects
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6 text-xl text-gray-400">
          <FaGithub className="hover:text-white cursor-pointer" />
          <FaDribbble className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </section>
  );
}