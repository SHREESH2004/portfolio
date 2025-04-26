import React from "react";
import { cn } from "@/lib/utils";
import { BentoGridItem } from "./BnetoGrid"; // Ensure BentoGridItem accepts onClick
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react"; // Import your ExpandableCardDemo component

export function BentoGridDemo() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            image={item.image}
            className={cn(
              "transition-transform duration-300 hover:scale-[1.02]",
              i === 3 || i === 6 ? "md:col-span-2" : "",
              item.title === "Recent Projects" && "cursor-pointer"
            )}
          />
        ))}
      </div>
      {/* Conditionally render ExpandableCardDemo */}
    </div>
  );
}

const items = [
  {
    title: "My Tech Stack",
    description: "A proficient MERN stack developer with expertise in Golang, TypeScript, Docker, Flask, Agentic AI MCP servers, A2A Servers, LangChain, VectorDB, and databases such as PostgreSQL, SQL, and MongoDB.",
    icon: <IconClipboardCopy className="h-5 w-5 text-blue-500" />,
    image: "https://miro.medium.com/v2/resize:fit:1358/1*fCj_Qu7OfFNub5sY3f3HUA.png",
  },
  {
    title: "Real-World Problem Solving",
    description: "Focused on using cutting-edge technologies to solve real-world challenges in fields like AI, data management, and automation. Constantly refining my skills to drive impactful change through innovation.",
    icon: <IconFileBroken className="h-5 w-5 text-pink-500" />,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV5K8J6IHw2PG_SakWdyha2JKnIv0RtQZdQ&s",
  },
  {
    title: "Very Flexible with Time Zones and Communication",
    description: "Adaptable to different time zones and communication styles, ensuring smooth collaboration with global teams. Efficient at managing remote work dynamics and fostering effective communication.",
    icon: <IconSignature className="h-5 w-5 text-purple-500" />,
    image: "https://media.istockphoto.com/id/1338311892/photo/photorealistic-earth-view-from-space-to-europe.webp?b=1&s=612x612&w=0&k=20&c=JjCHnReMMcqq3bcKasNEtn68nXYY1GkptxD5QPFPfAE=",
  },
  {
    title: "Passion for Development",
    description: "Driven by curiosity and a deep passion for technology. Always exploring new tools and frameworks to enhance my development skills and stay at the forefront of tech trends.",
    icon: <IconTableColumn className="h-5 w-5 text-green-500" />,
    image: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/04/0-cl7fc6pt1MHjIF4K.png",
  },
  {
    title: "Agentic AI Developer and Generative AI Enthusiast",
    description: "Specializing in Agentic AI and Generative AI technologies. Exploring the potential of AI to create intelligent systems and contribute to the future of automation and machine learning.",
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-red-500" />,
    image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/11/Using-AI-Agents-to-Create-Customized-Customer-Experiences-1.webp",
  },
  {
    title: "Want to Start a Project",
    description: "Eager to collaborate on new projects. Feel free to contact, details in about section",
    icon: <IconArrowWaveRightUp className="h-5 w-5 text-yellow-500" />,
    image: "https://miro.medium.com/v2/resize:fit:1400/0*jaGxhmoV53RzpNNu",
  },
  {
    title: "Continuous Learning and Innovation",
    description: "A passionate developer committed to lifelong learning. Constantly exploring emerging technologies and improving my skill set to stay ahead in the fast-paced world of tech. Always looking for new ways to innovate and deliver impactful solutions.",
    icon: <IconBoxAlignRightFilled className="h-5 w-5 text-red-500" />,
    image: "https://mintbook.com/blog/wp-content/uploads/2019/08/5-Reasons-to-Invest-In-E-Learning-Tools-for-Your-Children.png",
  },
];
