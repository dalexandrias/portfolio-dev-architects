import { useState, useEffect, useRef } from 'react';

export const useStaggerAnimation = (delay = 100, threshold = 0.1) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    elementRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !hasTriggered) {
              setTimeout(() => {
                ref.classList.add('is-visible');
              }, index * delay);
            }
          },
          { threshold }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [delay, threshold, hasTriggered]);

  const addToRefs = (el) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };

  const triggerAnimation = () => {
    setHasTriggered(true);
  };

  return { addToRefs, triggerAnimation, hasTriggered };
};

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

export const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isActive, end, duration, start]);

  const startAnimation = () => setIsActive(true);
  const resetAnimation = () => {
    setIsActive(false);
    setCount(start);
  };

  return { count, startAnimation, resetAnimation, isActive };
};

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { ref, isHovered };
};

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export const useAnimationSequence = (animations, delay = 500) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying || currentStep >= animations.length) return;

    const timeout = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentStep, isPlaying, animations.length, delay]);

  const startSequence = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const resetSequence = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
  };

  return { currentStep, isPlaying, startSequence, resetSequence };
};
