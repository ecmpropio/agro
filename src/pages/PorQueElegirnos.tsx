
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';

const PorQueElegirnos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80"
        title="Por qué elegirnos"
        subtitle="Descubra las ventajas de trabajar con American Trading Foods"
      />

      {/* Trust Section */}
      <section className="bg-white">
        <AboutSection 
          subtitle="POR QUÉ ELEGIRNOS"
          title="Confianza, sostenibilidad y compromiso en cada operación"
          description="El equipo de American Trading Foods está compuesto por profesionales con amplia experiencia en logística, trading de alimentos y materias primas. Entendemos las complejidades del comercio internacional y ofrecemos soluciones eficientes para nuestros clientes."
          image="/lovable-uploads/c7b04279-383f-4952-863f-bd8026d2a1b7.png"
        />
      </section>

      {/* Logistics Section */}
      <section className="bg-gray-50">
        <AboutSection 
          subtitle="NUESTRO ENFOQUE"
          title="Comercialización y logística"
          description="La trazabilidad para logística y cadena de suministro sigue los mismos principios que la Certificación Orgánica. Todo el proceso, desde que se adquiere el producto en origen hasta la entrega final se encuentra debidamente documentado a cada paso, supervisando a cada interlocutor que participe del proceso para asegurar la correcta trazabilidad en cada paso."
          image="/lovable-uploads/086921e4-39c6-4248-8807-c48db7603aa9.png"
          reverse={true}
        />
      </section>

      {/* Certification Section */}
      <section className="bg-white">
        <AboutSection 
          subtitle="GARANTÍA DE CALIDAD"
          title="Certificaciones y estándares de calidad internacional"
          description="Trabajamos con los más altos estándares en materia de certificaciones internacionales. Esto nos permite garantizar que todos nuestros productos cumplen con las normativas más exigentes de cada mercado de destino."
          image="/lovable-uploads/ea107a0a-7af1-4a5c-b607-c0db34fc93c0.png"
        />
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ventajas competitivas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por qué elegirnos como su socio estratégico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Conocimiento del mercado local</h3>
              <p className="text-gray-600">
                Nuestra profunda comprensión de los productores sudamericanos nos permite seleccionar los mejores proveedores y productos, garantizando calidad consistente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Eficiencia logística</h3>
              <p className="text-gray-600">
                Optimizamos cada etapa del proceso de exportación, desde la documentación hasta el transporte, reduciendo costos y tiempos de entrega.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Trazabilidad completa</h3>
              <p className="text-gray-600">
                Implementamos sistemas que permiten seguir cada producto desde su origen hasta su destino final, garantizando transparencia y seguridad.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Relaciones a largo plazo</h3>
              <p className="text-gray-600">
                Construimos relaciones duraderas basadas en la confianza mutua, tanto con nuestros proveedores como con nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-food py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para comenzar una colaboración exitosa?
          </h2>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-food font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contáctenos hoy
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PorQueElegirnos;
