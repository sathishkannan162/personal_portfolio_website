import { Box } from '@chakra-ui/react';

export default function PageContainer({ children }) {
  return (
    <Box
      maxW="1000px"
      minH={{ base: 'auto', md: '80vh' }}
      mx="auto"
      my="30px"
      px="20px"
    >
      {/* my default maxW was 1200px in other pages but reduced to 1000px here */}
      {children}
    </Box>
  );
}