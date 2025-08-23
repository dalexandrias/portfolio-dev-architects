import { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      
      setScrollProgress(scrolled);
      setIsVisible(scrollPx > 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-sm z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[60] flex items-center justify-center group ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Voltar ao topo"
      >
        <svg 
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        
        {/* Progress Circle */}
        <svg className="absolute inset-0 w-14 h-14 transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 26}`}
            strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-150 ease-out"
          />
        </svg>
      </button>

      {/* Scroll Percentage */}
      <div className={`fixed bottom-28 right-8 bg-black/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 z-[60] shadow-lg ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {Math.round(scrollProgress)}%
      </div>
    </>
  );
};

export default ScrollIndicator;
