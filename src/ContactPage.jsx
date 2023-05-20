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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </Text>
    </PageContainer>
  );
}
