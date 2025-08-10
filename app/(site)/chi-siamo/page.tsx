import { PageHeader } from "@/components/site/page-header";
import { ProjectCards } from "@/components/site/project-cards";
import { Services } from "@/components/site/services";
import { getPage, getProjects, getServices } from "@/lib/content";

export default async function AboutPage() {
  const page = await getPage("about");
  const [projects, services] = await Promise.all([
    getProjects({ limit: 12 }),
    getServices({ limit: 6 }),
  ]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <PageHeader
        title="Chi siamo"
        subtitle="Da oltre 35 anni, ASLT opera con dedizione nel territorio per offrire supporto, prevenzione e ascolto."
      />
      <div className="grid lg:grid-cols-2 prose text-pretty w-full gap-8">
        <article dangerouslySetInnerHTML={{ __html: page.html }} />
        <ProjectCards projects={projects} />
      </div>

      <section className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Servizi offerti
        </h2>
        <Services services={services} />
      </section>
    </div>
  );
}
