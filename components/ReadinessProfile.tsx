import { getMaturityLevel } from "@/lib/maturity";
import type { Dimension, DimensionResponse } from "@/lib/types";

export function ReadinessProfile({ items, responses }: { items: Dimension[]; responses: Record<string, DimensionResponse> }) {
  return <div className="profile-list">{items.map((item) => { const score = responses[item.id].score; return <div className={`profile-row domain-${item.domain}`} key={item.id}><span className="profile-number">{String(item.number).padStart(2, "0")}</span><div className="profile-info"><strong>{item.title}</strong><span>{getMaturityLevel(score)}</span></div><div className="result-track" aria-label={`${item.title}: ${score} out of 5`}><span style={{ width: `${score * 20}%` }} /></div><strong className="profile-score">{score}.0</strong></div>; })}</div>;
}
