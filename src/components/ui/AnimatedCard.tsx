
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'glass-dark' | 'solid' | 'outline';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'none';
  animation?: 'fade-in' | 'scale-in' | 'blur-in' | 'none';
  delay?: number;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, variant = 'glass', hoverEffect = 'lift', animation = 'fade-in', delay = 0, children, ...props }, ref) => {
    // Base styles
    const variantStyles = {
      'glass': 'glass bg-white/60',
      'glass-dark': 'glass-dark text-white',
      'solid': 'bg-white',
      'outline': 'border border-border bg-transparent',
    };
    
    // Hover effects
    const hoverStyles = {
      'lift': 'transition-all duration-300 hover:-translate-y-1',
      'glow': 'transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]',
      'scale': 'transition-all duration-300 hover:scale-[1.02]',
      'none': '',
    };
    
    // Animation styles
    const getAnimationStyles = () => {
      if (animation === 'none') return '';
      
      const baseAnimation = `animate-${animation}`;
      const delayStyle = delay ? `[animation-delay:${delay * 0.1}s]` : '';
      
      return `${baseAnimation} ${delayStyle}`;
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 shadow-subtle', 
          variantStyles[variant],
          hoverStyles[hoverEffect],
          getAnimationStyles(),
          className
        )}
        style={{ 
          opacity: animation !== 'none' ? 0 : 1,
          animationFillMode: 'forwards', 
          ...props.style 
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedCard.displayName = 'AnimatedCard';

export { AnimatedCard };
