import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Text,
  Heading,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import projects from './projectInfoArray.js';
import ComboBox from './AutoCompleteMui.jsx';
import filterProjectsByTag from './Projects/helpers/filterProjectsByTags.js';
import ProjectCard from './ProjectCard.jsx';

const ProjectList = (props) => {
  const { title, count, skip, interactive, tag } = props;
  const [text, setText] = useState('');
  const [tagSelect, setTagSelect] = useState(tag || 'All');
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      {/* when interactive comboBox with Project list appears, if not title for tag will appear with project list */}
      {!interactive && <Heading py={3}>{title}</Heading>}
      {interactive && (
        <Box>
          <Flex
            flexDir={'row'}
            py={4}
            justify={'space-between'}
            alignItems={'center'}
          >
            <Heading py={0}>{title}</Heading>
            <Spacer />
            <Heading as={'h3'} fontSize={18} fontWeight={400} px={2}>
              <Text>Select Tag:</Text>
            </Heading>
            {/* Autocomplete box for tags */}
            <ComboBox
              text={text}
              setText={setText}
              setTagSelect={setTagSelect}
            />
          </Flex>
        </Box>
      )}
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {filterProjectsByTag(projects, tag || tagSelect)
          .slice(skip, count ? count + skip : undefined)
          .map((project) => {
            return <ProjectCard project={project} key={project.projectID} />;
          })}
      </SimpleGrid>
    </Container>
  );
};

export default ProjectList;
