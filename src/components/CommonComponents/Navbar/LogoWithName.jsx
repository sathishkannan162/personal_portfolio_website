import { Flex, VisuallyHidden, chakra, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LogoWithName({ Logo, Name }) {
  return (
    <Flex>
      <Link to="/">
        <Image
          src={Logo}
          data-test={'site-logo'}
          w="30px"
          h="30px"
          alt="Sathish kannan Logo"
        />
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
          data-test="sitename"
        >
          {Name}
        </chakra.h1>
      </Link>
    </Flex>
  );
}
