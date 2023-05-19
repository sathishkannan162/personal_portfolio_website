import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import HeroImage from './assets/programmer_under_tree.jpeg';

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'1200px'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 4 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Unleash
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              The Power of Pixels
            </Text>
          </Heading>
          <Heading as="h4" size={'md'}>
            <Text color={'gray.600'} textAlign="justify" paddingEnd={110}>
              I am Sathish, a web developer. On this site, you can explore my
              web wonders.I build full stack web applications with React
              frameworks, Nodejs and express.
            </Text>
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            maxHeight={'600px'}
          maxWidth={"600px"}
            overflow={"clip"}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={HeroImage}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
