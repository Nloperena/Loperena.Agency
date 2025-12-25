"use client";

import React from "react";
import { cn } from "@/utils/cn"; // I'll create this if it doesn't exist, or use a simple join

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "lg", 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "touch-target inline-flex items-center justify-center transition-all duration-300 font-bold active:scale-95";
  
  const variants = {
    primary: "bg-sage text-obsidian hover:bg-sand",
    secondary: "bg-sand text-obsidian hover:bg-sage",
    outline: "border-2 border-sage text-sage hover:bg-sage hover:text-obsidian",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    md: "h-[60px] px-8 text-lg",
    lg: "h-[72px] px-10 text-xl",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};


