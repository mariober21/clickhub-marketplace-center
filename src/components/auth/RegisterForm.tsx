
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const RegisterForm = () => {
  const { toast } = useToast();
  const { tipo = 'cliente' } = useParams<{ tipo?: string }>();
  
  const userTypes = {
    cliente: {
      title: "Criar Conta de Cliente",
      description: "Acesse produtos exclusivos e faça compras na plataforma",
      buttonText: "Criar conta de cliente"
    },
    afiliado: {
      title: "Criar Conta de Afiliado",
      description: "Promova produtos e ganhe comissões por vendas",
      buttonText: "Criar conta de afiliado"
    },
    criador: {
      title: "Criar Conta de Criador",
      description: "Hospede e venda seus produtos na plataforma",
      buttonText: "Criar conta de criador"
    }
  };
  
  const currentType = userTypes[tipo as keyof typeof userTypes] || userTypes.cliente;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "O sistema de registro estará disponível em breve.",
      duration: 3000,
    });
  };
  
  return (
    <div className="max-w-md w-full mx-auto">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{currentType.title}</CardTitle>
          <CardDescription className="text-center">
            {currentType.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sobrenome">Sobrenome</Label>
                <Input id="sobrenome" placeholder="Seu sobrenome" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
            
            {tipo === 'afiliado' && (
              <div className="space-y-2">
                <Label htmlFor="pix">Chave PIX para Pagamentos</Label>
                <Input id="pix" placeholder="Sua chave PIX" />
              </div>
            )}
            
            {tipo === 'criador' && (
              <div className="space-y-2">
                <Label htmlFor="tipo-empresa">Tipo de Empresa</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pf">Pessoa Física</SelectItem>
                    <SelectItem value="mei">MEI</SelectItem>
                    <SelectItem value="me">Microempresa</SelectItem>
                    <SelectItem value="ltda">Empresa LTDA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Concordo com os <Link to="/termos" className="text-primary hover:underline">Termos de Uso</Link> e <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>
              </label>
            </div>
            
            <Button type="submit" className="w-full">{currentType.buttonText}</Button>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm w-full">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Faça login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
