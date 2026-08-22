import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

const categories = [
  "Toutes",
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "DevOps",
  "Tooling",
  "Tools",
  "Testing",
];

export default function Skills() {
  const [active, setActive] = useState("Toutes");

  const filtered =
    active === "Toutes"
      ? skills
      : skills.filter((skill) => skill.category === active);

  return (
    <section className="relative px-6 py-32 overflow-hidden">
      {/* Halo géant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.45em] text-cyan-400">
            Expertise
          </p>

          <h2 className="text-5xl font-bold text-white md:text-6xl">
            Mon <span className="gradient-text">Stack Technique</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50">
            Technologies utilisées sur mes projets React, NestJS, Prisma,
            OpenAI et architecture full-stack moderne.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="mb-14 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition-all duration-300
              ${
                active === cat
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,.2)]"
                  : "border-white/10 bg-white/5 text-white/50 hover:border-cyan-400/30 hover:text-cyan-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 25, scale: .95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: .9 }}
                transition={{ delay: index * 0.03 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}