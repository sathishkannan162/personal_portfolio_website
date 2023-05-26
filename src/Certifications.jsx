import { Heading, SimpleGrid, Box } from '@chakra-ui/react';
import CertificateCard from './CertificateCard';
import PageContainer from './PageContainer';
import certificationsInfoArray from './certificationsInfoArray.js';

export default function Certifications() {
  return (
    <PageContainer>
      <Heading>Certifications</Heading>
      <SimpleGrid py={4} columns={[1, 1, 2]} spacing="35px">
        {certificationsInfoArray.map((certificate) => {
          return (
            <Box key={certificate.certificate_ID}>
              <CertificateCard certificate={certificate} />
            </Box>
          );
        })}
      </SimpleGrid>
    </PageContainer>
  );
}
