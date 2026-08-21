import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./Skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/5
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Expertise
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Mes <span className="text-cyan-400">compétences</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/50">
            Un stack moderne orienté développement web,
            architecture applicative et intégration de solutions
            intelligentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
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
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}