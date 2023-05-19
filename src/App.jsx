import CallToActionWithVideo from './HeroSection';
import BlogCards from './BlogList';
import Footer from './Footer';

function App() {
  return (
    <div>
      <CallToActionWithVideo />
      <BlogCards title={'Projects'} count={6} />
      <Footer />
    </div>
  );
}
export default App;
