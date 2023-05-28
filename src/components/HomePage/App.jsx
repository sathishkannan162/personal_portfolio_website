import CallToActionWithVideo from './HeroSection';
import ProjectList from '../ProjectsPage/ProjectList';
import AllProjectsAnimateButton from './AllProjectsAnimateButton';
import { Box } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

function App() {
  return (
    <div>  
      <CallToActionWithVideo />
      <ProjectList title={'Projects'} count={6} skip={0} interactive={false} />
      <Box 
        display={'flex'}
        maxW="1200px"
        mx="auto"
        paddingX={{ base: 5, md: 10 }}
        paddingTop={0}
        paddingBottom={5}
        justifyContent="right"
      >
        <AllProjectsAnimateButton text="All Projects" Icon={FaArrowRight} />
      </Box>
    </div>
  );
}
export default App;
