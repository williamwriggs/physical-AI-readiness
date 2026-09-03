"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AssessmentQuestion } from "@/components/AssessmentQuestion";
import { ProgressBar } from "@/components/ProgressBar";
import { SiteHeader } from "@/components/SiteHeader";
import { dimensions, organizationTypes, useCases } from "@/lib/assessment-data";
import { buildAssessmentExport } from "@/lib/scoring";
import { emptyAssessment, loadAssessment, normalizeImportedAssessment, saveAssessment } from "@/lib/storage";
import type { AssessmentState } from "@/lib/types";

export default function AssessmentPage() {
  const [state, setState] = useState<AssessmentState>(emptyAssessment);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const hydration = window.setTimeout(() => {
      setState(loadAssessment());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(hydration);
  }, []);
  useEffect(() => { if (ready) saveAssessment(state); }, [state, ready]);

  const complete = useMemo(() => dimensions.filter((item) => state.responses[item.id]?.score > 0).length, [state]);
  const detailsComplete = Boolean(state.meta.organization && state.meta.geography && state.meta.organizationType && state.meta.useCase);

  function updateMeta(key: keyof AssessmentState["meta"], value: string) {
    setState((current) => ({ ...current, meta: { ...current.meta, [key]: value } }));
  }

  function reset() {
    if (window.confirm("Reset the organization details, scores, evidence, and confidence ratings?")) { setState(emptyAssessment()); setMessage("Assessment reset."); window.scrollTo({ top: 0, behavior: "smooth" }); }
  }

  function exportJson() {
    if (complete !== 10) { setMessage("Complete all ten ratings before exporting the results package."); return; }
    const blob = new Blob([JSON.stringify(buildAssessmentExport(state), null, 2)], { type: "application/json" });
    const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `pair-assessment-${new Date().toISOString().slice(0, 10)}.json`; link.click(); URL.revokeObjectURL(link.href);
    setMessage("Assessment JSON exported.");
  }

  async function importJson(file?: File) {
    if (!file) return;
    try { const next = normalizeImportedAssessment(JSON.parse(await file.text())); setState(next); setMessage("Assessment imported successfully."); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Unable to import this file."); }
    if (fileRef.current) fileRef.current.value = "";
  }

  return <><SiteHeader /><main className="assessment-main"><section className="assessment-hero"><div className="shell"><span className="eyebrow">PAIR Assessment Tool</span><h1>Build your readiness profile</h1><p>Rate ten dimensions using the evidence available today. There are no perfect answers—the goal is to surface alignment, uncertainty, and next actions.</p></div></section>
    <div className="shell assessment-layout"><aside className="assessment-sidebar"><div className="sticky-card"><ProgressBar current={complete} total={10} /><nav aria-label="Assessment dimensions">{dimensions.map((item) => <a key={item.id} href={`#${item.id}`} className={state.responses[item.id]?.score ? "complete" : ""}><span>{String(item.number).padStart(2, "0")}</span>{item.title}<i aria-label={state.responses[item.id]?.score ? "Complete" : "Not complete"}>{state.responses[item.id]?.score ? "✓" : ""}</i></a>)}</nav><div className="sidebar-tools"><button type="button" onClick={() => fileRef.current?.click()}>Import JSON</button><button type="button" onClick={exportJson}>Export JSON</button><button className="danger-link" type="button" onClick={reset}>Reset assessment</button><input ref={fileRef} hidden type="file" accept="application/json" onChange={(event) => importJson(event.target.files?.[0])} /></div>{message && <p className="status-message" role="status">{message}</p>}</div></aside>
      <div className="assessment-content"><section className="setup-card"><div className="setup-heading"><span>Step 1</span><div><h2>Assessment context</h2><p>No personal contact information is needed.</p></div></div><div className="form-grid"><label>Organization name <input value={state.meta.organization} onChange={(event) => updateMeta("organization", event.target.value)} placeholder="e.g. City Mobility Office" /></label><label>Location / geography <input value={state.meta.geography} onChange={(event) => updateMeta("geography", event.target.value)} placeholder="e.g. Sacramento, California" /></label><label>Organization type <select value={state.meta.organizationType} onChange={(event) => updateMeta("organizationType", event.target.value)}><option value="">Select organization type</option>{organizationTypes.map((option) => <option key={option}>{option}</option>)}</select></label><label>Use case <select value={state.meta.useCase} onChange={(event) => updateMeta("useCase", event.target.value)}><option value="">Select use case</option>{useCases.map((option) => <option key={option}>{option}</option>)}</select></label></div></section>
        <div className="questions-heading"><div><span>Step 2</span><h2>Readiness dimensions</h2></div><p>Select one maturity level for each dimension. Evidence and confidence are optional but encouraged.</p></div>
        {dimensions.map((dimension) => <div id={dimension.id} className="anchor-section" key={dimension.id}><AssessmentQuestion dimension={dimension} response={state.responses[dimension.id]} onChange={(response) => setState((current) => ({ ...current, responses: { ...current.responses, [dimension.id]: response } }))} /></div>)}
        <section className="assessment-submit"><span className="eyebrow light">Assessment complete?</span><h2>Turn ratings into a readiness profile.</h2><p>{complete === 10 && detailsComplete ? "All required fields are complete. Your profile is ready." : `${complete} of 10 dimensions rated${detailsComplete ? "" : " · Add all assessment context fields"}.`}</p><a aria-disabled={complete !== 10 || !detailsComplete} className={`button light-button ${(complete !== 10 || !detailsComplete) ? "disabled" : ""}`} href={complete === 10 && detailsComplete ? "/results" : "#assessment-context"}>View readiness profile <span aria-hidden="true">→</span></a></section>
      </div></div></main></>;
}
