
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Beef, Fish, Apple, Wheat, Grape, Coffee } from 'lucide-react';

const Productos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'legumbres', name: 'Legumbres' },
    { id: 'lacteos', name: 'Lácteos' },
    { id: 'frutos', name: 'Frutos Secos' },
    { id: 'vinos', name: 'Vinos' },
    { id: 'otros', name: 'Otros Productos' }
  ];

  const products = [
    { 
      id: 1, 
      category: 'legumbres', 
      name: 'Frijol Castilla', 
      description: 'Sin conservadores ni aditivos, este frijol es un producto completamente natural, ideal para quienes buscan alimentos saludables y nutritivos.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 2, 
      category: 'legumbres', 
      name: 'Frijol de Palo', 
      description: 'Es una semilla saludable que aporta proteínas y aminoácidos. Es una fuente rica en proteínas',
      image: '/lovable-uploads/frijol-de-palo.jpeg'
    },
    { 
      id: 3, 
      category: 'legumbres', 
      name: 'Quinua', 
      description: 'Es una semilla andina, rica en proteínas, que se considera un superalimento. Contiene magnesio, calcio y oligoelementos',
      image: 'https://plus.unsplash.com/premium_photo-1671130295828-efd9019faee0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: 4, 
      category: 'lacteos', 
      name: 'Leche en polvo', 
      description: 'Leche en polvo de alta calidad, producida con leche de vacas alimentadas con pastos naturales.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 5, 
      category: 'lacteos', 
      name: 'Quesos artesanales', 
      description: 'Selección de quesos artesanales elaborados con métodos tradicionales y leche de la más alta calidad.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 6, 
      category: 'frutos', 
      name: 'Almendras', 
      description: 'Almendras de alta calidad, disponibles enteras, fileteadas o en harina.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 7, 
      category: 'frutos', 
      name: 'Nueces', 
      description: 'Nueces seleccionadas a mano, con sabor excepcional y alto valor nutricional.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 8, 
      category: 'vinos', 
      name: 'Vinos tintos premium', 
      description: 'Selección de vinos tintos de bodegas con tradición y prestigio internacional.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 9, 
      category: 'vinos', 
      name: 'Vinos blancos', 
      description: 'Vinos blancos frescos y aromáticos, perfectos para acompañar mariscos y platos ligeros.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 10, 
      category: 'otros', 
      name: 'Aceite de oliva extra virgen', 
      description: 'Aceite de oliva de primera presión en frío, con baja acidez y sabor intenso.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 11, 
      category: 'otros', 
      name: 'Café de altura', 
      description: 'Café cultivado en altitudes óptimas, con notas aromáticas únicas y procesamiento cuidadoso.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 12, 
      category: 'otros', 
      name: 'Miel orgánica', 
      description: 'Miel pura certificada orgánica, producida en ecosistemas naturales protegidos.',
      image: '/lovable-uploads/frijol.jpg'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <Hero 
        backgroundImage="/lovable-uploads/productos.jpeg"
        title="Nuestros Productos"
        subtitle="Una selección de alimentos de alta calidad para mercados internacionales"
      />

      {/* Products Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contamos con una selección de productos de alta calidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listos para conquistar los mercados internacionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           
           
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
              icon={<Apple size={48} />}
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

      {/* Product Catalog */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Catálogo de productos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nuestra amplia variedad de productos de alta calidad
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-food text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    to="/contacto" 
                    className="text-food font-medium hover:text-food-dark transition-colors"
                  >
                    Solicitar información →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 md:pr-10">
                <h2 className="text-3xl font-bold mb-4">¿No encuentra lo que busca?</h2>
                <p className="text-gray-600 mb-6">
                  Podemos trabajar con usted para encontrar productos específicos que se adapten a sus necesidades. Contáctenos para discutir requisitos personalizados.
                </p>
                <Link 
                  to="/contacto" 
                  className="btn-primary inline-flex items-center"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  Solicitar productos personalizados
                </Link>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <img 
                  src="/lovable-uploads/c7b04279-383f-4952-863f-bd8026d2a1b7.png" 
                  alt="Productos personalizados" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Productos;
