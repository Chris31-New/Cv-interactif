import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  results: string[];
  skills: string[];
  icon: React.ElementType;
  color: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Développeur Web et Web Mobile",
    subtitle: "DWWM • RNCP Niveau 5",
    duration: "8 mois",
    description:
      "Formation orientée développement front-end, back-end, base de données et conception d'applications web.",
    results: [
      "Formation obtenue avec succès et certification RNCP Niveau 5",
      //"À compléter avec ton second résultat",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "Git",
    ],
    icon: GraduationCap,
    color: "#38BDF8",
  },
    {
    year: "2025",
    title: "Evenly",
    subtitle: "Plateforme événementielle",
    duration: "8 mois",
    description:
      "Conception d'une application complète permettant la découverte, la réservation et la gestion d'événements.",
    results: [
      "Formation obtenue avec succès et certification RNCP Niveau 6"
    ],
    skills: [
      "React",
      "NestJS",
      "Prisma",
      "Stripe",
      "Leaflet",
      "JWT",
    ],
    icon: Rocket,
    color: "#EC4899",
  },
  {
    year: "2026",
    title: "Concepteur Développeur d'Applications",
    subtitle: "CDA • RNCP Niveau 6",
    duration: "7 mois",
    description:
      "Approfondissement de l'architecture applicative, du développement Full Stack et de la conception d'applications métier.",
    results: [
      "Développement de projets Full Stack",
      "Mise en œuvre d'API REST et d'une architecture métier",
    ],
    skills: [
      "TypeScript",
      "React",
      "NestJS",
      "Prisma",
      "MySQL",
      "JWT",
      "Docker",
    ],
    icon: Code2,
    color: "#A855F7",
  },

  {
    year: "2026",
    title: "OTOB",
    subtitle: "Application de gestion de chantier",
    duration: "7 mois",
    description:
      "Développement d'une application métier destinée au suivi des chantiers, entreprises, artisans et tâches.",
    results: [
      "Centralisation du suivi des chantiers, entreprises, artisans et tâches au sein d'une interface unique.",
      "Mise en place d'un système d'authentification JWT avec gestion des rôles et d'une API REST sécurisée développée avec NestJS et Prisma.",
    ],
    skills: [
      "React",
      "NestJS",
      "Prisma",
      "MySQL",
      "TypeScript",
      "Leaflet",
    ],
    icon: BriefcaseBusiness,
    color: "#22C55E",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-4">
            PARCOURS
          </p>

          <h2 className="section-title title-gradient">
            De la formation aux projets.
          </h2>

          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            Une progression construite autour de projets concrets et de
            compétences Full Stack.
          </p>
        </motion.div>

        <div className="relative">
          {/* ligne centrale */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-400 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: isRight ? 40 : -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid md:grid-cols-2"
                >
                  {/* point */}
                  <div className="absolute left-5 md:left-1/2 top-8 z-20 -translate-x-1/2">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full border bg-[#030712]"
                      style={{
                        borderColor: `${item.color}70`,
                        boxShadow: `0 0 25px ${item.color}40`,
                      }}
                    >
                      <Icon
                        size={19}
                        style={{ color: item.color }}
                      />
                    </div>
                  </div>

                  {/* carte */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      isRight
                        ? "md:col-start-2 md:pl-16"
                        : "md:col-start-1 md:pr-16"
                    }`}
                  >
                    <article className="timeline-card glass rounded-[28px] p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            color: item.color,
                            background: `${item.color}14`,
                            border: `1px solid ${item.color}30`,
                          }}
                        >
                          {item.year}
                        </span>

                        <span className="text-xs text-slate-500">
                          {item.duration}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-indigo-300">
                        {item.subtitle}
                      </p>

                      <p className="mt-5 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>

                      <div className="mt-7">
                        <h4 className="text-xs uppercase tracking-[0.25em] text-slate-500">
                          Résultats
                        </h4>

                        <div className="mt-3 space-y-2">
                          {item.results.map((result) => (
                            <div
                              key={result}
                              className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                            >
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7">
                        <h4 className="text-xs uppercase tracking-[0.25em] text-slate-500">
                          Compétences
                        </h4>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}