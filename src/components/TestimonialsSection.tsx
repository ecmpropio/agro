
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "American Trading Foods ha sido un socio comercial excepcional. Su compromiso con la calidad y la entrega puntual ha superado nuestras expectativas.",
    author: "Carlos Rodríguez",
    position: "Director de Compras",
    company: "Global Food Distributors",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "Trabajar con American Trading Foods nos ha permitido expandir nuestra oferta de productos de alta calidad. Su conocimiento del mercado y profesionalismo son incomparables.",
    author: "María González",
    position: "Gerente de Importaciones",
    company: "European Markets Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "La calidad de los productos y el servicio al cliente de American Trading Foods son excepcionales. Recomendaría sus servicios a cualquier empresa que busque un proveedor confiable.",
    author: "John Smith",
    position: "CEO",
    company: "Premium Food Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    quote: "Hemos encontrado en American Trading Foods un aliado estratégico que entiende nuestras necesidades y cumple con los más altos estándares de calidad.",
    author: "Ana Martínez",
    position: "Directora de Operaciones",
    company: "International Food Group",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    quote: "La atención personalizada y la capacidad de American Trading Foods para adaptarse a nuestros requerimientos específicos los distingue de otros proveedores en el mercado.",
    author: "Roberto Sánchez",
    position: "Gerente General",
    company: "Global Markets",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos orgullosos de construir relaciones duraderas basadas en la confianza y la calidad
          </p>
        </div>
        
        <div className="relative px-4 sm:px-12 md:px-16 lg:px-24">
          <Carousel className="w-full max-w-5xl mx-auto" 
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="p-1 h-full">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      company={testimonial.company}
                      image={testimonial.image}
                      delay={index * 150}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:-left-1" />
            <CarouselNext className="lg:-right-1" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 mx-1 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-food' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
