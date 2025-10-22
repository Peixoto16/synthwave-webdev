import { Code2, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Premium",
      description: "Loja virtual completa com carrinho, checkout e painel administrativo",
      features: ["Pagamento integrado", "Dashboard analítico", "SEO otimizado"],
      date: "2025"
    },
    {
      title: "Sistema de Gestão",
      description: "Plataforma web para gestão de clientes, projetos e relatórios",
      features: ["Autenticação segura", "Relatórios em tempo real", "API REST"],
      date: "2024"
    },
    {
      title: "Landing Page Conversiva",
      description: "Site institucional com foco em conversão e performance",
      features: ["Carregamento < 2s", "100% responsivo", "Formulários integrados"],
      date: "2024"
    }
  ];

  return (
    <section id="projetos" className="px-4 py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Projetos Recentes</h2>
          <p className="text-lg text-muted-foreground">
            Cada linha de código pensada para entregar o melhor resultado
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 hidden md:block">
                  <div className="h-5 w-5 rounded-full border-4 border-background bg-primary animate-pulse-glow"></div>
                </div>
                
                {/* Card */}
                <div className="md:ml-20">
                  <Card className="group border-border bg-gradient-card transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 text-sm font-medium text-primary">{project.date}</div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <p className="text-muted-foreground">{project.description}</p>
                        </div>
                        <div className="rounded-lg bg-secondary/50 p-4">
                          <Code2 className="h-8 w-8 text-primary/50 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
