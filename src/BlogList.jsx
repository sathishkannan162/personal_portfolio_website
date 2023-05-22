import React from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Image,
  Text,
  Heading,
} from '@chakra-ui/react';
import projects from './projectInfoArray.js';
import RiseAnimation from './RiseAnimation.jsx';

const BlogCards = (props) => {
  const { title, count, skip } = props;
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <Heading py={'3'}>{title}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {projects.slice(skip, count + skip).map((blog) => {
          return (
            <Box position="relative" key={blog.projectID}>
              <RiseAnimation>
                <Box
                  fontSize="sm"
                  position="absolute"
                  right="5px"
                  margin="5px"
                  zIndex="1"
                ></Box>
                <a href={blog.link} target="_blank">
                  <Box
                    borderWidth="1px"
                    // shadow="md"
                    rounded="lg"
                    overflow="hidden"
                    position="relative"
                    _hover={{ shadow: 'md' }}
                  >
                    <Box maxH="160px" overflow="hidden">
                      <Image
                        src={blog.thumbnail}
                        overflow="clip"
                        mx="auto"
                        alt="Blog image"
                        lazyload="true"
                      />
                    </Box>
                    <Box p={{ base: 4, lg: 6 }}>
                      <Box d="flex" alignItems="baseline">
                        <Box
                          fontWeight="semibold"
                          as="h2"
                          letterSpacing="wide"
                          textTransform="uppercase"
                        >
                          {blog.title}
                        </Box>
                      </Box>
                      <Box>
                        <Box color="gray.600" fontSize="sm"></Box>
                      </Box>
                      <Text
                        mt="1"
                        fontWeight="semibold"
                        noOfLines={3}
                        lineHeight="tight"
                        color="gray.600"
                        fontSize="sm"
                      >
                        {blog.content}
                      </Text>
                    </Box>
                  </Box>
                </a>
              </RiseAnimation>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default BlogCards;
