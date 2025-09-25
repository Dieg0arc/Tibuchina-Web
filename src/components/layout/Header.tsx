import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 flex items-center justify-center">
              <img 
                src="/assets/tibu.png" 
                alt="Tibuchina Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold tracking-wide">TIBOUCHINA</h1>
              <p className="text-green-200 text-sm font-medium">Corporación Ambiental, Cultural y Social</p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-green-200 transition-colors">Inicio</a>
            <a href="/about" className="text-white hover:text-green-200 transition-colors">Nosotros</a>
            <a href="/services" className="text-white hover:text-green-200 transition-colors">Servicios</a>
            <a href="/contact" className="text-white hover:text-green-200 transition-colors">Contacto</a>
          </nav>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;