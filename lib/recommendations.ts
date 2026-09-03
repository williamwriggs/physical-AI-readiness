type RecommendationBands = { low: string; medium: string; high: string };

export const recommendationRules: Record<string, RecommendationBands> = {
  "physical-infrastructure": {
    low: "Conduct a physical infrastructure inventory focused on deployment-sensitive streets, access points, facilities, and maintenance conditions.",
    medium: "Validate pilot-area infrastructure and document operational edge cases before expanding deployment.",
    high: "Integrate Physical AI requirements into ongoing capital planning and infrastructure asset management.",
  },
  "curb-access-public-realm": {
    low: "Map curb demand, accessibility needs, enforcement capacity, and conflicts at likely deployment locations.",
    medium: "Test curb rules and accessible pickup or loading operations in a bounded pilot area.",
    high: "Codify adaptable curb policies and monitor public-realm impacts as operations scale.",
  },
  "energy-charging-depot": {
    low: "Assess power capacity, siting constraints, charging needs, and depot or staging requirements with utilities and operators.",
    medium: "Confirm pilot energy loads, redundancy, maintenance access, and realistic facility operating plans.",
    high: "Align long-range utility, depot, and land planning with scalable fleet and resilience needs.",
  },
  "digital-data-infrastructure": {
    low: "Inventory critical data, cybersecurity, privacy, mapping, connectivity, and interoperability gaps.",
    medium: "Establish pilot data agreements, security controls, system monitoring, and shared technical standards.",
    high: "Strengthen interoperable architecture, continuous assurance, and reusable data governance for scaling.",
  },
  "mobility-system-integration": {
    low: "Map interactions with transit, walking, biking, freight, accessibility services, and network performance.",
    medium: "Measure pilot effects on access, congestion, VMT, transit connections, and underserved users.",
    high: "Coordinate Physical AI operations with multimodal planning, service management, and network goals.",
  },
  "governance-institutional-capacity": {
    low: "Define decision rights, legal authority, accountability, procurement pathways, and cross-agency ownership.",
    medium: "Create a pilot governance charter with clear escalation, reporting, vendor, and public oversight requirements.",
    high: "Institutionalize portfolio governance, performance review, and adaptable policy for scaled deployment.",
  },
  "workforce-operations": {
    low: "Identify required roles, training gaps, labor impacts, maintenance capacity, and operational ownership.",
    medium: "Train pilot teams, document procedures, and test handoffs across field, remote, and maintenance roles.",
    high: "Build durable career pathways, workforce transition plans, and continuous operational learning systems.",
  },
  "safety-emergency-resilience": {
    low: "Develop incident, emergency-response, cybersecurity, reporting, and continuity protocols with responders.",
    medium: "Exercise pilot incident scenarios and validate responder access, communications, escalation, and recovery.",
    high: "Run recurring exercises, share lessons, and update resilience controls as systems and risks evolve.",
  },
  "public-trust-equity": {
    low: "Begin accessible community engagement and define equity, transparency, fairness, and accountability commitments.",
    medium: "Use pilot feedback and disaggregated measures to test public benefits, burdens, and trust safeguards.",
    high: "Maintain transparent reporting, representative engagement, and responsive public-value governance at scale.",
  },
  "economic-development-viability": {
    low: "Test the demand case, public benefits, costs, anchor partnerships, jobs strategy, and long-term operating model.",
    medium: "Validate pilot economics, partner commitments, procurement assumptions, and measurable public value.",
    high: "Diversify partners and funding while tracking jobs, benefits, total cost, and long-term sustainability.",
  },
};

export function getRecommendation(dimensionId: string, score: number): string {
  const rule = recommendationRules[dimensionId];
  if (!rule) return "Document the gap and define a proportionate next action.";
  if (score <= 2) return rule.low;
  if (score === 3) return rule.medium;
  return rule.high;
}
