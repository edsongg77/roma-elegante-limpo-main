import { Outlet, Link, createRootRoute, useRouter, HeadContent } from "@tanstack/react-router";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFab } from "../components/WhatsAppFab";

const SITE_TITLE = "DSC Italy Tours — Transfers Privados e Tours de Luxo na Itália";
const SITE_DESCRIPTION =
  "Transfers privados com motorista particular e tours exclusivos por Roma, Florença, Amalfi, Pompeia e toda a Itália. Mais de 10 anos de experiência.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Página não encontrada</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center border border-gold/60 bg-gold/5 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Algo deu errado</h1>
        <p className="mt-3 text-sm text-muted-foreground">Tente novamente ou volte ao início.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold/60 bg-gold/5 px-6 py-3 text-xs tracking-[0.2em] uppercase text-gold hover:bg-gold hover:text-primary-foreground"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="border border-border px-6 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:border-gold hover:text-gold"
          >
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "DSC Italy Tours" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </>
  );
}
