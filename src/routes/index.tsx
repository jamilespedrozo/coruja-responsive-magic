import { createFileRoute } from "@tanstack/react-router";
import { Lock, Zap, Printer, GraduationCap } from "lucide-react";
import kitMockup from "@/assets/kit-mockup.jpg";
import cardGrafomotricidade from "@/assets/card-grafomotricidade.jpg";
import cardMatematica from "@/assets/card-matematica.jpg";
import cardAlfabeto from "@/assets/card-alfabeto.jpg";
import { CtaButton } from "@/components/CtaButton";
import { FeatureCard } from "@/components/FeatureCard";
import { SimpleFeature } from "@/components/SimpleFeature";
import { TestimonialCard } from "@/components/TestimonialCard";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dona Coruja Digital - Kit de Atividades para Educação Infantil",
      },
      {
        name: "description",
        content:
          "Desenvolva a escrita e o raciocínio do seu filho com o método lúdico. Kit completo de atividades impressas para crianças de 4 a 7 anos.",
      },
      {
        property: "og:title",
        content: "Dona Coruja Digital - Kit de Atividades para Educação Infantil",
      },
      {
        property: "og:description",
        content:
          "Kit completo de atividades impressas para crianças de 4 a 7 anos. Pagamento único com acesso vitalício.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const KIWIFY_LINK = "SEU_LINK_KIWIFY_AQUI";

const cards = [
  {
    icon: "✏️",
    image: cardGrafomotricidade,
    title: "Grafomotricidade",
    description:
      "Prepara a mão da criança para a escrita através de tracejados progressivos e extremamente divertidos.",
    items: ["32 páginas de atividades", "Coordenação motora fina", "Personagens temáticos"],
  },
  {
    icon: "🔢",
    image: cardMatematica,
    title: "Matemática Visual",
    description:
      "Introdução aos números e formas geométricas de maneira concreta e visual, eliminando a decoreba.",
    items: ["Números de 1 a 10", "Contagem e lógica", "Atividades de colorir"],
  },
  {
    icon: "🔤",
    image: cardAlfabeto,
    title: "Alfabeto Tracejado",
    description:
      "Domínio completo das letras maiúsculas e minúsculas com associação fonética (A de Abelha).",
    items: ["A-Z completo", "Escrita guiada e livre", "Fixação de som & letra"],
  },
];

const benefits = [
  "Caderno de Grafomotricidade",
  "Matemática Animada",
  "Alfabeto Tracejado A-Z",
  "BÔNUS: Desenhos para colorir",
  "Garantia INCONDICIONAL de 7 dias",
];

const testimonials = [
  {
    name: "Juliana Martins",
    role: "Mãe da Helena, 5 anos",
    initials: "JM",
    bgColor: "linear-gradient(135deg, #7C3AED, #EC4899)",
    text: "Minha filha estava com dificuldade pra segurar o lápis e em 2 semanas usando o caderno de grafomotricidade já vi uma evolução enorme. Vale cada centavo!",
  },
  {
    name: "Patrícia Souza",
    role: "Mãe do Davi, 4 anos",
    initials: "PS",
    bgColor: "linear-gradient(135deg, #EC4899, #F59E0B)",
    text: "Comprei meio na desconfiança, mas chegou tudo certinho no e-mail na hora! Imprimi e o Davi não quer mais largar. Material lindo e bem feito.",
  },
  {
    name: "Camila Ribeiro",
    role: "Pedagoga e Mãe",
    initials: "CR",
    bgColor: "linear-gradient(135deg, #10B981, #7C3AED)",
    text: "Como pedagoga eu aprovo demais! As atividades seguem a BNCC e são muito atrativas para as crianças. Indico para todas as mães da minha turma.",
  },
];

function Index() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-hero animate-fade-up px-4 pb-16 pt-16 text-center sm:pt-24 md:pb-20 md:pt-28">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <span className="mb-6 inline-block rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
            Dona Coruja Digital
          </span>
          <h1 className="mb-6 text-[clamp(2rem,6vw,4rem)] font-extrabold leading-tight">
            Desenvolva a escrita e o raciocínio do seu filho com o{" "}
            <span className="text-gradient-primary">método lúdico</span>
          </h1>
          <p className="mx-auto mb-10 max-w-[700px] text-base text-muted-foreground sm:text-lg md:text-xl">
            O kit completo de atividades impressas para crianças de 4 a 7 anos. Economize tempo de
            planejamento e garanta o aprendizado em casa de forma divertida e eficiente.
          </p>

          <img
            src={kitMockup}
            alt="Mockup do Kit Educativo Dona Coruja Digital"
            width={1024}
            height={1024}
            className="mx-auto mb-10 block h-auto w-full max-w-[500px] rounded-[20px] shadow-elegant transition-transform duration-300 hover:scale-[1.02]"
          />

          <CtaButton href={KIWIFY_LINK} pulse>
            QUERO O KIT COMPLETO
          </CtaButton>
          <span className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
            <Lock className="h-4 w-4" /> Pagamento 100% seguro · Download imediato
          </span>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <h2 className="relative mb-14 text-center text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold">
            O que você vai receber
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-primary"
            />
          </h2>
          <div className="grid gap-7 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {cards.map((c) => (
              <FeatureCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-card px-4 py-16 md:py-24">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <h2 className="relative mb-14 text-center text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold">
            Por que escolher nosso Kit Digital?
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-primary"
            />
          </h2>
          <div className="grid gap-7 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            <SimpleFeature
              icon="🖨️"
              title="Imprima em Casa"
              description="Use quantas vezes quiser. A criança errou a atividade? É só imprimir de novo, sem depender do correio."
            />
            <SimpleFeature
              icon="⚡"
              title="Acesso Imediato"
              description="Receba o link seguro por e-mail no mesmo minuto em que seu pagamento for aprovado pelo sistema."
            />
            <SimpleFeature
              icon="👩‍🏫"
              title="Validado por Profs"
              description="Material desenvolvido cuidadosamente por pedagogos, seguindo estritamente as diretrizes da BNCC."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gradient-pricing px-4 py-20 md:py-28">
        <div className="mx-auto w-[90%] max-w-[1200px]">
          <div className="relative mx-auto max-w-[500px] rounded-[30px] border-2 border-primary/20 bg-card p-8 text-center shadow-price sm:p-12">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-success px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md">
              Oferta Especial
            </div>
            <h3 className="mb-1 text-2xl font-extrabold sm:text-[28px]">
              Kit Educativo Completo
            </h3>
            <p className="text-base text-muted-foreground">
              Pagamento único · Acesso Vitalício
            </p>

            <div className="mt-5 text-base font-medium text-muted-foreground line-through sm:text-lg">
              De R$ 89,90 por apenas
            </div>
            <div className="my-2 text-[56px] font-extrabold leading-none tracking-tight text-foreground sm:text-[72px]">
              <span className="mr-1 inline-block align-top text-2xl font-extrabold sm:mt-4 sm:text-3xl">
                R$
              </span>
              47,90
            </div>

            <div className="my-7 space-y-1 border-y border-border py-6 text-left">
              {benefits.map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-3 py-2 text-base font-semibold text-foreground/80 sm:text-[17px]"
                >
                  <span className="text-xl text-success">✔</span>
                  <span>
                    {b.startsWith("BÔNUS:") ? (
                      <>
                        <b>BÔNUS:</b> {b.replace("BÔNUS:", "").trim()}
                      </>
                    ) : (
                      b
                    )}
                  </span>
                  {i === -1 ? null : null}
                </div>
              ))}
            </div>

            <CtaButton href={KIWIFY_LINK} className="mx-auto">
              COMPRAR AGORA
            </CtaButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:text-[13px]">
              <Lock className="h-3.5 w-3.5" /> Ambiente auditado e 100% seguro via Kiwify
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ICONS STRIP (mobile-friendly trust signals) */}
      <section className="bg-card px-4 py-10 md:hidden">
        <div className="mx-auto flex max-w-[420px] items-center justify-around gap-4 text-center text-xs text-muted-foreground">
          <div className="flex flex-col items-center gap-1">
            <Printer className="h-5 w-5 text-primary" />
            <span>Imprimível</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Zap className="h-5 w-5 text-primary" />
            <span>Imediato</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span>BNCC</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground px-5 py-12 text-center text-sm text-slate-400">
        <p>Dona Coruja Digital © 2026 - Todos os direitos reservados.</p>
        <p className="mt-2 text-[13px] opacity-70">
          Este site não faz parte dos grupos Facebook ou Google.
        </p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
