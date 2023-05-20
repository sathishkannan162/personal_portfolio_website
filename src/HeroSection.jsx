import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
// import HeroImage from './assets/programmer_under_tree.jpeg';
import HeroImage from './assets/my_photo.jpg';

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'1200px'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 4 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            maxHeight={'500px'}
            width={'500px'}
            overflow={'clip'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={HeroImage}
              borderRadius={10}
            />
          </Box>
        </Flex>
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          mx="auto"
          p={{ base: 5, md: 10 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            {/* <Text */}
            {/* as={'span'} */}
            {/* position={'relative'} */}
            {/* _after={{ */}
            {/* content: "''", */}
            {/* width: 'full', */}
            {/* height: '30%', */}
            {/* position: 'absolute', */}
            {/* bottom: 1, */}
            {/* left: 0, */}
            {/* bg: 'red.400', */}
            {/* zIndex: -1, */}
            {/* }} */}
            {/* > */}
            {/* Unleash */}
            {/* </Text> */}
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '10%',
                postion: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
                bg: 'red.400',
              }}
            >
              Hey!👋
            </Text>
          </Heading>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
          >
            <Text as={'span'} color={'grey.400'}>
              I am Sathish
            </Text>
          </Heading>
          <Box maxW={{ base: '100%', md: '70%' }}>
            <Heading as="h4" size={'md'}>
              <Text
                color={'gray.500'}
                textAlign="justify"
                // paddingEnd={{ base: 10, md: 110 }}
              >
                I am a web developer🧑‍💻 from India. I recently graduated with
                Masters from{' '}
                <Text as={'span'} color={'blackAlpha.800'}>
                  IIT Bombay🎓
                </Text>
                . On this site, you can explore my web wonders🚀. I build full
                stack web applications with{' '}
                <Text as={'span'} color={'blackAlpha.800'}>
                  React frameworks, Nodejs and Express.
                </Text>
              </Text>
            </Heading>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
