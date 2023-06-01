import React from 'react';
import { chakra, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import LogoWithName from './LogoWithName';
import NavbarBrowser from './NavbarBrowser';
import NavbarMobile from './NavbarMobile';

const Navbar = () => {
  const bg = useColorModeValue('white', 'gray.800');
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
        data-test='navbar-header'
      >
        <Flex
          maxW="1200px"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
        >
          <LogoWithName Logo={'https://projectimages.netlify.app/website_logo/website_logo.png'} Name={'Sathish Kannan'} />
          <HStack display="flex" alignItems="center" spacing={1}>
            <NavbarBrowser />
            <NavbarMobile bg={bg} />
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Navbar;
