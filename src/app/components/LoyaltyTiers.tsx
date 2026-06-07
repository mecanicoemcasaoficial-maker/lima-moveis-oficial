import { motion } from "motion/react";
import { Check, Lock, Gift, Percent, Star, Crown, Award, Gem } from "lucide-react";
import { Card } from "./ui/card";
import { ProgressBar } from "./ProgressBar";
import { LevelBadge } from "./LevelBadge";

interface TierBenefit {
  id: string;
  label: string;
  unlocked: boolean;
}

interface Tier {
  id: string;
  name: string;
  color: string;
  icon: typeof Star;
  pointsRequired: number;
  benefits: TierBenefit[];
}

interface LoyaltyTiersProps {
  currentPoints: number;
  currentTier: "bronze" | "silver" | "gold" | "diamond";
}

const tiers: Tier[] = [
  {
    id: "bronze",
    name: "Bronze",
    color: "#CD7F32",
    icon: Star,
    pointsRequired: 0,
    benefits: [
      { id: "b1", label: "5% de cashback", unlocked: true },
      { id: "b2", label: "Frete grátis acima de R$ 100", unlocked: true },
      { id: "b3", label: "Acesso ao app mobile", unlocked: true },
    ],
  },
  {
    id: "silver",
    name: "Prata",
    color: "#C0C0C0",
    icon: Award,
    pointsRequired: 500,
    benefits: [
      { id: "s1", label: "10% de cashback", unlocked: true },
      { id: "s2", label: "Frete grátis em todas as compras", unlocked: true },
      { id: "s3", label: "Prioridade no agendamento", unlocked: true },
      { id: "s4", label: "1 brinde mensal", unlocked: true },
    ],
  },
  {
    id: "gold",
    name: "Ouro",
    color: "#FFD700",
    icon: Crown,
    pointsRequired: 1500,
    benefits: [
      { id: "g1", label: "15% de cashback", unlocked: false },
      { id: "g2", label: "Frete grátis + entrega expressa", unlocked: false },
      { id: "g3", label: "Consulta veterinária grátis/mês", unlocked: false },
      { id: "g4", label: "2 brindes mensais", unlocked: false },
      { id: "g5", label: "Desconto em parceiros", unlocked: false },
    ],
  },
  {
    id: "diamond",
    name: "Diamante",
    color: "#B9F2FF",
    icon: Gem,
    pointsRequired: 3000,
    benefits: [
      { id: "d1", label: "20% de cashback", unlocked: false },
      { id: "d2", label: "Entrega premium gratuita", unlocked: false },
      { id: "d3", label: "Plano de saúde pet incluído", unlocked: false },
      { id: "d4", label: "Personal trainer pet", unlocked: false },
      { id: "d5", label: "Atendimento VIP 24/7", unlocked: false },
      { id: "d6", label: "Kit premium trimestral", unlocked: false },
    ],
  },
];

export function LoyaltyTiers({ currentPoints, currentTier }: LoyaltyTiersProps) {
  const currentTierIndex = tiers.findIndex((t) => t.id === currentTier);
  const nextTier = tiers[currentTierIndex + 1];
  const progressToNextTier = nextTier
    ? ((currentPoints - tiers[currentTierIndex].pointsRequired) /
        (nextTier.pointsRequired - tiers[currentTierIndex].pointsRequired)) *
      100
    : 100;

  return (
    <div className="space-y-6">
      {/* Current Status Card */}
      <Card className="p-6 bg-gradient-blue-purple border-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/80 text-sm mb-1">Seu Nível Atual</p>
            <h2 className="text-3xl font-bold text-white">
              {tiers[currentTierIndex].name}
            </h2>
          </div>
          <LevelBadge tier={currentTier} size="lg" showLabel={false} animated={true} />
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm">Pontos Acumulados</span>
            <span className="text-white font-bold text-lg">{currentPoints.toLocaleString()} pts</span>
          </div>
          {nextTier && (
            <>
              <ProgressBar
                value={progressToNextTier}
                showPercentage={false}
                color="gradient"
                height="lg"
              />
              <p className="text-white/60 text-sm mt-2">
                Faltam {(nextTier.pointsRequired - currentPoints).toLocaleString()} pontos para{" "}
                <span className="font-semibold" style={{ color: nextTier.color }}>
                  {nextTier.name}
                </span>
              </p>
            </>
          )}
        </div>
      </Card>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiers.map((tier, index) => {
          const isUnlocked = index <= currentTierIndex;
          const isCurrent = tier.id === currentTier;
          const TierIcon = tier.icon;

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden transition-all duration-300 ${
                  isCurrent
                    ? "border-2 shadow-lg"
                    : isUnlocked
                    ? "border-border-primary bg-bg-surface hover:bg-bg-elevated"
                    : "border-border-primary bg-bg-surface/50 opacity-60"
                }`}
                style={{
                  borderColor: isCurrent ? tier.color : undefined,
                  boxShadow: isCurrent ? `0 0 30px ${tier.color}40` : undefined,
                }}
              >
                {/* Background Effect */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -mr-8 -mt-8"
                  style={{ backgroundColor: tier.color }}
                />

                <div className="p-6 relative z-10">
                  {/* Tier Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: isUnlocked ? `${tier.color}20` : "#334155",
                        }}
                      >
                        <TierIcon
                          className="w-6 h-6"
                          style={{
                            color: isUnlocked ? tier.color : "#64748B",
                          }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold"
                          style={{
                            color: isUnlocked ? tier.color : "#64748B",
                          }}
                        >
                          {tier.name}
                        </h3>
                        <p className="text-sm text-text-muted">
                          {tier.pointsRequired.toLocaleString()} pontos
                        </p>
                      </div>
                    </div>

                    {isCurrent && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.3 }}
                      >
                        <div className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">
                          Atual
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefit.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + benefitIndex * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        {isUnlocked ? (
                          <div className="w-5 h-5 rounded-full bg-primary-green/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-primary-green" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-bg-elevated flex items-center justify-center flex-shrink-0">
                            <Lock className="w-3 h-3 text-text-muted" />
                          </div>
                        )}
                        <span
                          className={`text-sm ${
                            isUnlocked ? "text-text-secondary" : "text-text-muted"
                          }`}
                        >
                          {benefit.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* How to Earn Points */}
      <Card className="p-6 bg-bg-surface border-border-primary">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-accent-yellow" />
          Como Ganhar Pontos
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-elevated">
            <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-primary-blue" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Compras</p>
              <p className="text-sm text-text-secondary">
                R$ 1 gasto = 1 ponto
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-elevated">
            <div className="w-10 h-10 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0">
              <Percent className="w-5 h-5 text-primary-purple" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Assinaturas</p>
              <p className="text-sm text-text-secondary">
                2x pontos por compra recorrente
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-bg-elevated">
            <div className="w-10 h-10 rounded-lg bg-primary-green/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-primary-green" />
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Conquistas</p>
              <p className="text-sm text-text-secondary">
                Bônus especiais ao completar
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
