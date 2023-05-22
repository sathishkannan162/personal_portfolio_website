import React from 'react';
import {
  Stack,
  Flex,
  Box,
  Popover,
  Link,
  Text,
  Icon,
  HStack,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaChevronDown } from 'react-icons/fa';
import projectTags from './projectTags.js';
// import { Link } from 'react-router-dom';

const MenuContainer = () => {
  return (
    <Flex
      // w="full"
      // h="280px"
      justifyContent={{ base: 'flex-start', sm: 'center' }}
      alignItems="flex-start"
      // p={{ base: 5, sm: 10 }}
    >
      <DropDownMenu projectTags={projectTags} />
    </Flex>
  );
};

// Ideally, DropDownMenu component should be used. The MenuContainer component is used to style the preview.
const DropDownMenu = ({ projectTags }) => {
  const linkColor = 'blue.200';
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction="row" spacing={4}>
      <Popover
        trigger="hover"
        placement="bottom-start"
        onOpen={onOpen}
        onClose={onClose}
      >
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer" role="group">
            <Link
              // p={2}
              // fontSize={{ sm: 'md', md: 'lg' }}
              // fontWeight="bold"
              // color={useColorModeValue('gray.600', 'gray.200')}
              // _groupHover={{
              //   color: linkColor,
              // }}
              _hover={{
                textDecor: 'none',
              }}
            >
              🏅Projects
            </Link>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              _groupHover={{
                color: linkColor,
              }}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          rounded="lg"
          // minW="xs"
          maxW={'170px'}
        >
          <Flex flexDir={'column'}>
            <DropDownItem
              key={'all'}
              linkColor={linkColor}
              href={'/projects'}
              tag="All Projects"
            />
            {projectTags.map((tag, index) => (
              <DropDownItem
                key={index}
                linkColor={linkColor}
                href={`/projects/${tag}`}
                tag={tag}
              />
            ))}
          </Flex>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({ linkColor, href, tag }) => {
  return (
    <Link
      href={href}
      p={2}
      rounded="md"
      _hover={{
        bg: useColorModeValue('gray.100', 'gray.900'),
        color: linkColor,
      }}
      maxW={'150px'}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text fontWeight={400}>{tag}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default MenuContainer;
