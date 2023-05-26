import { motion } from 'framer-motion';
import RiseAnimation from './RiseAnimation';
import { Box, Tag, HStack, Text } from '@chakra-ui/react';
import truncateBlogTitle from './Projects/helpers/truncateBlogTitle.js';
import ImageWithPlaceholder from './ImageWithPlaceholder';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: '10px' }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      key={project.projectID}
    >
      <Box position="relative">
        <RiseAnimation>
          <Box
            fontSize="sm"
            position="absolute"
            right="5px"
            margin="5px"
            zIndex="1"
          ></Box>
          {/* click links to hosted project */}
          <a href={project.link} target="_blank">
            <Box
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              position="relative"
              _hover={{ shadow: 'md' }}
            >
              {/* project thumbnail */}
              <Box maxH="160px" p={4} overflow="hidden">
                <ImageWithPlaceholder
                  src={project.thumbnail}
                  overflow="clip"
                  mx="auto"
                  alt="Blog image"
                  loading="lazy"
                />
              </Box>
              <Box px={{ base: 4, lg: 6 }}>
                <Box d="flex" alignItems="baseline">
                  {/* project title */}
                  <Box
                    fontWeight="semibold"
                    as="h2"
                    letterSpacing="wide"
                    textTransform="uppercase"
                  >
                    {truncateBlogTitle(project.title, 30)}
                  </Box>
                </Box>
                <Box>
                  <Box color="gray.600" fontSize="sm"></Box>
                </Box>
                {/* project content */}
                <Text
                  mt="1"
                  fontWeight="semibold"
                  noOfLines={3}
                  lineHeight="tight"
                  color="gray.600"
                  fontSize="sm"
                >
                  {project.content}
                </Text>
                {/* project tags */}
                <HStack py={2}>
                  {project.tags.slice(0, 3).map((tag, index) => {
                    return (
                      <Tag key={index} colorScheme={'teal'}>
                        <Text fontSize={12}>{tag}</Text>
                      </Tag>
                    );
                  })}
                </HStack>
              </Box>
            </Box>
          </a>
        </RiseAnimation>
      </Box>
    </motion.div>
  );
}
