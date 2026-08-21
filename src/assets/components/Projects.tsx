import { useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import evenly from "../photos/Evenly.png";
import otob from "../photos/OTOB.png";

import codeAxios from "../photos/OTOB/code-axios.jpg";
import codeAuth from "../photos/OTOB/code-auth.jpg";
import codeArchiBack from "../photos/OTOB/code-archi-back.jpg";
import codeArchiFront from "../photos/OTOB/code-archi-front.jpg";

import {
  SiReact,
  SiNestjs,
  SiPrisma,
  SiTypescript,
  SiLeaflet,
  SiStripe,
  SiMysql,
} from "react-icons/si";

const projects = [
  {
    title: "Evenly",
    subtitle: "Plateforme d'évènements partout en France",
    image: evenly,
    gradient: "from-indigo-900/10 via-indigo-900/20 to-black",
    glow: "project-glow-indigo",
    description:
      "Application complète permettant aux organisateurs de publier des événements et aux utilisateurs de réserver leurs places.",

    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Leaflet", icon: SiLeaflet, color: "#199900" },
    ],

    features: [
      "Authentification JWT.",
      "Carte Leaflet avec géolocalisation.",
      "Paiement Stripe.",
      "QR Code billet PDF.",
      "Rôle organisateur / participant.",
    ],

    // Captures d'écran du code pour Evenly
    codeScreenshots: [
      "/assets/projects/evenly-code-1.png",
      "/assets/projects/evenly-code-2.png",
    ],
  },

  {
    title: "OTOB ( One Tool One Build )",
    subtitle: "Gestion intelligente de chantier",
    image: otob,
    gradient: "from-emerald-900/20 via-black/10 to-black",
    glow: "project-glow-emerald",
    description:
      "Application destinée aux entreprises du bâtiment pour gérer les chantiers, les artisans et les tâches.",

    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],

    features: [
      "Gestion des entreprises.",
      "Gestion des artisans.",
      "Photos de chantier.",
      "Suivi des tâches.",
      "Planning des interventions.",
    ],

    // Captures d'écran du code pour OTOB
    codeScreenshots: [
      codeAxios,
      codeAuth,
      codeArchiBack,
      codeArchiFront,
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-4">
            MES RÉALISATIONS
          </p>

          <h2 className="section-title title-gradient">
            Projets Full Stack
          </h2>

          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            Deux applications complètes développées en React, NestJS, Prisma et MySQL durant ma formation CDA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              onOpen={() => setSelected(index)}
            />
          ))}
        </div>

        {selected !== null && (
          <ProjectModal
            open={selected !== null}
            onClose={() => setSelected(null)}
            title={projects[selected].title}
            image={projects[selected].image}
            description={projects[selected].description}
            features={projects[selected].features}
            codeScreenshots={projects[selected].codeScreenshots}
          />
        )}
      </div>
    </section>
  );
}