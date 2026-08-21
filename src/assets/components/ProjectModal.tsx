import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Code2, Maximize2 } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  features: string[];
  codeScreenshots?: string[]; // Ajout de la prop pour les captures de code
};

export default function ProjectModal({
  open,
  onClose,
  title,
  image,
  description,
  features,
  codeScreenshots = [],
}: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay sombre avec flou */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Conteneur centré */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            {/* Wrapper pour l'effet de halo d'ambiance derrière */}
            <div className="relative w-full max-w-4xl pointer-events-auto">
              
              {/* Halo néon d'ambiance projeté derrière la modale */}
              <div className="pointer-events-none absolute -inset-3 rounded-[36px] bg-gradient-to-r from-fuchsia-600/30 via-purple-600/20 to-cyan-500/30 blur-2xl -z-10" />

              {/* Modale Principale */}
              <div
                onMouseMove={handleMouseMove}
                className="relative max-h-[85vh] overflow-y-auto rounded-[30px] border border-fuchsia-500/30 bg-gradient-to-b from-[#180e29] via-[#0d0718] to-[#05020a] p-1 shadow-[0_10px_40px_rgba(0,0,0,0.8)] scrollbar-thin scrollbar-thumb-fuchsia-500/20"
              >
                {/* Lignes réactives néon (Haut & Bas) */}
                <div className="pointer-events-none absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
                <div className="pointer-events-none absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-60" />

                {/* Halo suiveur de souris */}
                <div
                  className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 rounded-[30px]"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(217, 70, 239, 0.12), rgba(6, 182, 212, 0.08), transparent 50%)`,
                  }}
                />

                {/* Contenu */}
                <div className="relative z-20 space-y-6">
                  {/* Bannière Image */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-[26px] border-b border-white/10 bg-black/40">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-transparent opacity-90" />

                    {/* Bouton Fermer sur l'image */}
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 rounded-full bg-[#120921]/80 backdrop-blur-md p-2.5 text-slate-300 hover:text-white border border-fuchsia-500/30 hover:border-fuchsia-400 hover:bg-fuchsia-950/60 transition-all shadow-[0_0_15px_rgba(192,38,211,0.3)]"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Corps de la modale */}
                  <div className="p-6 sm:p-8 space-y-8 pt-0">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-wider text-white uppercase drop-shadow-[0_2px_12px_rgba(217,70,239,0.5)]">
                      {title}
                    </h2>

                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                      {description}
                    </p>

                    {/* Section Fonctionnalités */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">
                        Fonctionnalités
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 rounded-xl bg-[#120921] p-4 border border-fuchsia-500/20 text-slate-200 text-sm font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                          >
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400">
                              <Check size={14} />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section Captures du Code (Nouvelle Section) */}
                    {codeScreenshots.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                          <Code2 size={16} />
                          <span>Aperçu du Code / Architecture</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {codeScreenshots.map((shot, idx) => (
                            <div
                              key={idx}
                              onClick={() => setSelectedScreenshot(shot)}
                              className="group relative cursor-pointer overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0a0514] p-2 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                            >
                              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <img
                                  src={shot}
                                  alt={`Extrait de code ${idx + 1}`}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                                  <span className="flex items-center gap-2 rounded-full bg-cyan-500/20 border border-cyan-400 px-3 py-1.5 text-xs font-medium text-cyan-300">
                                    <Maximize2 size={14} /> Agrandir
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modale d'agrandissement de l'image de code sélectionnée */}
          <AnimatePresence>
            {selectedScreenshot && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedScreenshot(null)}
                className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg"
              >
                <div className="relative max-w-5xl w-full">
                  <button
                    onClick={() => setSelectedScreenshot(null)}
                    className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-all"
                  >
                    <X size={24} />
                  </button>
                  <img
                    src={selectedScreenshot}
                    alt="Code agrandi"
                    className="w-full h-auto rounded-2xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.3)] object-contain max-h-[85vh]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}