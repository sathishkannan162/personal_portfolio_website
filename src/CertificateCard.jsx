import ImageWithPlaceholder from './ImageWithPlaceholder';
import { Box, Image, Text, Flex, Spacer, Heading } from '@chakra-ui/react';
import certificateImage1 from './assets/certificates/certificate_1.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function CertificateCard() {
  const imageUrl = certificateImage1;
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <Flex>
      <motion.div onHoverStart={handleHover} onHoverEnd={handleHover}>
        <Box
          maxW="500px"
          maxH="500px"
          minW="300px"
          aspectRatio={2.6 / 2}
          backgroundImage={imageUrl}
          backgroundSize="cover"
        >
          {/* <ImageWithPlaceholder src={imageUrl} /> */}
          {/* <Flex flexDir={'column-reverse'}> */}
          <Box h={'70%'} />
          <Box opacity={hover ? 0.9 : 0} backgroundColor={'white'} h="30%">
            <Heading color={'black'} lineHeight={7}>
              <Text as="h3" fontWeight={500} fontSize="md" textAlign={'center'}>
                Responsive Web Design Certification
              </Text>
              <Text textAlign={'center'} fontWeight={400} fontSize={'sm'}>
                FreeCodeCamp
              </Text>
            </Heading>
          </Box>
          {/* </Flex> */}
        </Box>
      </motion.div>
    </Flex>
  );
}
