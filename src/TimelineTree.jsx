import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

let milestones = [
  {
    id: 1,
    date: 2014,
    title: "Class Topper 10th",
    description: "Top of the class in High School.",
  },
  {
    id: 2,
    date: 2016,
    title: "Class Topper 12th",
    description: "Top of the class in various subjects in Higher Secondary.",
  },
  {
    id: 3,
    date: 2019,
    title: "Got my Bachelors",
    description: "Received my Bachelors degree with distinction.",
  },
  {
    id: 4,
    date: 2020,
    title: "Joined IIT Bombay in M.Sc Physics",
    description: "Scored top rank in JAM exam and joined IIT Bombay.",
  },
  {
    id: 5,
    date: 2020,
    title: "Got introduced to Entrepreneurship",
    description:
      "Attended various lecturers by entrepreneurs conducted by E-Cell(Entrepreneurship Cell), IIT Bombay.",
  },
  {
    id: 6,
    date: 2020,
    title: "Started writing blogs on my website",
    description: "Wrote about 10 blogs on my website in the year 2020-2022.",
  },
  {
    id: 7,
    date: 2022,
    title: "Got my Masters in Physics from IIT Bombay",
    description: "I got my degree from IIT Bombay with more than 9.0 grade.",
  },
  {
    id: 8,
    date: "Aug, 2022",
    title: "Started learning web development courses",
    description:
      "Web development courses from FreeCdoecamp.Checkout my Certifications page.",
  },
  {
    id: 9,
    date: "Feb, 2022",
    title: "Finished about seven courses in web development",
    description:
      "Finished about all the necessary courses needed for full stack development, submitting five projects per course. Checkout my Certifications page.",
  },
  {
    id: 10,
    date: "Apr, 2022",
    title: "Finished an AI Chatbot app",
    description:
      "Built an AI Chatbot app with MUI, Express, Nodejs. Checkout my projects page for more details.",
  },
  {
    id: 11,
    date: "May, 2022",
    title: "Built my Portfolio website",
    description:
      "I built my multipage Portfolio website with ChakraUI with simple animations built with framer motion.",
  },
];

milestones = milestones.reverse();

const TimelineTree = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 0 }}>
      <chakra.h3 fontSize="3xl" fontWeight="bold" mb={10} textAlign="center">
        Milestones
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="0px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  const container = {
    hidden: {
      opacity: 1,
      translateX: isEvenId? '100%': "-100%"
    },
    visible: {
      opacity: 1,
      translateX:0,
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
    <Box flex={1}>
          <motion.div
            initial="hidden"
            whileInView="visible" 
            variants={container}
          >
        <HStack
          flex={1}
          p={{ base: 3, sm: 6 }}
          bg={useColorModeValue("gray.100", "gray.800")}
          spacing={5}
          rounded="lg"
          alignItems="center"
          pos="relative"
          _before={{
            content: `""`,
            w: "0",
            h: "0",
            borderColor: `transparent ${useColorModeValue(
              "#edf2f6",
              "#1a202c"
            )} transparent`,
            borderStyle: "solid",
            borderWidth: borderWidthValue,
            position: "absolute",
            left: leftValue,
            right: rightValue,
            display: "block",
          }}
        >
            <Box>
              <motion.div variants={item}>
                <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
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
                  <motion.div variants={item}>{title}</motion.div>
                </chakra.h1>
                <motion.div variants={item}>
                  <Text fontSize="md">{description}</Text>
                </motion.div>
              </VStack>
            </Box>
        </HStack>
      </motion.div>
    </Box>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 0 }}
      bg="transparent"
    ></Box>
  );
};

export default TimelineTree;
