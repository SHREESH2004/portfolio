import React from 'react';
import Image from 'next/image';  // Import Image from next/image

export interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className?: string;
  onClick?: () => void;
  button?: React.ReactNode;  // Add button as an optional prop
}

const BentoGridItem: React.FC<BentoGridItemProps> = ({
  title,
  description,
  icon,
  image,
  className,
  onClick,
  button,  // Receive button as a prop
}) => {
  return (
    <div className={`bento-grid-item ${className}`} onClick={onClick}>
      <div className="icon">{icon}</div>

      {/* Replace the <img> tag with <Image /> */}
      <div className="image">
        <Image 
          src={image} 
          alt={title} 
          width={500}  // You can set the desired width for your image
          height={300} // You can set the desired height for your image
          layout="responsive" // Ensure the image is responsive
        />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
      {button}  {/* Render the button if passed */}
    </div>
  );
};

export default BentoGridItem;
