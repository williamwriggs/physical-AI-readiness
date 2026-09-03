import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="PAIR Assessment Tool home">
          <span className="brand-mark" aria-hidden="true">PAIR</span>
          <span><strong>PAIR Assessment Tool</strong><small>Physical AI Readiness</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/assessment">Assessment</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/methodology">Research</Link>
        </nav>
      </div>
    </header>
  );
}
