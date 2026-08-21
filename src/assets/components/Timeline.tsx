import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Rocket,
  BriefcaseBusiness,
} from 'lucide-react';

const timeline = [
  {
    year: '2025',
    title: 'Développeur Web et Web Mobile',
    school: 'DWWM • RNCP Niveau 5',
    icon: GraduationCap,
    color: 'from-cyan-500 to-blue-600',
    description:
      'Formation complète HTML, CSS, JavaScript, React, Node.js, MySQL, Git et développement Full Stack.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'],
  },
  {
    year: '2025',
    title: 'Projet Evenly',
    school: 'Application événementielle nationale',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    description:
      'Création d’une plateforme d’événements avec Stripe, QR Code, Leaflet, gestion des organisateurs et réservation.',
    tech: ['React', 'NestJS', 'Stripe', 'Leaflet', 'Prisma'],
  },
  {
    year: '2026',
    title: 'Concepteur Développeur d’Applications',
    school: 'CDA • RNCP Niveau 6',
    icon: Code2,
    color: 'from-violet-500 to-indigo-600',
    description:
      'Architecture logicielle, NestJS, Prisma, API REST, TypeScript, Authentification JWT, Docker et projets professionnels.',
    tech: ['TypeScript', 'NestJS', 'Prisma', 'MySQL', 'JWT', 'Docker'],
  },
  {
    year: '2026',
    title: 'Projet OTOB',
    school: 'Application de gestion de chantiers',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    description:
      'Création d’une plateforme de gestion de chantiers avec authentification, gestion des utilisateurs, des chantiers et des tâches.',
    tech: ['React', 'NestJS', 'Stripe', 'Leaflet', 'Prisma', 'Auth0', 'JWT'],
  },
  {
    year: 'Aujourd’hui',
    title: 'Recherche d’un poste Full Stack / IA',
    school: 'Disponible immédiatement',
    icon: BriefcaseBusiness,
    color: 'from-emerald-500 to-green-600',
    description:
      'Objectif : intégrer une entreprise innovante en React / NestJS avec une forte culture technique et IA.',
    tech: ['React', 'NestJS', 'TypeScript', 'OpenAI API'],
  },
];

export default function Timeline() {
  return (
    <section className="relative py-32 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-3">
            MON PARCOURS
          </p>

          <h2 className="text-4xl md:text-6xl font-black gradient-text">
            Timeline
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Ma progression du développement web jusqu’au développement d’applications Full Stack modernes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 opacity-70" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative pl-20"
                >
                  <div
                    className={`absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_25px_rgba(99,102,241,.4)]`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <div className="glass rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,.15)]">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="rounded-full bg-indigo-500/20 border border-indigo-500/30 px-4 py-1 text-sm text-indigo-300">
                        {item.year}
                      </span>

                      <span className="text-slate-400 text-sm">{item.school}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>

                    <p className="text-slate-300 leading-relaxed mb-6">{item.description}</p>

                    <div className="flex flex-wrap gap-3">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-indigo-400 hover:text-indigo-300 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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