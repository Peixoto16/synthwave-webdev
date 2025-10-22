import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, Tech Solutions",
      comment: "Site impecável! A performance e o design superaram todas as expectativas. Recomendo muito.",
      rating: 5
    },
    {
      name: "Ana Rodrigues",
      role: "Founder, Style Store",
      comment: "Profissional excepcional. Entregou antes do prazo e o e-commerce está convertendo muito bem.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "Diretor, Inovação Digital",
      comment: "Melhor investimento que fiz. O sistema personalizado resolveu todos nossos problemas de gestão.",
      rating: 5
    }
  ];

  return (
    <section className="px-4 py-16 sm:py-24">
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
