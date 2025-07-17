import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Container = forwardRef(({ 
  className, 
  children, 
  ...props 
}, ref) => {
  return (
    <div
      className={cn('container', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
