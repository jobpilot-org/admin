import type { Metadata, Viewport } from "next";
import Link from "next/link";

import "../theme/jobpilot.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "jobpilot Admin",
  description: "Verwaltung für jobpilot",
};

// Farben wie --jp-background in jobpilot.css
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#151a17" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <body>
        <header className="jp-topbar">
          <nav className="jp-topbar__inner" aria-label="Hauptnavigation">
            <Link className="jp-brand" href="/">
              jobpilot<span className="jp-brand__dot">.</span>
            </Link>
            <span className="jp-tab is-active" aria-current="page">
              Verwaltung
            </span>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
