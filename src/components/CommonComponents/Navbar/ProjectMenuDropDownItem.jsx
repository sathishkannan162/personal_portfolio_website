import React from 'react';
import { Button, Stack, Text, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const DropDownItem = ({ href, tag, closeMenu, mobile }) => {
  return (
    <Button
      variant="ghost"
      justifyContent={'left'}
      onClick={closeMenu}
      data-test={mobile ? 'popover-item-mobile' : 'popover-item-browser'}
    >
      <RouterLink to={href}>
        <Stack direction="row" align="center">
          <Box _hover={{ backgroundColor: 'grey.100' }}>
            <Text fontWeight={400}>{tag}</Text>
          </Box>
        </Stack>
      </RouterLink>
    </Button>
  );
};

export default DropDownItem;
