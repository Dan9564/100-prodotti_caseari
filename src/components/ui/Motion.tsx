'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeIn: React.FC<MotionProps> = ({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.5,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp: React.FC<MotionProps & { offset?: number }> = ({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.5, 
  offset = 20,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<MotionProps> = ({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.5, 
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<MotionProps & { staggerDelay?: number }> = ({ 
  children, 
  className, 
  staggerDelay = 0.1,
  ...props 
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<MotionProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Hover effect wrapper
export const HoverCard: React.FC<MotionProps> = ({ children, className, ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn("transition-shadow duration-300", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
