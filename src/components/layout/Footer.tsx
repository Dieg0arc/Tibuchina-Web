import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
                <img src="public\assets\img-f.jpg" alt="" className='w-24 h-24 rounded-full' />
              <div>
                <h3 className="text-xl font-bold">TIBOUCHINA</h3>
                <p className="text-gray-400 text-sm">Corporación Ambiental, Cultural y Social</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Promoviendo el desarrollo sostenible y la conservación del medio ambiente 
              en Colombia desde 1994. Comprometidos con el equilibrio entre lo humano, 
              social, natural e histórico-cultural.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Estudios de Impacto Ambiental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Educación Ambiental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Proyectos Forestales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Restauración de Ecosistemas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cambio Climático</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ordenamiento Territorial</a></li>
            </ul>
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Calle 20A No 15 - 16 Ofic. 905
                </p>
                <p className="ml-6">Armenia, Quindío, Colombia</p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  314 6164178
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  tibouchina@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Certificaciones</h4>
              <div className="space-y-2 text-gray-400">
                <p>• Personería Jurídica No. 00008035</p>
                <p>• NIT 900.111.242-7</p>
                <p>• ESAL Sin Ánimo de Lucro</p>
                <p>• Registro en Cámara de Comercio de Armenia</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Comités Técnicos</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>• COMEDA - Educación Ambiental</p>
                <p>• Desarrollo Ambiental Municipal</p>
                <p>• Consejo Territorial</p>
                <p>• Comité de Turismo Municipal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Final */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Corporación Ambiental, Cultural y Social TIBOUCHINA. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Código de Ética</a>
          </div>
        </div>

        {/* Créditos */}
        <div className="text-center mt-6 pt-4 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Desarrollando soluciones sostenibles para un futuro mejor desde 1994
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Representante Legal: Diego Fernando Ramírez Restrepo - T.P. 25875013410 CND
          </p>
          
          {/* Créditos de desarrollo - Opción profesional con enlace a GitHub */}
          <div className="flex justify-center items-center mt-3 space-x-2">
            <span className="text-gray-600 text-xs">Desarrollado por</span>
            <a 
              href="https://github.com/Dieg0arc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-xs"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Diego Alejandro Ramírez Castro</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;