import { Heading, Text, Image, Box } from '@chakra-ui/react';
import PageContainer from '../CommonComponents/PageContainer';
import StandardLink from '../CommonComponents/StandardLink';

export default function AboutPage() {
  const myPhoto =
    'https://projectimages.netlify.app/my_photos/my_photo_about.jpg';
  return (
    <PageContainer data-test="about-page">
      <Heading>About Me</Heading>
      <br />
      <Box
        w={{ base: '300px', md: '400px' }}
        h={{ base: '300px', md: '400px' }}
        mx="auto"
        float={{ base: 'none', md: 'left' }}
        pr={{ base: 0, md: 50 }}
        pl={{ base: 0, md: 0 }}
      >
        <Image
          w={{ base: '300px', md: '350px' }}
          h={{ base: '300px', md: '350px' }}
          mx="auto"
          src={myPhoto}
          borderRadius={9}
        />
      </Box>
      <Box pt={{ base: 5, md: 0 }}>
        <Text fontSize={'lg'}>
          I am Sathish Kannan. I recently graduated from 🎓IIT Bombay. I am a
          self taught🤸 full stack developer.
          <br />
          <br />I have good technical proficienty in{' '}
          <strong>
            NextJs, React, Express, Nodejs and Data visualisation with D3.js{' '}
          </strong>
          <br />
          <br />
          Currently, I am building products that integrates with 🤖AI.
          <br />
          <br />
          Checkout my personal blog:{' '}
          <StandardLink href="https://sathishkannan162.github.io">
            {' '}
            https://sathishkannan162.github.io
          </StandardLink>
          <br />
          <br />
          Checkout my{' '}
          <StandardLink href="https://www.linkedin.com/in/sathish-kannan-a48a39166/">
            LinkedIn
          </StandardLink>
          ,{' '}
          <StandardLink href="https://twitter.com/Sathish06030039">
            Twitter
          </StandardLink>
          ,{' '}
          <StandardLink href="https://www.instagram.com/satishkannan162/">
            Instagram
          </StandardLink>{' '}
          and{' '}
          <StandardLink href="https://www.facebook.com/sathishkannan.m.3">
            Facebook
          </StandardLink>
          .
        </Text>
      </Box>
    </PageContainer>
  );
}
