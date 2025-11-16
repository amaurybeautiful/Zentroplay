import React from 'react';
import { CheckIcon, DollarIcon, LightbulbIcon } from './Icons';

interface PricingPlan {
  title: string;
  screens: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
  isSavings?: boolean;
  savings?: number;
}

const plans: PricingPlan[] = [
  {
    title: 'Mensal',
    screens: '1 Tela',
    price: 35,
    period: 'mês',
    features: ['Qualidade HD/Full HD', 'Suporte 24/7', 'Sem contrato'],
  },
  {
    title: 'Mensal',
    screens: '2 Telas',
    price: 50,
    period: 'mês',
    features: ['Qualidade HD/Full HD', 'Suporte 24/7', 'Sem contrato'],
    isPopular: true,
  },
  {
    title: 'Semestral',
    screens: '1 Tela',
    price: 175,
    period: '6 meses',
    features: ['Qualidade HD/Full HD', 'Suporte 24/7', 'Sem contrato'],
    isSavings: true,
    savings: 35,
  },
  {
    title: 'Semestral',
    screens: '2 Telas',
    price: 250,
    period: '6 meses',
    features: ['Qualidade HD/Full HD', 'Suporte 24/7', 'Sem contrato'],
    isSavings: true,
    savings: 50,
  },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const cardClasses = `bg-[#13131c] p-8 rounded-2xl border border-gray-800 flex flex-col relative overflow-hidden h-full ${
    plan.isPopular ? 'border-2 border-blue-500 shadow-[0_0_20px_rgba(61,139,255,0.4)]' : ''
  } ${
    plan.isSavings ? 'border-2 border-green-500/50' : ''
  }`;

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white text-sm font-semibold px-4 py-1 rounded-b-lg">
          Mais Popular
        </div>
      )}
      {plan.isSavings && (
        <div className="absolute top-4 -right-10 transform rotate-45 bg-green-500 text-white text-xs font-bold px-10 py-1">
          Economize
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
        <p className="text-gray-400 mt-1">{plan.screens}</p>
      </div>

      <div className="text-center my-8">
        <span className="text-white text-5xl font-extrabold">
          <span className="text-2xl font-semibold align-top mr-1">R$</span>
          {plan.price}
        </span>
        <p className="text-gray-400">{plan.period}</p>
      </div>

      {plan.isSavings && (
        <div className="bg-green-500/10 border border-green-500/30 text-green-300 rounded-lg p-3 text-center mb-6">
          <p className="font-bold flex items-center justify-center gap-2"><DollarIcon className="w-5 h-5"/> Economize R$ {plan.savings}</p>
          <p className="text-xs">em relação ao plano mensal</p>
        </div>
      )}
      
      <div className="flex-grow">
          <a href="#contato" className="w-full block text-center bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
            Assinar Agora
          </a>
      </div>

      <ul className="mt-8 space-y-3 text-gray-400">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckIcon className="w-5 h-5 text-blue-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Nossos Planos</h2>
          <p className="text-lg text-gray-400 mt-4">Escolha o plano ideal para você</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center text-blue-300/70 flex items-center justify-center gap-2">
          <LightbulbIcon className="w-5 h-5 text-yellow-400" />
          <span><span className="font-bold text-yellow-400">Dica:</span> Os planos semestrais oferecem o melhor custo-benefício!</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;