import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { dimensions } from "../lib/assessment-data.ts";
import { getMaturityLevel } from "../lib/maturity.ts";
import { getRecommendation } from "../lib/recommendations.ts";
import { normalizeImportedAssessment } from "../lib/storage.ts";
import {
  buildAssessmentExport,
  calculateDomainScores,
  calculateOverallScore,
  rankDimensions,
} from "../lib/scoring.ts";
import type { AssessmentState } from "../lib/types.ts";

function assessment(scores: number[]): AssessmentState {
  return {
    meta: {
      organization: "Test City",
      geography: "Test Region",
      organizationType: "City / County / Public Agency",
      useCase: "Autonomous Vehicles / Robotaxis",
    },
    responses: Object.fromEntries(
      dimensions.map((dimension, index) => [
        dimension.id,
        { score: scores[index], evidence: `Evidence ${index + 1}`, confidence: "high" },
      ]),
    ),
    updatedAt: "2026-01-01T00:00:00.000Z",
  } as AssessmentState;
}

describe("maturity mapping", () => {
  const cases: Array<[number, string]> = [
    [1, "Not Ready"], [1.49, "Not Ready"], [1.5, "Emerging"],
    [2.49, "Emerging"], [2.5, "Pilot-Ready"], [3.5, "Deployment-Ready"],
    [4.5, "Adaptive & Scalable"], [5, "Adaptive & Scalable"],
  ];
  for (const [score, label] of cases) it(`maps ${score} to ${label}`, () => assert.equal(getMaturityLevel(score), label));
});

describe("scoring", () => {
  const state = assessment([1, 2, 3, 4, 5, 2, 3, 4, 5, 1]);
  it("calculates domain means from nested dimensions", () => {
    assert.deepEqual(calculateDomainScores(state.responses), { place: 2, architecture: 4.5, institutions: 3, returns: 3 });
  });
  it("calculates the unweighted overall mean", () => assert.equal(calculateOverallScore(state.responses), 3));
  it("returns three strengths and three gaps", () => {
    assert.deepEqual(rankDimensions(state.responses, "high").map((item) => item.number), [5, 9, 4]);
    assert.deepEqual(rankDimensions(state.responses, "low").map((item) => item.number), [1, 10, 2]);
  });
});

describe("recommendations", () => {
  it("selects low, pilot, and scaling actions", () => {
    const id = "physical-infrastructure";
    assert.match(getRecommendation(id, 2), /inventory/);
    assert.match(getRecommendation(id, 3), /pilot-area/);
    assert.match(getRecommendation(id, 5), /capital planning/);
  });
});

describe("JSON export", () => {
  it("includes the complete results package", () => {
    const output = buildAssessmentExport(assessment(Array(10).fill(4)));
    assert.equal(output.schemaVersion, "1.0");
    assert.equal(output.product, "PAIR Assessment Tool");
    assert.equal(output.dimensions.length, 10);
    assert.deepEqual(
      { score: output.dimensions[0].score, evidence: output.dimensions[0].evidence, confidence: output.dimensions[0].confidence, maturity: output.dimensions[0].maturity },
      { score: 4, evidence: "Evidence 1", confidence: "high", maturity: "Deployment-Ready" },
    );
    assert.equal(output.domainAverages.place.score, 4);
    assert.equal(output.preliminaryOverallMaturity.score, 4);
    assert.equal(output.recommendations.length, 10);
  });

  it("imports a generated export back into editable assessment state", () => {
    const original = assessment([2, 3, 4, 5, 1, 2, 3, 4, 5, 1]);
    const restored = normalizeImportedAssessment(buildAssessmentExport(original));
    assert.equal(restored.meta.organization, "Test City");
    assert.equal(restored.responses["physical-infrastructure"].score, 2);
    assert.equal(restored.responses["physical-infrastructure"].evidence, "Evidence 1");
    assert.equal(restored.responses["physical-infrastructure"].confidence, "high");
    assert.equal(Object.values(restored.responses).filter((item) => item.score > 0).length, 10);
  });
});
