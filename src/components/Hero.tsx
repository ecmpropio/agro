
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

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
          entry.target.classList.remove('translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (subtitleRef.current) {
      observer.observe(subtitleRef.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-white text-center px-6 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </p>
        )}
        
        {buttonText && buttonLink && (
          <a 
            ref={buttonRef}
            href={buttonLink} 
            className="inline-block bg-food hover:bg-food-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-8 delay-500"
          >
            {buttonText}
          </a>
        )}
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#content" 
          className="animate-bounce text-white opacity-80 hover:opacity-100"
          aria-label="Scroll down"
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
