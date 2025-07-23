import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
}) => {
  const sizeClass = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass} ${shape} hover:bg-blue-700 transition`}
    >
      {label}
    </button>
  );
};

export default Button;
