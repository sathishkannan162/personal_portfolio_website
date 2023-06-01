import React from 'react';
import { Box } from '@chakra-ui/react';

export default function PageContainer({ children, ...props }) {
  return (
    <Box
      maxW="1000px"
      minH={{ base: 'auto', md: '80vh' }}
      mx="auto"
      my="30px"
      px="20px"
      {...props}
    >
      {/* my default maxW was 1200px in other pages but reduced to 1000px here */}
      {children}
    </Box>
  );
}
