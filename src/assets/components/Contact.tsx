import { motion } from 'framer-motion';
import {
  Mail,
  Download,
  Send,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-indigo-300 text-sm mb-4">
            CONTACT
          </p>

          <h2 className="section-title title-gradient">Construisons ensemble.</h2>

          <p className="section-subtitle mt-6 max-w-2xl mx-auto">
            Je suis disponible pour un poste de Développeur Full Stack React / NestJS ou pour discuter d'un projet autour de l'IA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] p-8 space-y-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-600/20 blur-[100px] rounded-full" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 text-sm">
                <Sparkles size={16} /> Disponible immédiatement
              </div>

              <h3 className="text-3xl font-bold mt-6">Christophe Quilichini</h3>

              <p className="text-slate-400 mt-4 leading-relaxed">
                Développeur Full Stack passionné par React, NestJS, Prisma et les applications intégrant de l'intelligence artificielle.
              </p>
            </div>

            <div className="space-y-5">
              <Info icon={Mail} title="Email" value="autran.christophe@email.com" />

              <Info icon={MapPin} title="Localisation" value="Toulouse • France" />
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
  href="https://github.com/Chris31-New"
  target="_blank"
  rel="noreferrer"
  className="glass rounded-xl px-5 py-3 flex items-center gap-3 hover:border-indigo-400 transition"
>
  <FaGithub size={18} />
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/christophe-autran-2437b819a/"
  target="_blank"
  rel="noreferrer"
  className="glass rounded-xl px-5 py-3 flex items-center gap-3 hover:border-indigo-400 transition"
>
  <FaLinkedin size={18} />
  LinkedIn
</a>
            </div>

            <button className="glow w-full rounded-2xl bg-indigo-600 py-4 font-semibold hover:bg-indigo-500 transition flex items-center justify-center gap-3">
              <Download size={20} /> Télécharger mon CV PDF
            </button>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] p-8 space-y-6"
          >
            <Input label="Nom" placeholder="Votre nom" />

            <Input label="Adresse email" placeholder="vous@email.com" type="email" />

            <div>
              <label className="text-slate-300 text-sm mb-2 block">Message</label>
              <textarea
                rows={6}
                placeholder="Parlez-moi de votre projet ou de votre opportunité..."
                className="w-full rounded-2xl bg-slate-900/70 border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 focus:border-indigo-500 outline-none transition"
              />
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 py-4 font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition glow">
              <Send size={18} /> Envoyer le message
            </button>

            <p className="text-xs text-slate-500 text-center">
              Les messages seront bientôt reliés à un backend NestJS avec envoi d'email automatique.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
};

function Input({ label, placeholder, type = 'text' }: InputProps) {
  return (
    <div>
      <label className="text-slate-300 text-sm mb-2 block">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-slate-900/70 border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 focus:border-indigo-500 outline-none transition"
      />
    </div>
  );
}

type InfoProps = {
  icon: React.ElementType;
  title: string;
  value: string;
};

function Info({ icon: Icon, title, value }: InfoProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
        <Icon className="text-indigo-400" size={20} />
      </div>

      <div>
        <p className="text-slate-500 text-sm">{title}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

type SocialButtonProps = {
  icon: React.ElementType;
  label: string;
};

function SocialButton({ icon: Icon, label }: SocialButtonProps) {
  return (
    <button className="glass rounded-xl px-5 py-3 flex items-center gap-3 hover:border-indigo-400 transition">
      <Icon size={18} />
      {label}
    </button>
  );
}