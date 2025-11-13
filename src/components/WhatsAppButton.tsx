import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  fixed?: boolean;
}

const WhatsAppButton = ({
  phone = "5533999009090",  // Número formatado para o link do WhatsApp
  message = "Olá! Gostaria de saber mais sobre seus serviços.",
  fixed = false,
}: WhatsAppButtonProps) => {
  const defaultMessage = "Olá! Gostaria de saber mais sobre a criação do meu site profissional. Vi seu portfólio e fiquei interessado(a) em fazer um orçamento. Pode me ajudar?\n";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message || defaultMessage)}`;

  const baseClasses = `
    flex items-center justify-center gap-2
    bg-green-500 text-white
    hover:bg-green-600
    shadow-lg shadow-green-500/50
    border border-green-600
    rounded-full
    transition-all duration-300
    hover:shadow-green-500/70
    hover:scale-105
    font-semibold
    w-full sm:w-auto
    px-6 py-3
    text-sm sm:text-base
    whitespace-nowrap
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
    <div className="w-full flex justify-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:max-w-xs"
      >
        <Button size="lg" className={baseClasses}>
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="truncate">Quero Meu Orçamento Grátis</span>
        </Button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
