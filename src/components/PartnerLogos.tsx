
import React, { useRef, useEffect } from 'react';

const logos = [
  {
    id: 1,
    name: "Global Distribution Co.",
    url: "https://placehold.co/200x80/e6e6e6/626262?text=Partner+Logo+1"
  },
  {
    id: 2,
    name: "FoodTech Industries",
    url: "https://placehold.co/200x80/e6e6e6/626262?text=Partner+Logo+2"
  },
  {
    id: 3,
    name: "Worldwide Exports",
    url: "https://placehold.co/200x80/e6e6e6/626262?text=Partner+Logo+3"
  },
  {
    id: 4,
    name: "Quality Foods Inc.",
    url: "https://placehold.co/200x80/e6e6e6/626262?text=Partner+Logo+4"
  },
  {
    id: 5,
    name: "Premium Markets",
    url: "https://placehold.co/200x80/e6e6e6/626262?text=Partner+Logo+5"
  }
];

const PartnerLogos: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const logos = entry.target.querySelectorAll('.logo-item');
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add('opacity-100');
              logo.classList.remove('opacity-0');
              logo.classList.remove('translate-y-4');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-center text-2xl font-bold mb-10">Trabajamos con empresas líderes</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="logo-item opacity-0 translate-y-4 transition-all duration-500"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
