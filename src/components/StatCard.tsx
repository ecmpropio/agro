
import React, { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  number: string;
  text: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, text, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''), 10);
  const suffix = number.replace(/[0-9]/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('translate-y-4');
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // Assuming 60 FPS
    const totalFrames = Math.round(duration / frameDuration);
    const counterIncrement = numericValue / totalFrames;
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(counterIncrement * frame, numericValue);
      setCount(Math.floor(progress));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible, numericValue]);

  return (
    <div 
      ref={cardRef}
      className="statistic-card opacity-0 translate-y-4 transition-all duration-500"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-food mb-2">
        {isVisible ? count : '0'}{suffix}
      </h3>
      <p className="text-sm md:text-base uppercase tracking-wide">{text}</p>
    </div>
  );
};

export default StatCard;
