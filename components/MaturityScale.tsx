import { maturityLevels } from "@/lib/maturity";

export function MaturityScale({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "maturity-scale compact" : "maturity-scale"}>
      {maturityLevels.map((level) => <div className="maturity-level" key={level.score}><span>{level.score}</span><strong>{level.label}</strong>{!compact && <p>{level.description}</p>}</div>)}
    </div>
  );
}
