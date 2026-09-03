export type PairDomain = "place" | "architecture" | "institutions" | "returns";
export type Confidence = "low" | "medium" | "high" | "";

export interface Dimension {
  id: string;
  number: number;
  domain: PairDomain;
  title: string;
  question: string;
  description: string;
}

export interface DimensionResponse {
  score: number;
  evidence: string;
  confidence: Confidence;
}

export interface AssessmentMeta {
  organization: string;
  geography: string;
  organizationType: string;
  useCase: string;
}

export interface AssessmentState {
  meta: AssessmentMeta;
  responses: Record<string, DimensionResponse>;
  updatedAt: string;
}

export interface DomainResult {
  domain: PairDomain;
  score: number;
  maturity: string;
}

export interface AssessmentExport {
  schemaVersion: "1.0";
  generatedAt: string;
  framework: "PAIR Physical AI Readiness Framework";
  product: "PAIR Assessment Tool";
  organization: AssessmentMeta;
  dimensions: Array<Dimension & DimensionResponse & { maturity: string; recommendation: string }>;
  domainAverages: Record<PairDomain, { score: number; maturity: string }>;
  preliminaryOverallMaturity: { score: number; maturity: string };
  recommendations: Array<{ dimensionId: string; action: string }>;
}
