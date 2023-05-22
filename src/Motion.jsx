import { Box, Flex, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

// export const ChakraBox = chakra(motion.div, {
//   shouldForwardProp: isValidMotionProp,
// });
export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
export const MotionFlex = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);
// export const ChakraSpan = chakra(motion.span, {
//   shouldForwardProp: isValidMotionProp,
// });
