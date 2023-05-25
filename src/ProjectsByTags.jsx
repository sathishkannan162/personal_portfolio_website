import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import BlogCards from './BlogList';

export default function ProjectsByTags() {
  const { tag } = useParams();
  return (
    <>
      <BlogCards
        title={`${tag} Projects`}
        skip={0}
        interactive={false}
        tag={tag}
      />
      <Box minH={{ base: 0, md: '13vh' }} py={2}></Box>
    </>
  );
}
