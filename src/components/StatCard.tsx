
import React, { useEffect, useRef } from 'react';

interface StatCardProps {
  number: string;
  text: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, text, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <div 
      ref={cardRef}
      className="statistic-card opacity-0 translate-y-4 transition-all duration-500"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-food mb-2">{number}</h3>
      <p className="text-sm md:text-base uppercase tracking-wide">{text}</p>
    </div>
  );
};

export default StatCard;
