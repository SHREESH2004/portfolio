import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandDiscord,
  IconPencil, 
  IconNotebook,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Email",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "shreesh.23bce7066@vitapstudent.ac.in",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/CyberSleuth24",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/SHREESH2004",
    },
    {
      title: "Discord",
      icon: <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://discord.gg/kAYsz7wy",
    },
    {
      title: "Hashnode",
      icon: <IconPencil className="h-full w-full text-neutral-500 dark:text-neutral-300" />, // Placeholder icon
      href: "https://hashnode.com/@shreeesshh", // Replace with your actual Hashnode URL
    },
    {
      title: "Notion",
      icon: <IconNotebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.notion.so/1e113b1f5b1a80b19d08e7fb095e1924?pvs=4", // replace with your Notion link
    }
  ];

  return (
    <div className="w-full flex justify-center">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
