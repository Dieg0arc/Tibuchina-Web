import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones integrales para el desarrollo sostenible y la conservación ambiental
          </p>
        </div>
      </section>

      {/* Servicios Generales - Glass Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Áreas de Especialización
          </h2>
          
          {/* Glass Cards Container */}
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="glass-container flex justify-center items-center">
              {/* Card Administrativa */}
              <div 
                className="glass-card" 
                style={{ '--r': '-15deg' } as React.CSSProperties}
                data-text="Administrativa"
              >
                <svg className="text-4xl text-green-500" viewBox="0 0 24 24" width="40" height="40">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              {/* Card Planificación */}
              <div 
                className="glass-card" 
                style={{ '--r': '5deg' } as React.CSSProperties}
                data-text="Planificación"
              >
                <svg className="text-4xl text-green-500" viewBox="0 0 24 24" width="40" height="40">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              {/* Card Investigación */}
              <div 
                className="glass-card" 
                style={{ '--r': '25deg' } as React.CSSProperties}
                data-text="Investigación"
              >
                <svg className="text-4xl text-green-500" viewBox="0 0 24 24" width="40" height="40">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              {/* Card Ingeniería */}
              <div 
                className="glass-card" 
                style={{ '--r': '-25deg' } as React.CSSProperties}
                data-text="Ingeniería"
              >
                <svg className="text-4xl text-green-500" viewBox="0 0 24 24" width="40" height="40">
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom Styles */}
        <style>{`
          .glass-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .glass-card {
            position: relative;
            width: 180px;
            height: 200px;
            background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s;
            border-radius: 10px;
            margin: 0 -45px;
            backdrop-filter: blur(10px);
            transform: rotate(var(--r));
          }
          
          .glass-container:hover .glass-card {
            transform: rotate(0deg);
            margin: 0 10px;
          }
          
          .glass-card::before {
            content: attr(data-text);
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #10b981;
            font-weight: 600;
            font-size: 0.9rem;
          }
        `}</style>
      </section>

      {/* Proyectos Integrales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Proyectos Integrales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Ordenamiento Territorial</h3>
              <p className="text-gray-600 text-sm mb-4">
                Planificación ambiental y ordenamiento territorial sostenible
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Planificación de usos del suelo</li>
                <li>• Planificación de recursos hídricos</li>
                <li>• Seguimiento y control ambiental</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Cambio Climático</h3>
              <p className="text-gray-600 text-sm mb-4">
                Estrategias de adaptación y mitigación del cambio climático
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Observatorio climático</li>
                <li>• Estufas ecoeficientes</li>
                <li>• Capacitación comunitaria</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Investigación</h3>
              <p className="text-gray-600 text-sm mb-4">
                Investigación científica y inventarios biológicos
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Inventarios fenológicos</li>
                <li>• Estudios de biodiversidad</li>
                <li>• Monitoreo ambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos de Infraestructura Ambiental */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Infraestructura Ambiental</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Educación Ambiental</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Diseño de programas de educación ambiental
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Educación para atención postdesastres
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Manejo de recursos naturales
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Prevención del riesgo natural
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Desarrollo Comunitario</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Saneamiento básico urbano y rural
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Construcción y mejoramiento de vivienda VIP y VIS
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tratamiento de aguas residuales
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mantenimiento de redes viales rurales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Forestales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Proyectos Forestales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Conservación</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Planes de manejo para microcuencas</li>
                <li>• Restauración natural y asistida</li>
                <li>• Aprovechamiento forestal sostenible</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Producción Sostenible</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Proyectos agroforestales</li>
                <li>• Sistemas silvopastoriles</li>
                <li>• Agricultura orgánica</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Tecnología Verde</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Silvicultura avanzada</li>
                <li>• Control biológico</li>
                <li>• Suministro de productos forestales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Ambientales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Proyectos Ambientales</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Estudios y Evaluaciones</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Estudios de Impacto Ambiental</h4>
                  <p className="text-gray-600 text-sm">Evaluación completa de proyectos de infraestructura</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Inventarios de Biodiversidad</h4>
                  <p className="text-gray-600 text-sm">Registro de flora, avifauna y mastofauna</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Planes de Manejo Ambiental</h4>
                  <p className="text-gray-600 text-sm">Estrategias de conservación y protección</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Restauración y Recuperación</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Control de Erosión</h4>
                  <p className="text-gray-600 text-sm">Recuperación de áreas degradadas y estabilización de taludes</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Reforestación</h4>
                  <p className="text-gray-600 text-sm">Revegetación de áreas de protección y parques</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Gestión de Residuos</h4>
                  <p className="text-gray-600 text-sm">Manejo integrado y reciclaje de residuos sólidos</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mejoramiento Urbano */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Mejoramiento Urbano y Paisajístico</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Paisajismo</h4>
                <p className="text-sm text-gray-600 mt-2">Mejoramiento estético de espacios públicos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Áreas de Protección</h4>
                <p className="text-sm text-gray-600 mt-2">Planes de manejo para relictos y quebradas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Zonas de Riesgo</h4>
                <p className="text-sm text-gray-600 mt-2">Adecuación de zonas de alto riesgo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesitas una solución ambiental personalizada?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo multidisciplinario está listo para desarrollar proyectos que se adapten a las necesidades específicas de tu comunidad o empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Solicitar Cotización
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
              Ver Portafolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;