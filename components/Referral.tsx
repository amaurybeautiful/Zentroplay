
import React from 'react';
import { UsersIcon, DollarIcon, GiftIcon, StarIcon, ShieldIcon, LightningIcon } from './Icons';

interface ReferralPlan {
  title: string;
  price: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isHighlighted?: boolean;
}

const referralPlans: ReferralPlan[] = [
  {
    title: '1 Tela Mensal',
    price: '10/mês',
    description: 'Ganhe mensalmente por cada indicação ativa',
    icon: GiftIcon,
  },
  {
    title: '2 Telas Mensal',
    price: '20/mês',
    description: 'Ganhe mensalmente por cada indicação ativa',
    icon: StarIcon,
    isHighlighted: true,
  },
  {
    title: '1 Tela Semestral',
    price: '25',
    description: 'Ganhe por cada indicação semestral',
    icon: ShieldIcon,
  },
  {
    title: '2 Telas Semestral',
    price: '70',
    description: 'Ganhe por cada indicação semestral',
    icon: LightningIcon,
  },
];


const ReferralCard: React.FC<{ plan: ReferralPlan }> = ({ plan }) => {
  const Icon = plan.icon;
  const cardClasses = `bg-[#13131c] p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center relative h-full ${
    plan.isHighlighted ? 'border-2 border-blue-500 shadow-[0_0_20px_rgba(61,139,255,0.4)]' : ''
  }`;
  
  return (
    <div className={cardClasses}>
      {plan.isHighlighted && (
        <div className="absolute top-3 right-3 text-yellow-400">
          <StarIcon className="w-6 h-6 fill-yellow-400"/>
        </div>
      )}
      <div className="bg-blue-500/10 p-4 rounded-full mb-6">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-white flex-grow">{plan.title}</h3>
      <div className="my-6">
        <span className="text-white text-4xl font-extrabold">
          <span className="text-2xl font-semibold align-top mr-1">R$</span>
          {plan.price}
        </span>
      </div>
      <p className="text-gray-400 mb-6 flex-grow">{plan.description}</p>
      <div className="border-t border-gray-800 w-full pt-4">
        <p className="text-blue-400 flex items-center justify-center gap-2">
          <LightningIcon className="w-4 h-4" /> Pagamento garantido
        </p>
      </div>
    </div>
  );
};


const Referral: React.FC = () => {
  return (
    <section id="indicacao" className="py-20 bg-[#0d0d17]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
              <div className="bg-blue-500/10 p-4 rounded-full">
                <UsersIcon className="w-10 h-10 text-blue-400"/>
              </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Programa de Indicação</h2>
          <p className="text-lg text-gray-400 mt-4">Ganhe dinheiro indicando amigos e família para o Zentroplay</p>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center gap-2 bg-[#1c1c28] border border-gray-700 text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
              <DollarIcon className="w-5 h-5" /> Quanto mais indicar, mais você ganha!
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {referralPlans.map((plan, index) => (
            <ReferralCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Referral;
