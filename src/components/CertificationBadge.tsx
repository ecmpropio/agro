
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CertificationBadgeProps {
  name: string;
  logo?: string;
  delay?: number;
  className?: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  name,
  logo,
  delay = 0,
  className
}) => {
  const badgeRef = useRef<HTMLDivElement>(null);

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
            entry.target.classList.remove('scale-95');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) observer.unobserve(badgeRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={badgeRef}
      className={cn(
        "flex flex-col items-center opacity-0 scale-95 transition-all duration-500",
        className
      )}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-3">
        {logo ? (
          <img src={logo} alt={name} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
        ) : (
          <div className="text-xl font-bold text-gray-400">{name[0]}</div>
        )}
      </div>
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
};

export default CertificationBadge;
