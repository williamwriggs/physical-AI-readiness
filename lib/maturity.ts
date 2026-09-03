export const maturityLevels = [
  { score: 1, label: "Not Ready", description: "Foundational conditions are absent or undocumented." },
  { score: 2, label: "Emerging", description: "Early capabilities exist, with important gaps remaining." },
  { score: 3, label: "Pilot-Ready", description: "Conditions can support a bounded, monitored pilot." },
  { score: 4, label: "Deployment-Ready", description: "Capabilities support managed operational deployment." },
  { score: 5, label: "Adaptive & Scalable", description: "Systems can learn, improve, and scale responsibly." },
] as const;

export function getMaturityLevel(score: number): string {
  if (score < 1.5) return "Not Ready";
  if (score < 2.5) return "Emerging";
  if (score < 3.5) return "Pilot-Ready";
  if (score < 4.5) return "Deployment-Ready";
  return "Adaptive & Scalable";
}
