import { useState } from "react";
import { z } from "zod";
import { Mail, Lock } from "lucide-react";

const MAILCHIMP_ACTION = "https://seulinkdolista.mailchimp.com/subscribe";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .max(100, { message: "Nome muito longo" })
    .optional(),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail muito longo" }),
});

export function LeadMagnet() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const result = leadSchema.safeParse({
      name: formData.get("FNAME") as string,
      email: formData.get("EMAIL") as string,
    });

    if (!result.success) {
      e.preventDefault();
      setError(result.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }
    setError(null);
  };

  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-[700px]">
        <div className="rounded-[24px] bg-accent/60 p-8 text-center shadow-elegant sm:p-12">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-7 w-7" />
            </div>
          </div>
          <h3 className="mb-3 text-2xl font-extrabold sm:text-3xl">
            📬 Receba 3 atividades <span className="text-gradient-primary">GRÁTIS</span>
          </h3>
          <p className="mx-auto mb-6 max-w-[480px] text-base text-muted-foreground">
            Teste o método com seu filho antes de comprar. Enviamos por e-mail em 1 minuto.
          </p>

          <form
            action={MAILCHIMP_ACTION}
            method="post"
            target="_blank"
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col items-center gap-3"
          >
            <input
              type="text"
              name="FNAME"
              placeholder="Seu nome"
              maxLength={100}
              className="w-full max-w-[320px] rounded-full border border-border bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="EMAIL"
              placeholder="Seu melhor e-mail"
              required
              maxLength={255}
              className="w-full max-w-[320px] rounded-full border border-border bg-background px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && (
              <p className="text-sm font-medium text-destructive" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="mt-2 inline-flex w-full max-w-[320px] items-center justify-center rounded-full bg-gradient-cta px-8 py-3.5 text-base font-extrabold uppercase tracking-wide text-white shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta-hover sm:text-lg"
            >
              QUERO MEU PDF GRÁTIS →
            </button>
          </form>

          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> Prometemos não enviar spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
}
