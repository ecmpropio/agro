
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { Beef, Fish, Bean, Sprout, Wheat, Grape, Coffee } from 'lucide-react';

const Productos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'legumbres', name: 'Legumbres' },
    { id: 'semillas', name: 'Semillas' },
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
      category: 'semillas', 
      name: 'Quinua', 
      description: 'Es una semilla andina, rica en proteínas, que se considera un superalimento. Contiene magnesio, calcio y oligoelementos',
      image: 'https://plus.unsplash.com/premium_photo-1671130295828-efd9019faee0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: 5, 
      category: 'semillas', 
      name: 'Frijol Panamito', 
      description: 'Es un tipo de frijol pequeño, de color blanco, con forma ovalada y textura suave. Es rico en proteínas, carbohidratos, fibra, minerales y vitaminas',
      image: '/lovable-uploads/frijolpanamito.webp'
    },
    { 
      id: 6, 
      category: 'legumbres', 
      name: 'Pallar Bebe', 
      description: 'Almendras de alta calidad, disponibles enteras, fileteadas o en harina.',
      image: '/lovable-uploads/pallarbebe.png'
    },
    { 
      id: 7, 
      category: 'legumbres', 
      name: 'Nueces', 
      description: 'Nueces seleccionadas a mano, con sabor excepcional y alto valor nutricional.',
      image: '/lovable-uploads/frijol.jpg'
    },
    { 
      id: 8, 
      category: 'semillas', 
      name: 'Kiwicha', 
      description: 'Es un pseudocereal originario de Sudamérica. Es una planta herbácea que produce semillas ricas en proteínas, vitaminas, minerales y fibra.',
      image: '/lovable-uploads/kiwicha.webp'
    },
    { 
      id: 9, 
      category: 'legumbres', 
      name: 'Frijol Canario', 
      description: 'Es una legumbre de color amarillo, de forma ovalada y alargada. Es una gran fuente de proteínas, carbohidratos, fibra, vitaminas y minerales. ',
      image: '/lovable-uploads/frijocanario.webp'
    },
    { 
      id: 10, 
      category: 'otros', 
      name: 'Arroz', 
      description: 'El arroz es un cereal comestible rico en carbohidratos y almidón. Es un cereal básico para una dieta sana y equilibrada. ',
      image: '/lovable-uploads/arroz.webp'
    },
    { 
      id: 11, 
      category: 'legumbres', 
      name: 'Frijol Zarandaja', 
      description: 'Es una legumbre de forma elipsoidal, de color blanco cremoso y textura suave. Es rico en proteínas, carbohidratos, minerales, vitamina B, niacina, riboflavina y tiamina. ',
      image: '/lovable-uploads/zarandaja.webp'
    },
    { 
      id: 12, 
      category: 'legumbres', 
      name: 'Pallar Grande', 
      description: 'Miel pura certificada orgánica, producida en ecosistemas naturales protegidos.',
      image: '/lovable-uploads/pallargrande.jpg'
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           
           
            <ProductCard 
              icon={<Wheat size={48} />}
              title="Semillas"
              description="Semillas Andinas de exportación como la quinua, la kiwicha entre otros. "
              delay={0}
            />
            <ProductCard 
              icon={<Bean size={48} />}
              title="Legumbres"
              description="Frijol castilla, frijol panamito, frijo de palo entre otras legumbres."
              delay={150}
            />
            <ProductCard 
              icon={<Sprout size={48} />}
              title="Otros productos"
              description="Almendras, nueces, pistachos en sus distintas presentaciones."
              delay={300}
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
              <div className="md:w-1/3 mt-6 md:mt-0 max-w-[400px] hover:scale-120 transition duration-100 ">
                <img 
                  src="/lovable-uploads/empresaagro.png" 
                  alt="Productos personalizados" 
                  className="rounded-xl  shadow-md w-[400px] h-[500px] "
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
