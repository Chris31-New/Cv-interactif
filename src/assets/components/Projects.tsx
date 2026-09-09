import { useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import evenly from "../photos/Evenly.png";
import otob from "../photos/OTOB.png";

import codeAxios from "../photos/OTOB/code-axios.jpg";
import codeAuth from "../photos/OTOB/code-auth.jpg";
import codeArchiBack from "../photos/OTOB/code-archi-back.jpg";

import schemaPrisma from "../photos/Evenly/Capture Schema prisma.jpg"

import {
  SiReact,
  SiNestjs,
  SiPrisma,
  SiTypescript,
  SiLeaflet,
  SiStripe,
  SiMysql,
} from "react-icons/si";

import type { IconType } from "react-icons";

type CodeScreenshot = {
  title: string;
  description: string;
  image: string;
};

type Project = {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  description: string;
  features: string[];

  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];

  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
    modules: string[];
  };

  codeScreenshots: CodeScreenshot[];

  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Evenly",
    subtitle: "Plateforme d'évènements partout en France",
    image: evenly,
    gradient: "from-indigo-900/20 via-violet-900/20 to-black",

    description:
      "Application complète permettant aux organisateurs de publier des événements et aux utilisateurs de découvrir, réserver et participer à des événements.",

    features: [
      "Authentification JWT et gestion des rôles.",
      "Création et gestion des événements.",
      "Carte Leaflet avec géolocalisation.",
      "Paiement Stripe.",
      "Génération de billets avec QR Code.",
      "Export PDF des billets.",
    ],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#5A67D8",
      },
      {
        name: "Stripe",
        icon: SiStripe,
        color: "#635BFF",
      },
      {
        name: "Leaflet",
        icon: SiLeaflet,
        color: "#199900",
      },
    ],

    architecture: {
      frontend:
        "React + TypeScript + Tailwind + Axios",

      backend:
        "NestJS + API REST + DTO + JWT",

      database:
        "Prisma ORM + MySQL",

      infrastructure:
        "Vercel + backend Node/NestJS",

      modules: [
        "Authentification",
        "Événements",
        "Réservations",
        "Stripe",
        "QR Code",
      ],
    },

    codeScreenshots: [
      {
        title: "Schéma Prisma",
        description:
          "Authentification JWT et gestion des rôles.",
        image: schemaPrisma,
      },
      {
        title: "Événements",
        description:
          "Création et gestion des événements.",
        image: codeAxios,
      },
      {
        title: "Infrastructure",
        description:
          "Vercel + backend Node/NestJS.",
        image: codeArchiBack,
      },
    ],

    github: "https://github.com/",
    demo: "https://example.com/",
  },

  {
    title: "OTOB",
    subtitle: "Gestion intelligente de chantier",
    image: otob,
    gradient: "from-emerald-900/20 via-indigo-900/20 to-black",

    description:
      "Application destinée aux entreprises du bâtiment permettant de gérer les chantiers, les entreprises, les artisans, les tâches et le suivi des interventions.",

    features: [
      "Gestion des entreprises.",
      "Gestion des artisans.",
      "Gestion des chantiers.",
      "Suivi des tâches.",
      "Planning des interventions.",
      "Gestion des données géolocalisées.",
    ],

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#5A67D8",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],

    architecture: {
      frontend:
        "React + TypeScript + Tailwind + Axios",

      backend:
        "NestJS + DTO + Services + Controllers",

      database:
        "Prisma ORM + MySQL",

      infrastructure:
        "Vercel + API backend",

      modules: [
        "Entreprises",
        "Artisans",
        "Chantiers",
        "Tâches",
        "Planning",
      ],
    },

    codeScreenshots: [
      {
        title: "Gestion des requêtes avec Axios",
        description:
          "Exemple de communication entre le frontend React et l'API backend.",

        image: codeAxios,
      },

      {
        title: "Authentification",
        description:
          "Gestion de l'authentification et des échanges sécurisés avec le backend.",

        image: codeAuth,
      },

      {
        title: "Architecture Backend",
        description:
          "Organisation du backend NestJS avec controllers, services et logique métier.",

        image: codeArchiBack,
      },
    ],

    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="absolute top-10 left-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-4">
            MES RÉALISATIONS
          </p>

          <h2 className="section-title title-gradient">
            Projets Full Stack
          </h2>

          <p className="section-subtitle mt-6 max-w-3xl mx-auto">
            Deux applications complètes développées avec React, NestJS,
            Prisma et MySQL, avec une attention portée à l'architecture,
            à l'expérience utilisateur et aux problématiques métier.
          </p>
        </motion.div>

        {/* =========================
            PROJECT CARDS
        ========================= */}

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                gradient={project.gradient}
                onOpen={() => setSelected(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* =========================
            MODAL
        ========================= */}

        <ProjectModal
          open={selected !== null}
          onClose={() => setSelected(null)}
          project={selected}
        />
      </div>
    </section>
  );
}