
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Logo size="small" />
              <span className="text-xl font-bold text-primary">ClickCenter</span>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              A plataforma completa de hospedagem e venda de produtos físicos e digitais.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produtos" className="text-gray-600 hover:text-primary">Produtos</Link></li>
              <li><Link to="/como-funciona" className="text-gray-600 hover:text-primary">Como Funciona</Link></li>
              <li><Link to="/precos" className="text-gray-600 hover:text-primary">Preços</Link></li>
              <li><Link to="/afiliados" className="text-gray-600 hover:text-primary">Programa de Afiliados</Link></li>
              <li><Link to="/criadores" className="text-gray-600 hover:text-primary">Para Criadores</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ajuda" className="text-gray-600 hover:text-primary">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="text-gray-600 hover:text-primary">Contato</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">Perguntas Frequentes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/termos" className="text-gray-600 hover:text-primary">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-600 hover:text-primary">Política de Privacidade</Link></li>
              <li><Link to="/reembolso" className="text-gray-600 hover:text-primary">Política de Reembolso</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} ClickCenter. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Fundadores: Mário &amp; Rosy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
