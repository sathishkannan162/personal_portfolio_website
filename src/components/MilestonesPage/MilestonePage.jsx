import PageContainer from '../CommonComponents/PageContainer';
import MilestoneTree from './MilestoneTree';
import TopScrollIndicator from './TopScrollIndicator';

export default function MilestonePage() {
  return (
    <>
      <TopScrollIndicator />
      <PageContainer>
        <MilestoneTree />
      </PageContainer>
    </>
  );
}
