import { motion } from "framer-motion";
import {
  Palette,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
} from "lucide-react";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiAxios,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiMariadb,
  SiClaude,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { BsOpenai } from "react-icons/bs";

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
  level: "Expert" | "Avancé" | "Confirmé" | "Intermédiaire" | "Notions";
};

type Category = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Front-End",
    description: "Interfaces modernes, responsives et animées.",
    icon: Palette,
    color: "#61DAFB",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", level: "Avancé" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Avancé" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "Avancé" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Avancé" },
      { name: "Framer Motion", icon: SiFramer, color: "#ffffff", level: "Confirmé" },
      { name: "Vite", icon: SiVite, color: "#646CFF", level: "Avancé" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4", level: "Confirmé" },
    ],
  },
  {
    title: "Back-End",
    description: "API REST, logique métier et authentification.",
    icon: Server,
    color: "#E0234E",
    skills: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E", level: "Avancé" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Avancé" },
      { name: "Express", icon: SiExpress, color: "#ffffff", level: "Intermédiaire" },
      { name: "JWT", icon: Server, color: "#A855F7", level: "Confirmé" },
      { name: "REST API", icon: Server, color: "#38BDF8", level: "Avancé" },
    ],
  },
  {
    title: "Data & ORM",
    description: "Modélisation, relations et persistance des données.",
    icon: Database,
    color: "#5A67D8",
    skills: [
      { name: "Prisma ORM", icon: SiPrisma, color: "#5A67D8", level: "Avancé" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Confirmé" },
      { name: "MariaDB", icon: SiMariadb, color: "#003545", level: "Avancé" },
      { name: "SQL", icon: Database, color: "#38BDF8", level: "Confirmé" },
    ],
  },
  {
    title: "Intelligence Artificielle",
    description: "Intégration d'IA générative dans les applications.",
    icon: BrainCircuit,
    color: "#10B981",
    skills: [
      { name: "OpenAI API", icon: BsOpenai, color: "#ffffff", level: "Confirmé" },
      { name: "Claude API", icon: SiClaude, color: "#F97316", level: "Confirmé" },
      { name: "Prompt Engineering", icon: BrainCircuit, color: "#A855F7", level: "Confirmé" },
    ],
  },
  {
    title: "DevOps & Déploiement",
    description: "Versioning, conteneurs et déploiement.",
    icon: Cloud,
    color: "#38BDF8",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED", level: "Confirmé" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", level: "Confirmé" },
      { name: "Git", icon: SiGit, color: "#F05032", level: "Avancé" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", level: "Confirmé" },
    ],
  },
  {
    title: "Outils",
    description: "Outils de développement et de test quotidien.",
    icon: Wrench,
    color: "#A855F7",
    skills: [
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Confirmé" },
      { name: "Git", icon: SiGit, color: "#F05032", level: "Avancé" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff", level: "Confirmé" },
    ],
  },
];

const levelMap = {
  Expert: 5,
  Avancé: 4,
  Confirmé: 3,
  Intermédiaire: 2,
  Notions: 1,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* Halo arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-4">
            STACK TECHNIQUE
          </p>

          <h2 className="section-title title-gradient">
            Mes compétences.
          </h2>

          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            Une stack organisée autour du développement Full Stack,
            de la donnée, de l'intelligence artificielle et du déploiement.
          </p>
        </motion.div>

        {/* Cartes */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-[28px] p-6"
              >
                {/* En-tête catégorie */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: `${category.color}40`,
                      background: `${category.color}15`,
                    }}
                  >
                    <CategoryIcon
                      size={22}
                      style={{ color: category.color }}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-8 space-y-5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div key={skill.name}>
                        {/* Nom + Niveau */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <SkillIcon
                              size={17}
                              style={{ color: skill.color }}
                            />

                            <span className="text-sm text-slate-200">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-xs font-medium text-slate-400">
                            {skill.level}
                          </span>
                        </div>

                        {/* Barre par niveau */}
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scaleX: 0 }}
                              whileInView={{ opacity: 1, scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: i * 0.05,
                                duration: 0.35,
                                ease: "easeOut",
                              }}
                              className={`h-2 flex-1 rounded-full origin-left ${
                                i < levelMap[skill.level]
                                  ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.35)]"
                                  : "bg-white/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}