import { dimensions } from "./assessment-data";
import { getMaturityLevel } from "./maturity";
import { getRecommendation } from "./recommendations";
import type { AssessmentExport, AssessmentState, PairDomain } from "./types";

const domainOrder: PairDomain[] = ["place", "architecture", "institutions", "returns"];

export function average(values: number[]): number {
  if (!values.length) return 0;
  return Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2));
}

export function calculateDomainScores(responses: AssessmentState["responses"]): Record<PairDomain, number> {
  return domainOrder.reduce((result, domain) => {
    const scores = dimensions.filter((item) => item.domain === domain).map((item) => responses[item.id]?.score || 0);
    result[domain] = scores.every(Boolean) ? average(scores) : 0;
    return result;
  }, {} as Record<PairDomain, number>);
}

export function calculateOverallScore(responses: AssessmentState["responses"]): number {
  const scores = dimensions.map((item) => responses[item.id]?.score || 0);
  return scores.every(Boolean) ? average(scores) : 0;
}

export function rankDimensions(responses: AssessmentState["responses"], direction: "high" | "low") {
  return [...dimensions]
    .filter((item) => responses[item.id]?.score)
    .sort((a, b) => direction === "high" ? responses[b.id].score - responses[a.id].score || a.number - b.number : responses[a.id].score - responses[b.id].score || a.number - b.number)
    .slice(0, 3);
}

export function buildAssessmentExport(state: AssessmentState): AssessmentExport {
  const domainScores = calculateDomainScores(state.responses);
  const overall = calculateOverallScore(state.responses);
  const dimensionResults = dimensions.map((dimension) => {
    const response = state.responses[dimension.id];
    const recommendation = getRecommendation(dimension.id, response.score);
    return { ...dimension, ...response, maturity: getMaturityLevel(response.score), recommendation };
  });
  return {
    schemaVersion: "1.0",
    generatedAt: new Date().toISOString(),
    framework: "PAIR Physical AI Readiness Framework",
    product: "PAIR Assessment Tool",
    organization: state.meta,
    dimensions: dimensionResults,
    domainAverages: Object.fromEntries(domainOrder.map((domain) => [domain, { score: domainScores[domain], maturity: getMaturityLevel(domainScores[domain]) }])) as AssessmentExport["domainAverages"],
    preliminaryOverallMaturity: { score: overall, maturity: getMaturityLevel(overall) },
    recommendations: dimensionResults.map((item) => ({ dimensionId: item.id, action: item.recommendation })),
  };
}
