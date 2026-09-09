import { motion } from "framer-motion";
import photo from "../photos/Gemini_Generated_Image_pxj2oxpxj2oxpxj2.jpg";

import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Mouse,
} from "lucide-react";

import {
  SiTypescript,
  SiPrisma,
  SiReact,
  SiNestjs,
  SiJavascript,
  SiNodedotjs,
  SiClaude,
  SiAxios,
} from "react-icons/si";

import { BsOpenai } from "react-icons/bs";

const floatingTech = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", top: "4%", left: "18%", x: "24%", y: "12%" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4", top: "8%", left: "58%", x: "64%", y: "14%" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8", top: "20%", left: "84%", x: "82%", y: "25%" },
  { name: "Claude", icon: SiClaude, color: "#FF8A3D", top: "42%", left: "90%", x: "86%", y: "45%" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", top: "72%", left: "82%", x: "80%", y: "73%" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", top: "92%", left: "58%", x: "63%", y: "88%" },
  { name: "GPT-5.6", icon: BsOpenai, color: "#FFFFFF", top: "92%", left: "25%", x: "35%", y: "88%" },
  { name: "React", icon: SiReact, color: "#61DAFB", top: "72%", left: "-2%", x: "18%", y: "73%" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", top: "42%", left: "-10%", x: "14%", y: "45%" },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20"
    >
      {/* Halo de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[150px]" />
        <div className="absolute bottom-10 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* -------- COLONNE GAUCHE -------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 backdrop-blur-md"
          >
            <Sparkles size={15} />
            Disponible immédiatement • Développeur Full Stack
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Christophe
              <br />
              <span className="gradient-text drop-shadow-[0_0_20px_rgba(99,102,241,.35)]">
                AUTRAN
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Développeur Full Stack React • NestJS • TypeScript
<br />
<br />
Je conçois des applications web robustes orientées métier, de l'interface utilisateur jusqu'à l'API, avec une attention particulière portée à l'expérience utilisateur, à la qualité du code et à l'intelligence artificielle.

              
             

            </motion.p>
          </div>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group glow rounded-2xl bg-indigo-600 px-6 py-4 font-semibold hover:bg-indigo-500 transition-all"
            >
              <span className="flex items-center gap-2">
                Découvrir mes projets
                <ArrowRight className="transition group-hover:translate-x-1" />
              </span>
            </button>

            <button className="glass rounded-2xl px-6 py-4 font-semibold hover:border-indigo-400 transition">
              <span className="flex items-center gap-2">
                <Download size={18} />
                Télécharger mon CV
              </span>
            </button>
          </motion.div>

          {/* Mail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 text-slate-400"
          >
            <Mail className="text-indigo-400" />
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition cursor-pointer"
            >
            <span className="hover:text-white transition cursor-pointer">
              autran.christophe@gmail.com
            </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            <Stat
              number={2}
              suffix="+"
              label="Diplômes RNCP"
              onClick={() => scrollToSection("timeline")}
            />

            <Stat
              number={2}
              suffix="+"
              label="Projets Full Stack"
              onClick={() => scrollToSection("projects")}
            />

            <Stat
              number={15}
              suffix="+"
              label="Technologies"
              onClick={() => scrollToSection("skills")}
            />
          </motion.div>
        </motion.div>

        {/* -------- COLONNE DROITE -------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative flex items-center justify-center w-[560px] h-[560px] mx-auto"
        >
          {/* Halo */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="absolute h-[440px] w-[440px] rounded-full bg-indigo-600 blur-[140px]"
          />

          {/* Cercle lumineux */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="absolute h-[430px] w-[430px] rounded-full border border-indigo-500/20"
          />

          {/* Traits */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {floatingTech.map((tech, index) => (
              <motion.line
                key={tech.name}
                x1="50%"
                y1="50%"
                x2={tech.x}
                y2={tech.y}
                stroke={tech.color}
                strokeWidth="1.2"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.35 }}
                transition={{
                  delay: 0.6 + index * 0.08,
                  duration: 1,
                }}
              />
            ))}
          </svg>

          {/* Avatar */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative z-20 h-80 w-80 rounded-full p-[3px] bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-[0_0_80px_rgba(99,102,241,.45)]"
          >
            <div className="rounded-full h-full w-full overflow-hidden bg-slate-950">
              <img
                src={photo}
                alt="Christophe AUTRAN"
                className="h-full w-full object-cover scale-105"
              />
            </div>
          </motion.div>

          {/* Badges */}
          {floatingTech.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                style={{
                  top: tech.top,
                  left: tech.left,
                }}
                className="glass absolute z-30 flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium whitespace-nowrap border border-white/10 shadow-[0_0_20px_rgba(99,102,241,.12)]"
              >
                <Icon size={18} color={tech.color} />
                <span>{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500"
      >
        <Mouse size={18} />
        <span className="text-xs tracking-[0.3em] mt-2 uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

type StatProps = {
  number: number;
  label: string;
  suffix?: string;
  onClick?: () => void;
};

function Stat({ number, label, suffix = "", onClick }: StatProps) {
  return (
    <motion.button
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass rounded-2xl p-5 text-center cursor-pointer border border-white/5 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,.15)] transition-all"
    >
      <h3 className="text-3xl font-black text-indigo-400">
        {number}
        {suffix}
      </h3>

      <p className="mt-2 text-xs md:text-sm text-slate-400">{label}</p>
    </motion.button>
  );
}