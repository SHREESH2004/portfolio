import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';// This imports the image as StaticImageData

import { Spotlight } from './ui/Spotlight';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BentoGridDemo } from './ui/BentoGridDemo';


const Hero = () => {
  return (
    <div className="w-full">
      {/* 🔥 Hero Section */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-black text-white mb-12">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: '' }} />

        {/* Spotlights */}
        <Spotlight className="-top-20 -left-10 absolute" />
        <Spotlight className="top-10 left-1/2 absolute" />
        <Spotlight className="bottom-5 right-5 absolute" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-8 py-8 space-y-4">

          {/* Animated Text */}
          <TextGenerateEffect
            className="text-center text-sm sm:text-base font-medium text-white mb-4"
            words="Innovating the Future of Coding"
          />

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-snug">
            Welcome to My World of Development & Creativity
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-neutral-200 max-w-3xl mx-auto">
            Hey Developers! I'm Shreesh Sanyal, a full-stack developer specializing in MERN Stack and AI agent development using Gen AI. Let's build something amazing together.
          </p>

          {/* Button */}
          <a href="https://github.com/SHREESH2004" className="mt-4">
            <button className="bg-slate-800 group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1.5 px-6 ring-1 ring-white/10">
              <span className="text-sm sm:text-base">My Work&apos;s</span>

                <FaLocationArrow className="w-4 h-4" />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </a>
        </div>
      </div>

      {/* 🧩 Grid Background Section */}
      <div className="relative flex w-full flex-col items-center justify-center bg-white dark:bg-black pt-12 pb-12">
        {/* Grid pattern background */}
        <div
          className={cn(
            'absolute inset-0',
            'bg-[size:40px_40px]',
            'bg-[image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:bg-[image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

        {/* 🎯 Bento Grid Demo */}
        <div className="relative z-10 w-full px-6 sm:px-12 max-w-7xl">
          <BentoGridDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;

