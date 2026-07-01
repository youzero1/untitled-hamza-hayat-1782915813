import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300/80 font-medium">Counter</p>
            <h1 className="mt-2 text-2xl font-semibold text-white">Tap to count</h1>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-indigo-500/30 rounded-full" />
              <div className="relative text-7xl sm:text-8xl font-bold tabular-nums text-white text-center min-w-[10rem]">
                {count}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              onClick={decrement}
              className="col-span-1 h-14 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/10 text-white text-2xl font-semibold transition-colors"
              aria-label="Decrease"
            >
              −
            </button>
            <button
              onClick={reset}
              className="col-span-1 h-14 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/10 text-white/80 text-sm font-medium transition-colors"
            >
              Reset
            </button>
            <button
              onClick={increment}
              className="col-span-1 h-14 rounded-xl bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white text-2xl font-semibold shadow-lg shadow-indigo-500/30 transition-colors"
              aria-label="Increase"
            >
              +
            </button>
          </div>

          <div className="pt-6 border-t border-white/10">
            <label className="flex items-center justify-between gap-4">
              <span className="text-sm text-white/70">Step size</span>
              <input
                type="number"
                min={1}
                value={step}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  setStep(Number.isFinite(v) && v > 0 ? v : 1);
                }}
                className="w-24 h-10 rounded-lg bg-white/10 border border-white/10 px-3 text-white text-right tabular-nums focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Increases and decreases by your chosen step.
        </p>
      </div>
    </div>
  );
}
