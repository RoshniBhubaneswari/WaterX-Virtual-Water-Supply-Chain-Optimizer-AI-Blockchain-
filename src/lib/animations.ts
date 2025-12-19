
import { cn } from '@/lib/utils';

// Stagger children animations (for lists, grids, etc.)
export function staggerChildren(baseDelay: number = 0.1) {
  return (index: number) => ({
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        delay: baseDelay * index 
      }
    }
  });
}

// Animation classes with optional delays
export function getAnimationClass(
  animation: 'fade-in' | 'scale-in' | 'blur-in' | 'float' | 'pulse-slow',
  delay?: number,
  duration?: number
): string {
  const baseClass = `animate-${animation}`;
  
  const delayClass = delay 
    ? `animation-delay-${delay}` 
    : '';
  
  const durationClass = duration 
    ? `animation-duration-${duration}` 
    : '';
  
  return cn(baseClass, delayClass, durationClass);
}

// Page transition for route changes
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

// Hover animation for interactive elements
export const hoverScale = {
  rest: { 
    scale: 1,
    transition: { 
      duration: 0.2, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};
