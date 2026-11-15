import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import venice from "@/assets/venice.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — DSC Italy Tours" },
      {
        name: "description",
        content: "Momentos e destinos que já percorremos com nossos viajantes pela Itália.",
      },
      { property: "og:title", content: "Galeria — DSC Italy Tours" },
      {
        property: "og:description",
        content: "Momentos e destinos que já percorremos com nossos viajantes pela Itália.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galleria"
        title={
          <>
            Momentos capturados <span className="italic text-gold">pela Itália</span>.
          </>
        }
        subtitle="Momentos e destinos que já percorremos com nossos viajantes pela Itália."
        image={venice}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <p className="text-center text-sm text-muted-foreground">
            Novas fotos estarão disponíveis em breve.
          </p>
        </div>
      </section>
    </>
  );
}
