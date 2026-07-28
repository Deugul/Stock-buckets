"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        }
      },
      { threshold: 0.1 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
