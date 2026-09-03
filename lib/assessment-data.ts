import type { Dimension, PairDomain } from "./types";

export const domains: Array<{ id: PairDomain; letter: string; label: string; prompt: string; mark: string }> = [
  { id: "place", letter: "P", label: "Place", prompt: "Is the physical environment ready?", mark: "Site" },
  { id: "architecture", letter: "A", label: "Architecture", prompt: "Can Physical AI connect to the wider system?", mark: "System" },
  { id: "institutions", letter: "I", label: "Institutions", prompt: "Can we govern, operate, and respond?", mark: "Govern" },
  { id: "returns", letter: "R", label: "Returns", prompt: "Does deployment create value?", mark: "Value" },
];

export const dimensions: Dimension[] = [
  { id: "physical-infrastructure", number: 1, domain: "place", title: "Physical Infrastructure", question: "How ready is the physical environment for deployment?", description: "Consider streets, intersections, sidewalks, buildings, lighting, signage, access points, maintenance conditions, and physical constraints." },
  { id: "curb-access-public-realm", number: 2, domain: "place", title: "Curb, Access & Public Realm", question: "How ready are curb, access, and public-realm systems?", description: "Consider pickup/drop-off, loading, accessibility, enforcement, sidewalks, transit stops, and competing uses of public space." },
  { id: "energy-charging-depot", number: 3, domain: "place", title: "Energy, Charging & Depot Capacity", question: "How ready are energy, charging, staging, and depot systems?", description: "Consider electrical capacity, charging, fleet staging, maintenance, storage, depots, land availability, and supporting facilities." },
  { id: "digital-data-infrastructure", number: 4, domain: "architecture", title: "Digital & Data Infrastructure", question: "How ready are digital and data systems?", description: "Consider APIs, cybersecurity, privacy, mapping, data standards, monitoring, analytics, interoperability, and digital twins." },
  { id: "mobility-system-integration", number: 5, domain: "architecture", title: "Mobility & System Integration", question: "How well can Physical AI integrate with the broader mobility system?", description: "Consider transit, walking, biking, freight, paratransit, airports, VMT, congestion, accessibility, and network effects." },
  { id: "governance-institutional-capacity", number: 6, domain: "institutions", title: "Governance & Institutional Capacity", question: "How ready is the organization to govern Physical AI deployment?", description: "Consider decision rights, policy, procurement, coordination, legal authority, accountability, and vendor management." },
  { id: "workforce-operations", number: 7, domain: "institutions", title: "Workforce & Operations", question: "How ready are workforce and operational systems?", description: "Consider technicians, operators, field teams, remote support, maintenance, training, labor transitions, and career pathways." },
  { id: "safety-emergency-resilience", number: 8, domain: "institutions", title: "Safety, Emergency Response & Resilience", question: "How ready are safety, emergency-response, and resilience systems?", description: "Consider incident protocols, responder training, reporting, continuity planning, cybersecurity, and emergency coordination." },
  { id: "public-trust-equity", number: 9, domain: "returns", title: "Public Trust, Equity & Community Acceptance", question: "How ready is the public-value and community environment?", description: "Consider accessibility, equity, engagement, transparency, fairness, public trust, and responsiveness to community concerns." },
  { id: "economic-development-viability", number: 10, domain: "returns", title: "Economic Development & Deployment Viability", question: "How viable is deployment from an economic and public-value perspective?", description: "Consider demand, anchor partners, investment, jobs, costs, business models, public benefits, and long-term sustainability." },
];

export const organizationTypes = [
  "City / County / Public Agency", "Transit Agency", "University / Campus", "Airport / Port",
  "Developer / Master-Planned Community", "Private Company", "Economic Development Organization",
  "Consulting Firm", "Other",
];

export const useCases = [
  "Autonomous Vehicles / Robotaxis", "Curb and Pickup / Drop-off Management",
  "Campus or Institutional Automation", "Autonomous Community / Master-Planned Development",
  "Transit and Mobility Integration", "Robotics / Logistics / Industrial Automation",
  "Physical AI Economic Development Readiness", "Smart Charging / Depot / Fleet Operations",
  "Connected Infrastructure / Work Zones", "Other",
];
