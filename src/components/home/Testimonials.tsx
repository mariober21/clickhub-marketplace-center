
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A ClickCenter transformou meu negócio digital. Consigo gerenciar meus produtos, afiliados e vendas em um só lugar.",
      author: "Carlos Silva",
      role: "Criador de Conteúdo Digital",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Como afiliada, encontrei na ClickCenter uma plataforma transparente e com ótimas comissões. O sistema de pagamento é rápido e eficiente.",
      author: "Ana Ferreira",
      role: "Afiliada Top 10",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "Vender meus produtos artesanais nunca foi tão fácil. A geração automática de páginas de venda é simplesmente perfeita.",
      author: "Roberto Mendes",
      role: "Artesão e Empreendedor",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que dizem sobre nós</h2>
          <p className="text-gray-600 text-lg">
            Criadores, afiliados e clientes compartilham suas experiências com a plataforma ClickCenter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
