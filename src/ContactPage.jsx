import { Heading, Text, Link } from '@chakra-ui/react';
import PageContainer from './PageContainer';
import StandardLink from './StandardLink';

export default function ContactPage() {
  return (
    <PageContainer>
      <Heading>Contact</Heading>
      <br />
      <Heading as="h3" size="md">
        Emails:
      </Heading>
      <br />
      <Text fontSize={'lg'}>
        📧
        <StandardLink href="mailto:sathishkannan162@gmail.com">
          sathishkannan162@gmail.com
        </StandardLink>
      </Text>
      <Text fontSize={'lg'}>
        📧
        <StandardLink href="mailto:sathishkannan6000@gmail.com">
          sathishkannan6000@gmail.com
        </StandardLink>
      </Text>
      <br />
      <Text fontSize={'lg'}>
        If you need help with any projects, please free to ☎️contact me.
      </Text>
    </PageContainer>
  );
}
