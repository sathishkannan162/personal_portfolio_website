import { HStack } from '@chakra-ui/react';
import NavbarLinkButtonBrowser from './NavbarLinkButtonBrowser';
import MenuContainer from './ProjectMenu';
export default function NavbarBrowser() {
  return (
    <HStack
      spacing={1}
      mr={1}
      color="brand.500"
      display={{
        base: 'none',
        md: 'inline-flex',
      }}
    >
      <NavbarLinkButtonBrowser
        data-test="navlink-browser"
        data-cy="home"
        to="/"
      >
        🏠Home
      </NavbarLinkButtonBrowser>
      <MenuContainer closeMenu={() => {}} />
      <NavbarLinkButtonBrowser
        data-test="navlink-browser"
        data-cy="Milestones"
        to="/milestones"
      >
        💎Milestones
      </NavbarLinkButtonBrowser>
      <NavbarLinkButtonBrowser
        data-test="navlink-browser"
        data-cy="Certifications"
        to="/certifications"
      >
        🎓Certifications
      </NavbarLinkButtonBrowser>
      <NavbarLinkButtonBrowser
        data-test="navlink-browser"
        data-cy="About"
        to="/about"
      >
        ✨About{' '}
      </NavbarLinkButtonBrowser>
      <NavbarLinkButtonBrowser
        data-test="navlink-browser"
        data-cy="Contact"
        to="/contact"
      >
        📞Contact
      </NavbarLinkButtonBrowser>
    </HStack>
  );
}
