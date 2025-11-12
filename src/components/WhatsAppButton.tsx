import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  fixed?: boolean;
}

const WhatsAppButton = ({
  phone = "5511999999999",
  message = "Olá! Gostaria de saber mais sobre seus serviços.",
  fixed = false,
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const baseClasses = `
    flex items-center gap-2
    bg-green-500 text-white
    hover:bg-green-600
    shadow-lg shadow-green-500/50
    border border-green-600
    rounded-full
    transition-all duration-300
    hover:shadow-green-500/70
    hover:scale-110
    font-semibold
  `;

  if (fixed) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          <Button size="lg" className={baseClasses}>
            <MessageCircle className="h-6 w-6" />
            <span className="hidden sm:inline">Fale Agora</span>
          </Button>
        </div>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button size="lg" className={baseClasses}>
        <MessageCircle className="h-5 w-5" />
        💬 Quero Meu Orçamento Grátis
      </Button>
    </a>
  );
};

export default WhatsAppButton;
