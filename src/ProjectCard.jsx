import {
  chakra,
  Box,
  Stack,
  Text,
  Image,
  Container,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const Index = (props) => {
  const { image, title, children } = props;
  return (
    <Container p={{ base: 5, md: 10 }}>
      <Box
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        rounded="md"
        overflow="hidden"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Image src={image} objectFit="cover" w="100%" />
        <Box p={{ base: 3, sm: 5 }}>
          <Box mb={6}>
            <chakra.h3
              fontSize={{ base: 'lg', sm: '2xl' }}
              fontWeight="bold"
              lineHeight="1.2"
              mb={2}
            >
              {title}
            </chakra.h3>
            <Text fontSize={{ base: 'md', sm: 'lg' }} noOfLines={2}>
              {children}
            </Text>
          </Box>
          <Stack
            justify="space-between"
            direction={{ base: 'column', sm: 'row' }}
            spacing={{ base: 2, sm: 0 }}
          >
            <CustomButton colorScheme="blue" variant="solid">
              View Project
            </CustomButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      textTransform="uppercase"
      lineHeight="inherit"
      rounded="md"
      {...props}
    >
      {children}
    </Button>
  );
};

export default Index;
