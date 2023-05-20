import React from 'react';
import {
  Box,
  SimpleGrid,
  Container,
  Image,
  Link,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const dataList = [
  {
    id: 1,
    title: 'Chlropeth Maps with D3.js',
    authorName: 'Ali',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 2,
    title: 'Rails ActiveAdmin',
    authorName: 'Ali',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 3,
    title: 'Rails ActiveAdmin',
    authorName: 'Ali',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 4,
    title: 'Rails ActiveAdmin',
    authorName: 'Ali',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 5,
    title: 'Rails ActiveAdmin',
    authorName: 'Ali',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    id: 6,
    title: 'Rails ActiveAdmin',
    authorName: 'Ali',
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
];

const BlogCards = (props) => {
  const { title, count } = props;
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <Heading py={'3'}>{title}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {dataList.map((blog) => {
          return (
            <Box position="relative" key={blog.id}>
              <Box
                fontSize="sm"
                position="absolute"
                right="5px"
                margin="5px"
                zIndex="1"
              ></Box>
              <Link to="#">
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    src="https://www.researchgate.net/publication/357031807/figure/fig1/AS:1100985686589442@1639506851670/A-choropleth-map-of-the-United-States-showing-the-geographic-distribution-of-our.png"
                    alt="Blog image"
                  />
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
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
                    {/* <Button */}
                    {/* colorScheme={'blue'} */}
                    {/* rightIcon={<FaExternalLinkAlt />} */}
                    {/* > */}
                    {/* View */}
                    {/* </Button> */}
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default BlogCards;
