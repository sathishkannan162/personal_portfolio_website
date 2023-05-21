import { Heading, Container } from '@chakra-ui/react';
import BlogCards from './BlogList';
import ProjectHeroCard from './ProjectHeroCard';
import projects from './projectInfoArray.js';

let featured_projectID = 1; // last project is featured
let featuredProject = projects[featured_projectID];

export default function ProjectsPage() {
  return (
    <>
    <Container maxWidth="1200px" mx="auto" my="auto" px={{ base: 5, md: 10 }} py={6}>
      <Heading>Featured</Heading>
      </Container>
      <ProjectHeroCard
        title={featuredProject.title}
        url={featuredProject.thumbnail}
        link={featuredProject.link}
      >
        {featuredProject.content}
      </ProjectHeroCard>
      <BlogCards title={'All Projects'} count={projects.length} skip={0} />
    </>
  );
}
