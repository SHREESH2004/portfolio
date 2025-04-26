"use client";

import React, { useRef, useState, useEffect } from "react";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import dynamic from "next/dynamic";
import { CardHoverEffectDemo } from "@/components/ui/Approach";
import { Footer } from "@/components/Footer";

const AnimatedTestimonialsDemo = dynamic(
  () => import("@/components/ui/about").then((mod) => mod.AnimatedTestimonialsDemo),
  { ssr: false }
);

const TypewriterEffectDemo = dynamic(
  () => import("@/components/Recentprojects").then((mod) => mod.TypewriterEffectDemo),
  { ssr: false }
);

const ExpandableCardDemo = dynamic(
  () => import("@/components/ui/Recentprojectcards").then((mod) => mod.ExpandableCardDemo),
  { ssr: false }
);

const TypewriterEffectDemo4 = dynamic(
  () => import("@/components/Recentprojects").then((mod) => mod.TypewriterEffectDemo),
  { ssr: false }
);

const Page = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const floatingDockRef = useRef<HTMLDivElement>(null);
  const recentProjectsRef = useRef<HTMLDivElement>(null);
  const typewriterDemo4Ref = useRef<HTMLDivElement>(null);
  const [showHero, setShowHero] = useState(false);

  const handleScrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToRecentProjects = () => {
    recentProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToTypewriterDemo4 = () => {
    typewriterDemo4Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", link: "#home", icon: <FaHome /> },
    { name: "About", link: handleScrollToAbout, icon: <svg className="w-4 h-4" /> },
    { name: "Recent Projects", link: handleScrollToRecentProjects, icon: <svg className="w-4 h-4" /> },
  ];

  useEffect(() => {
    setShowHero(true);
  }, []);

  return (
    <main className="relative bg-black min-h-screen flex flex-col text-white font-sans">
      {/* Floating Navigation */}
      <div className="fixed top-1 left-1/2 -translate-x-1/2 z-50 max-w-md w-full px-2">
        <FloatingNav navItems={navItems} />
      </div>

      {/* About Section with Testimonials */}
      <section
        ref={aboutRef}
        className="w-full min-h-screen flex flex-col items-center justify-center px-2 py-8 space-y-4 bg-black border-0 shadow-none"
      >
        <div className="w-fit max-w-[90vw] p-4 bg-white/5 rounded-lg mx-auto space-y-3 border-0 shadow-none">
          <AnimatedTestimonialsDemo />
        </div>

        <button
          onClick={handleScrollToPortfolio}
          className="mt-4 mb-2 px-6 py-3 text-lg font-medium bg-black border-2 border-blue-500 text-white rounded-xl hover:bg-blue-500 hover:text-black hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          View My Portfolio
        </button>
      </section>

      {/* Portfolio Section */}
      <div
        ref={portfolioRef}
        className="flex-1 w-full bg-gradient-to-b from-black via-black to-black pt-8 pb-8"
      >
        {showHero && <Hero />}
      </div>
      <section
        ref={recentProjectsRef}
        className="w-full bg-black text-white"
      >
        <TypewriterEffectDemo />
        <ExpandableCardDemo />
      </section>

      {/* Add spacing after recent projects */}
      <div className="py-10 bg-black"></div>

      {/* Hover Effect Demo */}
      <CardHoverEffectDemo />
      <Footer/>
    </main>
  );
};

export default Page;
