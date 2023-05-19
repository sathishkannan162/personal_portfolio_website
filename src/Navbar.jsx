import React from 'react';
import {
  chakra,
  Avatar,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from './assets/website_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex
          maxW="1200px"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
        >
          <Flex>
            <chakra.a
              href="/"
              title="Sathish Kannan Home Page"
              display="flex"
              alignItems="center"
            >
              <Avatar src={Logo} name="Sathish Kannan" size="sm" />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              Sathish Kannan
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button variant="ghost">
                <Link to="/projects">Projects</Link>
              </Button>
              <Button variant="ghost">
                <Link to="/contact">Contact</Link>
              </Button>
              <Button variant="ghost">
                <Link to="/about">About Me</Link>
              </Button>
            </HStack>
            {/* <Button colorScheme="brand" size="sm"> */}
            {/* Get Started */}
            {/* </Button> */}
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Projects
                </Button>
                <Button w="full" variant="ghost">
                  About Me
                </Button>
                <Button w="full" variant="ghost">
                  Contact
                </Button>
                {/* <Button w="full" variant="ghost"> */}
                {/* Company */}
                {/* </Button> */}
                {/* <Button w="full" variant="ghost"> */}
                {/* Sign in */}
                {/* </Button> */}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
