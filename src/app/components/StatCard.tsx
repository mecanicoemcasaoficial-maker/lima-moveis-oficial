import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
  gradient?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  iconColor = "text-primary-blue",
  gradient = "gradient-blue-purple",
}: StatCardProps) {
  const changeColors = {
    positive: "text-status-success",
    negative: "text-status-error",
    neutral: "text-text-muted",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative overflow-hidden border-border-primary bg-bg-surface hover:bg-bg-elevated transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/10">
        <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-10">
          <div className={`w-full h-full rounded-full ${gradient}`} />
        </div>

        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-bg-elevated ${iconColor}`}>
              <Icon className="w-6 h-6" />
            </div>
            {change && (
              <span className={`text-sm font-medium ${changeColors[changeType]}`}>
                {change}
              </span>
            )}
          </div>

          <div>
            <p className="text-text-secondary text-sm mb-1">{title}</p>
            <p className="text-3xl font-semibold text-white">{value}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
