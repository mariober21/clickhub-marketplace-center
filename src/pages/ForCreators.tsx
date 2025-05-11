
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, ShoppingCart, Users, Share } from 'lucide-react';

const ForCreators = () => {
  const benefits = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Produtos Digitais e Físicos",
      description: "Venda e-books, cursos, planilhas, templates ou produtos físicos em uma mesma plataforma."
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "Checkout Otimizado",
      description: "Checkout otimizado para conversão com múltiplas opções de pagamento: cartão, boleto ou PIX."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Rede de Afiliados",
      description: "Acesso a uma rede de afiliados prontos para promover seus produtos e aumentar suas vendas."
    },
    {
      icon: <Share className="h-10 w-10 text-primary" />,
      title: "Hospedagem e Entrega",
      description: "Hospedagem de arquivos e entrega automática de produtos digitais, sem complicações."
    },
  ];

  const pricingPlans = [
    {
      name: "Básico",
      price: "0",
      description: "Para quem está começando",
      features: [
        "Até 5 produtos digitais",
        "Página de vendas básica",
        "Checkout integrado",
        "Taxa de 10% + R$1 por venda",
        "Suporte por email"
      ],
      cta: "Começar grátis"
    },
    {
      name: "Profissional",
      price: "97",
      description: "Para criadores em crescimento",
      popular: true,
      features: [
        "Produtos ilimitados",
        "Páginas de vendas avançadas",
        "Checkout personalizado",
        "Taxa de 5% por venda",
        "Rede de afiliados",
        "Suporte prioritário"
      ],
      cta: "Escolher plano"
    },
    {
      name: "Enterprise",
      price: "297",
      description: "Para negócios estabelecidos",
      features: [
        "Tudo do plano Profissional",
        "Domínio personalizado",
        "Taxa reduzida de 3% por venda",
        "API de integração",
        "Gestor de conta dedicado",
        "Relatórios avançados"
      ],
      cta: "Falar com vendas"
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            A plataforma completa para criadores de conteúdo
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Hospede, venda e gerencie seus produtos digitais e físicos em um só lugar. 
            Aumente suas vendas com nossa rede de afiliados integrada.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
              <Link to="/registro/criador">Criar minha loja <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Comece a vender em menos de 5 minutos
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-gray-100 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Produtos Digitais</h3>
                <p className="text-sm text-gray-600">E-books, cursos, planilhas</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Produtos Físicos</h3>
                <p className="text-sm text-gray-600">Entrega automatizada</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Pagamentos</h3>
                <p className="text-sm text-gray-600">Múltiplas formas</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-1">Afiliados</h3>
                <p className="text-sm text-gray-600">Rede integrada</p>
              </div>
            </div>
            
            <div className="mt-6 bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">João da Silva</div>
                  <div className="text-sm text-gray-500">Criador desde 2023</div>
                </div>
              </div>
              <div className="mt-3 text-sm italic text-gray-600">
                "A ClickCenter me ajudou a aumentar minhas vendas em mais de 200% nos primeiros 3 meses. A rede de afiliados fez toda a diferença no meu negócio."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tudo o que você precisa para vender online</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A ClickCenter oferece todas as ferramentas necessárias para você criar, hospedar e vender seus produtos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-md transition-all border-t-4 border-t-primary">
              <CardHeader>
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Como começar a vender</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Em apenas 3 passos simples você pode começar a vender seus produtos na ClickCenter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Crie sua conta</h3>
              <p className="text-gray-600">Cadastre-se gratuitamente como criador de conteúdo em menos de 2 minutos.</p>
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary -z-10 transform -translate-x-8"></div>
          </div>

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Adicione produtos</h3>
              <p className="text-gray-600">Faça upload dos seus produtos digitais ou cadastre seus produtos físicos.</p>
            </div>
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary -z-10 transform -translate-x-8"></div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Comece a vender</h3>
            <p className="text-gray-600">Compartilhe sua página de vendas ou ative nossa rede de afiliados para promover.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Planos e Preços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a vender hoje mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-md' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                  Mais popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R${plan.price}</span>
                  {plan.price !== "0" && <span className="text-gray-500 ml-2">/mês</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-gray-700'}`}>
                  <Link to="/registro/criador">
                    {plan.cta}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre como vender na ClickCenter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quais tipos de produtos posso vender?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Você pode vender qualquer tipo de produto digital (e-books, cursos online, templates, planilhas, etc) ou físico, desde que esteja em conformidade com nossos termos de uso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Como recebo meus pagamentos?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Os pagamentos são processados automaticamente e transferidos para sua conta bancária ou método de pagamento preferido (PIX, PayPal) em ciclos de 15 ou 30 dias, dependendo do seu plano.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Como funciona a rede de afiliados?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nossa rede de afiliados pode escolher promover seus produtos. Você define a comissão que deseja pagar (entre 10% e 50%) e os afiliados ganham essa porcentagem a cada venda realizada.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Existe limite de tamanho para uploads?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                O plano Básico permite arquivos de até 500MB. Os planos Profissional e Enterprise permitem arquivos de até 5GB e 20GB, respectivamente. Oferecemos também soluções para streaming de vídeo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para começar a vender?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de criadores que já estão lucrando com a ClickCenter. Crie sua conta hoje e comece a vender em minutos.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
          <Link to="/registro/criador">Criar minha loja agora <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
};

export default ForCreators;
