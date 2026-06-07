import { motion } from "motion/react";
import { Package, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { GradientButton } from "./GradientButton";
import { ProgressBar } from "./ProgressBar";

interface FoodBag3DProps {
  percentage: number;
  daysRemaining: number;
  brand: string;
  flavor: string;
  weight: string;
}

export function FoodBag3D({
  percentage,
  daysRemaining,
  brand,
  flavor,
  weight,
}: FoodBag3DProps) {
  const isLow = percentage < 30;
  const isMedium = percentage >= 30 && percentage < 70;
  const isFull = percentage >= 70;

  return (
    <Card className="relative overflow-hidden bg-bg-surface border-border-primary p-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className={`w-full h-full ${isLow ? "bg-accent-red" : isMedium ? "bg-accent-orange" : "bg-primary-green"}`} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{brand}</h3>
            <p className="text-text-secondary">{flavor} - {weight}</p>
          </div>
          <div className={`p-3 rounded-xl ${isLow ? "bg-accent-red/20" : isMedium ? "bg-accent-orange/20" : "bg-primary-green/20"}`}>
            <Package className={`w-6 h-6 ${isLow ? "text-accent-red" : isMedium ? "text-accent-orange" : "text-primary-green"}`} />
          </div>
        </div>

        {/* 3D Food Bag Visualization */}
        <div className="relative mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-sm mx-auto"
          >
            {/* SVG Food Bag */}
            <svg
              viewBox="0 0 300 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <defs>
                {/* Gradients for 3D effect */}
                <linearGradient id="bagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#1E40AF" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>

                <linearGradient id="foodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#C2410C" />
                </linearGradient>

                {/* Clip path for food level */}
                <clipPath id="foodLevel">
                  <rect
                    x="50"
                    y={400 - (percentage / 100) * 320}
                    width="200"
                    height={(percentage / 100) * 320}
                  />
                </clipPath>
              </defs>

              {/* Bag Body */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                d="M 70 50 L 50 380 L 250 380 L 230 50 Z"
                fill="url(#bagGradient)"
                stroke="#1E40AF"
                strokeWidth="2"
              />

              {/* Bag Top Fold */}
              <path
                d="M 70 50 Q 150 30 230 50"
                fill="#1E3A8A"
                stroke="#1E40AF"
                strokeWidth="2"
              />

              {/* Bag Bottom Shadow */}
              <ellipse
                cx="150"
                cy="380"
                rx="100"
                ry="15"
                fill="#0F172A"
                opacity="0.5"
              />

              {/* Food Inside (animated fill) */}
              <motion.g clipPath="url(#foodLevel)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  d="M 55 385 L 245 385 L 235 60 L 65 60 Z"
                  fill="url(#foodGradient)"
                />

                {/* Food particles texture */}
                {[...Array(20)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={70 + Math.random() * 160}
                    cy={400 - (percentage / 100) * 320 + Math.random() * (percentage / 100) * 320}
                    r={2 + Math.random() * 3}
                    fill="#EA580C"
                    opacity={0.6}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  />
                ))}
              </motion.g>

              {/* Bag Highlight */}
              <path
                d="M 80 60 Q 85 100 90 180"
                stroke="white"
                strokeWidth="3"
                opacity="0.3"
                strokeLinecap="round"
              />

              {/* Label on bag */}
              <rect x="90" y="150" width="120" height="80" rx="8" fill="white" opacity="0.9" />
              <text x="150" y="180" textAnchor="middle" fontSize="16" fill="#0F172A" fontWeight="bold">
                {brand.substring(0, 10)}
              </text>
              <text x="150" y="200" textAnchor="middle" fontSize="12" fill="#64748B">
                {flavor.substring(0, 12)}
              </text>
              <text x="150" y="220" textAnchor="middle" fontSize="14" fill="#2563EB" fontWeight="bold">
                {weight}
              </text>
            </svg>

            {/* Floating Percentage Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full gradient-blue-purple flex items-center justify-center shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{percentage}%</div>
                <div className="text-xs text-white/80">restante</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Status Indicator */}
        <div className="mb-6">
          <div className={`flex items-center gap-2 p-4 rounded-xl ${
            isLow ? "bg-accent-red/10 border-2 border-accent-red" :
            isMedium ? "bg-accent-orange/10 border-2 border-accent-orange" :
            "bg-primary-green/10 border-2 border-primary-green"
          }`}>
            {isLow ? (
              <>
                <AlertCircle className="w-5 h-5 text-accent-red" />
                <div className="flex-1">
                  <p className="font-semibold text-white">Nível Baixo!</p>
                  <p className="text-sm text-text-secondary">Restam apenas {daysRemaining} dias</p>
                </div>
              </>
            ) : isMedium ? (
              <>
                <Clock className="w-5 h-5 text-accent-orange" />
                <div className="flex-1">
                  <p className="font-semibold text-white">Atenção</p>
                  <p className="text-sm text-text-secondary">Restam {daysRemaining} dias</p>
                </div>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5 text-primary-green" />
                <div className="flex-1">
                  <p className="font-semibold text-white">Estoque OK</p>
                  <p className="text-sm text-text-secondary">Restam {daysRemaining} dias</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <ProgressBar
            value={percentage}
            label="Nível de Ração"
            color={isLow ? "gradient" : isMedium ? "orange" : "green"}
            height="lg"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GradientButton
            gradient={isLow ? "warm" : "blue-purple"}
            fullWidth
          >
            {isLow ? "Comprar Agora" : "Reordenar"}
          </GradientButton>

          <GradientButton
            variant="outline"
            fullWidth
          >
            Assinar Mensalmente
          </GradientButton>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <button className="text-sm text-primary-blue hover:text-primary-blue-light transition-colors">
            Agendar Entrega
          </button>
          <button className="text-sm text-primary-blue hover:text-primary-blue-light transition-colors">
            Alterar Sabor
          </button>
        </div>
      </div>
    </Card>
  );
}
