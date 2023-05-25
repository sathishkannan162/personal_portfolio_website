import { Heading, SimpleGrid } from '@chakra-ui/react';
import CertificateCard from './CertificateCard';
import PageContainer from './PageContainer';

export default function Certifications() {
  return (
    <PageContainer>
      <Heading>Certifications</Heading>
      <SimpleGrid py={4} columns={[1, 2, 3]} spacing="15px">
        <CertificateCard />
      </SimpleGrid>
    </PageContainer>
  );
}
