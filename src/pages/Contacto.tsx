
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1674384696285-a4239c8609b7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contacto"
        subtitle="Estamos aquí para ayudarle con todas sus necesidades de exportación"
      />

      {/* Contact Info + Form */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contáctenos</h2>
                <p className="text-gray-600">
                  Estamos listos para responder a sus consultas y ayudarle a encontrar los productos que necesita. Complete el formulario o utilice nuestros datos de contacto directos.
                </p>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-food mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Principal 1234, Piso 5<br />
                      Chulucanas, Piura, Perú.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-food mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      <a href="tel:+56212345678" className="hover:text-food transition-colors">
                        +51 989-933-433
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-food mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@americantradingfoods.com" className="hover:text-food transition-colors">
                      agroprocesosdelnorte@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-food mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Horario de atención</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Sábado: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
              
              
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Envíenos un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respuestas a las consultas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">¿Cuál es el tiempo promedio de entrega para los productos?</h3>
              <p className="text-gray-600">
                Los tiempos de entrega varían según el destino y el tipo de producto, pero generalmente oscilan entre 2 y 4 semanas desde la confirmación del pedido. Ofrecemos seguimiento en tiempo real para cada envío.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">¿Cuáles son los volúmenes mínimos de pedido?</h3>
              <p className="text-gray-600">
                Los volúmenes mínimos dependen del producto específico. Para la mayoría de los productos, ofrecemos opciones desde contenedores completos hasta pedidos más pequeños para nuevos clientes o pruebas de mercado.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">¿Qué documentación se proporciona con cada envío?</h3>
              <p className="text-gray-600">
                Proporcionamos documentación completa incluyendo certificados de origen, certificados sanitarios, informes de calidad, documentos de exportación y toda la documentación específica requerida por el país de destino.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">¿Ofrecen productos personalizados o a medida?</h3>
              <p className="text-gray-600">
                Sí, trabajamos con nuestros clientes para entender sus necesidades específicas y podemos desarrollar soluciones personalizadas, desde formulaciones especiales hasta embalajes adaptados a requisitos particulares.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
