"use client";

import { useState } from "react";
import { markets } from "@/lib/site";

export function WorldMap() {
  const [active, setActive] = useState(markets[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="rounded-lg border border-white/12 bg-white/7 p-4">
        <svg viewBox="0 0 100 58" role="img" aria-label="Interactive export markets map" className="h-auto w-full">
          <path
            d="M10 20 C16 12 27 11 34 18 C40 13 48 15 54 21 C61 11 76 12 87 22 C94 29 92 43 82 48 C70 55 61 49 54 42 C48 50 36 51 29 44 C20 48 10 42 8 32 C7 27 7 23 10 20Z"
            fill="#e7d5a6"
            opacity="0.18"
          />
          <path
            d="M15 24 L27 19 L36 24 L45 21 L55 27 L68 21 L84 27 L88 38 L75 44 L63 40 L52 47 L42 39 L31 43 L20 37 Z"
            fill="#f8fafc"
            opacity="0.18"
          />
          {markets.map((market) => (
            <button key={market.region} type="button" onClick={() => setActive(market)} aria-label={`Show ${market.region}`}>
              <circle
                cx={market.coordinates.x}
                cy={market.coordinates.y}
                r={active.region === market.region ? 2.4 : 1.8}
                fill={active.region === market.region ? "#e7d5a6" : "#ffffff"}
              />
              <circle cx={market.coordinates.x} cy={market.coordinates.y} r="4.2" fill="transparent" stroke="#e7d5a6" opacity="0.45" />
            </button>
          ))}
        </svg>
      </div>
      <div className="rounded-lg border border-white/12 bg-white/8 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e7d5a6]">Active Region</p>
        <h3 className="mt-3 font-display text-3xl text-white">{active.region}</h3>
        <p className="mt-4 text-sm leading-7 text-white/70">{active.copy}</p>
        <div className="mt-6 grid gap-3">
          {markets.map((market) => (
            <button
              key={market.region}
              type="button"
              onClick={() => setActive(market)}
              className={`rounded-md border px-4 py-3 text-left text-sm font-semibold transition ${
                active.region === market.region
                  ? "border-[#e7d5a6] bg-[#e7d5a6] text-[#071b33]"
                  : "border-white/14 text-white/72 hover:border-[#e7d5a6]"
              }`}
            >
              {market.region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
