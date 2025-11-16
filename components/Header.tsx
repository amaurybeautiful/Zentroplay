
import React, { useState } from 'react';
import { ZentroplayLogo } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Planos', href: '#planos' },
    { name: 'Programa de Indicação', href: '#indicacao' },
  ];

  return (
    <header className="py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <ZentroplayLogo className="w-10 h-10" />
          <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]">ZENTROPLAY</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden md:block bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
          Entre em Contato
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contato" className="bg-[linear-gradient(90deg,#3d8bff,#ab23ff)] text-white font-semibold py-2 px-8 rounded-lg hover:opacity-90 transition-opacity w-full text-center" onClick={() => setIsMenuOpen(false)}>
              Entre em Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;