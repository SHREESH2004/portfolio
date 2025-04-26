import React, { ReactNode } from 'react';
import { cn } from "@/lib/utils"; // Utility function for conditional classes

interface BentoGridItemProps {
  title?: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  image?: string;
  className?: string;
  children?: ReactNode;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  description,
  header,
  icon,
  image,
  className,
  children,  // Destructuring children here
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none", 
        className
      )}
    >
      {/* Conditionally render the header only if it exists */}
      {header && (
        <div className="mb-4">  {/* Only adds space if header exists */}
          {header}
        </div>
      )}

      {/* Image Section */}
      {image && (
        <div className="relative w-full h-48 bg-gray-200 dark:bg-neutral-700 overflow-hidden rounded-lg mb-4">
          <img src={image} alt={title as string} className="object-cover w-full h-full" />
        </div>
      )}

      {/* Content Section */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon && <div className="mb-2">{icon}</div>}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>

      {/* Render children here if any */}
      {children}
    </div>
  );
};
