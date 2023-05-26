import LineWithDot from './MilestoneLineWithDot';
import MilestoneCard from './MilestoneCard';

export default function MilestoneMobileCard(milestone) {
  return (
    <>
      <LineWithDot />
      <MilestoneCard {...milestone} />
    </>
  );
}
