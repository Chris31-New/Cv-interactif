import { AnimatePresence, motion } from "framer-motion";

import { X, ExternalLink, Database, ShieldCheck, Code2 } from "lucide-react";

import { SiReact, SiNestjs, SiPrisma, SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

type Technology = {
    name: string;
    icon?: React.ElementType;
    color?: string;
};

type CodeScreenshot = {
    title: string;
    description: string;
    image: string;
};

type ProjectDetails = {
    title: string;
    subtitle: string;
    image: string;
    description: string;

    features: string[];

    technologies: Technology[];

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

type Props = {
    open: boolean;
    onClose: () => void;
    project: ProjectDetails | null;
};

export default function ProjectModal({ open, onClose, project }: Props) {
    return (
        <AnimatePresence>
            {open && project && (
                <>
                    {/* ================================================= */}
                    {/* BACKDROP */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        onClick={onClose}
                        className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md"
                    />

                    {/* ================================================= */}
                    {/* MODAL */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="fixed inset-4 md:inset-8 lg:inset-12 z-[90] overflow-y-auto rounded-[32px] border border-white/10 bg-[#070a13]/95 backdrop-blur-2xl shadow-[0_0_100px_rgba(99,102,241,.2)]"
                    >
                        {/* ================================================= */}
                        {/* CLOSE */}
                        {/* ================================================= */}

                        <div className="sticky top-0 z-30 flex justify-end px-6 pt-6">
                            <button
                                onClick={onClose}
                                className="glass flex h-11 w-11 items-center justify-center rounded-full hover:border-indigo-400 transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="px-6 pb-12 md:px-10 lg:px-14">
                            {/* ================================================= */}
                            {/* HERO PROJET */}
                            {/* ================================================= */}

                            <div className="relative overflow-hidden rounded-[28px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-[260px] md:h-[380px] w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-black/10 to-transparent" />

                                <div className="absolute bottom-6 left-6 md:left-10">
                                    <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
                                        {project.subtitle}
                                    </p>

                                    <h2 className="mt-2 text-4xl md:text-6xl font-black text-white">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>

                            {/* ================================================= */}
                            {/* DESCRIPTION */}
                            {/* ================================================= */}

                            <div className="grid lg:grid-cols-[1fr_320px] gap-10 mt-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        Présentation
                                    </h3>

                                    <p className="mt-4 text-slate-300 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-4">
  {/* Bouton GitHub */}
  {project.github && (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        window.open(project.github, "_blank", "noopener,noreferrer");
      }}
      className="btn-secondary rounded-xl px-5 py-3 flex items-center gap-2 hover:scale-105 transition-all"
    >
      <FaGithub size={18} />
      Voir le code GitHub
    </button>
  )}
  
</div>
                                </div>

                                {/* =========================== */}
                                {/* RESUME ARCHITECTURE */}
                                {/* =========================== */}

                                <div className="glass rounded-3xl p-6">
                                    <div className="flex items-center gap-3">
                                        <Database
                                            className="text-indigo-400"
                                            size={20}
                                        />

                                        <h3 className="font-semibold text-white">
                                            Architecture
                                        </h3>
                                    </div>

                                    <div className="mt-6 space-y-4 text-sm">
                                        <ArchitectureRow
                                            label="Front-End"
                                            value={
                                                project.architecture.frontend
                                            }
                                        />

                                        <ArchitectureRow
                                            label="Back-End"
                                            value={project.architecture.backend}
                                        />

                                        <ArchitectureRow
                                            label="Base de données"
                                            value={
                                                project.architecture.database
                                            }
                                        />

                                        <ArchitectureRow
                                            label="Infrastructure"
                                            value={
                                                project.architecture
                                                    .infrastructure
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ================================================= */}
                            {/* ARCHITECTURE COMPLETE */}
                            {/* ================================================= */}

                            <div className="mt-16">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck
                                        className="text-violet-400"
                                        size={22}
                                    />

                                    <h3 className="text-2xl font-bold text-white">
                                        Architecture technique
                                    </h3>
                                </div>

                                <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-10">
                                    <ArchitectureFlow project={project} />
                                </div>
                            </div>

                            {/* ================================================= */}
                            {/* CODE SOURCE */}
                            {/* ================================================= */}

                            <div className="mt-16">
                                <div className="flex items-center gap-3">
                                    <Code2
                                        className="text-cyan-400"
                                        size={22}
                                    />

                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            Code source
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Quelques extraits représentatifs de
                                            l'implémentation.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 grid md:grid-cols-2 gap-6">
                                    {project.codeScreenshots.map(
                                        (screenshot, index) => (
                                            <motion.div
                                                key={screenshot.title}
                                                initial={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className="group overflow-hidden rounded-[24px] border border-white/10 bg-black/40"
                                            >
                                                {/* IMAGE CODE */}

                                                <div className="relative overflow-hidden bg-[#0b0f19]">
                                                    <img
                                                        src={screenshot.image}
                                                        alt={screenshot.title}
                                                        className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                                                    />

                                                    {/* overlay */}

                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                                </div>

                                                {/* TEXTE */}

                                                <div className="p-5">
                                                    <h4 className="text-lg font-semibold text-white">
                                                        {screenshot.title}
                                                    </h4>

                                                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                                        {screenshot.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* ================================================= */}
                            {/* FEATURES */}
                            {/* ================================================= */}

                            <div className="mt-16">
                                <h3 className="text-2xl font-bold text-white">
                                    Fonctionnalités principales
                                </h3>

                                <div className="mt-6 grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="glass rounded-2xl p-5 text-slate-300"
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ================================================= */}
                            {/* STACK */}
                            {/* ================================================= */}

                            <div className="mt-16">
                                <h3 className="text-2xl font-bold text-white">
                                    Stack technique
                                </h3>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => {
                                        const Icon = tech.icon;

                                        return (
                                            <div
                                                key={tech.name}
                                                className="glass rounded-full px-4 py-2 flex items-center gap-2"
                                            >
                                                {Icon && (
                                                    <Icon
                                                        size={18}
                                                        color={
                                                            tech.color ||
                                                            "#ffffff"
                                                        }
                                                    />
                                                )}

                                                <span className="text-sm text-slate-200">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* ==========================================================
   ARCHITECTURE ROW
========================================================== */

function ArchitectureRow({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-slate-500">{label}</p>

            <p className="mt-1 text-slate-200">{value}</p>
        </div>
    );
}

/* ==========================================================
   ARCHITECTURE FLOW
========================================================== */

function ArchitectureFlow({ project }: { project: ProjectDetails }) {
    return (
        <div className="grid md:grid-cols-5 gap-4 items-stretch">
            <ArchitectureNode
                title="Front-End"
                value={project.architecture.frontend}
                color="#61DAFB"
                icon={SiReact}
            />

            <ArchitectureArrow />

            <ArchitectureNode
                title="API"
                value={project.architecture.backend}
                color="#E0234E"
                icon={SiNestjs}
            />

            <ArchitectureArrow />

            <ArchitectureNode
                title="ORM"
                value={project.architecture.database}
                color="#5A67D8"
                icon={SiPrisma}
            />

            <ArchitectureArrow />

            <ArchitectureNode
                title="Database"
                value="MySQL"
                color="#4479A1"
                icon={SiMysql}
            />

            <ArchitectureArrow />

            <ArchitectureNode
                title="Modules métier"
                value={project.architecture.modules.join(" • ")}
                color="#A855F7"
                icon={ShieldCheck}
            />
        </div>
    );
}

/* ==========================================================
   NODE
========================================================== */

function ArchitectureNode({
    title,
    value,
    color,
    icon: Icon,
}: {
    title: string;
    value: string;
    color: string;
    icon: React.ElementType;
}) {
    return (
        <div
            className="rounded-2xl border p-5"
            style={{
                borderColor: `${color}35`,
                background: `${color}08`,
            }}
        >
            <Icon
                size={22}
                style={{
                    color,
                }}
            />

            <h4 className="mt-4 font-semibold text-white">{title}</h4>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {value}
            </p>
        </div>
    );
}

/* ==========================================================
   ARROW
========================================================== */

function ArchitectureArrow() {
    return (
        <div className="hidden md:flex items-center justify-center text-slate-600 text-xl">
            →
        </div>
    );
}
