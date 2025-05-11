
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn, ShoppingCart } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="small" />
            <span className="text-xl font-bold text-primary">ClickCenter</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li><Link to="/produtos" className="text-base font-medium transition-colors hover:text-primary">Produtos</Link></li>
              <li><Link to="/como-funciona" className="text-base font-medium transition-colors hover:text-primary">Como Funciona</Link></li>
              <li><Link to="/afiliados" className="text-base font-medium transition-colors hover:text-primary">Programa de Afiliados</Link></li>
              <li><Link to="/criadores" className="text-base font-medium transition-colors hover:text-primary">Para Criadores</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/carrinho">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrinho</span>
            </Button>
          </Link>
          <Link to="/login">
            <Button className="hidden sm:flex gap-2">
              <LogIn className="h-4 w-4" /> Entrar
            </Button>
          </Link>
          <Link to="/login" className="sm:hidden">
            <Button variant="ghost" size="icon">
              <LogIn className="h-5 w-5" />
              <span className="sr-only">Entrar</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
