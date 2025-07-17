import { useState, useEffect } from 'react';
import Header from './components/Header/Header-new';
import Hero from './components/Hero/Hero-new';
import About from './components/About/About-new';
import Services from './components/Services/Services-new';
import Technologies from './components/Technologies/Technologies-new';
import Team from './components/Team/Team-new';
import Contact from './components/Contact/Contact-new';
import Footer from './components/Footer/FooterNew2';
import './styles/tailwind.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="space-y-2">
            <p className="text-primary-700 text-lg font-medium">DevArchitects</p>
            <p className="text-gray-600">Carregando...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in-initial">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
