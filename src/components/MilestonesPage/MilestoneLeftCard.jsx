import EmptyCard from './MilestoneEmptyCard';
import LineWithDot from './MilestoneLineWithDot';
import MilestoneCard from './MilestoneCard';

export default function MilestoneLeftCard(milestone) {
  return (
    <>
      <EmptyCard />
      <LineWithDot />
      <MilestoneCard {...milestone} />
    </>
  );
}
