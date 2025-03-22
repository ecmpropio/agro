
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import StatCard from '@/components/StatCard';
import AboutSection from '@/components/AboutSection';
import ProductCard from '@/components/ProductCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnerLogos from '@/components/PartnerLogos';
import { Beef, Fish, Grape, Wheat } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80"
        title="Desde Sudamérica, proveemos alimentos al mundo"
        subtitle="Conectamos a productores locales con mercados internacionales"
      />

      {/* Feature Boxes */}
      <section id="content" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-food p-8 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Trayectoria y experiencia</h3>
              <p>Desde 2009 proveyendo y exportando alimentos de primera calidad.</p>
            </div>
            <div className="bg-navy-dark p-8 rounded-lg text-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-3">Agente de compras</h3>
              <p>Ofrecemos red de contactos de proveedores de la región de manera directa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <StatCard number="15+" text="AÑOS DE EXPERIENCIA" delay={0} />
            <StatCard number="40+" text="PRODUCTOS CERTIFICADOS" delay={100} />
            <StatCard number="5000+" text="TRANSACCIONES EXITOSAS" delay={200} />
            <StatCard number="10+" text="PAÍSES EXPORTADOS" delay={300} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white">
        <AboutSection 
          subtitle="NOSOTROS"
          title="Confianza, sostenibilidad y compromiso en cada operación"
          description="American Trading Foods ofrece una amplia gama de alimentos de calidad que abarca desde productos lácteos y carnes hasta frutas y productos pesqueros, garantizamos calidad y cumplimiento con las normativas más exigentes."
          image="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80"
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
              icon={<Beef size={48} />}
              title="Carnes & Pescados"
              description="Carne de res, cordero y productos pesqueros frescos, cumpliendo normas internacionales."
              delay={0}
            />
            <ProductCard 
              icon={<Wheat size={48} />}
              title="Lácteos"
              description="Leche en polvo y productos lácteos certificados, frescos y confiables."
              delay={150}
            />
            <ProductCard 
              icon={<Fish size={48} />}
              title="Frutos Secos"
              description="Almendras, nueces, pistachos en sus distintas presentaciones."
              delay={300}
            />
            <ProductCard 
              icon={<Grape size={48} />}
              title="Vinos"
              description="Vinos premium, garantizando calidad y autenticidad."
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Somos su socio estratégico en la región
            </h2>
            <div className="relative z-10">
              <img 
                src="public/lovable-uploads/e3863140-aa1c-461d-a4e2-0b293a056df3.png" 
                alt="Variedad de legumbres y menestras" 
                className="w-full max-w-3xl mx-auto h-auto object-cover rounded-lg opacity-20 absolute left-1/2 transform -translate-x-1/2 -z-10"
              />
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
