import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HoverAnimationButton = (props) => {
  const { text, Icon } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      onHoverStart={handleHover}
      onHoverEnd={handleHover}
      whileInView={{ rotateZ: [2, -2, 2, -2, 0] }}
      transition={{ duration: 0.5 }}
    >
      <Button colorScheme="blue">
        <Link to="/projects">{text}</Link>
        {isHovered && <Icon style={{ marginLeft: '4px' }} />}
      </Button>
    </motion.div>
  );
};

export default HoverAnimationButton;
