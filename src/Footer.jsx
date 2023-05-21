import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        height={'100px'}
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2023 Sathish Kannan. All rights reserved</Text>
        <Link to="https://github.com/sathishkannan162/personal_portfolio_website">
          Source Code on github
        </Link>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/Sathish06030039'}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://www.facebook.com/sathishkannan.m.3'}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/sathish-kannan-a48a39166/'}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={'Facebook'}
            href={'https://www.facebook.com/sathishkannan.m.3'}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={'Github'}
            href={'https://github.com/sathishkannan162/'}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
