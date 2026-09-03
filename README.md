# Physical AI Readiness

## PAIR Assessment Tool

An open-source beta framework and assessment tool for evaluating Physical AI readiness across Place, Architecture, Institutions, and Returns.

PAIR helps cities, campuses, public agencies, transit agencies, ports, airports, developers, economic-development organizations, and companies ask a practical question: are the place, systems, institutions, and public-value conditions ready for Physical AI deployment?

Physical AI includes autonomous mobility, robotics, automated logistics, intelligent curbs, connected infrastructure, digital twins, charging and depot systems, and other technologies that perceive, reason, coordinate, or act in the physical world.

## PAIR framework

PAIR organizes ten readiness dimensions inside four domains:

- **Place:** Physical Infrastructure; Curb, Access & Public Realm; Energy, Charging & Depot Capacity
- **Architecture:** Digital & Data Infrastructure; Mobility & System Integration
- **Institutions:** Governance & Institutional Capacity; Workforce & Operations; Safety, Emergency Response & Resilience
- **Returns:** Public Trust, Equity & Community Acceptance; Economic Development & Deployment Viability

The decision pathway is:

`PAIR Domain → Readiness Dimension → Evidence → Maturity Assessment → Gap → Action → Deployment → Evaluation`

## Maturity scale

1. Not Ready
2. Emerging
3. Pilot-Ready
4. Deployment-Ready
5. Adaptive & Scalable

The tool reports dimension scores, four unweighted domain averages, and a **Preliminary Overall Maturity** calculated as the unweighted mean across all ten dimensions. It does not produce a formal index.

## Features

- Guided ten-dimension assessment with evidence notes and confidence ratings
- Browser-only autosave with no accounts or backend
- PAIR Readiness Profile with domain summaries, strengths, gaps, and rule-based recommendations
- JSON import and export
- Print-friendly results for browser-based PDF export
- Responsive, keyboard-accessible interface
- Configuration-driven dimensions, maturity mapping, scoring, and recommendation rules

## Research background

PAIR is informed by existing research on AI readiness, autonomous mobility, urban design, governance, infrastructure, workforce, and public-value assessment. Its conceptual foundations include the NIST AI Risk Management Framework, Oxford Insights Government AI Readiness Index, NACTO Blueprint for Autonomous Urbanism, Open Mobility Foundation specifications, the USDOT Automated Vehicles Comprehensive Plan, World Economic Forum work on workforce transition and Physical AI, Riggs, Appleyard, and Johnson (2020), and Jiang, Chen, and Chen (2022).

These sources inform PAIR; they do not directly validate it. See the in-product methodology page for the selected references.

## Beta limitations

> PAIR is currently an exploratory research and decision-support framework. The PAIR Assessment Tool is not a certification system, regulatory standard, safety assessment, or validated comparative index.

The current scoring structure has not been empirically validated across multiple places or use cases. Ratings are self-reported and should be interpreted alongside evidence and expert review. There is no validated weighting, external data ingestion, city benchmarking, or formal composite index in this beta.

The future PAIR Index is envisioned as a validated benchmarking framework developed through repeated application, expert review, methodological refinement, and comparative evidence.

## Installation

Requirements: Node.js 22.13 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development

```bash
npm run dev
npm run lint
npm test
npm run build
```

Application routes use the Next.js App Router:

- `/` — product overview
- `/assessment` — assessment context and ten readiness questions
- `/results` — browser-generated readiness profile
- `/methodology` — framework, research position, references, and roadmap

## Testing

The lightweight Node test suite covers maturity thresholds, domain and overall calculations, ranking of strengths and gaps, recommendation selection, JSON export, and JSON import normalization.

```bash
npm test
```

## Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import it into Vercel.
3. Keep the detected framework as Next.js and the default build settings.
4. Deploy. No environment variables or external services are required.

Recommended Vercel project slug: `physical-ai-readiness`.

## Methodology customization

- Edit the ten domains, questions, definitions, organization types, and use cases in `lib/assessment-data.ts`.
- Edit the five maturity labels and average-to-level thresholds in `lib/maturity.ts`.
- Edit score-based action rules in `lib/recommendations.ts`.
- Edit aggregation and export behavior in `lib/scoring.ts`.

Keeping methodology logic outside the UI makes the framework easier to review, fork, and extend.

## Contributing

Issues and pull requests are welcome. For substantive methodology changes, explain the research basis, intended use case, expected effect on interpretation, and whether migration of saved JSON is required. Please run lint, tests, and a production build before submitting a pull request.

## Roadmap

### v0.2

- Multiple questions per dimension
- Evidence validation
- Custom use-case profiles
- Optional dimension weighting

### v0.3

- Saved assessments
- Longitudinal reassessment
- Expert-review mode
- Downloadable branded reports

### v1.0

- Validated PAIR Index
- Peer benchmarks and comparisons
- Longitudinal benchmarking
- Licensed organizational deployments

These items describe future research and product directions; they are not included in the current beta.

## License

MIT © 2026 PAIR contributors. See [LICENSE](LICENSE).
