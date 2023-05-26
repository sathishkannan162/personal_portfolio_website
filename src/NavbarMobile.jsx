import {
  Box,
  IconButton,
  VStack,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import ProjectMenuContainer from './ProjectMenu';
import { AiOutlineMenu } from 'react-icons/ai';
import NavbarLinkButtonMobile from './NavbarLinkButtonMobile';

export default function NavbarMobile({ bg }) {
  const mobileNav = useDisclosure();
  return (
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
        zIndex={2}
        h={'80vh'}
      >
        <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
        <NavbarLinkButtonMobile onClick={mobileNav.onClose} to="/">
          🏠Home
        </NavbarLinkButtonMobile>
        <ProjectMenuContainer closeMenu={mobileNav.onClose} />
        <NavbarLinkButtonMobile onClick={mobileNav.onClose} to="/timeline">
          💎Milestones
        </NavbarLinkButtonMobile>
        <NavbarLinkButtonMobile
          onClick={mobileNav.onClose}
          to="/certifications"
        >
          🎓Certifications
        </NavbarLinkButtonMobile>
        <NavbarLinkButtonMobile onClick={mobileNav.onClose} to="/about">
          ✨About
        </NavbarLinkButtonMobile>
        <NavbarLinkButtonMobile onClick={mobileNav.onClose} to="/contact">
          📞Contact
        </NavbarLinkButtonMobile>
      </VStack>
    </Box>
  );
}
