import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV-Christophe-Autran.pdf";
    link.download = "CV-Christophe-Autran.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSending(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();
    } catch (error) {
      console.error("Erreur EmailJS :", error);
      alert("Erreur lors de l'envoi du message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-4">
            CONTACT
          </p>

          <h2 className="section-title title-gradient">
            Parlons de votre projet.
          </h2>

          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            Une opportunité Full Stack, un projet web ou simplement envie
            d'échanger ? Je serai heureux d'en discuter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Carte profil */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              <Sparkles size={16} />
              Disponible pour une opportunité
            </div>

            <h3 className="mt-7 text-3xl font-black text-white">
              Christophe Autran
            </h3>

            <p className="mt-2 text-indigo-300">
              Développeur Full Stack • React • NestJS • IA
            </p>

            <p className="mt-6 text-slate-400 leading-relaxed">
              Je recherche une opportunité me permettant de continuer à
              progresser sur des projets web modernes et des problématiques
              métier concrètes.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Mail size={19} className="text-indigo-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-slate-200">
                    autran.christophe@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <MapPin size={19} className="text-indigo-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Localisation</p>
                  <p className="text-sm text-slate-200">Toulouse, France</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/Chris31-New"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary rounded-xl px-4 py-3 flex items-center gap-2"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/christophe-autran-2437b819a/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary rounded-xl px-4 py-3 flex items-center gap-2"
              >
                <FaLinkedin size={18} color="#0A66C2" />
                LinkedIn
              </a>
            </div>

            <button
              onClick={downloadCV}
              className="btn-primary w-full rounded-2xl py-4 flex items-center justify-center gap-2 font-semibold mt-11"
            >
              <Download size={18} />
              Télécharger mon CV
            </button>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] p-8 space-y-6"
            onSubmit={sendEmail}
          >
            <div>
              <label className="text-sm text-slate-300">Nom</label>

              <input
                name="user_name"
                type="text"
                placeholder="Votre nom"
                required
                className="mt-2 rounded-2xl px-5 py-4 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Email</label>

              <input
                name="user_email"
                type="email"
                placeholder="vous@entreprise.fr"
                required
                className="mt-2 rounded-2xl px-5 py-4 w-full"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Message</label>

              <textarea
                name="message"
                rows={6}
                placeholder="Parlez-moi de votre opportunité ou de votre projet..."
                required
                className="mt-2 rounded-2xl px-5 py-4 resize-none w-full"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full rounded-2xl py-4 flex items-center justify-center gap-2 font-semibold disabled:opacity-60"
            >
              {sending ? "Envoi en cours..." : "Envoyer le message"}
              <ArrowUpRight size={18} />
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center">
                ✅ Message envoyé ! Je vous répondrai rapidement.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}