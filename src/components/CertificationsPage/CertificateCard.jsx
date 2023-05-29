import { Box, Text, Heading, Link, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import placeholder_square from '../../assets/placeholder_square.webp';

export default function CertificateCard({ certificate }) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <Box data-test="certificate-card">
      <Heading fontSize={'xl'} py={4} px={1}>
        {certificate.name}
      </Heading>
      <motion.div
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, translateY: '20px' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        onHoverStart={handleHover}
        onHoverEnd={handleHover}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        data-test="certificate-div"
      >
        <Link href={certificate.certificateUrl} target="_blank">
          <Box
            maxW="500px"
            maxH="500px"
            minW={{ base: '150px', sm: '250px', md: '350px' }}
            aspectRatio={1.5 / 1}
            backgroundImage={certificate.imageUrl}
            backgroundSize="cover"
          >
            <Box h={'80%'} w="100%">
              <Image src={placeholder_square} opacity={0} />
            </Box>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Box
                opacity={{ base: 1, sm: hover ? 0 : 0.9 }}
                backgroundColor={'gray.200'}
                h="20%"
                outline="2px solid"
                mx="auto"
              >
                <Heading color={'black'} lineHeight={7}>
                  <Text fontWeight={800} fontSize={'lg'} textAlign={'center'}>
                    {certificate.name}
                  </Text>
                  <Text textAlign={'center'} fontWeight={600} fontSize={'sm'}>
                    {certificate.provider}
                  </Text>
                  <Text textAlign={'center'} fontWeight={600} fontSize={'xs'}>
                    Click Card to View
                  </Text>
                </Heading>
              </Box>
            </motion.div>
          </Box>
        </Link>
      </motion.div>
    </Box>
  );
}
