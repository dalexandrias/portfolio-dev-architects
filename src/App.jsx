import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header-new';
import Hero from './components/Hero/Hero-advanced';
import About from './components/About/About-advanced';
import Services from './components/Services/Services-new';
import Technologies from './components/Technologies/Technologies-new';
import Team from './components/Team/Team-new';
import Contact from './components/Contact/Contact-new';
import Footer from './components/Footer/FooterNew2';
import ScrollIndicator from './components/ui/ScrollIndicator';
import Projects from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

function App() {
  const location = useLocation();

  // Reset scroll position when navigating back to home
  useEffect(() => {
    if (location.pathname === '/') {
      // Immediate scroll to top
      window.scrollTo(0, 0);
      // Additional smooth scroll after a delay to ensure proper rendering
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 fade-in-initial relative transition-colors duration-300">
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Technologies />
                {/* <Team /> */}
                <Contact />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
