import { Heading, Text, Image, Box } from '@chakra-ui/react';
import PageContainer from './PageContainer';
import myPhoto from './assets/my_photo_about.jpg';
import StandardLink from './StandardLink';
import ImageWithPlaceholder from './ImageWithPlaceholder';

export default function AboutPage() {
  return (
    <PageContainer>
      <Heading>About Me</Heading>
      <br />
      <Box
        maxW="400px"
        maxH="400px"
        mx="auto"
        float={{ base: 'none', md: 'left' }}
        pr={{ base: 0, md: 50 }}
        pl={{ base: 0, md: 0 }}
      >
        <ImageWithPlaceholder
          mx="auto"
          src={myPhoto}
          borderRadius={9}
          loading="lazy"
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
