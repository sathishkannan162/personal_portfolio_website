import { Box } from '@chakra-ui/react';

export default function PageContainer({ children }) {
  return (
    <Box maxW="1000px" height={'70vh'} mx="auto" my="30px">
      {/* my default maxW was 1200px but reduced to 1000px here */}
      {children}
    </Box>
  );
}
