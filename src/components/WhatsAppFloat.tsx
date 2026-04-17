import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/55SEUNUMERO"
      target="_blank"
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_20px_oklch(0.72_0.17_162_/_0.4)] transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
