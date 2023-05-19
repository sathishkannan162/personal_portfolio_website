import {Heading} from '@chakra-ui/react';
import BlogCards from './BlogList';
import ProjectHeroCard from './ProjectHeroCard';
export default function ProjectsPage() {
  return (
    <>
      <ProjectHeroCard
        title="United States Chloropeth Map"
        url="http://4.bp.blogspot.com/-2vT4_eQR2sM/TmgNGkWQ4HI/AAAAAAAAAAk/STplVx_-CAI/s1600/Choropleth+map.gif"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
        reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
        expedita aperiam mollitia iure consectetur dicta tenetur, porro
        consequuntur saepe accusantium consequatur.
      </ProjectHeroCard>
    <BlogCards title={"All Projects"} count="all" />
    </>
  );
}
