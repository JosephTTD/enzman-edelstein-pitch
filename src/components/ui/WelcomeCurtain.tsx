"use client";

import { useState, useEffect } from "react";

export function WelcomeCurtain() {
  const [phase, setPhase] = useState<"logo" | "opening" | "done">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("opening"), 1200);
    const t2 = setTimeout(() => setPhase("done"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Left curtain */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-[#0A0A0A] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === "opening" ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Right curtain */}
      <div
        className={`absolute top-0 right-0 h-full w-1/2 bg-[#0A0A0A] transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === "opening" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Center logo */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          phase === "opening" ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-display not-italic text-2xl tracking-[0.3em] text-white sm:text-3xl lg:text-4xl">
          ENZMANN EDELSTEINE
        </span>
      </div>
    </div>
  );
}
