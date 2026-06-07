import { motion } from "motion/react";
import { Heart, Activity, Zap, Calendar, Scale, Ruler } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ProgressBar } from "./ProgressBar";

interface PetProfileProps {
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  imageUrl?: string;
  happiness: number;
  health: number;
  energy: number;
  mood: "happy" | "calm" | "playful" | "sleepy";
}

const moodConfig = {
  happy: { emoji: "😊", color: "text-accent-yellow", bg: "bg-accent-yellow/10" },
  calm: { emoji: "😌", color: "text-primary-blue", bg: "bg-primary-blue/10" },
  playful: { emoji: "🤪", color: "text-accent-pink", bg: "bg-accent-pink/10" },
  sleepy: { emoji: "😴", color: "text-primary-purple", bg: "bg-primary-purple/10" },
};

export function PetProfile({
  name,
  species,
  breed,
  age,
  weight,
  imageUrl,
  happiness,
  health,
  energy,
  mood,
}: PetProfileProps) {
  const moodStyle = moodConfig[mood];

  return (
    <Card className="relative overflow-hidden bg-bg-surface border-border-primary">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 p-6">
        {/* Pet Header */}
        <div className="flex items-start gap-6 mb-8">
          {/* Pet Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-2xl bg-gradient-blue-purple p-1">
              <div className="w-full h-full rounded-xl bg-bg-elevated flex items-center justify-center overflow-hidden">
                {imageUrl ? (
                  <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl">{species === "dog" ? "🐕" : "🐱"}</span>
                )}
              </div>
            </div>

            {/* Mood Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full ${moodStyle.bg} border-4 border-bg-surface flex items-center justify-center`}
            >
              <span className="text-2xl">{moodStyle.emoji}</span>
            </motion.div>
          </motion.div>

          {/* Pet Info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
              <p className="text-text-secondary mb-3">{breed}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={`${moodStyle.bg} ${moodStyle.color} border-0`}>
                  Humor: {mood}
                </Badge>
                <Badge variant="outline" className="border-border-primary">
                  <Calendar className="w-3 h-3 mr-1" />
                  {age} {age === 1 ? "ano" : "anos"}
                </Badge>
                <Badge variant="outline" className="border-border-primary">
                  <Scale className="w-3 h-3 mr-1" />
                  {weight}kg
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bars */}
        <div className="space-y-6">
          {/* Happiness Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent-pink/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-pink" fill="currentColor" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Felicidade</span>
                  <span className="text-sm font-bold text-accent-pink">{happiness}%</span>
                </div>
                <div className="relative h-4 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${happiness}%` }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent-pink to-accent-pink-light rounded-full relative"
                  >
                    <div className="absolute inset-0 shimmer" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Health Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-green/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary-green" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Saúde</span>
                  <span className="text-sm font-bold text-primary-green">{health}%</span>
                </div>
                <div className="relative h-4 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${health}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary-green to-primary-green-light rounded-full relative"
                  >
                    <div className="absolute inset-0 shimmer" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Energy Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent-yellow/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-yellow" fill="currentColor" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white">Energia</span>
                  <span className="text-sm font-bold text-accent-yellow">{energy}%</span>
                </div>
                <div className="relative h-4 bg-bg-elevated rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${energy}%` }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent-yellow to-accent-orange rounded-full relative"
                  >
                    <div className="absolute inset-0 shimmer" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-blue-purple"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm mb-1">Score Geral</p>
              <p className="text-3xl font-bold text-white">
                {Math.round((happiness + health + energy) / 3)}%
              </p>
            </div>
            <div className="text-6xl">
              {Math.round((happiness + health + energy) / 3) >= 80 ? "🏆" : "⭐"}
            </div>
          </div>
          <p className="text-white/60 text-sm mt-2">
            {Math.round((happiness + health + energy) / 3) >= 80
              ? "Seu pet está incrível! Continue assim!"
              : "Vamos melhorar juntos!"}
          </p>
        </motion.div>
      </div>
    </Card>
  );
}
