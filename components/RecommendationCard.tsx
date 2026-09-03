import type { Dimension } from "@/lib/types";

export function RecommendationCard({ dimension, score, action }: { dimension: Dimension; score: number; action: string }) {
  const category = score <= 2 ? "High-priority action" : score === 3 ? "Pilot-readiness action" : "Scaling action";
  return <article className={`recommendation-card domain-${dimension.domain}`}><div className="recommendation-top"><span>{category}</span><strong>{score}.0</strong></div><h3>{dimension.title}</h3><p>{action}</p></article>;
}
