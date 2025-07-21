import { useState } from 'react';
import Header from './components/Header/Header-new';
import Hero from './components/Hero/Hero-advanced';
import About from './components/About/About-advanced';
import Services from './components/Services/Services-new';
import Technologies from './components/Technologies/Technologies-new';
import Team from './components/Team/Team-new';
import Contact from './components/Contact/Contact-new';
import Footer from './components/Footer/FooterNew2';
import AdvancedLoader from './components/ui/AdvancedLoader';
import ScrollIndicator from './components/ui/ScrollIndicator';
import Projects from './components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <AdvancedLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white fade-in-initial relative">
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
                <Team />
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
