import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface SkillCardProps {
  name: string;
  icon: IconType;
  level: number;
  category: string;
}

export default function SkillCard({
  name,
  icon: Icon,
  level,
  category,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        rotateX: 4,
        rotateY: -4,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 18,
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.06]
        hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
      "
    >

      {/* Halo */}
      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-36
          w-36
          rounded-full
          bg-cyan-400/10
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-cyan-400/20
        "
      />

      {/* Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-white/[0.06]
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        <div className="mb-5 flex items-center justify-between">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-black/20
              text-3xl
              text-cyan-300
              shadow-[0_0_25px_rgba(34,211,238,0.08)]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:text-cyan-200
              group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
            "
          >
            <Icon />
          </div>

          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            {category}
          </span>

        </div>

        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>

        <div className="mt-5">

          <div className="mb-2 flex justify-between text-sm">
            <span className="text-white/40">
              Maîtrise
            </span>

            <span className="font-medium text-cyan-300">
              {level}%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: 'easeOut',
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                shadow-[0_0_12px_rgba(34,211,238,0.5)]
              "
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}