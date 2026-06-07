import { motion } from "motion/react";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: string;
  height?: "sm" | "md" | "lg";
  animated?: boolean;
}

const heightConfig = {
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

const colorConfig: Record<string, string> = {
  blue: "bg-primary-blue",
  purple: "bg-primary-purple",
  green: "bg-primary-green",
  orange: "bg-accent-orange",
  pink: "bg-accent-pink",
  gradient: "gradient-blue-purple",
};

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  color = "blue",
  height = "md",
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const bgColor = colorConfig[color] || colorConfig.blue;

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-text-secondary">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-semibold text-white">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div className={`w-full bg-bg-elevated rounded-full overflow-hidden ${heightConfig[height]}`}>
        {animated ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${bgColor} rounded-full`}
          />
        ) : (
          <div
            style={{ width: `${percentage}%` }}
            className={`h-full ${bgColor} rounded-full`}
          />
        )}
      </div>
    </div>
  );
}
