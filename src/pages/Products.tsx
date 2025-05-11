
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag, ShoppingCart, ArrowRight } from 'lucide-react';

const Products = () => {
  // Sample product data - in a real application this would come from an API
  const products = [
    {
      id: 1,
      title: 'Curso de Marketing Digital',
      description: 'Aprenda estratégias avançadas de marketing digital para aumentar suas vendas.',
      price: 297.00,
      category: 'digital',
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'E-book: Finanças Pessoais',
      description: 'Guia completo para organizar suas finanças e conquistar independência financeira.',
      price: 47.90,
      category: 'digital',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      title: 'Planilha de Gestão Financeira',
      description: 'Template profissional para controle de despesas e investimentos.',
      price: 67.00,
      category: 'digital',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 4,
      title: 'Agenda Planejamento Anual',
      description: 'Agenda física para organização de metas e tarefas diárias.',
      price: 89.90,
      category: 'físico',
      imageUrl: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 5,
      title: 'Kit Empreendedor Digital',
      description: 'Material completo para quem quer começar a empreender na internet.',
      price: 197.00,
      category: 'digital',
      imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 6,
      title: 'Camiseta Programador',
      description: 'Camiseta 100% algodão com estampa exclusiva.',
      price: 59.90,
      category: 'físico',
      imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Produtos em Destaque
        </h1>
        <p className="text-lg text-gray-600">
          Descubra produtos digitais e físicos selecionados para ajudar você a alcançar seus objetivos.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-lg">
          <Button variant="ghost" className="rounded-md bg-white shadow-sm">Todos</Button>
          <Button variant="ghost" className="rounded-md">Digitais</Button>
          <Button variant="ghost" className="rounded-md">Físicos</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="aspect-video w-full overflow-hidden bg-gray-100">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <div className="flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded">
                  <Tag className="h-3.5 w-3.5 mr-1" />
                  {product.category === 'digital' ? 'Digital' : 'Físico'}
                </div>
              </div>
              <CardDescription className="line-clamp-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="w-full gap-2">
                <ShoppingCart className="h-4 w-4" /> Comprar
              </Button>
              <Button variant="outline" className="px-3">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Detalhes</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/registro/criador" className="inline-flex">
          <Button variant="outline" size="lg" className="gap-2">
            É um criador? Venda seus produtos aqui <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
