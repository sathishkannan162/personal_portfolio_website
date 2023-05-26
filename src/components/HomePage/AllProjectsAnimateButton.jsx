import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const AllProjectsAnimateButton = (props) => {
  const { text, Icon } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileInView={{ rotateZ: [2, -2, 2, -2, 0] }}
      transition={{ duration: 0.5 }}
      style={{ margin: 'auto' }}
    >
      <Button colorScheme="blue" rightIcon={<Icon />}>
        <Link to="/projects">{text}</Link>
      </Button>
    </motion.div>
  );
};

export default AllProjectsAnimateButton;
