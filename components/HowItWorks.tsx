
import React from 'react';
import { PresentIcon } from './Icons';

interface Step {
  num: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: 1,
    title: 'Indique',
    description: 'Compartilhe o Zentroplay com amigos e família',
  },
  {
    num: 2,
    title: 'Eles Assinam',
    description: 'Suas indicações escolhem um plano',
  },
  {
    num: 3,
    title: 'Você Ganha',
    description: 'Receba sua comissão automaticamente',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-[#13131c] border border-gray-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">Como Funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            
            {/* Dashed line for desktop */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px">
                <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gray-700"></div>
                <div className="absolute top-1/2 left-1/4 w-1/4 h-px border-t-2 border-dashed border-gray-700"></div>
                <div className="absolute top-1/2 left-2/4 w-1/4 h-px border-t-2 border-dashed border-gray-700"></div>
                <div className="absolute top-1/2 left-3/4 w-1/4 h-px bg-gray-700"></div>
            </div>

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 border-2 border-blue-500 text-blue-300 rounded-full font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg">
            Comece a ganhar <span className="text-blue-400 font-bold">dinheiro extra</span> hoje mesmo! Entre em contato e descubra como participar do nosso programa de indicação.
          </p>
          <div className="mt-8">
            <a href="#contato" className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
              <PresentIcon className="w-5 h-5" /> Quero Indicar e Ganhar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;