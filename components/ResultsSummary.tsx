import { domains } from "@/lib/assessment-data";
import { getMaturityLevel } from "@/lib/maturity";
import type { PairDomain } from "@/lib/types";

export function ResultsSummary({ scores }: { scores: Record<PairDomain, number> }) {
  return <div className="results-summary">{domains.map((domain) => <article className={`summary-card domain-${domain.id}`} key={domain.id}><div><span className="domain-letter small" aria-hidden="true">{domain.letter}</span><span className="dimension-label">{domain.label}</span></div><strong className="big-score">{scores[domain.id].toFixed(1)}</strong><p>{getMaturityLevel(scores[domain.id])}</p><div className="summary-track"><span style={{ width: `${scores[domain.id] * 20}%` }} /></div></article>)}</div>;
}
