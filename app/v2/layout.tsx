import { V2SiteHeader } from "@/components/v2/site-header";
import { V2Footer } from "@/components/v2/footer";

import "./v2.css";

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="v2-root min-h-dvh bg-[var(--v2-canvas)] text-[var(--v2-fg)] antialiased">
      <V2SiteHeader />
      {children}
      <V2Footer />
    </div>
  );
}
