import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
