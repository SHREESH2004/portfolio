"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "A",
    },
    {
      text: "small",
    },
    {
      text: "selection",
    },
    {
      text: "of",
    },
    {
      text: "Recent Projects",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
      Check out some of the most recent projects I’ve worked on.
      </p>
      <TypewriterEffect words={words} />
    </div>
  );
}
