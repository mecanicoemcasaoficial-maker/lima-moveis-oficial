import { motion } from "motion/react";
import { Flame, Calendar, Trophy, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

interface StreakDay {
  date: string;
  completed: boolean;
  isToday: boolean;
}

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
  streakType: string;
  lastDays: StreakDay[];
}

export function StreakCounter({
  currentStreak,
  longestStreak,
  streakType,
  lastDays,
}: StreakCounterProps) {
  const streakColor =
    currentStreak >= 30
      ? "text-tier-gold"
      : currentStreak >= 14
      ? "text-accent-orange"
      : "text-accent-red";

  const streakBgColor =
    currentStreak >= 30
      ? "bg-tier-gold/10"
      : currentStreak >= 14
      ? "bg-accent-orange/10"
      : "bg-accent-red/10";

  return (
    <div className="space-y-6">
      {/* Main Streak Card */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-accent-orange to-accent-red border-0 p-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-white/80 text-sm mb-2">Sequência Atual</p>
              <h2 className="text-6xl font-bold text-white mb-2">{currentStreak}</h2>
              <p className="text-white/60">{streakType}</p>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Flame className="w-24 h-24 text-white" fill="white" />
            </motion.div>
          </div>

          {/* Progress Message */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
            <TrendingUp className="w-6 h-6 text-white" />
            <div className="flex-1">
              <p className="text-white font-semibold">
                {currentStreak >= longestStreak
                  ? "🎉 Novo recorde pessoal!"
                  : `Continue! Faltam ${longestStreak - currentStreak} dias para seu recorde`}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Calendar View */}
      <Card className="p-6 bg-bg-surface border-border-primary">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-blue" />
            Últimos 14 Dias
          </h3>
          <div className="text-sm text-text-secondary">
            {lastDays.filter((d) => d.completed).length}/{lastDays.length} dias
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {lastDays.map((day, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="relative"
            >
              <div
                className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200 ${
                  day.completed
                    ? "bg-gradient-to-br from-accent-orange to-accent-red shadow-lg"
                    : "bg-bg-elevated border-2 border-border-primary"
                } ${day.isToday ? "ring-2 ring-primary-blue ring-offset-2 ring-offset-bg-surface" : ""}`}
              >
                {day.completed && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
                  >
                    <Flame className="w-4 h-4 text-white mb-1" fill="white" />
                  </motion.div>
                )}
                <span
                  className={`text-xs font-semibold ${
                    day.completed ? "text-white" : "text-text-muted"
                  }`}
                >
                  {new Date(day.date).getDate()}
                </span>
                {day.isToday && (
                  <span className="absolute -bottom-5 text-xs text-primary-blue font-semibold">
                    Hoje
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 bg-bg-surface border-border-primary">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-tier-gold/10 flex items-center justify-center">
              <Trophy className="w-7 h-7 text-tier-gold" />
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Recorde Pessoal</p>
              <p className="text-3xl font-bold text-white">{longestStreak}</p>
              <p className="text-sm text-text-muted">dias consecutivos</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-bg-surface border-border-primary">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center">
              <Calendar className="w-7 h-7 text-primary-blue" />
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Taxa de Sucesso</p>
              <p className="text-3xl font-bold text-white">
                {Math.round((lastDays.filter((d) => d.completed).length / lastDays.length) * 100)}%
              </p>
              <p className="text-sm text-text-muted">últimos 14 dias</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Milestones */}
      <Card className="p-6 bg-bg-surface border-border-primary">
        <h3 className="text-lg font-semibold text-white mb-4">Próximas Conquistas</h3>

        <div className="space-y-3">
          {[
            { days: 7, reward: "Badge Bronze", unlocked: currentStreak >= 7 },
            { days: 14, reward: "Badge Prata", unlocked: currentStreak >= 14 },
            { days: 30, reward: "Badge Ouro + 500 pontos", unlocked: currentStreak >= 30 },
            { days: 60, reward: "Badge Platina + 1000 pontos", unlocked: currentStreak >= 60 },
            { days: 100, reward: "Badge Diamante + 2000 pontos", unlocked: currentStreak >= 100 },
          ].map((milestone) => (
            <div
              key={milestone.days}
              className={`flex items-center justify-between p-3 rounded-xl ${
                milestone.unlocked
                  ? "bg-primary-green/10 border-2 border-primary-green"
                  : "bg-bg-elevated"
              }`}
            >
              <div className="flex items-center gap-3">
                {milestone.unlocked ? (
                  <div className="w-8 h-8 rounded-full bg-primary-green flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <Flame className="w-5 h-5 text-white" fill="white" />
                    </motion.div>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-bg-elevated border-2 border-border-primary flex items-center justify-center">
                    <span className="text-text-muted text-xs font-bold">{milestone.days}</span>
                  </div>
                )}
                <div>
                  <p
                    className={`font-semibold ${
                      milestone.unlocked ? "text-white" : "text-text-secondary"
                    }`}
                  >
                    {milestone.days} dias consecutivos
                  </p>
                  <p className="text-sm text-text-muted">{milestone.reward}</p>
                </div>
              </div>
              {milestone.unlocked && (
                <span className="text-primary-green text-sm font-semibold">Completo!</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
