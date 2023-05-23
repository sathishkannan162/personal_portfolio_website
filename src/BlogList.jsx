import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Text,
  Heading,
  Tag,
  HStack,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import projects from './projectInfoArray.js';
import RiseAnimation from './RiseAnimation.jsx';
import ComboBox from './AutoCompleteMui.jsx';
import { ThemeProvider, createTheme } from '@mui/material';
import ImageWithPlaceholder from './ImageWithPlaceholder.jsx';
import { motion } from 'framer-motion';

const muiTheme = createTheme();

// import AutoSuggestSearchBar from './AutoComplete.jsx';

function truncateBlogTitle(title, limit) {
  if (title.length <= limit) {
    return title;
  } else {
    var truncatedTitle = title.slice(0, limit - 3) + '...';
    return truncatedTitle;
  }
}

function filterProjectsByTag(projects, tag) {
  if (tag === 'All') {
    return projects;
  }
  return projects.filter((project) => project.tags.includes(tag));
}
const BlogCards = (props) => {
  const { title, count, skip, interactive, tag } = props;
  const [text, setText] = useState('');
  const [tagSelect, setTagSelect] = useState(tag || 'All');
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
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
            <ThemeProvider theme={muiTheme}>
              <ComboBox
                text={text}
                setText={setText}
                tagSelect={tagSelect}
                setTagSelect={setTagSelect}
              />
            </ThemeProvider>
          </Flex>
        </Box>
      )}
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {filterProjectsByTag(projects, tag || tagSelect)
          .slice(skip, count ? count + skip : undefined)
          .map((blog) => {
            return (
              <motion.div
                initial={{ opacity: 0, translateY: '10px' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                key={blog.projectID}
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
                    <a href={blog.link} target="_blank">
                      <Box
                        borderWidth="1px"
                        rounded="lg"
                        overflow="hidden"
                        position="relative"
                        _hover={{ shadow: 'md' }}
                      >
                        <Box maxH="160px" p={4} overflow="hidden">
                          <ImageWithPlaceholder
                            src={blog.thumbnail}
                            overflow="clip"
                            mx="auto"
                            alt="Blog image"
                            loading="lazy"
                          />
                        </Box>
                        <Box px={{ base: 4, lg: 6 }}>
                          <Box d="flex" alignItems="baseline">
                            <Box
                              fontWeight="semibold"
                              as="h2"
                              letterSpacing="wide"
                              textTransform="uppercase"
                            >
                              {truncateBlogTitle(blog.title, 30)}
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
                          <HStack py={2}>
                            {blog.tags.slice(0, 3).map((tag, index) => {
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
          })}
      </SimpleGrid>
    </Container>
  );
};

export default BlogCards;
