import { motion, useScroll } from 'framer-motion';

export default function TopScrollIndicator() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'lightblue',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 1,
      }}
      data-test="scroll-bar"
    ></motion.div>
  );
}
