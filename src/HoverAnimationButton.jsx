import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HoverAnimationButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      onHoverStart={handleHover}
      onHoverEnd={handleHover}
      transition={{ duration: 9.3 }}
    >
      <Button colorScheme="blue">
        <Link to="/projects">All projects</Link>
        {isHovered && <FaArrowRight style={{ marginLeft: '4px' }} />}
      </Button>
    </motion.div>
  );
};

export default HoverAnimationButton;
