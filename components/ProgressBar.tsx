export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = Math.round((current / total) * 100);
  return <div className="progress-wrap"><div className="progress-label"><span>Assessment progress</span><strong>{current} of {total} complete</strong></div><div className="progress-track" role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total}><span style={{ width: `${progress}%` }} /></div></div>;
}
