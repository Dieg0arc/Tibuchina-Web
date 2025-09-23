import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import CountUp from 'react-countup';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Corporación Ambiental, Cultural y Social
          </h1>
          <h2 className="text-3xl font-semibold mb-8 text-green-200">TIBOUCHINA</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Promoviendo el desarrollo sostenible y la conservación del patrimonio ambiental 
            en el Departamento del Quindío desde 1994
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Conocer Más
            </button> */}
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
              Nuestros Proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Actuar en la solución integral de los problemas ambientales del Municipio, 
                  Departamento y Nación, mediante la evaluación y valoración de las variables 
                  sociales, físicas y ambientales del entorno, a través de la integración 
                  multidisciplinaria de los diferentes actores, a fin de lograr un mejor 
                  nivel de vida de la comunidad.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Al 2030, la Corporación Ambiental, Cultural y Social Tibouchina, será una 
                  Organización No Gubernamental en el ámbito local y regional, líder y 
                  competitiva en la estructuración, presentación, implementación y ejecución 
                  de políticas, estrategias y proyectos integrales desde el modelo de 
                  desarrollo sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Trabajo */}
      <section className="py-16 bg-green-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestras Áreas de Trabajo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Ambiental */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem  translateZ="40" className='flex justify-center'>
                <img src="/assets/img-a.jpg" alt="Ambiental" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text-purple-800 mb-3 dark:text-purple-800"
                >
                  Ambiental
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Conservación de la biodiversidad, estudios de impacto ambiental, 
                  restauración de ecosistemas y educación ambiental.
                </CardItem>
              </CardBody>
            </CardContainer>
            {/* Card Cultural */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem  translateZ="40" className='flex justify-center'>
                <img src="/assets/img-c.jpg" alt="Cultural" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text-green-800 mb-3 dark:text-green-800"
                >
                  Cultural
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Preservación del patrimonio cultural, promoción de tradiciones locales 
                  y desarrollo del Festival Camino del Quindío.
                </CardItem>
              </CardBody>
            </CardContainer>
            
            {/* Card Social */}
            <CardContainer className="inter-var py-0">
              <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-green-500/[0.3] hover:border-green-500/[0.5] dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.3] dark:bg-white dark:border-gray/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border text-center shadow-2xl shadow-gray-400/60 transition-all duration-300">
                <CardItem  translateZ="40" className='flex justify-center'>
                <img src="/assets/img-c.jpg" alt="Social" />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-semibold text--800 mb-3 dark:text-yellow-800"
                >
                  Social
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-600 text-sm max-w-sm mt-2 dark:text-gray-600"
                >
                  Proyectos de desarrollo comunitario, atención a poblaciones vulnerables 
                  y promoción de la participación ciudadana.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestra Experiencia
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={29}
                  duration={3}
                  delay={0.5}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
              <p className="text-gray-700">Años de experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={32}
                  duration={3}
                  delay={0.7}
                  suffix="+"
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
              <p className="text-gray-700">Proyectos ejecutados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={6}
                  duration={3}
                  delay={0.9}
                  prefix="$"
                  suffix="B+"
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
              <p className="text-gray-700">Valor en contratos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={15}
                  duration={3}
                  delay={1.1}
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
              <p className="text-gray-700">Profesionales especializados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tienes un proyecto ambiental en mente?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos para desarrollar juntos soluciones sostenibles para tu comunidad.
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Contactar Ahora
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
