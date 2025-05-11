
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Cadastre-se na plataforma",
      description: "Crie sua conta gratuita de cliente, afiliado ou criador de conteúdo em menos de 2 minutos.",
      icon: "🚀",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Explore nosso catálogo",
      description: "Navegue por uma ampla variedade de produtos digitais e físicos de alta qualidade.",
      icon: "🔍",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Compre com segurança",
      description: "Utilize nosso checkout seguro com diversas opções de pagamento: cartão, PIX ou boleto.",
      icon: "🛒",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Acesse imediatamente",
      description: "Produtos digitais são liberados instantaneamente. Produtos físicos são enviados em até 24h.",
      icon: "⚡",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const features = [
    {
      title: "Para Compradores",
      items: [
        "Acesso imediato a produtos digitais",
        "Área de membros organizada",
        "Suporte prioritário",
        "Garantia de satisfação"
      ],
      buttonText: "Explorar produtos",
      buttonLink: "/produtos"
    },
    {
      title: "Para Afiliados",
      items: [
        "Comissões atrativas",
        "Dashboard de performance",
        "Links personalizados",
        "Pagamentos automáticos"
      ],
      buttonText: "Tornar-me afiliado",
      buttonLink: "/afiliados"
    },
    {
      title: "Para Criadores",
      items: [
        "Upload ilimitado de produtos",
        "Gestão de vendas e clientes",
        "Páginas de vendas prontas",
        "Sistema de afiliados integrado"
      ],
      buttonText: "Criar minha loja",
      buttonLink: "/criadores"
    }
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Como Funciona a ClickCenter
        </h1>
        <p className="text-lg text-gray-600">
          Uma plataforma completa para comprar, vender e promover produtos digitais e físicos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
            )}
            <div className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-3xl mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Uma plataforma para todos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seja você um comprador procurando produtos de qualidade, um afiliado em busca de comissões ou um criador querendo vender seu conhecimento, a ClickCenter é feita para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <ul className="space-y-2 mb-6">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link to={feature.buttonLink}>
                  {feature.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h2>
        <p className="text-gray-600 mb-6">Nossa equipe está pronta para ajudar você a tirar o máximo da plataforma.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/faq">
            <Button variant="outline">Perguntas Frequentes</Button>
          </Link>
          <Link to="/contato">
            <Button variant="outline">Falar com Suporte</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
