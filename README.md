# Physical AI Readiness

## PAIR Assessment Tool

**PAIR — Physical AI Readiness** is an open-source research and decision-support framework for evaluating whether places, systems, institutions, and communities are prepared for AI-enabled technologies that act in the physical world.

The public beta product is the **PAIR Assessment Tool**. It organizes readiness across four domains — **Place, Architecture, Institutions, and Returns** — and evaluates those domains through ten readiness dimensions.

> **Status:** PAIR is currently an exploratory framework and beta assessment tool. It is not a certification system, regulatory standard, safety determination, or validated comparative index.

## Why Physical AI Readiness?

Physical AI describes AI-enabled systems that perceive, reason, coordinate, or act in physical environments. This includes autonomous vehicles, robotics, intelligent logistics, automated facilities, AI-enabled infrastructure, connected streets and curbs, smart charging, digital twins, and related systems.

The central premise of PAIR is that **technology readiness and place readiness are not the same thing**. A technically capable system may still fail to scale if the surrounding environment lacks the infrastructure, data architecture, governance, workforce capacity, emergency-response protocols, market conditions, or public trust needed to support deployment.

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

## Maturity Scale

PAIR currently uses a five-point maturity scale:

| Score | Maturity Level | Interpretation |
|---:|---|---|
| 1 | Not Ready | Major gaps exist and ownership or deployment pathways may be unclear. |
| 2 | Emerging | Some capacity exists, but systems remain incomplete or fragmented. |
| 3 | Pilot-Ready | Sufficient capacity exists for a bounded deployment with clear oversight. |
| 4 | Deployment-Ready | Policies, infrastructure, people, and operating systems can support sustained deployment. |
| 5 | Adaptive & Scalable | The system can deploy, measure outcomes, learn, adapt, and scale. |

The beta produces a **PAIR Readiness Profile**, not a validated composite index. A future **PAIR Index** should only be introduced after repeated application, evidence testing, scoring refinement, and validation.

## Research Foundations

PAIR draws conceptually from established work on AI risk governance, government AI readiness, autonomous mobility, urban design, curb management, infrastructure integration, workforce transition, and public-value assessment.

Key verified foundations include:

- National Institute of Standards and Technology. (2023). *Artificial Intelligence Risk Management Framework (AI RMF 1.0).* https://doi.org/10.6028/NIST.AI.100-1
- Oxford Insights. (2024). *Government AI Readiness Index 2024.* https://oxfordinsights.com/ai-readiness/
- National Association of City Transportation Officials. (2020). *Blueprint for Autonomous Urbanism: Second Edition.* https://nacto.org/publication/blueprint-for-autonomous-urbanism/
- U.S. Department of Transportation. (2021). *Automated Vehicles Comprehensive Plan.* https://www.transportation.gov/av/avcp
- Open Mobility Foundation. (2022). *Curb Data Specification 1.0.* https://www.openmobilityfoundation.org/its-official-curb-data-specification-cds-version-1-0/
- World Economic Forum. (2025). *Physical AI: Powering the New Age of Industrial Operations.* https://www.weforum.org/publications/physical-ai-powering-the-new-age-of-industrial-operations/
- Crute, J., Riggs, W., Chapin, T., & Stevens, L. (2018). *Planning for Autonomous Mobility* (PAS Report 592). American Planning Association. https://www.planning.org/publications/report/9157605/
- Riggs, W., Appleyard, B., & Johnson, M. (2020). A design framework for livable streets in the era of autonomous vehicles. *Urban, Planning and Transport Research, 8*(1), 125–137. https://doi.org/10.1080/21650020.2020.1749123
- Appleyard, B., & Riggs, W. (2023). Designing for street livability in the era of driverless cars. *Transportation Research Interdisciplinary Perspectives, 21*, 100868. https://doi.org/10.1016/j.trip.2023.100868
- Schlossberg, M., Riggs, W., Millard-Ball, A., & Shay, E. (2018). *Rethinking the Street in an Era of Driverless Cars.* Urbanism Next. https://www.urbanismnext.org/resources/rethinking-the-street-in-an-era-of-driverless-cars
- Riggs, W. (2024). *Designing the Future Curb: Eight Visions for Adaptive Urban Edges.* SSRN. https://doi.org/10.2139/ssrn.5283742

These sources inform PAIR; they do not independently validate the methodology. A curated reference list is maintained in [`docs/REFERENCES.md`](docs/REFERENCES.md).

## Naming Convention

- **Repository:** `physical-AI-readiness`
- **Framework:** **PAIR — Physical AI Readiness**
- **Public beta product:** **PAIR Assessment Tool**
- **Current output:** **PAIR Readiness Profile**
- **Future validated benchmarking product:** **PAIR Index**
- **Framework version:** **PAIR Framework v0.1**

Do not describe the current beta as a validated index.

See [`docs/NAMING.md`](docs/NAMING.md).

## Methodology

The first phase emphasizes a readiness profile across ten dimensions rather than collapsing complex evidence into a single score. See [`docs/METHODOLOGY.md`](docs/METHODOLOGY.md) for the full framework.

## Development

The intended beta stack is Next.js, TypeScript, Tailwind CSS, local browser state, and Vercel deployment. The methodology should remain configuration-driven and separate from presentation components.

Once the app code is present:

```bash
npm install
npm run dev
```

## License

MIT License. See [`LICENSE`](LICENSE).

## Citation

Until a formal publication or DOI is available, please cite the project as:

> Riggs, W. (2026). *PAIR — Physical AI Readiness: Open-source assessment framework and beta tool*. GitHub repository: `williamwriggs/physical-AI-readiness`.

## Disclaimer

PAIR is currently an exploratory research and decision-support framework. The PAIR Assessment Tool is not a certification system, regulatory standard, safety assessment, or validated comparative index. Results should be interpreted alongside evidence, local context, stakeholder input, and expert review.
