import React from 'react';
import { chakra, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import Logo from '../../../assets/website_logo.png';
import LogoWithName from '../../HomePage/LogoWithName';
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
      >
        <Flex
          maxW="1200px"
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
        >
          <LogoWithName Logo={Logo} Name={'Sathish Kannan'} />
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
