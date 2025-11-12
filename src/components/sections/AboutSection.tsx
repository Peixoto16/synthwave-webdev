import { Code2, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-card sm:p-12 animate-fade-in">
          <div className="grid gap-8 md:grid-cols-[1fr,2fr] md:gap-12 items-center">
            {/* Photo placeholder */}
            <div className="mx-auto w-full max-w-[300px]">
              <div className="aspect-square rounded-2xl border-2 border-primary/20 bg-secondary/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
                <img src="../img/foto.png" alt="Israel Peixoto" className="h-full w-full object-cover" />
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
                Sou <span className="font-semibold text-foreground">Israel Peixoto</span>, desenvolvedor especializado em criar sites que <span className="font-semibold text-primary">convertem visitantes em clientes</span>.
                Formando em Ciência da Computação, já ajudei dezenas de empresas e profissionais a terem uma presença digital que gera autoridade e vendas.
              </p>
              
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">⚡ Meu diferencial?</span> Cada projeto é feito do zero, linha por linha, com foco em performance, design moderno e código limpo.
                Nada de templates prontos ou soluções genéricas que todo mundo tem.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Meu objetivo é simples: <span className="font-semibold text-primary">transformar seu investimento em resultados reais</span>. Sites rápidos, seguros e otimizados para SEO e conversão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
