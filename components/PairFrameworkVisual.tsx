import { domains } from "@/lib/assessment-data";
import { PairDomainCard } from "./PairDomainCard";

export function PairFrameworkVisual() {
  return <div className="domain-grid">{domains.map((domain) => <PairDomainCard key={domain.id} domain={domain.id} letter={domain.letter} label={domain.label} prompt={domain.prompt} mark={domain.mark} />)}</div>;
}
