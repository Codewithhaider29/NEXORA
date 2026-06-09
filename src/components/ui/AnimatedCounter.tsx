"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  duration = 2,
}: AnimatedCounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationRef = useRef<number | null>(null);

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  const animateValue = () => {
    const startTime = performance.now();
    const startValue = 0;
    const endValue = value;

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);

      const current = startValue + (endValue - startValue) * easedProgress;

      if (elementRef.current) {
        elementRef.current.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateValue);
      } else {
        if (elementRef.current) {
          elementRef.current.textContent = `${prefix}${endValue.toFixed(decimals)}${suffix}`;
        }
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(updateValue);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateValue();
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, decimals, prefix, suffix, hasAnimated]);

  // Set initial value
  useEffect(() => {
    if (elementRef.current && !hasAnimated) {
      elementRef.current.textContent = `${prefix}0${suffix}`;
    }
  }, [prefix, suffix, hasAnimated]);

  return (
    <span
      ref={elementRef}
      className={`inline-block ${className} animate-fade-in-up`}
    >
      {prefix}0{suffix}
    </span>
  );
}
