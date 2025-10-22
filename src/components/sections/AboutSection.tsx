import { Code2, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card sm:p-12 animate-fade-in">
          <div className="grid gap-8 md:grid-cols-[1fr,2fr] md:gap-12 items-center">
            {/* Photo placeholder */}
            <div className="mx-auto w-full max-w-[280px]">
              <div className="aspect-square rounded-2xl border-2 border-primary/20 bg-secondary/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
                <User className="h-24 w-24 text-primary/30" />
              </div>
            </div>
            
            {/* Text content */}
            <div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
