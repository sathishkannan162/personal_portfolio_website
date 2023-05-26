import { chakra, Container, Flex, useBreakpointValue } from '@chakra-ui/react';
import milestones from '../../data/milestoneInfoArray.js';
import MilestoneLeftCard from './MilestoneLeftCard.jsx';
import MilestoneRightCard from './MilestoneRightCard.jsx';
import MilestoneMobileCard from './MilestoneMobileCard.jsx';

const MilestoneTree = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 0 }}>
      <chakra.h3 fontSize="3xl" fontWeight="bold" mb={10} textAlign="center">
        Milestones
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <MilestoneLeftCard {...milestone} />
          )}

          {/* Mobile view */}
          {isMobile && <MilestoneMobileCard {...milestone} />}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <MilestoneRightCard {...milestone} />
          )}
        </Flex>
      ))}
    </Container>
  );
};

export default MilestoneTree;
