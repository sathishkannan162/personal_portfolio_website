import CallToActionWithVideo from './HeroSection';
import BlogCards from './BlogList';
import { Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HoverAnimationButton from './HoverAnimationButton';

function App() {
  return (
    <div>
      <CallToActionWithVideo />
      <BlogCards title={'Projects'} count={6} skip={0} />
      <Box
        display={'flex'}
        maxW="1200px"
        mx="auto"
        paddingX={{ base: 5, md: 10 }}
        paddingTop={0}
        paddingBottom={5}
        justifyContent="right"
      >
        {/* <motion.div */}
          {/* whileHover={{ scale: 1.1, rotate: 360 }} */}
          {/* transition={{ duration: 0.3 }} */}
        {/* > */}
          <HoverAnimationButton />
          {/* <Button rightIcon={<FaArrowRight />} colorScheme={'blue'}> */}
          {/* <Link to="/projects">All projects</Link> */}
          {/* </Button> */}
        {/* </motion.div> */}
      </Box>
    </div>
  );
}
export default App;
