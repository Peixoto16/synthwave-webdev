import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, Tech Solutions",
      comment: "🚀 Site impecável! Carrega em menos de 2 segundos e nossas conversões aumentaram 40% no primeiro mês. A performance e o design superaram todas as expectativas!",
      rating: 5
    },
    {
      name: "Ana Rodrigues",
      role: "Founder, Style Store",
      comment: "💯 Profissional excepcional! Entregou 3 dias antes do prazo e o site está convertendo 3x mais que o anterior. Melhor investimento que fiz para meu negócio.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "Diretor, Inovação Digital",
      comment: "⭐ O sistema personalizado resolveu todos nossos problemas. Economizamos 15 horas por semana em processos manuais. Vale cada centavo!",
      rating: 5
    }
  ];

  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Depoimentos</h2>
          <p className="text-lg text-muted-foreground">
            O que meus clientes dizem sobre o trabalho
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border bg-gradient-card animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-2 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <MessageSquare className="h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-muted-foreground italic">{testimonial.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
