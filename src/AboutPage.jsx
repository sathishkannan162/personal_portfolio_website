import { Heading, Text, Image, Box, Link } from '@chakra-ui/react';
import PageContainer from './PageContainer';
import myPhoto from './assets/my_photo.jpg';

export default function AboutPage() {
  return (
    <PageContainer>
      <Heading>About Me</Heading>
      <br />
      <Box maxW="400px" maxH="400px" float="left" pr={50}>
        <Image src={myPhoto} borderRadius={9} />
      </Box>
      <Text fontSize={'lg'}>
        <Text>
          I am Sathish Kannan. I recently graduated from 🎓IIT Bombay. I am a
          self taught🤸 full stack developer.
          <br />
          <br />
          Currently, I am building products that integrates with 🤖AI.
          <br />
          <br />
          Checkout my personal blog:{' '}
          <Link href="https://sathishkannan162.github.io" color={'teal'}>
            https://sathishkannan162.github.io
          </Link>
        </Text>
        <br />
        <Text>
          Checkout my
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </Text>
      </Text>
    </PageContainer>
  );
}
