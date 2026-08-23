import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-80 w-80 rounded-full"
    >
      <div className="h-full w-full rounded-full bg-violet-500/20 blur-[120px]" />
    </motion.div>
  );
}