["import { type CardProps }"]

// components/common/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;