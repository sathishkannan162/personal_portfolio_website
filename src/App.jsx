import CallToActionWithVideo from './HeroSection';
import BlogCards from './BlogList';
import HoverAnimationButton from './HoverAnimationButton';
import { Box } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

function App() {
  return (
    <div>
      <CallToActionWithVideo />
      <BlogCards title={'Projects'} count={6} skip={0} interactive={false} />
      <Box
        display={'flex'}
        maxW="1200px"
        mx="auto"
        paddingX={{ base: 5, md: 10 }}
        paddingTop={0}
        paddingBottom={5}
        justifyContent="right"
      >
        <HoverAnimationButton text="All projects" Icon={FaArrowRight} />
      </Box>
    </div>
  );
}
export default App;
