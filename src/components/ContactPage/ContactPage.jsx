import { Heading, Text, Box } from '@chakra-ui/react';
import PageContainer from '../CommonComponents/PageContainer';
import StandardLink from '../CommonComponents/StandardLink';

export default function ContactPage() {
  return (
    <PageContainer>
      <Box minH={'70vh'}>
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
      </Box>
    </PageContainer>
  );
}
