import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Pricing from './sections/Pricing';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import SuccessStories from './sections/SuccessStories';
import CTACards from './sections/CTACards';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Features />
        <Testimonials />
        <SuccessStories />
        <CTACards />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
