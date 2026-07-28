"use client";

import { useState } from "react";
import { BucketsTable } from "@/components/dashboard/BucketsTable";
import { BucketsCardGrid } from "@/components/dashboard/BucketsCardGrid";

const filters = ["All Buckets", "Technology", "Energy", "Real Estate", "Crypto"];

type View = "list" | "card";

export function BucketsExplorer() {
  const [view, setView] = useState<View>("list");

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6 border-b border-outline-variant pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={
                index === 0
                  ? "px-4 py-2 border-b-2 border-lime-accent text-primary font-bold text-sm -mb-3"
                  : "px-4 py-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium -mb-3"
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-surface rounded-lg p-1 border border-outline-variant shrink-0">
          <button
            type="button"
            onClick={() => setView("list")}
            aria-pressed={view === "list"}
            aria-label="List view"
            className={
              view === "list"
                ? "p-1.5 rounded-md bg-white shadow-sm text-on-surface"
                : "p-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-colors"
            }
          >
            <span className="material-symbols-outlined text-[20px]">
              view_list
            </span>
          </button>
          <button
            type="button"
            onClick={() => setView("card")}
            aria-pressed={view === "card"}
            aria-label="Card view"
            className={
              view === "card"
                ? "p-1.5 rounded-md bg-white shadow-sm text-on-surface"
                : "p-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-colors"
            }
          >
            <span className="material-symbols-outlined text-[20px]">
              grid_view
            </span>
          </button>
        </div>
      </div>

      {view === "list" ? <BucketsTable /> : <BucketsCardGrid />}
    </>
  );
}
