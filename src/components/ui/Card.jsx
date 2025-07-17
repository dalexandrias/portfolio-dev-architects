import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Card = forwardRef(({ 
  className, 
  variant = 'default', 
  children, 
  ...props 
}, ref) => {
  const baseClasses = 'card';
  
  const variants = {
    default: '',
    dark: 'card-dark',
    glass: 'glass',
    hover: 'hover-lift',
  };
  
  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
