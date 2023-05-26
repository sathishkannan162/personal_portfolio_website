import { motion } from 'framer-motion';

const RiseAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{ translateY: -10 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

export default RiseAnimation;
