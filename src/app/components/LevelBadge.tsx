import { motion } from "motion/react";
import { Crown, Award, Star, Gem } from "lucide-react";

type TierType = "bronze" | "silver" | "gold" | "diamond";

interface LevelBadgeProps {
  tier: TierType;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  animated?: boolean;
}

const tierConfig = {
  bronze: {
    label: "Bronze",
    color: "text-tier-bronze",
    bgColor: "bg-tier-bronze/10",
    borderColor: "border-tier-bronze",
    icon: Star,
  },
  silver: {
    label: "Prata",
    color: "text-tier-silver",
    bgColor: "bg-tier-silver/10",
    borderColor: "border-tier-silver",
    icon: Award,
  },
  gold: {
    label: "Ouro",
    color: "text-tier-gold",
    bgColor: "bg-tier-gold/10",
    borderColor: "border-tier-gold",
    icon: Crown,
  },
  diamond: {
    label: "Diamante",
    color: "text-tier-diamond",
    bgColor: "bg-tier-diamond/10",
    borderColor: "border-tier-diamond",
    icon: Gem,
  },
};

const sizeConfig = {
  sm: { icon: "w-4 h-4", padding: "p-2", text: "text-xs" },
  md: { icon: "w-6 h-6", padding: "p-3", text: "text-sm" },
  lg: { icon: "w-8 h-8", padding: "p-4", text: "text-base" },
};

export function LevelBadge({
  tier,
  size = "md",
  showLabel = false,
  animated = true,
}: LevelBadgeProps) {
  const config = tierConfig[tier];
  const sizes = sizeConfig[size];
  const Icon = config.icon;

  const badge = (
    <div
      className={`inline-flex items-center gap-2 ${sizes.padding} rounded-xl ${config.bgColor} ${config.borderColor} border-2 ${config.color}`}
    >
      <Icon className={sizes.icon} />
      {showLabel && <span className={`font-semibold ${sizes.text}`}>{config.label}</span>}
    </div>
  );

  if (!animated) {
    return badge;
  }

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
    >
      {badge}
    </motion.div>
  );
}
