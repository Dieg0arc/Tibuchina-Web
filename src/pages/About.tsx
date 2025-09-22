import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Quiénes Somos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Una organización comprometida con el desarrollo sostenible del Quindío
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  La Corporación Ambiental, Cultural y Social TIBOUCHINA nació en 1994 
                  como un grupo ecológico estudiantil en el Colegio Sagrado Corazón de 
                  Jesús del Municipio de Filandia, con el propósito inicial de desarrollar 
                  el Proyecto Ambiental Escolar (PRAE).
                </p>
                <p>
                  El 14 de mayo de 1998 obtuvimos nuestra personería jurídica No. 1963, 
                  y posteriormente, el 4 de octubre de 2006, renovamos nuestros estatutos 
                  obteniendo la personería jurídica No. 00008035 con NIT 900111242-7.
                </p>
                <p>
                  Lo que comenzó como una iniciativa estudiantil se transformó en una 
                  corporación multidisciplinaria que trabaja por el equilibrio entre 
                  lo humano, social, natural e histórico-cultural.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Fechas Clave</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">1994</div>
                    <div className="text-sm text-gray-600">Inicio como grupo ecológico</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">1998</div>
                    <div className="text-sm text-gray-600">Primera personería jurídica</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">2006</div>
                    <div className="text-sm text-gray-600">Renovación de estatutos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estructura Organizacional */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Estructura Organizacional
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Asamblea General</h3>
              <p className="text-gray-700 mb-4">
                Integrada por 15 profesionales capacitados en distintas áreas del saber:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Administradores e Ingenieros Ambientales</li>
                <li>• Biólogos e Ingenieros Civiles</li>
                <li>• Ingenieros Forestales y de Software</li>
                <li>• Licenciados en Ciencias Sociales y Naturales</li>
                <li>• Guías de Turismo y Promotores Ambientales</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Junta Directiva</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900">Presidente</h4>
                  <p className="text-gray-700">pendiente</p>
                  <p className="text-sm text-gray-600">
                    pendiente
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Vicepresidente</h4>
                  <p className="text-gray-700">pendiente</p>
                  <p className="text-sm text-gray-600">pendiente</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Secretaria</h4>
                  <p className="text-gray-700">pendiente</p>
                  <p className="text-sm text-gray-600">pendiente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logros Destacados */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Logros Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-bold text-green-800 mb-3">Observatorio Climático</h3>
                <p className="text-gray-600 text-sm">
                  Creación y puesta en marcha del Observatorio Departamental del 
                  Cambio Climático en el Quindío
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-bold text-green-800 mb-3">Publicaciones</h3>
                <p className="text-gray-600 text-sm">
                  "Tesoros naturales protegidos del Quindío - Una mirada para la conservación"
                  (ISBN 978-958-56661-0-8)
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-bold text-green-800 mb-3">Festival Camino del Quindío</h3>
                <p className="text-gray-600 text-sm">
                  Organización anual del festival cultural que celebra el patrimonio 
                  histórico de la región durante 10 años consecutivos
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-bold text-green-800 mb-3">Estufas Ecoeficientes</h3>
                <p className="text-gray-600 text-sm">
                  Implementación de más de 1000 unidades de estufas ecoeficientes 
                  en áreas rurales del Quindío y Valle del Cauca
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-bold text-green-800 mb-3">Sendero Ecohistórico</h3>
                <p className="text-gray-600 text-sm">
                  Recuperación física e histórica del tramo Filandia - Bremen la Popa 
                  del antiguo Camino del Quindío
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="font-bold text-green-800 mb-3">Plan de Manejo DRMI</h3>
                <p className="text-gray-600 text-sm">
                  Formulación del plan de manejo del Distrito de Manejo Integrado 
                  CHILI BOSQUE - ALTO ANDINO del Municipio de Pijao
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participación en Comités Técnicos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Participación en Comités Técnicos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card COMEDA */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem translateZ="100" className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 aspect-square">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text-green-800 mb-3 dark:text-green-800"
                >
                  COMEDA
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Comité Municipal de Educación Ambiental para el desarrollo de políticas ambientales educativas.
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* Card Desarrollo Ambiental */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem translateZ="100" className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 aspect-square">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text-blue-800 mb-3 dark:text-blue-800"
                >
                  Desarrollo Ambiental
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Comité de Desarrollo Ambiental Municipal enfocado en la planificación territorial sostenible.
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* Card Consejo Territorial */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem translateZ="100" className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 aspect-square">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text-purple-800 mb-3 dark:text-purple-800"
                >
                  Consejo Territorial
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Participación activa en decisiones territoriales y ordenamiento del territorio municipal.
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* Card Turismo Municipal */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem translateZ="100" className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 aspect-square">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text-orange-800 mb-3 dark:text-orange-800"
                >
                  Turismo Municipal
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Comité de Turismo Municipal para el desarrollo del turismo sostenible y ecoturístico.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;