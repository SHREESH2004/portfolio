import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        My Approach to Problem Solving
      </h2>
      <HoverEffect items={planningCards} />
    </div>
  );
}

export const planningCards = [
  {
    title: "Requirement Gathering",
    description:
      "Identify stakeholders, define user needs, and document high-level system requirements to ensure alignment from the start.",
    link: "#",
  },
  {
    title: "Planning & Roadmap",
    description:
      "Break down the project into phases, set milestones, allocate resources, and estimate timelines for delivery.",
    link: "#",
  },
  {
    title: "System Design",
    description:
      "Architect the system structure, define data flow, design APIs, and ensure scalability and security are considered.",
    link: "#",
  },
  {
    title: "Development",
    description:
      "Write and test code, implement features according to specs, follow coding standards, and ensure version control.",
    link: "#",
  },
  {
    title: "Testing & QA",
    description:
      "Conduct unit, integration, and user acceptance testing to validate functionality, performance, and usability.",
    link: "#",
  },
  {
    title: "Deployment & Monitoring",
    description:
      "Deploy to production, monitor performance, log errors, and ensure high availability with observability tools.",
    link: "#",
  },
];
