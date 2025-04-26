// BentoGridItem.tsx

import React from 'react';

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
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {button}  {/* Render the button if passed */}
    </div>
  );
};

export default BentoGridItem;
