"use client";

import type { HTMLAttributes } from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedScrollWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationClassName?: string;
  initialClassName?: string;
  delay?: number; // delay in seconds
  as?: any;
}

const AnimatedScrollWrapper: React.FC<AnimatedScrollWrapperProps> = ({
  children,
  className,
  animationClassName, // We'll handle animations via variants now
  initialClassName,
  delay = 0,
  as = 'div',
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const MotionTag = (motion as any)[as] || motion.div;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay
      }
    }
  };

  // Animation disabled for performance
  return (
    <div className={cn(className, initialClassName)} {...props}>
      {children}
    </div>
  );
};

export default AnimatedScrollWrapper;
