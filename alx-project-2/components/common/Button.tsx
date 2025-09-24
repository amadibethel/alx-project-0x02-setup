["import { type ButtonProps }"]


// components/common/Button.tsx
import React from "react";
import clsx from "clsx";
import { type ButtonProps } from "@/interfaces";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors",
        sizeClasses[size],
        shape,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;