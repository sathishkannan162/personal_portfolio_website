import React from 'react';
import {
  Stack,
  Flex,
  Box,
  Popover,
  Icon,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  useColorModeValue,
  Heading,
  Wrap,
} from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';
import projectTags from '../../../data/projectTags.js';
import DropDownItem from './ProjectMenuDropDownItem.jsx';

const ProjectMenuContainer = ({ closeMenu, ...props }) => {
  return (
    <Flex
      justifyContent={{ base: 'flex-start', sm: 'center' }}
      alignItems="flex-start"
    >
      <DropDownMenu
        projectTags={projectTags}
        closeMenu={closeMenu}
        {...props}
      />
    </Flex>
  );
};

// Ideally, DropDownMenu component should be used. The MenuContainer component is used to style the preview.
const DropDownMenu = ({ projectTags, closeMenu, ...props }) => {
  const linkColor = 'blue.200';
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction="row" spacing={4}>
      <Popover
        trigger="hover"
        placement="bottom-start"
        offset={[-95, 10]}
        onOpen={onOpen}
        onClose={onClose}
      >
        <PopoverTrigger>
          <Flex
            alignItems="center"
            cursor="pointer"
            role="group"
            _hover={{ backgroundColor: 'gray.100' }}
            rounded="md"
          >
            <Box p={3} rounded="md">
              <Heading
                data-test={props['data-test']}
                fontSize={16}
                fontWeight={600}
              >
                🏅Projects
              </Heading>
            </Box>
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
          </Flex>
        </PopoverTrigger>

        <PopoverContent
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          rounded="lg"
          width={{ base: '90vw', md: '500px' }}
        >
          <Wrap>
            <DropDownItem
              data-test={'popover-items'}
              data-cy="popover-all"
              key={'all'}
              href={'/projects'}
              tag="All Projects"
              closeMenu={closeMenu}
              mobile={props['data-test'] === 'popover-trigger-mobile'}
            />
            {projectTags.map((tag, index) => (
              <DropDownItem
                key={index}
                href={`/projects/${tag}`}
                tag={tag}
                closeMenu={closeMenu}
                mobile={props['data-test'] === 'popover-trigger-mobile'}
              />
            ))}
          </Wrap>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

export default ProjectMenuContainer;
