
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  className
}) => {
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
            entry.target.classList.remove('translate-y-6');
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
      className={cn(
        "flex flex-col items-center text-center p-6 opacity-0 translate-y-6 transition-all duration-500",
        className
      )}
    >
      <div className="mb-4 text-food">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 uppercase">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
