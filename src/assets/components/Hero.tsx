import { motion } from "framer-motion";
import photo from "../photos/Gemini_Generated_Image_pxj2oxpxj2oxpxj2.jpg";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
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

// Coordonnées (x, y) en % pour tracer les lignes depuis le centre (50%, 50%)
const floatingTech = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", top: "8%", left: "0%", x: "8%", y: "11%" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8", top: "10%", left: "78%", x: "85%", y: "13%" },
  { name: "React", icon: SiReact, color: "#61DAFB", top: "70%", left: "-2%", x: "6%", y: "73%" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", top: "72%", left: "82%", x: "88%", y: "75%" },
  { name: "GPT-5.6", icon: BsOpenai, color: "#FFFFFF", top: "90%", left: "23%", x: "30%", y: "93%" },
  { name: "Claude", icon: SiClaude, color: "#FFFFFF", top: "40%", left: "85%", x: "92%", y: "43%" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", top: "90%", left: "65%", x: "72%", y: "93%" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", top: "40%", left: "-5%", x: "3%", y: "43%" },
  { name: "Axios", icon: SiAxios, color: "#5A29E4", top: "5%", left: "40%", x: "46%", y: "9%" },
];

export default function Hero() {
  // Fonction de défilement fluide vers l'ID d'une section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Colonne gauche (Texte) */}
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
            <Sparkles size={16} />
            Disponible • Développeur Full Stack
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black leading-tight"
            >
              Christophe
              <br />
              <span className="gradient-text">AUTRAN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Je conçois des applications modernes avec React, NestJS,
              TypeScript, Prisma et l'intelligence artificielle.
              <br />
              Passionné par l'UX, les API et les projets ambitieux.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => scrollToSection("skills")}
              className="group glow rounded-xl bg-indigo-600 px-6 py-4 font-semibold transition hover:bg-indigo-500"
            >
              <span className="flex items-center gap-2">
                Découvrir mon CV
                <ArrowRight className="transition group-hover:translate-x-1 " />
              </span>
            </button>

            <button className="glass rounded-xl px-6 py-4 font-semibold transition hover:border-indigo-400">
              <span className="flex items-center gap-2">
                <Download size={18} /> Télécharger PDF
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-6 text-slate-400"
          >
            <Mail className="cursor-pointer transition hover:text-indigo-400" />
          </motion.div>

          {/* Stat de compteurs cliquables */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-5 pt-6"
          >
            <Stat 
              number={2} 
              label="Diplômes RNCP" 
              suffix="+" 
              onClick={() => scrollToSection("timeline")} 
            />
            <Stat 
              number={2} 
              label="Projets majeurs" 
              suffix="+" 
              onClick={() => scrollToSection("projects")} 
            />
            <Stat 
              number={15} 
              label="Technologies" 
              suffix="+" 
              onClick={() => scrollToSection("skills")} 
            />
          </motion.div>
        </motion.div>

        {/* Colonne droite (Photo + Badges + Traits) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative flex items-center justify-center w-[520px] h-[520px] mx-auto"
        >
          {/* Halo lumineux */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute w-[420px] h-[420px] rounded-full bg-indigo-600 opacity-20 blur-[120px]"
          />

          {/* SVG des traits de connexion */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {floatingTech.map((tech, index) => (
              <motion.line
                key={`line-${tech.name}`}
                x1="50%"
                y1="50%"
                x2={tech.x}
                y2={tech.y}
                stroke={tech.color}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.35 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              />
            ))}
          </svg>

          {/* Photo centrale */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative z-10 h-80 w-80 rounded-full border border-indigo-500/40 bg-gradient-to-br from-slate-800 to-slate-900 p-3 shadow-[0_0_60px_rgba(99,102,241,.35)]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-center">
              <img
                src={photo}
                alt="Christophe AUTRAN"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Badges Flottants */}
          {floatingTech.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 3 + index,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                style={{
                  top: tech.top,
                  left: tech.left,
                }}
                className="glass absolute z-20 flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-white whitespace-nowrap shadow-lg"
              >
                <Icon size={20} color={tech.color} />
                {tech.name}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
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
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`glass rounded-2xl p-5 text-center transition-all duration-200 ${
        onClick ? "cursor-pointer hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10" : ""
      }`}
    >
      <h3 className="text-3xl font-black text-indigo-400">
        {number}
        {suffix}
      </h3>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </motion.div>
  );
}