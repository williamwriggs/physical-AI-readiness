"use client";

import { useEffect, useMemo, useState } from "react";
import { ReadinessProfile } from "@/components/ReadinessProfile";
import { RecommendationCard } from "@/components/RecommendationCard";
import { ResultsSummary } from "@/components/ResultsSummary";
import { SiteHeader } from "@/components/SiteHeader";
import { dimensions } from "@/lib/assessment-data";
import { getMaturityLevel } from "@/lib/maturity";
import { getRecommendation } from "@/lib/recommendations";
import { buildAssessmentExport, calculateDomainScores, calculateOverallScore, rankDimensions } from "@/lib/scoring";
import { emptyAssessment, loadAssessment } from "@/lib/storage";
import type { AssessmentState } from "@/lib/types";

export default function ResultsPage() {
  const [state, setState] = useState<AssessmentState>(emptyAssessment);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const hydration = window.setTimeout(() => {
      setState(loadAssessment());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(hydration);
  }, []);
  const domainScores = useMemo(() => calculateDomainScores(state.responses), [state]);
  const overall = useMemo(() => calculateOverallScore(state.responses), [state]);
  const strengths = useMemo(() => rankDimensions(state.responses, "high"), [state]);
  const gaps = useMemo(() => rankDimensions(state.responses, "low"), [state]);

  function exportJson() {
    const blob = new Blob([JSON.stringify(buildAssessmentExport(state), null, 2)], { type: "application/json" });
    const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `pair-readiness-profile-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(link.href);
  }

  if (!ready) return <><SiteHeader /><main className="loading-state">Preparing readiness profile…</main></>;
  if (!overall) return <><SiteHeader /><main className="empty-state"><span className="eyebrow">No completed assessment</span><h1>Build a profile first.</h1><p>Complete all ten dimension ratings to generate a PAIR Readiness Profile.</p><a className="button primary" href="/assessment">Go to assessment →</a></main></>;

  return <><SiteHeader /><main className="results-main"><section className="report-header"><div className="shell"><div className="report-kicker"><span>PAIR Readiness Profile</span><span>Preliminary self-assessment</span></div><div className="report-title-row"><div><h1>{state.meta.organization}</h1><p>{state.meta.geography} · {state.meta.useCase}</p></div><div className="report-actions"><button onClick={() => window.print()}>Print / Save as PDF</button><button onClick={exportJson}>Export JSON</button></div></div></div></section>
    <div className="shell report-body"><section aria-labelledby="domain-summary"><div className="section-heading split compact-heading"><div><span className="eyebrow">Domain summary</span><h2 id="domain-summary">Four connected lenses</h2></div><p>Domain averages are calculated from their nested readiness dimensions.</p></div><ResultsSummary scores={domainScores} /></section>
      <section className="overall-card"><div><span className="eyebrow light">Preliminary Overall Maturity</span><h2>{getMaturityLevel(overall)}</h2><p>Unweighted mean across all ten dimensions</p></div><strong>{overall.toFixed(1)}<small>/ 5.0</small></strong></section>
      <section className="profile-section"><div className="section-heading split compact-heading"><div><span className="eyebrow">Dimension profile</span><h2>Readiness at a glance</h2></div><p>Each rating is shown on a five-point maturity scale. Review the notes behind each rating during expert review.</p></div><ReadinessProfile items={dimensions} responses={state.responses} /></section>
      <section className="findings-grid"><article><span className="eyebrow">Top strengths</span><h2>Capabilities to build on</h2>{strengths.map((item, index) => <div className="finding" key={item.id}><span>{index + 1}</span><div><strong>{item.title}</strong><p>{state.responses[item.id].score}.0 · {getMaturityLevel(state.responses[item.id].score)}</p></div></div>)}</article><article><span className="eyebrow">Priority gaps</span><h2>Areas for focused action</h2>{gaps.map((item, index) => <div className="finding" key={item.id}><span>{index + 1}</span><div><strong>{item.title}</strong><p>{state.responses[item.id].score}.0 · {getMaturityLevel(state.responses[item.id].score)}</p></div></div>)}</article></section>
      <section className="recommendations-section"><div className="section-heading split compact-heading"><div><span className="eyebrow">Recommended next actions</span><h2>From gaps to readiness</h2></div><p>Rule-based guidance reflects each dimension’s current maturity rating.</p></div><div className="recommendations-grid">{dimensions.map((item) => <RecommendationCard key={item.id} dimension={item} score={state.responses[item.id].score} action={getRecommendation(item.id, state.responses[item.id].score)} />)}</div></section>
      <aside className="disclaimer"><strong>Important interpretation note</strong><p>This beta provides a preliminary self-assessment and is not a certification, safety determination, regulatory standard, or validated comparative index. Scores should be interpreted alongside supporting evidence and expert review.</p></aside>
      <div className="report-bottom-actions"><a className="button secondary" href="/assessment">← Revise assessment</a><a className="text-link" href="/methodology">Review methodology →</a></div>
    </div></main></>;
}
