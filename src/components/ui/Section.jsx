import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Section = forwardRef(({ 
  className, 
  variant = 'default',
  children, 
  ...props 
}, ref) => {
  const baseClasses = 'section';
  
  const variants = {
    default: '',
    light: 'section-light',
    dark: 'section-dark',
  };
  
  return (
    <section
      className={cn(
        baseClasses,
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
