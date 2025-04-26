import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import profile from "./profile.jpg";
import { FloatingDockDemo } from "./topsection";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: `
        The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for."
      `,
      name: "Shreesh Sanyal",
      designation: "Full Stack Developer and Generative AI Developer",
      src: profile,
      linkedin:'www.linkedin.com/in/shreesh-sanyal',
      email:'shreesh.23bce7066@vitapstudent.ac.in',
    },
  ];

  return (
    <div>
      <FloatingDockDemo/>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
