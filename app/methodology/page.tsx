import Link from "next/link";
import { MaturityScale } from "@/components/MaturityScale";
import { PairFrameworkVisual } from "@/components/PairFrameworkVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { dimensions, domains } from "@/lib/assessment-data";

const hierarchy = [
  "PAIR Domain",
  "Readiness Dimension",
  "Evidence",
  "Maturity Assessment",
  "Gap",
  "Action",
  "Deployment",
  "Evaluation",
];

export default function MethodologyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="method-hero">
          <div className="shell narrow">
            <span className="kicker"><i /> Methodology · Beta 1.0</span>
            <h1>A transparent framework for place-based readiness.</h1>
            <p>PAIR is an exploratory research and decision-support framework for asking whether the environments, systems, institutions, and public-value conditions around Physical AI are ready for deployment.</p>
          </div>
        </section>

        <section className="method-section">
          <div className="shell method-grid">
            <aside><span>01</span><p>Defining the field</p></aside>
            <article>
              <span className="eyebrow">What is Physical AI?</span>
              <h2>Intelligence that perceives, coordinates, or acts in the physical world.</h2>
              <p>Physical AI includes autonomous vehicles and robotaxis, robotics, intelligent curb systems, AI-enabled logistics, connected infrastructure, automated depots, digital twins, smart charging systems, and other technologies that interact with real places and people.</p>
              <p>Technical performance matters, but deployment also depends on streets and facilities, interoperable systems, capable institutions, skilled workforces, public legitimacy, safety practices, and a viable case for long-term value.</p>
              <div className="callout"><strong>PAIR’s central question</strong><p>Are the place, systems, institutions, and public-value conditions ready for Physical AI deployment?</p></div>
            </article>
          </div>
        </section>

        <section className="method-section shaded">
          <div className="shell">
            <div className="section-heading split">
              <div><span className="eyebrow">Framework structure</span><h2>Domains are the structure. Dimensions are the measures.</h2></div>
              <p>The four PAIR domains and ten readiness dimensions are one nested framework—not separate models.</p>
            </div>
            <PairFrameworkVisual />
            <div className="dimension-columns">
              {domains.map((domain) => (
                <div key={domain.id} className={`dimension-column domain-${domain.id}`}>
                  <h3><span>{domain.letter}</span>{domain.label}</h3>
                  {dimensions.filter((item) => item.domain === domain.id).map((item) => <p key={item.id}><b>{item.number}</b>{item.title}</p>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section">
          <div className="shell method-grid">
            <aside><span>02</span><p>Decision pathway</p></aside>
            <article>
              <span className="eyebrow">From assessment to learning</span>
              <h2>Readiness is a cycle, not a finish line.</h2>
              <p>PAIR makes the reasoning path visible—from the domain being examined to the evidence informing action and the evaluation that follows deployment.</p>
              <div className="hierarchy-flow">
                {hierarchy.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < hierarchy.length - 1 && <i aria-hidden="true">↓</i>}</div>)}
              </div>
            </article>
          </div>
        </section>

        <section className="method-section shaded">
          <div className="shell">
            <div className="section-heading"><span className="eyebrow">Maturity assessment</span><h2>A shared five-point language</h2><p className="section-lede">Ratings describe current conditions and support structured discussion. They are not grades or certifications.</p></div>
            <MaturityScale />
          </div>
        </section>

        <section className="method-section" id="research-foundations">
          <div className="shell method-grid">
            <aside><span>03</span><p>Research position</p></aside>
            <article>
              <span className="eyebrow">Research foundations</span>
              <h2>Conceptually informed—not yet empirically validated.</h2>
              <p>PAIR draws conceptually from existing research and policy frameworks addressing AI readiness, risk governance, mobility systems, urban design, workforce transition, and autonomous-vehicle deployment. These sources inform PAIR; they do not directly validate its scoring structure.</p>
              <p>The beta does not use a validated composite index because weights, evidence standards, and comparisons have not yet been tested across multiple places and use cases. The overall mean is contextual information only.</p>
              <h3 className="subhead">Selected references</h3>
              <ol className="references">
                <li>Tabassi, E. (2023). <em>Artificial Intelligence Risk Management Framework (AI RMF 1.0).</em> National Institute of Standards and Technology.</li>
                <li>Oxford Insights. (2024). <em>Government AI Readiness Index 2024.</em></li>
                <li>National Association of City Transportation Officials. (2019). <em>Blueprint for Autonomous Urbanism: Second Edition.</em></li>
                <li>Open Mobility Foundation. (n.d.). <em>Mobility Data Specification and Curb Data Specification.</em></li>
                <li>U.S. Department of Transportation. (2021). <em>Automated Vehicles Comprehensive Plan.</em></li>
                <li>World Economic Forum. (2025). <em>Future of Jobs Report 2025.</em></li>
                <li>World Economic Forum. (2025). <em>Physical AI: Powering the New Age of Industrial Operations.</em></li>
                <li>Riggs, W., Appleyard, B., &amp; Johnson, M. (2020). A design framework for livable streets in the era of autonomous vehicles. <em>Urban, Planning and Transport Research, 8</em>(1), 125–137.</li>
                <li>Jiang, L., Chen, H., &amp; Chen, Z. (2022). City readiness for connected and autonomous vehicles: A multi-stakeholder and multi-criteria analysis through analytic hierarchy process. <em>Transport Policy, 128</em>, 13–24.</li>
              </ol>
            </article>
          </div>
        </section>

        <section className="method-section future-section">
          <div className="shell future-grid">
            <div><span className="eyebrow light">From beta to validated benchmark</span><h2>What could come next</h2><p>Future versions may add validated weighting, expert review, evidence scoring, peer-city benchmarking, use-case-specific profiles, and longitudinal tracking.</p></div>
            <div className="future-card"><span>Future validated product</span><h3>PAIR Index</h3><p>A future PAIR Index may be developed only after repeated application, expert review, methodological refinement, and comparative evidence.</p></div>
          </div>
        </section>

        <section className="method-cta">
          <div className="shell"><h2>Use the framework. Test the assumptions.</h2><p>The beta is designed for client meetings, workshops, research pilots, and baseline assessments.</p><Link className="button primary" href="/assessment">Start assessment →</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
