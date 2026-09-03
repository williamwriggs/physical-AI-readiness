import { dimensions } from "./assessment-data";
import type { AssessmentState, Confidence } from "./types";

export const STORAGE_KEY = "pair-assessment-v1";

export function emptyAssessment(): AssessmentState {
  return {
    meta: { organization: "", geography: "", organizationType: "", useCase: "" },
    responses: Object.fromEntries(dimensions.map((item) => [item.id, { score: 0, evidence: "", confidence: "" as Confidence }])),
    updatedAt: new Date().toISOString(),
  };
}

export function saveAssessment(state: AssessmentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, updatedAt: new Date().toISOString() }));
}

export function loadAssessment(): AssessmentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...emptyAssessment(), ...JSON.parse(raw) } : emptyAssessment();
  } catch {
    return emptyAssessment();
  }
}

export function normalizeImportedAssessment(value: unknown): AssessmentState {
  if (!value || typeof value !== "object") throw new Error("The selected file does not contain a valid PAIR assessment.");
  const source = value as Record<string, unknown>;
  if (source.organization && source.dimensions) {
    const meta = source.organization as AssessmentState["meta"];
    const rows = source.dimensions as Array<{ id: string; score: number; evidence?: string; confidence?: Confidence }>;
    const state = emptyAssessment();
    state.meta = meta;
    rows.forEach((row) => { if (state.responses[row.id] && row.score >= 1 && row.score <= 5) state.responses[row.id] = { score: row.score, evidence: row.evidence || "", confidence: row.confidence || "" }; });
    return state;
  }
  const candidate = source as unknown as AssessmentState;
  if (!candidate.meta || !candidate.responses) throw new Error("The selected file does not contain a valid PAIR assessment.");
  return candidate;
}
