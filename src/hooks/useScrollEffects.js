import { useState, useEffect, useRef } from 'react';

export const useParallaxScroll = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

export const useVideoScrollEffect = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Check if element is visible
        const visible = elementTop < windowHeight && elementTop + elementHeight > 0;
        setIsVisible(visible);

        if (visible) {
          // Calculate scroll progress within element
          const progress = Math.max(0, Math.min(1, 
            (windowHeight - elementTop) / (windowHeight + elementHeight)
          ));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { videoRef, scrollProgress, isVisible };
};
