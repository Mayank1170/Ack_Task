import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Users appreciate X-ACK's intuitive interface",
    description: "An intuitive interface means that users can quickly understand how to use the platform without the need for extensive training or guidance.",
    imageUrl: "/path/to/image1.jpg",
    imagePosition: "bottom",
  },
  {
    title: "Robust Learning Tools",
    description: "Something about our learning tools and features goes here",
    imageUrl: "/path/to/image2.jpg",
    imagePosition: "bottom",
  },
  {
    title: "Flexible Difficulty",
    description: "We have sophisticatedly designed machines for all beginner to advanced level players",
    imageUrl: "/path/to/image3.jpg",
    imagePosition: "bottom",
  },
  {
    title: "Community",
    description: "We fostered a nurturing community ...some more 1 line about community",
    imageUrl: "/path/to/image4.jpg",
    imagePosition: "top",
  },
  {
    title: "Gamified UI elements",
    description: "Info about earning badges and respect from players and machines. Gamified features",
    imageUrl: "/path/to/image5.jpg",
    imagePosition: "bottom",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="p-4 grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.slice(0, 2).map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            imagePosition={feature.imagePosition as 'top' | 'bottom'}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.slice(2).map((feature, index) => (
          <FeatureCard
            key={index + 2}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            imagePosition={feature.imagePosition as 'top' | 'bottom'}
            customWidthClass="md:col-span-1"
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureGrid;
