import { PageHeader } from "@/components/site/page-header";
import { getPage } from "@/lib/content";
import Link from "next/link";

type reportPageData = {
  report?: {
    name: string;
    file: string;
  }[];
  title: string;
  html: string;
};

export default async function ReportPage() {
  const page: reportPageData = await getPage("report");
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <PageHeader title={page.title} />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div
            className="prose max-w-none mb-4"
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
          <ul className="space-y-1">
            {page.report?.map(
              (f: { name: string; file: string }, idx: number) => (
                <li key={idx}>
                  <Link
                    href={f.file}
                    className="text-secondary underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {f.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
