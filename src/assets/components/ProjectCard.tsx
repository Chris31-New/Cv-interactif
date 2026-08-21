import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";

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
  onOpen,
}: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative group">
      {/* Halo d'ambiance violet/magenta très néon derrière la carte */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-[32px] transition-opacity duration-500 blur-2xl -z-10"
        style={{
          opacity: isHovered ? 0.9 : 0.2,
          background: "radial-gradient(circle at 50% 100%, rgba(192, 38, 211, 0.4), rgba(79, 70, 229, 0.3), transparent 70%)",
        }}
      />

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="relative overflow-hidden rounded-[28px] border border-fuchsia-500/20 bg-gradient-to-b from-[#180e29] via-[#0d0718] to-[#05020a] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer"
      >
        {/* Trait lumineux néon sur le haut de la carte (Cyan / Magenta) */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50" />

        {/* Halo suiveur de souris rose/cyan */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 rounded-[28px]"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 70, 239, 0.15), rgba(6, 182, 212, 0.1), transparent 50%)`,
          }}
        />

        {/* Bordure réactive ultra lumineuse */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20 rounded-[28px]"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.8), rgba(6, 182, 212, 0.6), transparent 50%)`,
            maskImage: "linear-gradient(#black, #black) content-box, linear-gradient(#black, #black)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1.5px",
          }}
        />

        {/* Contenu principal */}
        <div className="relative z-30 p-6 space-y-5">
          {/* Image intégrée dans un cadre néon sombre */}
          <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-3 left-4">
              <h3 className="text-2xl font-black tracking-wider text-white drop-shadow-[0_2px_10px_rgba(217,70,239,0.5)] uppercase">
                {title}
              </h3>
              <p className="text-fuchsia-300/80 text-xs font-semibold tracking-wide uppercase">
                {subtitle}
              </p>
            </div>
          </div>

          <p className="text-slate-300/90 text-sm leading-relaxed font-normal">
            {description}
          </p>

          {/* Badges façon "pill" sombre avec lueur */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-xl bg-[#120921] px-3 py-1.5 border border-fuchsia-500/20 text-xs font-medium text-slate-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                >
                  <Icon color={tech.color} size={15} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>

          {/* Boutons style Cyberpunk */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onOpen}
              className="flex-1 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:from-fuchsia-500 hover:to-indigo-500 text-white font-bold py-3 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(192,38,211,0.4)]"
            >
              Découvrir
              <ArrowUpRight size={18} />
            </button>

            <button className="rounded-xl px-5 border border-fuchsia-500/30 bg-[#120921] hover:bg-fuchsia-950/40 hover:border-fuchsia-400 transition text-sm font-semibold text-slate-300 hover:text-white">
              GitHub
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}