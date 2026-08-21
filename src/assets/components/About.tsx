export default function About() {
  return (
    <footer className="bg-[#030712] text-slate-400 py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Christophe Quilichini. Tous droits réservés.
      </p>
    </footer>
  );
}