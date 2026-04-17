import { useEffect, useState } from "react";
import { X, Lock, Clock } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

const KIWIFY_LINK = "https://pay.kiwify.com.br/zLhoH79";
const STORAGE_KEY = "exit-intent-shown";
const COUNTDOWN_SECONDS = 10 * 60; // 10 minutes

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    // Exit intent: mouse sai pelo topo da janela (desktop)
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) trigger();
    };

    // Mobile: dispara quando o usuário aperta "voltar"
    window.history.pushState({ exitIntent: true }, "");
    const handlePopState = () => trigger();

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(interval);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 animate-fade-up"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-[480px] rounded-[24px] bg-card p-6 text-center shadow-price sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="mb-4 inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-destructive">
          Oferta de último segundo
        </span>

        <h2
          id="exit-intent-title"
          className="mb-3 text-[clamp(1.5rem,4vw,2rem)] font-extrabold leading-tight"
        >
          Espere! <span className="text-gradient-primary">Não vá embora ainda…</span>
        </h2>

        <p className="mb-5 text-base text-muted-foreground sm:text-lg">
          Leve o Kit Completo por apenas
        </p>

        <div className="mb-2 text-sm font-medium text-muted-foreground line-through">
          De R$ 47,90 por
        </div>
        <div className="mb-5 text-[56px] font-extrabold leading-none tracking-tight text-foreground sm:text-[64px]">
          <span className="mr-1 inline-block align-top text-2xl font-extrabold sm:mt-3 sm:text-3xl">
            R$
          </span>
          37,90
        </div>

        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-primary">
          <Clock className="h-4 w-4" />
          Oferta expira em {formatTime(secondsLeft)}
        </div>

        <CtaButton href={KIWIFY_LINK} className="mx-auto" pulse>
          QUERO MEU DESCONTO
        </CtaButton>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" /> Pagamento 100% seguro · Acesso imediato
        </p>
      </div>
    </div>
  );
}
