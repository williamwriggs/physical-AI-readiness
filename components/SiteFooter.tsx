export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <strong>PAIR Assessment Tool</strong>
          <p>Source-available beta · Evaluation use only</p>
        </div>
        <div className="footer-legal">
          <p>Commercial use requires a separate written license.</p>
          <p>
            <a href="https://github.com/williamwriggs/physical-ai-readiness/blob/main/LICENSE">View license</a>
            <span aria-hidden="true"> · </span>
            <a href="https://github.com/williamwriggs/physical-ai-readiness/blob/main/COMMERCIAL.md">Commercial licensing</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
