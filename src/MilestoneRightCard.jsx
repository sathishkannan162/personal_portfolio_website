import MilestoneCard from './MilestoneCard';
import LineWithDot from './MilestoneLineWithDot';
import EmptyCard from './MilestoneEmptyCard';

export default function MilestoneRightCard(milestone) {
  return (
    <>
      <MilestoneCard {...milestone} />
      <LineWithDot />
      <EmptyCard />
    </>
  );
}
