import { maturityLevels } from "@/lib/maturity";
import type { Confidence, Dimension, DimensionResponse } from "@/lib/types";

export function AssessmentQuestion({ dimension, response, onChange }: { dimension: Dimension; response: DimensionResponse; onChange: (next: DimensionResponse) => void }) {
  return (
    <article className={`question-card domain-${dimension.domain}`}>
      <div className="question-heading"><div><span className="dimension-label">{dimension.domain} · Dimension {dimension.number}</span><h2>{dimension.title}</h2></div><span className="question-number" aria-hidden="true">{String(dimension.number).padStart(2, "0")}</span></div>
      <fieldset className="score-fieldset"><legend>{dimension.question}</legend><p className="question-prompt">{dimension.description}</p><div className="score-options">
        {maturityLevels.map((level) => <label key={level.score} className={response.score === level.score ? "score-option selected" : "score-option"}><input type="radio" name={`score-${dimension.id}`} value={level.score} checked={response.score === level.score} onChange={() => onChange({ ...response, score: level.score })} /><span className="score-number">{level.score}</span><span>{level.label}</span></label>)}
      </div></fieldset>
      <div className="question-details"><label>Evidence or notes <span>Optional</span><textarea value={response.evidence} onChange={(event) => onChange({ ...response, evidence: event.target.value })} placeholder="Add observations, documents, constraints, or examples that support this rating…" /></label><label>Confidence <span>Optional</span><select value={response.confidence} onChange={(event) => onChange({ ...response, confidence: event.target.value as Confidence })}><option value="">Select confidence</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></label></div>
    </article>
  );
}
