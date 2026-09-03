import type { PairDomain } from "@/lib/types";

export function PairDomainCard({ domain, letter, label, prompt, mark }: { domain: PairDomain; letter: string; label: string; prompt: string; mark: string }) {
  return (
    <article className={`domain-card domain-${domain}`}>
      <div className="domain-card-top"><span className="domain-letter" aria-hidden="true">{letter}</span><span className="eyebrow">{mark}</span></div>
      <h3>{label}</h3><p>{prompt}</p>
    </article>
  );
}
