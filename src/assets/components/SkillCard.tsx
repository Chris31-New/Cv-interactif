import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  level: number;
  category: string;
  color: string;
}

const labels = ["", "Notions", "Intermédiaire", "Confirmé", "Avancé", "Expert"];

export default function SkillCard({
  name,
  icon: Icon,
  level,
  category,
  color,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/20"
    >
      {/* Halo dynamique */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-30"
        style={{ background: color }}
      />

      {/* Reflet */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icône + catégorie */}
        <div className="mb-6 flex items-center justify-between">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-4xl shadow-lg transition-all duration-500"
            style={{
              color,
              boxShadow: `0 0 30px ${color}30`,
            }}
          >
            <Icon />
          </motion.div>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
            {category}
          </span>
        </div>

        {/* Nom */}
        <h3 className="text-xl font-semibold text-white">{name}</h3>

        {/* Niveau */}
        <div className="mt-5 mb-3 flex items-center justify-between">
          <span className="text-sm text-white/40">Niveau</span>

          <span
            className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider"
            style={{
              color,
              backgroundColor: `${color}20`,
              border: `1px solid ${color}40`,
            }}
          >
            {labels[level]}
          </span>
        </div>

        {/* Segments lumineux */}
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((segment) => (
            <motion.div
              key={segment}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: segment * 0.07 }}
              className="h-[6px] flex-1 origin-left rounded-full"
              style={{
                background:
                  segment <= level
                    ? `linear-gradient(90deg, ${color}, ${color}AA)`
                    : "rgba(255,255,255,0.08)",
                boxShadow:
                  segment <= level
                    ? `0 0 12px ${color}`
                    : "none",
              }}
            />
          ))}
        </div>

        {/* Ligne décorative */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
          className="mt-6 h-px rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}