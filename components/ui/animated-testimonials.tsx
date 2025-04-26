import { motion, AnimatePresence } from "framer-motion"; // Correct import for framer-motion
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type Testimonial = {
  name: string;
  designation: string;
  src: string | StaticImageData;
  quote: string;
  linkedin?: string; // Optional LinkedIn field
  email?: string;    // Optional Email field
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // Handle going to the next testimonial
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  // Handle going to the previous testimonial
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Check if the testimonial is currently active
  const isActive = (index: number) => index === active;

  // Autoplay functionality to change testimonials every 5 seconds
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Random Y-axis rotation for some visual flair
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  // Get the current testimonial to display
  const current = testimonials[active];

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={
                    typeof testimonial.src === "string"
                      ? testimonial.src
                      : testimonial.name
                  }
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {current.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {current.designation}
            </p>

            <div className="mt-8">
              <p className="text-lg italic text-gray-600 dark:text-neutral-400">
                "{current.quote}"
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
              {current.linkedin && (
                <p>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href={current.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {current.linkedin}
                  </a>
                </p>
              )}
              {current.email && (
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${current.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {current.email}
                  </a>
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
