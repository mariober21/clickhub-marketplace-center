
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, Users, Percent, DollarSign } from 'lucide-react';

const AffiliateProgram = () => {
  const benefits = [
    {
      icon: <Percent className="h-12 w-12 text-primary" />,
      title: "Comissões Atrativas",
      description: "Ganhe até 50% de comissão em cada venda realizada através do seu link de afiliado."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Pagamentos Mensais",
      description: "Receba seus ganhos mensalmente via PIX, transferência bancária ou PayPal."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Acesso a Produtos Exclusivos",
      description: "Promova produtos de alta conversão selecionados por nossa equipe."
    }
  ];

  return (
    <div className="container py-12 md:py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 md:p-12 mb-16">
        <div className="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Programa de Afiliados ClickCenter</h1>
          <p className="text-xl opacity-90 mb-8">
            Monetize sua audiência promovendo produtos de qualidade e ganhe comissões atrativas em cada venda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/registro/afiliado">Tornar-me afiliado</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/login">Já sou afiliado</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center hover:shadow-md transition-all">
            <CardHeader>
              <div className="mx-auto mb-4">
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

      {/* How It Works Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Como Funciona</h2>
          <p className="text-gray-600">Em apenas 3 passos simples</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-primary mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Cadastre-se</h3>
            <p className="text-gray-600">Crie sua conta de afiliado gratuitamente em menos de 2 minutos.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-primary mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Escolha produtos</h3>
            <p className="text-gray-600">Selecione os produtos que deseja promover e gere seus links de afiliado.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-primary mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Promova e ganhe</h3>
            <p className="text-gray-600">Compartilhe seus links e ganhe comissões a cada venda realizada.</p>
          </div>
        </div>
      </div>

      {/* Commission Table */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Estrutura de Comissões</h2>
          <p className="text-gray-600">Ganhe comissões atrativas em diferentes categorias de produtos</p>
        </div>

        <Card>
          <CardContent className="p-0 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Comissão</TableHead>
                  <TableHead>Período de Cookie</TableHead>
                  <TableHead>Pagamento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">E-books e Planilhas</TableCell>
                  <TableCell>50%</TableCell>
                  <TableCell>30 dias</TableCell>
                  <TableCell>Mensal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cursos Online</TableCell>
                  <TableCell>40%</TableCell>
                  <TableCell>30 dias</TableCell>
                  <TableCell>Mensal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Assinaturas</TableCell>
                  <TableCell>30% recorrente</TableCell>
                  <TableCell>30 dias</TableCell>
                  <TableCell>Mensal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Produtos Físicos</TableCell>
                  <TableCell>15-20%</TableCell>
                  <TableCell>15 dias</TableCell>
                  <TableCell>Mensal</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">O Que Dizem Nossos Afiliados</h2>
          <p className="text-gray-600">Histórias de sucesso de quem já está lucrando com o programa</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                  CM
                </div>
                <div>
                  <h4 className="font-semibold">Carlos Mendes</h4>
                  <p className="text-sm text-gray-500">Afiliado há 8 meses</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Desde que comecei a promover os produtos da ClickCenter, minhas receitas mensais aumentaram em 300%. O sistema é muito intuitivo e o suporte é excelente!"
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                  FS
                </div>
                <div>
                  <h4 className="font-semibold">Fernanda Silva</h4>
                  <p className="text-sm text-gray-500">Afiliada há 1 ano</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Os produtos são de altíssima qualidade, o que torna o trabalho de afiliado muito mais fácil. As comissões são pagas pontualmente e o dashboard é completo."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Comece a Ganhar Hoje Mesmo</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Junte-se a centenas de afiliados que já estão lucrando com a promoção de produtos de alta qualidade na ClickCenter.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8">
          <Link to="/registro/afiliado">Cadastre-se como Afiliado <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  );
};

export default AffiliateProgram;
