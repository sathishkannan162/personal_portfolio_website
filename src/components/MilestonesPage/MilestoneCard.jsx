import {
  chakra,
  useColorModeValue,
  useBreakpointValue,
  Box,
  HStack,
  VStack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MilestoneCard = ({ id, title, description, date, ...props }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  const container = {
    hidden: {
      scale: 0,
      opacity: 1,
      translateY: '10px',
    },
    visible: {
      scale: 1,
      opacity: 1,
      translateY: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box flex={1} {...props}>
      <motion.div initial="hidden" whileInView="visible" variants={container}>
        <HStack
          flex={1}
          p={{ base: 3, sm: 6 }}
          bg={useColorModeValue('gray.100', 'gray.800')}
          spacing={5}
          rounded="lg"
          alignItems="center"
          pos="relative"
          _before={{
            content: `""`,
            w: '0',
            h: '0',
            borderColor: `transparent ${useColorModeValue(
              '#edf2f6',
              '#1a202c'
            )} transparent`,
            borderStyle: 'solid',
            borderWidth: borderWidthValue,
            position: 'absolute',
            left: leftValue,
            right: rightValue,
            display: 'block',
          }}
          data-test="milestone-card"
        >
          <Box>
            <motion.div variants={item}>
              <Text
                fontSize="lg"
                color={isEvenId ? 'teal.400' : 'blue.400'}
                data-test="milestone-date"
              >
                {date}
              </Text>
            </motion.div>

            <VStack spacing={2} mb={3} textAlign="left">
              <chakra.h1
                fontSize="2xl"
                lineHeight={1.2}
                textAlign="left"
                fontWeight="bold"
                w="100%"
              >
                <motion.div variants={item} data-test="milestone-title">
                  {title}
                </motion.div>
              </chakra.h1>
              <motion.div variants={item}>
                <Text fontSize="md" data-test="milestone-description">
                  {description}
                </Text>
              </motion.div>
            </VStack>
          </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

export default MilestoneCard;
