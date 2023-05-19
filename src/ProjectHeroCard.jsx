import React from 'react';
import { Box, Flex, chakra, Button } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectHeroCard = (props) => {
  const { url, title, children } = props;
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: '#3e3e3e' }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: 'gray.800' }}
        mx={{ lg: 8 }}
        display={{ lg: 'flex' }}
        maxW={{ lg: '5xl' }}
        shadow={{ lg: 'lg' }}
        rounded={{ lg: 'lg' }}
      >
        <Box w={{ lg: '50%' }}>
          <Box
            h={{ base: 64, lg: 'full' }}
            rounded={{ lg: 'lg' }}
            bgSize="cover"
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: 'xl', lg: '5xl' }} w={{ lg: '50%' }}>
          <chakra.h2
            fontSize={{ base: '2xl', md: '3xl' }}
            color="gray.800"
            _dark={{ color: 'white' }}
            fontWeight="bold"
          >
            {title}
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: 'gray.400' }}>
            {children}
          </chakra.p>
          <Button my="8px" colorScheme={'blue'} rightIcon={<FaExternalLinkAlt />}>View</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectHeroCard;
