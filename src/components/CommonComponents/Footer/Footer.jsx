import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';
import SocialButton from './SocialButton';

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
        <Link
          href="https://github.com/sathishkannan162/personal_portfolio_website"
          target="_blank"
        >
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
