import { Flex, Avatar, VisuallyHidden, chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LogoWithName({ Logo, Name }) {
  return (
    <Flex>
      <Link to="/">
        <Avatar src={Logo} size="sm" alt="sathish kannan logo" />
      </Link>
      <Link to="/">
        <VisuallyHidden>{Name}</VisuallyHidden>
      </Link>
      <Link to="/">
        <chakra.h1
          fontSize="xl"
          fontWeight="medium"
          ml="2"
          _hover={{ color: 'gray.600' }}
        >
          {Name}
        </chakra.h1>
      </Link>
    </Flex>
  );
}
