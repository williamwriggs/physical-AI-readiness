# PAIR Methodology

Version: **PAIR Framework v0.1**

## Overview

**PAIR — Physical AI Readiness** is an exploratory framework for assessing whether places, systems, institutions, and communities are prepared for AI-enabled technologies that act in the physical world.

PAIR is organized around four connected domains:

- **P — Place**
- **A — Architecture**
- **I — Institutions**
- **R — Returns**

These domains are not separate from the ten readiness dimensions. The ten dimensions are the operational expression of the PAIR framework.

The methodological structure is:

**PAIR Domain → Readiness Dimension → Evidence → Maturity Assessment → Gap → Action → Deployment → Evaluation**

## Why Physical AI Readiness?

Physical AI is increasingly used to describe systems that combine AI, sensing, hardware, and autonomous action in physical environments. This includes autonomous vehicles, robotics, intelligent logistics, automated facilities, connected infrastructure, digital twins, smart charging, and other systems that perceive, reason, coordinate, or act in the physical world.

The World Economic Forum describes Physical AI as robotic systems capable of perception, reasoning, and autonomous action. PAIR extends this discussion from the technology itself to the environment in which such systems are expected to operate.

The central proposition is simple: **technology readiness and place readiness are not the same thing**.

A technically capable system may still fail to scale if the surrounding environment lacks physical infrastructure, interoperable data, institutional capacity, workforce readiness, emergency-response protocols, market viability, or public trust.

PAIR therefore assesses the readiness of the deployment environment rather than certifying the technical performance of a specific AI system.

## The Four PAIR Domains and Ten Dimensions

### P — Place

**Core question: Is the physical environment ready?**

1. **Physical Infrastructure** — streets, intersections, sidewalks, buildings, lighting, signage, access points, maintenance conditions, and other physical assets or constraints relevant to deployment.
2. **Curb, Access & Public Realm** — pickup/drop-off, loading, accessibility, curb management, sidewalks, transit stops, enforcement, and competing uses of public space.
3. **Energy, Charging & Depot Capacity** — electrical capacity, charging, staging, maintenance, storage, depots, land availability, and supporting facilities.

The Place domain builds on literature arguing that autonomous technologies should not simply be inserted into existing urban systems without reconsidering street design, curb allocation, parking, right-of-way, and human-scale urbanism (Crute et al., 2018; Riggs et al., 2020; Appleyard & Riggs, 2023; Schlossberg et al., 2018; Riggs, 2024).

### A — Architecture

**Core question: Can Physical AI connect to the wider system?**

4. **Digital & Data Infrastructure** — data quality and availability, APIs, cybersecurity, privacy, mapping, monitoring, standards, interoperability, analytics, and digital twins.
5. **Mobility & System Integration** — connections with transit, walking, biking, freight, paratransit, airports, and other transportation systems, together with accessibility, VMT, congestion, and network performance.

Architecture captures the connective tissue of Physical AI. The Open Mobility Foundation's Curb Data Specification demonstrates how physical urban assets can be represented through common digital standards, while USDOT's Automated Vehicles Comprehensive Plan emphasizes preparing the transportation system, promoting collaboration, and supporting safe integration of automated driving systems.

### I — Institutions

**Core question: Can we govern, operate, and respond?**

6. **Governance & Institutional Capacity** — decision rights, policy, procurement, coordination, data agreements, legal authority, accountability, and the capacity to manage technology partners.
7. **Workforce & Operations** — skills, technicians, electricians, field operations, fleet management, remote support, maintenance, training pathways, and workforce transition.
8. **Safety, Emergency Response & Resilience** — incident protocols, responder training, reporting, cybersecurity, continuity planning, emergency coordination, and the capacity to learn from failures.

The Institutions domain reflects the fact that automated systems do not eliminate institutions or human work. They create new demands on both. NIST's AI Risk Management Framework treats governance, measurement, and management as ongoing activities throughout the AI lifecycle. For Physical AI, that same logic applies to deployment, operations, incident response, workforce preparation, and continuous oversight.

### R — Returns

**Core question: Does deployment create value?**

9. **Public Trust, Equity & Community Acceptance** — accessibility, engagement, transparency, fairness, community trust, distribution of benefits and burdens, and responsiveness to public concerns.
10. **Economic Development & Deployment Viability** — demand, anchor partners, investment, jobs, workforce development, business models, costs, public benefits, and long-term sustainability.

Returns intentionally places outcomes inside the readiness framework rather than treating them as an afterthought. A place may possess strong infrastructure and sophisticated technology but still be poorly positioned for Physical AI if there is no credible use case, public benefit, community acceptance, or sustainable operating model.

## Maturity Assessment

PAIR v0.1 uses a five-point maturity rubric.

| Score | Level | Meaning |
|---:|---|---|
| 1 | Not Ready | Major gaps exist and ownership or deployment pathways may be unclear. |
| 2 | Emerging | Some capacity exists, but systems remain incomplete or fragmented. |
| 3 | Pilot-Ready | Sufficient capacity exists for a bounded deployment with clear oversight. |
| 4 | Deployment-Ready | Policies, infrastructure, people, and operations can support sustained deployment. |
| 5 | Adaptive & Scalable | The system can deploy, evaluate outcomes, learn, adapt, and scale. |

PAIR v0.1 should produce a **readiness profile**, not a validated composite index. The pattern of strengths and gaps across dimensions is more informative at this stage than a single summary number.

## Evidence

Each maturity assessment should be interpreted alongside supporting evidence. Depending on the use case, evidence may include:

- policy and planning documents;
- infrastructure inventories;
- curb, land-use, and site data;
- charging and utility information;
- mobility and travel-behavior data;
- procurement and governance procedures;
- workforce and training programs;
- safety and emergency-response protocols;
- public engagement and user research;
- market and economic-development evidence;
- stakeholder interviews and expert review.

The beta may include evidence notes and confidence ratings. Future versions may formalize evidence-quality scoring and inter-rater validation.

## From Assessment to Action

PAIR is intended to support decisions, not simply measurement.

The sequence is:

1. **Evidence** — collect data, policies, infrastructure information, and stakeholder input.
2. **Maturity Assessment** — assess each of the ten dimensions using the common rubric.
3. **Gap** — identify the specific conditions constraining readiness.
4. **Action** — define near-, medium-, and longer-term interventions.
5. **Deployment** — support bounded implementation where appropriate.
6. **Evaluation** — measure outcomes, learn, and reassess readiness over time.

## Research Foundations

PAIR draws conceptually from established research and policy frameworks. These sources inform the framework but do not independently validate PAIR.

### AI readiness and risk governance

- National Institute of Standards and Technology. (2023). *Artificial Intelligence Risk Management Framework (AI RMF 1.0).* https://doi.org/10.6028/NIST.AI.100-1
- Oxford Insights. (2024). *Government AI Readiness Index 2024.* https://oxfordinsights.com/ai-readiness/

These sources support the treatment of governance, institutional capability, data, infrastructure, and risk management as core readiness conditions.

### Autonomous mobility, urban design, and infrastructure

- Crute, J., Riggs, W., Chapin, T., & Stevens, L. (2018). *Planning for Autonomous Mobility* (PAS Report 592). American Planning Association. https://www.planning.org/publications/report/9157605/
- National Association of City Transportation Officials. (2020). *Blueprint for Autonomous Urbanism: Second Edition.* https://nacto.org/publication/blueprint-for-autonomous-urbanism/
- U.S. Department of Transportation. (2021). *Automated Vehicles Comprehensive Plan.* https://www.transportation.gov/av/avcp
- Open Mobility Foundation. (2022). *Curb Data Specification 1.0.* https://www.openmobilityfoundation.org/its-official-curb-data-specification-cds-version-1-0/
- Riggs, W., Appleyard, B., & Johnson, M. (2020). A design framework for livable streets in the era of autonomous vehicles. *Urban, Planning and Transport Research, 8*(1), 125–137. https://doi.org/10.1080/21650020.2020.1749123
- Appleyard, B., & Riggs, W. (2023). Designing for street livability in the era of driverless cars. *Transportation Research Interdisciplinary Perspectives, 21*, 100868. https://doi.org/10.1016/j.trip.2023.100868
- Schlossberg, M., Riggs, W., Millard-Ball, A., & Shay, E. (2018). *Rethinking the Street in an Era of Driverless Cars.* Urbanism Next. https://www.urbanismnext.org/resources/rethinking-the-street-in-an-era-of-driverless-cars
- Riggs, W. (2024). *Designing the Future Curb: Eight Visions for Adaptive Urban Edges.* SSRN. https://doi.org/10.2139/ssrn.5283742

These sources support the inclusion of built-environment design, curb governance, infrastructure, multimodal integration, public outcomes, and institutional preparation.

### Physical AI

- World Economic Forum. (2025). *Physical AI: Powering the New Age of Industrial Operations.* https://www.weforum.org/publications/physical-ai-powering-the-new-age-of-industrial-operations/

This source provides a contemporary basis for the Physical AI concept and its relationship to hardware, perception, reasoning, autonomous action, operations, and workforce transformation.

A curated, verification-focused bibliography is maintained in [`REFERENCES.md`](REFERENCES.md).

## Methodological Development

PAIR should be refined through repeated real-world application. Potential future methodological work includes:

- expanding from one maturity question to multiple indicators per dimension;
- validating inter-rater reliability;
- formalizing evidence-confidence scoring;
- testing use-case-specific weights;
- sensitivity analysis;
- expert elicitation;
- longitudinal reassessment;
- comparing readiness profiles with observed deployment outcomes;
- peer benchmarking only after sufficient comparable cases exist.

Only after sufficient validation should the project move from a readiness profile toward a formal **PAIR Index**.

## Limitations

PAIR v0.1 is exploratory. It does not certify safety, regulatory compliance, technology performance, or deployment feasibility. Self-assessment scores may reflect perception as much as demonstrated capacity. Results should be interpreted alongside evidence, local context, stakeholder input, and expert review.
