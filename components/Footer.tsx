import React from 'react';
import { ZentroplayLogo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center">
            <ZentroplayLogo className="h-8 w-auto" />
        </div>
        <p className="text-gray-500 text-sm text-center sm:text-right">
          © 2025 Zentroplay. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;