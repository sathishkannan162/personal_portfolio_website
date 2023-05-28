import {
  Container,
  Stack,
  Image,
  Flex,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import RiseAnimation from '../CommonComponents/RiseAnimation';
import { motion } from 'framer-motion';

export default function CallToActionWithVideo() {
  const HeroImage = 'https://projectimages.netlify.app/my_photos/my_photo.jpg';
  return (
    <Flex width="full" backgroundColor="#f8fafc">
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
            <RiseAnimation>
              <Box
                position={'relative'}
                w={{ base: '300px', sm: '400px', md: '500px' }}
                h={{ base: '300px', sm: '400px', md: '500px' }}
                overflow={'clip'}
              >
                <motion.div
                  initial={{ opacity: 0, translateX: '-100%' }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    data-test="hero-image"
                    alt="my-photo"
                    fit="cover"
                    align="center"
                    src={HeroImage}
                    borderRadius={10}
                    w={{ base: '300px', sm: '400px', md: '500px' }}
                    h={{ base: '300px', sm: '400px', md: '500px' }}
                  />
                </motion.div>
              </Box>
            </RiseAnimation>
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
              {' '}
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
                <Box
                  as="span"
                  display="block"
                  position="absolute"
                  bg={'gray.200'}
                  w="60%"
                  h={'1px'}
                  bottom={-2}
                />
                <motion.span
                  initial={{ opacity: 0, translateX: '100%' }}
                  animate={{ opacity: 1, translateX: 0 }}
                  whileHover={{ translateY: -10 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                >
                  Hey!{' '}
                </motion.span>
                <motion.span
                  initial={{ rotateZ: -10 }}
                  whileHover={{ rotateZ: -10 }}
                  animate={{ rotateZ: [10, -10, 10, -10, 0] }}
                  transition={{ duration: 2.0 }}
                  style={{ display: 'inline-block' }}
                >
                  <span role="img" aria-label="wave-hand">
                    👋
                  </span>
                </motion.span>
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
                <Text color={'gray.500'} textAlign="justify">
                  I am a web developer🧑‍💻 from India. I recently graduated with
                  Masters from{' '}
                  <Text as={'span'} color={'blackAlpha.800'}>
                    IIT Bombay🏫
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
    </Flex>
  );
}
