
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'O que é IPTV e como funciona?',
    answer: 'IPTV (Internet Protocol Television) é um método de transmissão de sinais de televisão através da internet. Em vez de receber sinais via antena ou cabo, você recebe o conteúdo através da sua conexão de banda larga, permitindo assistir em diversos dispositivos.',
  },
  {
    question: 'Em quais dispositivos posso assistir?',
    answer: 'Nosso serviço é compatível com uma ampla gama de dispositivos, incluindo Smart TVs (Samsung, LG, etc.), TV Box (Android, Apple TV), smartphones e tablets (Android e iOS), computadores (Windows e Mac) e videogames.',
  },
  {
    question: 'Preciso de uma internet muito rápida?',
    answer: 'Recomendamos uma conexão de internet estável de pelo menos 15 Mbps para canais em HD e 30 Mbps para canais em Full HD/4K, para garantir uma experiência de streaming suave e sem interrupções.',
  },
  {
    question: 'Como é feito o pagamento?',
    answer: 'Aceitamos diversas formas de pagamento, incluindo Cartão de Crédito, Pix e Boleto Bancário. O processo é simples, rápido e totalmente seguro, realizado através do nosso formulário de contato e link de pagamento.',
  },
    {
    question: 'Posso testar o serviço antes de assinar?',
    answer: 'Sim! Oferecemos um teste gratuito para que você possa avaliar a qualidade do nosso serviço antes de se comprometer com um plano. Entre em contato conosco para solicitar seu teste.',
  },
];

const FaqAccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-6 px-2 md:px-4"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white">{item.question}</span>
        <ChevronDownIcon className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <p className="text-gray-400 pb-6 px-2 md:px-4">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-400 mt-4">Tire suas dúvidas mais comuns sobre nosso serviço.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#13131c] border border-gray-800 rounded-2xl p-2 md:p-4">
          {faqs.map((faq, index) => (
            <FaqAccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
