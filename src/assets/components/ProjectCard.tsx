import { useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa6"

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: Technology[];
  gradient: string;
  onOpen: () => void;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  technologies,
  gradient,
  onOpen,
}: Props) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="relative group rounded-[34px]"
    >
      {/* Halo extérieur */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.25 }}
        className="absolute -inset-3 rounded-[36px] blur-3xl -z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(168,85,247,.35), rgba(59,130,246,.25), transparent 70%)",
        }}
      />

      {/* Carte */}
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(10,12,24,.75)] backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,.6)]">

        {/* Glow souris */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mouse.x}px ${mouse.y}px,
              rgba(139,92,246,.18),
              rgba(56,189,248,.08),
              transparent 60%)`,
          }}
        />

        {/* Bordure animée */}
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

        <div className="absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/80 to-transparent" />

        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7 }}
            className="h-full w-full object-cover"
          />

          {/* Dégradé */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-90`}
          />

          {/* Reflet */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

          {/* Infos */}
          <div className="absolute bottom-5 left-6 right-6">
            <p className="uppercase tracking-[0.3em] text-xs text-indigo-300 mb-2">
              {subtitle}
            </p>

            <h3 className="text-3xl font-black text-white drop-shadow-[0_0_20px_rgba(139,92,246,.35)]">
              {title}
            </h3>
          </div>
        </div>

        {/* CONTENU */}
        <div className="relative z-20 p-6 space-y-6">
          <p className="text-slate-300 leading-relaxed">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-2 hover:border-indigo-400/40 transition-all"
                >
                  <Icon size={16} color={tech.color} />

                  <span className="text-xs text-slate-200">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Boutons */}
          <div className="grid grid-cols-[1fr_auto] gap-3 pt-2">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onOpen}
              className="glow rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 py-3 font-semibold text-white flex items-center justify-center gap-2 hover:brightness-110 transition"
            >
              Découvrir le projet
              <ArrowUpRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}