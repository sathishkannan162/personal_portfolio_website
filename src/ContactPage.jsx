import { Heading, Text, Link } from '@chakra-ui/react';
import PageContainer from './PageContainer';

export default function ContactPage() {
  return (
    <PageContainer>
      <Heading>Contact</Heading>
      <br />
      <Heading as="h3" size="md">
        Emails:
      </Heading>
      <br />
      <Text color={'teal.600'}>
        <Link href="mailto:sathishkannan162@gmail.com">
          📧sathishkannan162@gmail.com
        </Link>
      </Text>
      <Text color={'teal.600'}>
        <Link href="mailto:sathishkannan6000@gmail.com">
          📧sathishkannan6000@gmail.com
        </Link>
      </Text>
      <br />
      <Text>
        If you need help with any projects, please free to ☎️contact me.
      </Text>
    </PageContainer>
  );
}
