import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface AchievementBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
  unlocked?: boolean;
  date?: string;
  gradient?: string;
}

export function AchievementBadge({
  icon: Icon,
  title,
  description,
  unlocked = false,
  date,
  gradient = "gradient-blue-purple",
}: AchievementBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: unlocked ? 1.05 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className={`relative overflow-hidden border-2 transition-all duration-300 ${
          unlocked
            ? "border-primary-blue bg-bg-surface hover:shadow-lg hover:shadow-primary-blue/20"
            : "border-border-primary bg-bg-surface/50 opacity-50 grayscale"
        }`}
      >
        {unlocked && (
          <>
            <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 opacity-20">
              <div className={`w-full h-full rounded-full ${gradient}`} />
            </div>
            <div className="absolute top-2 right-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-2 h-2 bg-status-success rounded-full pulse-glow"
              />
            </div>
          </>
        )}

        <div className="p-4 relative">
          <div className="flex items-start gap-3">
            <div
              className={`p-3 rounded-xl ${
                unlocked
                  ? `${gradient} shadow-lg`
                  : "bg-bg-elevated"
              }`}
            >
              <Icon className={`w-6 h-6 ${unlocked ? "text-white" : "text-text-muted"}`} />
            </div>

            <div className="flex-1">
              <h4 className={`font-semibold mb-1 ${unlocked ? "text-white" : "text-text-muted"}`}>
                {title}
              </h4>
              <p className="text-sm text-text-secondary mb-2">{description}</p>
              {unlocked && date && (
                <p className="text-xs text-text-muted">Desbloqueado em {date}</p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
