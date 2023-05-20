import CallToActionWithVideo from './HeroSection';
import BlogCards from './BlogList';
import { Button, Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

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
        <Button rightIcon={<FaArrowRight />} colorScheme={'blue'}>
          <Link to="/projects">All projects</Link>
        </Button>
      </Box>
    </div>
  );
}
export default App;
