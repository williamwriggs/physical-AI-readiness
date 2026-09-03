# Physical AI Readiness

## PAIR Assessment Tool

**PAIR — Physical AI Readiness** is an open-source research and decision-support framework for evaluating whether places, systems, institutions, and communities are prepared for AI-enabled technologies that act in the physical world.

The public beta product is the **PAIR Assessment Tool**. It organizes readiness across **Place, Architecture, Institutions, and Returns** and evaluates those domains through ten readiness dimensions.

> **Status:** PAIR is an exploratory framework and beta assessment tool. It is not a certification system, regulatory standard, safety determination, or validated comparative index.

## Why Physical AI Readiness?

Physical AI includes autonomous vehicles, robotics, intelligent logistics, automated facilities, AI-enabled infrastructure, connected streets and curbs, smart charging, digital twins, and related systems that perceive, reason, coordinate, or act in physical environments.

Technology readiness and place readiness are not the same thing. A technically capable system may still fail to scale if the surrounding environment lacks the infrastructure, data architecture, governance, workforce capacity, emergency-response protocols, market conditions, or public trust needed to support deployment.

PAIR is designed to make those conditions visible and actionable.

## The PAIR Framework

PAIR stands for:

- **P — Place:** Is the physical environment ready?
- **A — Architecture:** Can Physical AI connect to the wider system?
- **I — Institutions:** Can we govern, operate, and respond?
- **R — Returns:** Does deployment create value?

The four domains are the conceptual structure. The ten dimensions are the measurement framework.

### P — Place

1. **Physical Infrastructure**
2. **Curb, Access & Public Realm**
3. **Energy, Charging & Depot Capacity**

### A — Architecture

4. **Digital & Data Infrastructure**
5. **Mobility & System Integration**

### I — Institutions

6. **Governance & Institutional Capacity**
7. **Workforce & Operations**
8. **Safety, Emergency Response & Resilience**

### R — Returns

9. **Public Trust, Equity & Community Acceptance**
10. **Economic Development & Deployment Viability**

The framework follows this logic:

**PAIR Domain → Readiness Dimension → Evidence → Maturity Assessment → Gap → Action → Deployment → Evaluation**

## Maturity and scoring

PAIR currently uses a five-point maturity scale:

| Score | Maturity level | Interpretation |
|---:|---|---|
| 1 | Not Ready | Major gaps exist and ownership or deployment pathways may be unclear. |
| 2 | Emerging | Some capacity exists, but systems remain incomplete or fragmented. |
| 3 | Pilot-Ready | Sufficient capacity exists for a bounded deployment with clear oversight. |
| 4 | Deployment-Ready | Policies, infrastructure, people, and operating systems can support sustained deployment. |
| 5 | Adaptive & Scalable | The system can deploy, measure outcomes, learn, adapt, and scale. |

The beta reports ten dimension ratings, four unweighted domain averages, and a **Preliminary Overall Maturity** calculated as the unweighted mean across all dimensions. It produces a **PAIR Readiness Profile**, not a formal index. A future **PAIR Index** should only be introduced after repeated application, evidence testing, scoring refinement, and validation.

## Features

- Guided ten-dimension assessment with evidence notes and confidence ratings
- Browser-only autosave with no account or backend required by the application
- PAIR Readiness Profile with domain summaries, strengths, gaps, and rule-based recommendations
- JSON import and export
- Print-friendly results for browser-based PDF export
- Responsive, keyboard-accessible interface
- Configuration-driven dimensions, maturity mapping, scoring, and recommendation rules

## Research foundations

PAIR draws conceptually from established work on AI risk governance, government AI readiness, autonomous mobility, urban design, curb management, infrastructure integration, workforce transition, and public-value assessment. These sources inform PAIR; they do not independently validate the methodology.

See the curated [`docs/REFERENCES.md`](docs/REFERENCES.md) and the in-product methodology page for selected references.

## Project documentation

- [`docs/METHODOLOGY.md`](docs/METHODOLOGY.md) — framework structure and research position
- [`docs/NAMING.md`](docs/NAMING.md) — naming and terminology rules
- [`docs/REFERENCES.md`](docs/REFERENCES.md) — verified research foundations
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — development and validation roadmap

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

The test suite covers maturity thresholds, domain and overall calculations, ranking of strengths and gaps, recommendation selection, JSON export, and JSON import normalization.

## Methodology customization

- Edit domains, questions, definitions, organization types, and use cases in `lib/assessment-data.ts`.
- Edit maturity labels and thresholds in `lib/maturity.ts`.
- Edit score-based action rules in `lib/recommendations.ts`.
- Edit aggregation and export behavior in `lib/scoring.ts`.

Keeping methodology logic outside the UI makes the framework easier to review, fork, and extend.

## Contributing

Issues and pull requests are welcome. For substantive methodology changes, explain the research basis, intended use case, expected effect on interpretation, and whether migration of saved JSON is required. Run lint, tests, and a production build before submitting a pull request.

## Citation

Until a formal publication or DOI is available, please cite the project as:

> Riggs, W. (2026). *PAIR — Physical AI Readiness: Open-source assessment framework and beta tool*. GitHub repository: `williamwriggs/physical-AI-readiness`.

## License

MIT License. See [`LICENSE`](LICENSE).
