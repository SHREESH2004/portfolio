"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement | null>(null);

    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));
    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [

    {
        description: "ScrapeWeb",
        title: "Web Scraper",
        src: "https://www.webharvy.com/images/web%20scraping.png",
        ctaText: "See",
        ctaLink: "https://github.com/SHREESH2004/Scraping_Website",
        content: () => {
            return (
                <p>
                    Scraping_Website: A web scraping website that scrapes a web and stores all the images inside the web server and also generates the html file of the web link provided
                </p>
            );
        },
    },
    {
        description: "AI-powered streaming platform ",
        title: "StreamHorizon",
        src: "https://cdn.dribbble.com/userupload/40864745/file/original-936e9a1547b340bd88beba7615ba9800.png?format=webp&resize=400x300&vertical=center",
        ctaText: "Stream",
        ctaLink: "https://github.com/SHREESH2004/StreamHorizon",
        content: () => {
            return (
                <p>
                    <strong>Stream Horizon</strong> is a next-gen streaming platform that leverages AI to personalize content delivery, boost engagement, and provide a smooth viewing experience. <br /><br />
                    Whether you're a casual viewer or a binge-watcher, Stream Horizon learns your preferences and serves up intelligent recommendations tailored just for you. Built with modern tech, it's optimized for speed, scalability, and seamless integration across devices. <br /><br />
                    With a sleek interface and smart backend, it’s not just about streaming—it’s about discovering what you love, faster.
                </p>
            );
        },
    },
    {
        description: "Collaborative platform for developers ",
        title: "CollabHub",
        src: "https://kitchen.co/blog/wp-content/uploads/2022/04/collaborating-with-developers.png", // You can replace this with an appropriate image for CollabHub
        ctaText: "Collab",
        ctaLink: "https://github.com/SHREESH2004/ai_developer",
        content: () => {
            return (
                <p>
                    <strong>CollabHub</strong> is a cutting-edge platform where developers come together to build projects, chat in real time, and get AI-powered coding assistance. Whether you're working solo or in a team, CollabHub helps streamline the coding process with seamless collaboration tools. <br /><br />
                    With features like project management, real-time chat, and AI-powered code generation, CollabHub fosters creativity and enhances productivity. Whether you're brainstorming ideas or coding your next big app, you’ll find everything you need to succeed under one roof.
                </p>
            );
        }
    },
    {
        description: "TweetMe",
        title: "MCP server that can tweet for you",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNbHqUc1H01VYqnX1KMQrkmRc5JB2Ici_sQ&s", // Replace with your actual image URL
        ctaText: "See",
        ctaLink: "https://github.com/yourusername/TweetMe", // Replace with the actual GitHub link
        content: () => {
          return (
            <p>
              TweetMe: A powerful server-building application that allows users to easily create and host their own Minecraft servers. 
              The platform provides an intuitive interface for configuring server settings, managing plugins, and ensuring smooth gameplay. 
              TweetMe is designed to be scalable, secure, and user-friendly for players and administrators alike.
            </p>
          );
        },
      }
      
,    
    {
        description: "Smart cab booking platform ",
        title: "CabY",
        src: "https://kitchen.co/blog/wp-content/uploads/2022/04/collaborating-with-developers.png", // You can update this image to one that fits CabY
        ctaText: "Book",
        ctaLink: "https://github.com/SHREESH2004/cabY",
        content: () => {
            return (
                <p>
                    <strong>CabY</strong> revolutionizes urban commuting with a fast, secure, and intuitive cab booking experience. Whether you're heading to work, traveling across the city, or planning a late-night trip, CabY ensures you get a ride within minutes. <br /><br />
                    Featuring real-time location tracking, smart fare calculations, and instant driver matching, the app offers everything today's commuters need. Built with a focus on speed and reliability, CabY simplifies everyday transportation with tech-first efficiency.
                </p>
            );
        },
    }
,    
{
    description: "Zippy",
    title: "E-Commerce Platform",
    src: "https://www.indiafilings.com/learn/wp-content/uploads/2024/11/What-is-E-Commerce-Business.jpg", // Replace with your actual image URL
    ctaText: "Order",
    ctaLink: "Still working", // Replace with the actual GitHub link
    content: () => {
      return (
        <p>
          Zippy: A modern e-commerce platform that provides a seamless shopping experience for users. 
          It includes an intuitive admin terminal for managing products, orders, and customers, 
          with easy-to-use features for adding, editing, and tracking inventory.
        </p>
      );
    },
  }
,

    {
        description: "SafeBot Eye",
        title: "Arduino based Obstacle Detection System",
        src: "https://content.instructables.com/FZG/0WQ6/K0R1L2J6/FZG0WQ6K0R1L2J6.jpg?auto=webp&frame=1&width=2100",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Github Link: 'Still working not available now'
                    The Arduino-Based Obstacle Detection System is a smart and efficient solution designed to detect and alert users of nearby obstacles using ultrasonic sensors
                    🚧 Real-Time Obstacle Detection using ultrasonic sensors

                    🧠 Arduino-Controlled Logic for fast and efficient processing

                    📏 Accurate Distance Measurement with configurable threshold limits

                    🔊 Buzzer or LED Alerts for immediate obstacle warnings

                    ⚡ Low Power, High Efficiency embedded system design

                    🔧 Easy Integration into mobile robots or smart carts

                </p>
            );
        },
    },
];
