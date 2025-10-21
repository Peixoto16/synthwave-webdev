import { Code2, Zap, Shield, CheckCircle2, X, Star, MessageSquare, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton fixed />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDE5OSA4OSUgNDglIC8gMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="container relative z-10 mx-auto max-w-6xl text-center">
          <div className="animate-fade-in">
            <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              100% Código Limpo • Performance Superior
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Sites <span className="text-gradient">Programados</span>
              <br />
              Que Vendem de Verdade
            </h1>
            
            <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Desenvolvimento web profissional, sistemas personalizados e agentes de IA.
              <br />
              Sem arrasta e cola. Só código de qualidade.
            </p>
            
            <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">A partir de R$ 2.500</span>
              </div>
              <div className="hidden h-5 w-px bg-border sm:block"></div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5" />
                <span className="text-sm">Entrega em 7-15 dias</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton message="Olá! Quero um orçamento para um site profissional." />
              <Button variant="outline" size="lg" asChild>
                <a href="#projetos">
                  Ver Projetos
                  <ChevronDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card sm:p-12 animate-fade-in">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold sm:text-3xl">Sobre mim</h2>
            </div>
            
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              Desenvolvedor especializado em criar sites e sistemas que realmente funcionam. 
              Com anos de experiência em programação profissional, entrego soluções sob medida 
              que combinam design moderno, performance otimizada e código limpo.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cada projeto é desenvolvido do zero, pensado para o seu negócio. 
              Nada de templates prontos ou ferramentas arrasta-e-cola — apenas código 
              profissional que escala e entrega resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="px-4 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Projetos Recentes</h2>
            <p className="text-lg text-muted-foreground">
              Cada linha de código pensada para entregar o melhor resultado
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Premium",
                description: "Loja virtual completa com carrinho, checkout e painel administrativo",
                features: ["Pagamento integrado", "Dashboard analítico", "SEO otimizado"]
              },
              {
                title: "Sistema de Gestão",
                description: "Plataforma web para gestão de clientes, projetos e relatórios",
                features: ["Autenticação segura", "Relatórios em tempo real", "API REST"]
              },
              {
                title: "Landing Page Conversiva",
                description: "Site institucional com foco em conversão e performance",
                features: ["Carregamento < 2s", "100% responsivo", "Formulários integrados"]
              }
            ].map((project, index) => (
              <Card 
                key={index} 
                className="group border-border bg-gradient-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 h-40 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Code2 className="h-16 w-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-4 py-16 sm:py-24 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Programado vs Arrasta & Cola
            </h2>
            <p className="text-lg text-muted-foreground">
              Entenda a diferença que faz o código profissional
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Programado */}
            <Card className="border-primary/50 bg-gradient-card shadow-glow animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Site Programado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Performance otimizada (< 2s de carregamento)",
                    "SEO avançado e indexação perfeita",
                    "Código limpo e escalável",
                    "Customização total e ilimitada",
                    "Segurança profissional",
                    "Manutenção facilitada",
                    "Totalmente responsivo",
                    "Integração com qualquer sistema"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Arrasta e Cola */}
            <Card className="border-border/50 bg-card animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl opacity-70">
                  <X className="h-6 w-6 text-muted-foreground" />
                  Arrasta e Cola
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Lento e pesado (5s+ de carregamento)",
                    "SEO limitado e problemas de indexação",
                    "Código poluído e cheio de bugs",
                    "Limitado aos templates disponíveis",
                    "Vulnerabilidades conhecidas",
                    "Difícil de manter e atualizar",
                    "Responsividade limitada",
                    "Integrações restritas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground line-through">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Depoimentos</h2>
            <p className="text-lg text-muted-foreground">
              O que meus clientes dizem sobre o trabalho
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
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
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border bg-gradient-card animate-fade-in"
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

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:py-24 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o processo
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            <AccordionItem value="item-1" className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Quanto tempo leva para desenvolver um site?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Depende da complexidade, mas geralmente entre 7 a 15 dias para projetos padrão. 
                Sites mais elaborados ou sistemas personalizados podem levar de 3 a 6 semanas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Qual é o investimento inicial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Projetos começam a partir de R$ 2.500 para landing pages profissionais. 
                E-commerces e sistemas personalizados variam de acordo com as funcionalidades necessárias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Vocês fazem manutenção após a entrega?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Ofereço planos de manutenção mensal e também atendimento pontual 
                para atualizações, correções e melhorias no seu site ou sistema.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                O que são agentes de IA personalizados?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                São assistentes inteligentes desenvolvidos para automatizar tarefas específicas do seu negócio: 
                atendimento ao cliente, análise de dados, geração de conteúdo e muito mais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="px-4 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in rounded-2xl border border-primary/20 bg-gradient-card p-8 shadow-glow sm:p-12">
            <Shield className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Pronto para ter um site profissional?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Entre em contato agora e receba um orçamento personalizado para o seu projeto.
            </p>
            <WhatsAppButton message="Olá! Quero receber um orçamento detalhado." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 Desenvolvimento Web Profissional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
