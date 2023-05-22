import { Heading, Container, Flex } from '@chakra-ui/react';
import BlogCards from './BlogList';
import ProjectHeroCard from './ProjectHeroCard';
import projects from './projectInfoArray.js';

let featured_projectID = 1; // last or important project is featured
let featuredProject = projects[featured_projectID];

export default function ProjectsPage() {
  return (
    <>
      <Flex width="full" backgroundColor="#f8fafc">
        <Container
          maxWidth="1200px"
          mx="auto"
          my="auto"
          px={{ base: 5, md: 10 }}
        >
          <Heading py={3}>Featured</Heading>
          <ProjectHeroCard
            title={featuredProject.title}
            url={featuredProject.thumbnail}
            link={featuredProject.link}
          >
            {featuredProject.content}
          </ProjectHeroCard>
        </Container>
      </Flex>
      <BlogCards title={'All Projects'} count={projects.length} skip={0} />
    </>
  );
}
