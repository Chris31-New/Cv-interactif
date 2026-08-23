
export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="gradient-text text-xl font-bold">AURA CV</h4>
          <p className="text-slate-500 text-sm mt-1">
            Christophe Autran — Développeur Full Stack
          </p>
        </div>

        <p className="text-slate-500 flex items-center gap-2 text-sm">
          Conçu avec React, NestJS & IA
          
        </p>
      </div>
    </footer>
  );
}