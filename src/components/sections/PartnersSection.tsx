"use client";
import { useRef } from "react";

const partners = [
  "Cardano Foundation",
  "EMURGO",
  "Input Output Global",
  "Catalyst",
  "World Mobile",
  "SingularityNET",
  "Minswap",
  "SundaeSwap",
  "JPG Store",
  "NMKR",
];

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container-wide mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by leading organizations in the Cardano ecosystem
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-muted/50 to-transparent z-10" />

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex items-center gap-16 animate-scroll"
          style={{ width: "max-content" }}
        >
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex items-center justify-center px-6 py-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <span className="font-display font-semibold text-muted-foreground whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
