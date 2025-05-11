
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "O sistema de login estará disponível em breve.",
      duration: 3000,
    });
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Acessar ClickCenter</CardTitle>
          <CardDescription className="text-center">
            Entre com seu e-mail e senha para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cliente" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="cliente">Cliente</TabsTrigger>
              <TabsTrigger value="afiliado">Afiliado</TabsTrigger>
              <TabsTrigger value="criador">Criador</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cliente">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <Link to="/esqueci-senha" className="text-sm text-primary hover:underline">
                        Esqueci a senha
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Entrar como Cliente</Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="afiliado">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-afiliado">E-mail</Label>
                    <Input id="email-afiliado" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password-afiliado">Senha</Label>
                      <Link to="/esqueci-senha" className="text-sm text-primary hover:underline">
                        Esqueci a senha
                      </Link>
                    </div>
                    <Input id="password-afiliado" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Entrar como Afiliado</Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="criador">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-criador">E-mail</Label>
                    <Input id="email-criador" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password-criador">Senha</Label>
                      <Link to="/esqueci-senha" className="text-sm text-primary hover:underline">
                        Esqueci a senha
                      </Link>
                    </div>
                    <Input id="password-criador" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Entrar como Criador</Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm w-full">
            Não tem uma conta?{" "}
            <Link to="/registro" className="text-primary font-medium hover:underline">
              Registre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
