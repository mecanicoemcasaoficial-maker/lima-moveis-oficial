import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  gradient?: "blue-purple" | "purple-pink" | "green-blue" | "warm";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  fullWidth?: boolean;
}

const gradientConfig = {
  "blue-purple": "gradient-blue-purple",
  "purple-pink": "gradient-purple-pink",
  "green-blue": "gradient-green-blue",
  warm: "gradient-warm",
};

const sizeConfig = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function GradientButton({
  children,
  icon: Icon,
  iconPosition = "left",
  gradient = "blue-purple",
  size = "md",
  variant = "solid",
  fullWidth = false,
  className = "",
  ...props
}: GradientButtonProps) {
  const gradientClass = gradientConfig[gradient];
  const sizeClass = sizeConfig[size];

  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </>
  );

  if (variant === "outline") {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl
          border-2 border-primary-blue text-primary-blue bg-transparent
          hover:bg-primary-blue/10 transition-all duration-200
          ${sizeClass}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl
        text-white ${gradientClass} shadow-lg hover:shadow-xl
        transition-all duration-200
        ${sizeClass}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}
