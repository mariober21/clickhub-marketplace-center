
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar a vender?</h2>
          <p className="text-lg opacity-90 mb-10">
            Junte-se a milhares de criadores e empreendedores que estão transformando suas ideias em negócios lucrativos com a ClickCenter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/registro/criador">Criar minha conta de criador</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/registro/afiliado">Tornar-me afiliado</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
