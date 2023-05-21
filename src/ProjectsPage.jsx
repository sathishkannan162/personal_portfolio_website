import { Heading } from '@chakra-ui/react';
import BlogCards from './BlogList';
import ProjectHeroCard from './ProjectHeroCard';
import projects from './projectInfoArray.js';

let featured_projectID = 1; // last project is featured
let featuredProject = projects[featured_projectID];

export default function ProjectsPage() {
  return (
    <>
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
