
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
        backgroundImage="/lovable-uploads/porque.jpg"
        title="Por qué elegirnos"
        subtitle="Descubra las ventajas de trabajar con AgroProcesos del Norte "
      />

      {/* Trust Section */}
      <section className="bg-white">
        <AboutSection 
          subtitle="POR QUÉ ELEGIRNOS"
          title="Confianza, sostenibilidad y compromiso en cada operación"
          description="Nos especializamos en el acopio, compra, venta y procesamiento de menestras como frijol Castilla, pallar iqueño, pallar baby, zarandaja, frijol palo, quinua y otras variedades de los valles del norte y todo el Perú. "
          image="/lovable-uploads/planta-agro.jpg"
        />
      </section>

      {/* Logistics Section */}
      <section className="bg-gray-50">
        <AboutSection 
          subtitle="NUESTRO ENFOQUE"
          title="Comercialización y logística"
          description="Somos una empresa con trayectoria en el sector, comprometida con la calidad y la confiabilidad en cada uno de nuestros productos.
Contamos con una planta propia de procesamiento equipada con tecnología eficiente y certificación SENASA, garantizando el cumplimiento de los estándares de calidad y sanidad exigidos a nivel nacional e internacional. "
          image="/lovable-uploads/trayectoria.jpg"
          reverse={true}
        />
      </section>

      {/* Certification Section */}
      <section className="bg-white">
        <AboutSection 
          subtitle="GARANTÍA DE CALIDAD"
          title="Certificaciones y estándares de calidad internacional"
          description="Nos enfocamos en brindar soluciones seguras y competitivas, conectando a agricultores con mercados locales e internacionales."
          image="/lovable-uploads/viajes.jpg"
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
