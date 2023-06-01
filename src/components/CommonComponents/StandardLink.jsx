// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Text } from '@chakra-ui/react';
export default function StandardLink({ href, children }) {
  return (
    <Link href={href} target="_blank" color={'pink.500'}>
      <Text as="span" fontWeight={600} textDecor="underline">
        {children}
      </Text>
    </Link>
  );
}
