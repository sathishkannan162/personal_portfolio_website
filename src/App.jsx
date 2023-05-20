import CallToActionWithVideo from './HeroSection';
import BlogCards from './BlogList';

function App() {
  return (
    <div>
      <CallToActionWithVideo />
      <BlogCards title={'Projects'} count={6} skip={0} />
    </div>
  );
}
export default App;
