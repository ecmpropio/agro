
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt = "American Trading Foods",
  reverse = false,
  className
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          
          if (entry.target === textRef.current) {
            entry.target.classList.remove(reverse ? 'translate-x-8' : 'translate-x-[-2rem]');
          }
          
          if (entry.target === imageRef.current) {
            entry.target.classList.remove(reverse ? 'translate-x-[-2rem]' : 'translate-x-8');
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [reverse]);

  return (
    <div 
      ref={sectionRef}
      className={cn(
        "section-padding w-full max-w-7xl mx-auto px-6 md:px-10",
        className
      )}
    >
      <div className={cn(
        "grid grid-cols-1 gap-12",
        image ? "md:grid-cols-2" : ""
      )}>
        <div 
          ref={textRef}
          className={cn(
            "flex flex-col justify-center opacity-0 transition-all duration-700",
            reverse ? "md:order-2 translate-x-8" : "translate-x-[-2rem]"
          )}
        >
          {subtitle && (
            <span className="text-food uppercase tracking-wider text-sm font-semibold mb-2">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <div className="prose prose-lg max-w-none">
            <p>{description}</p>
          </div>
        </div>

        {image && (
          <div 
            ref={imageRef}
            className={cn(
              "opacity-0 transition-all duration-700",
              reverse ? "md:order-1 translate-x-[-2rem]" : "translate-x-8"
            )}
          >
            <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
