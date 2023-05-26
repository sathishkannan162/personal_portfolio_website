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
      <NavbarLinkButtonBrowser to="/">🏠Home</NavbarLinkButtonBrowser>
      <MenuContainer closeMenu={() => {}} />
      <NavbarLinkButtonBrowser to="/milestones">
        💎Milestones
      </NavbarLinkButtonBrowser>
      <NavbarLinkButtonBrowser to="/certifications">
        🎓Certifications
      </NavbarLinkButtonBrowser>
      <NavbarLinkButtonBrowser to="/about">✨About </NavbarLinkButtonBrowser>
      <NavbarLinkButtonBrowser to="/contact">📞Contact</NavbarLinkButtonBrowser>
    </HStack>
  );
}
