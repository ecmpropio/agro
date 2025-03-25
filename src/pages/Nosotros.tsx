
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatCard from '@/components/StatCard';

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1543418219-44e30b057fea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Nosotros"
        subtitle="Conoce quiénes somos y nuestra trayectoria"
      />

      {/* About Company */}
      <section className="bg-white">
        <AboutSection 
          subtitle="NUESTRA HISTORIA"
          title="Una trayectoria de excelencia y compromiso"
          description="Nuestra historia es un testimonio de esfuerzo y determinación. En los años 1990, iniciamos en el comercio de granos, aprendiendo desde la base del negocio. Luego, en el año 2000, dimos el paso hacia la independencia, comenzando con una modesta operación de venta en el mercado local. Fueron tiempos desafiantes, en los que la perseverancia y el aprendizaje constante nos permitieron crecer y consolidarnos en el rubro.
A medida que nuestra experiencia y clientela crecían, nos expandimos a la comercialización con plantas procesadoras y, posteriormente, incursionamos en el mercado de exportación. Así nació Agro y Procesos del Norte EIRL, una empresa que hoy combina tradición, conocimiento y visión empresarial para ofrecer productos confiables y de alta calidad."
          image="/lovable-uploads/nosotros-planta.jpeg"
        />
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro impacto en números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que respaldan nuestro compromiso con la calidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4">
            <StatCard number="15+" text="AÑOS DE EXPERIENCIA" delay={0} />
            <StatCard number="40+" text="PRODUCTOS CERTIFICADOS" delay={100} />
            <StatCard number="5.000+" text="TRANSACCIONES EXITOSAS" delay={200} />
            <StatCard number="10+" text="PAÍSES EXPORTADOS" delay={300} />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-food">Nuestra Misión</h3>
              <p className="text-gray-700">
                Conectar a los mejores productores de alimentos de Sudamérica con mercados internacionales, garantizando productos de alta calidad, trazabilidad completa y relaciones comerciales basadas en la confianza y el compromiso a largo plazo.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-food">Nuestra Visión</h3>
              <p className="text-gray-700">
                Ser reconocidos globalmente como el socio estratégico de referencia para la exportación de alimentos sudamericanos de alta calidad, liderando prácticas comerciales sostenibles y contribuyendo al desarrollo de las comunidades productoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principios que guían nuestras operaciones diarias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con transparencia y honestidad en todas nuestras relaciones comerciales, cumpliendo siempre con nuestros compromisos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Calidad</h3>
              <p className="text-gray-600">
                Nos comprometemos con los más altos estándares de calidad en cada producto que exportamos, garantizando la seguridad alimentaria.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-food">Sostenibilidad</h3>
              <p className="text-gray-600">
                Promovemos prácticas comerciales responsables con el medio ambiente y beneficiosas para las comunidades productoras.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
