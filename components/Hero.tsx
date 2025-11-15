
import React from 'react';
import { PlayIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Entretenimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]">Ilimitado</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
          Assista seus canais favoritos em alta qualidade com o melhor serviço de IPTV do Brasil
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#planos" className="flex items-center gap-2 bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
            <PlayIcon className="w-5 h-5" /> Ver Planos
          </a>
          <a href="#contato" className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:border-gray-700 transition-colors w-full sm:w-auto">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
