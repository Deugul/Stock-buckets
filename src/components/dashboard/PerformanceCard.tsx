"use client";

import { useState } from "react";

const ranges = ["1Y", "5Y", "MAX"] as const;

export function PerformanceCard({ chartPath }: { chartPath: string }) {
  const [range, setRange] = useState<(typeof ranges)[number]>("1Y");

  // Chart shape is illustrative only — no real historical data exists yet
  // for these baskets, so the same curve is shown regardless of range.
  const areaPath = `${chartPath} L 800,200 L 0,200 Z`;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-8 border border-outline-variant shadow-sm">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
        <h3 className="text-headline-md font-bold">Performance</h3>
        <div className="flex bg-surface rounded-full p-1 border border-outline-variant">
          {ranges.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={
                r === range
                  ? "px-3.5 sm:px-5 py-1.5 text-label-sm font-label font-bold rounded-full bg-lime-accent text-black"
                  : "px-3.5 sm:px-5 py-1.5 text-label-sm font-label text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64 w-full relative">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 800 200"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#71d877" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#71d877" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#areaGradient)" />
          <path d={chartPath} fill="none" stroke="#059669" strokeWidth="4" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-4 border-t border-outline-variant text-label-sm font-label text-on-surface-variant">
          <span>{range === "MAX" ? "INCEPTION" : `JAN ${range === "5Y" ? "2021" : "2024"}`}</span>
          <span>JUL 2024</span>
          <span>TODAY</span>
        </div>
      </div>
    </div>
  );
}
