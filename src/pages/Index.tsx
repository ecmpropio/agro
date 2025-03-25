
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import StatCard from '@/components/StatCard';
import AboutSection from '@/components/AboutSection';
import ProductCard from '@/components/ProductCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnerLogos from '@/components/PartnerLogos';
import { Sprout, Leaf, Grape, Wheat } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1607460694867-af0c6d6f2c52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Trabajando con productos de nuestras región"
        subtitle="Enviando productos de calidad a la mesa de nuestros clientes"
      />

      {/* Feature Boxes */}
      <section id="content" className=" mt-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-food p-8 rounded-md text-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Misión</h3>
              <p>Nuestra misión es transformar y comercializar productos agrícolas con los más altos estándares de calidad, garantizando eficiencia y transparencia en cada proceso. Buscamos fortalecer el sector agroindustrial, generando oportunidades de crecimiento para nuestros clientes y proveedores. Nos enfocamos en la mejora continua y en el desarrollo sostenible de nuestras operaciones.</p>
            </div>
            <div className="bg-navy-dark p-8 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Visión</h3>
              <p>Ser una empresa referente en la comercialización y exportación de menestras, destacándonos por la calidad de nuestros productos, la confianza de nuestros clientes y la eficiencia de nuestros procesos. Aspiramos a consolidarnos en mercados internacionales, manteniendo nuestro compromiso con la excelencia y el desarrollo del sector agrícola.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <StatCard number="10+" text="AÑOS DE EXPERIENCIA" delay={0} />
            <StatCard number="20+" text="PRODUCTOS CERTIFICADOS" delay={100} />
            <StatCard number="50+" text="CLIENTES SATISFECHOS" delay={200} />
            <StatCard number="10+" text="PAÍSES EXPORTADOS" delay={300} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white">
        <AboutSection 
          subtitle="NOSOTROS"
          title="Confianza, sostenibilidad y compromiso en cada operación"
          description="En Agro y Procesos del Norte EIRL, nos especializamos en el acopio, compra, venta y procesamiento de menestras como frijol Castilla, pallar iqueño, pallar baby, zarandaja, frijol palo, quinua y otras variedades de los valles del norte y todo el Perú. Somos una empresa con trayectoria en el sector, comprometida con la calidad y la confiabilidad en cada uno de nuestros productos.
Contamos con una planta propia de procesamiento equipada con tecnología eficiente y certificación SENASA, garantizando el cumplimiento de los estándares de calidad y sanidad exigidos a nivel nacional e internacional. "
          image="/lovable-uploads/planta-agroprocesos.jpeg"
        />
      </section>

      {/* Partner Logos */}
      <PartnerLogos />

      {/* Products Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contamos con una selección de productos de alta calidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listos para conquistar los mercados internacionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              icon={<Sprout size={48} />}
              title="Menestras"
              description="Ofrecemos una variedad de menestras de nuestra región"
              delay={0}
            />
            <ProductCard 
              icon={<Wheat size={48} />}
              title="Frijoles"
              description="Leche en polvo y productos lácteos certificados, frescos y confiables."
              delay={150}
            />
            <ProductCard 
              icon={<Leaf size={48} />}
              title="Arroz"
              description="Ofrecemos a la venta arroz para mayoristas y minoristas."
              delay={300}
            />
            <ProductCard 
              icon={<Grape size={48} />}
              title="Frutos Secos"
              description="Almendras, nueces, pistachos, quinua en sus distintas presentaciones. Productos de la sierra"
              delay={450}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section with dark gradient background */}
      <section className="py-20 bg-gradient-to-br from-navy-dark to-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="absolute z-10">
        <img 
                src="public/lovable-uploads/e3863140-aa1c-461d-a4e2-0b293a056df3.png" 
                alt="Variedad de legumbres y menestras" 
                className="w-full max-w-3xl mx-auto h-auto object-cover rounded-lg opacity-20 absolute left-1/2 transform -translate-x-1/2 -z-10"
              /></div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Somos su socio estratégico en la región
            </h2>
            <div className="relative z-10">
              <Link 
                to="/contacto" 
                className="inline-block bg-white text-food font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Realiza tu consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
