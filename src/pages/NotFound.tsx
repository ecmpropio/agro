
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-food mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">
          La página que está buscando no existe
        </p>
        <p className="text-gray-600 mb-8">
          Es posible que la página haya sido movida, eliminada o que nunca haya existido.
        </p>
        <Link
          to="/"
          className="btn-primary inline-block"
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
