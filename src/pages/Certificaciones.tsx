
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CertificationBadge from '@/components/CertificationBadge';
import { Check } from 'lucide-react';

const Certificaciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80"
        title="Certificaciones"
        subtitle="Comprometidos con la excelencia y seguridad en cada producto"
      />

      {/* Main Content */}
      <section className="bg-white">
        <AboutSection 
          subtitle="CERTIFICACIONES"
          title="Comprometidos con la excelencia y seguridad"
          description="Nuestras certificaciones garantizan que todos los productos cumplen con los más altos estándares internacionales de calidad, seguridad alimentaria y bienestar animal, asegurando una exportación responsable y confiable."
          image="/lovable-uploads/eb2e0f2f-84c5-4d65-9f3c-c6d3ee151ce4.png"
        />
      </section>

      {/* Certifications Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestras certificaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Garantizamos la calidad y seguridad de nuestros productos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CertificationBadge name="BRC FOOD SAFETY" delay={0} />
            <CertificationBadge name="HACCP" delay={150} />
            <CertificationBadge name="KOSHER" delay={300} />
            <CertificationBadge name="HALAL" delay={450} />
            <CertificationBadge name="ISO 22000" delay={600} />
            <CertificationBadge name="GLOBAL G.A.P." delay={750} />
            <CertificationBadge name="ORGÁNICO" delay={900} />
            <CertificationBadge name="FAIR TRADE" delay={1050} />
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros estándares de calidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principios que guían nuestros procesos de exportación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-food">Seguridad alimentaria</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Implementación rigurosa de sistemas HACCP en toda la cadena de suministro</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Control de temperatura y condiciones óptimas durante el transporte</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Análisis microbiológicos y químicos periódicos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Capacitación continua del personal en buenas prácticas</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-food">Trazabilidad</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Documentación detallada desde el origen hasta el destino final</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Sistemas digitales de seguimiento en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Identificación única para cada lote de productos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Supervisión de cada interlocutor en la cadena de suministro</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-food">Sostenibilidad</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Selección de proveedores comprometidos con prácticas sostenibles</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Optimización de rutas para reducir la huella de carbono</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Embalajes eco-amigables y reducción de plásticos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Apoyo a programas de desarrollo en comunidades productoras</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-food">Bienestar animal</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Verificación de condiciones de crianza ética de animales</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Auditorías periódicas a proveedores de productos de origen animal</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Selección de granjas con certificaciones en bienestar animal</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-food mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Transporte con condiciones óptimas para minimizar el estrés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-food py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Productos certificados para su tranquilidad
          </h2>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-food font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Solicite más información
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Certificaciones;
