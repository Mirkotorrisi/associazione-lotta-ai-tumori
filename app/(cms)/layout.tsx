import "@/app/globals.css";
import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
        <title>Content Manager</title>
        <script
          async
          src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        ></script>
      </head>
      <body className="antialiased text-gray-900 bg-white">{children}</body>
    </html>
  );
}
