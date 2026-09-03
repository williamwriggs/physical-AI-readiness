# Physical AI Readiness

## PAIR Assessment Tool

**PAIR — Physical AI Readiness** is an open-source research and decision-support framework for evaluating whether places, systems, institutions, and communities are ready for AI-enabled technologies that act in the physical world.

The public beta product is the **PAIR Assessment Tool**. It organizes readiness across four domains — **Place, Architecture, Institutions, and Returns** — and evaluates those domains through ten readiness dimensions.

> **Status:** PAIR is currently an exploratory framework and beta assessment tool. It is not a certification system, regulatory standard, safety determination, or validated comparative index.

## Why Physical AI Readiness?

AI is moving beyond software and into streets, vehicles, depots, buildings, logistics systems, public space, infrastructure, and everyday operations. Autonomous vehicles are one visible example, but the same transition includes robotics, intelligent logistics, digital twins, connected infrastructure, smart charging, automated facilities, and AI-supported transportation and public-sector operations.

Technology readiness and place readiness are not the same thing. A capable automated system may still encounter weak curb management, insufficient charging capacity, unclear governance, limited workforce preparation, fragmented data systems, or low public trust.

PAIR is designed to make those conditions visible and actionable.

## The PAIR Framework

PAIR stands for:

- **P — Place:** Is the physical environment ready?
- **A — Architecture:** Can Physical AI connect to the wider system?
- **I — Institutions:** Can we govern, operate, and respond?
- **R — Returns:** Does deployment create value?

The four PAIR domains are the conceptual structure. The ten dimensions are how those domains are assessed.

### Place

1. Physical Infrastructure
2. Curb, Access & Public Realm
3. Energy, Charging & Depot Capacity

### Architecture

4. Digital & Data Infrastructure
5. Mobility & System Integration

### Institutions

6. Governance & Institutional Capacity
7. Workforce & Operations
8. Safety, Emergency Response & Resilience

### Returns

9. Public Trust, Equity & Community Acceptance
10. Economic Development & Deployment Viability

The assessment logic is:

**PAIR Domain → Readiness Dimension → Evidence → Maturity Assessment → Gap → Action → Deployment → Evaluation**

## Maturity Scale

PAIR currently uses a five-point maturity scale:

| Score | Maturity Level | Interpretation |
|---:|---|---|
| 1 | Not Ready | Major gaps exist and ownership or deployment pathways may be unclear. |
| 2 | Emerging | Some capacity exists, but systems remain incomplete or fragmented. |
| 3 | Pilot-Ready | Sufficient capacity exists for a bounded deployment with clear oversight. |
| 4 | Deployment-Ready | Policies, infrastructure, people, and operating systems can support sustained deployment. |
| 5 | Adaptive & Scalable | The system can deploy, measure outcomes, learn, adapt, and scale. |

The beta produces a **PAIR Readiness Profile**, not a validated composite index. It may show an unweighted overall maturity value for context, but this should not be interpreted as a formal PAIR Index score.

## PAIR Assessment Tool

The beta tool is intended to support self-assessment and structured discussion for users such as:

- cities, counties, and public agencies;
- transit agencies;
- universities and campuses;
- airports and ports;
- developers and master-planned communities;
- economic-development organizations;
- mobility and logistics companies;
- consulting and research organizations.

Potential use cases include autonomous vehicles, curb and pickup/drop-off management, campus automation, transit integration, robotics and logistics, Physical AI economic development, charging and depot operations, and connected infrastructure.

## Research Foundations

PAIR draws conceptually from existing work on AI readiness, risk governance, autonomous mobility, urban design, digital infrastructure, workforce transition, and public-value assessment. Relevant foundations include:

- National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*.
- Oxford Insights, *Government AI Readiness Index*.
- National Association of City Transportation Officials, *Blueprint for Autonomous Urbanism*.
- Open Mobility Foundation standards and specifications for mobility and curb data.
- U.S. Department of Transportation, *Automated Vehicles Comprehensive Plan*.
- World Economic Forum work on Physical AI and workforce transformation.
- Riggs, W., Appleyard, B., & Johnson, M. (2020). “A design framework for livable streets in the era of autonomous vehicles.” *Urban, Planning and Transport Research, 8*(1), 125–137. https://doi.org/10.1080/21650020.2020.1749123
- Zarghampour, H., et al. (2022). Research on city readiness for connected and autonomous vehicles using multi-stakeholder and multi-criteria assessment. *Transport Policy*.

These sources inform PAIR; they should not be interpreted as independently validating the PAIR methodology.

## Naming Convention

Use the following naming consistently across code, documentation, publications, and deployment:

- **Repository:** `physical-AI-readiness`
- **Framework:** **PAIR — Physical AI Readiness**
- **Public beta product:** **PAIR Assessment Tool**
- **Current output:** **PAIR Readiness Profile**
- **Future validated benchmarking product:** **PAIR Index**
- **Framework version:** **PAIR Framework v0.1**

Do not describe the current beta as a validated index.

See [`docs/NAMING.md`](docs/NAMING.md) for the full naming and terminology guide.

## Repository Structure

The intended application architecture is:

```text
/app
  /page.tsx
  /assessment/page.tsx
  /results/page.tsx
  /methodology/page.tsx

/components
/lib
/public
/docs
```

Assessment questions, scoring logic, maturity mappings, and recommendations should remain configuration-driven and separate from presentation components.

## Development

The beta is intended to use:

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- local browser state
- Vercel deployment

No database, authentication, payment system, analytics service, or LLM dependency is required for the first beta.

Once the app code is present:

```bash
npm install
npm run dev
```

## Deployment

The recommended Vercel project slug is:

```text
physical-ai-readiness
```

Recommended page title:

```text
PAIR Assessment Tool | Physical AI Readiness
```

## Methodology

The methodology is intentionally transparent and developmental. The first phase emphasizes a readiness profile across ten dimensions rather than collapsing complex evidence into a single score.

As PAIR is applied across additional cities, campuses, developments, and deployment settings, later versions may add:

- multiple indicators per dimension;
- evidence-confidence scoring;
- use-case-specific weighting;
- expert review;
- longitudinal reassessment;
- peer benchmarking;
- methodological validation;
- a future **PAIR Index**.

See [`docs/METHODOLOGY.md`](docs/METHODOLOGY.md) for more detail.

## Roadmap

The near-term goal is to validate the framework through real-world use before adding unnecessary software complexity.

See [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Contributing

This project is open source and welcomes thoughtful contributions from researchers, practitioners, cities, technologists, planners, designers, mobility operators, workforce organizations, and others working on the real-world deployment of AI-enabled systems.

Methodological changes should be documented clearly and should distinguish between conceptual additions, scoring changes, empirical validation, and UI changes.

## License

MIT License. See [`LICENSE`](LICENSE).

## Citation

Until a formal publication or DOI is available, please cite the project as:

> Riggs, W. (2026). *PAIR — Physical AI Readiness: Open-source assessment framework and beta tool*. GitHub repository: `williamwriggs/physical-AI-readiness`.

## Disclaimer

PAIR is currently an exploratory research and decision-support framework. The PAIR Assessment Tool is not a certification system, regulatory standard, safety assessment, or validated comparative index. Results should be interpreted alongside evidence, local context, stakeholder input, and expert review.
