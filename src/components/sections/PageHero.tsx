"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, MoveRight } from "lucide-react";

interface PageHeroProps {
  title: string;
}

export function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative  pb-18 pt-32 md:pb-24 md:pt-64 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={"/hero-bg.jpg"}
          alt="background image for heros"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-wide animate-fade-in">
            {title}
          </h1>

          <div
            className="flex items-center justify-center gap-3 text-primary-foreground/80 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Link
              href="/"
              className="hover:text-primary-foreground transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5" />
            </Link>
            <MoveRight strokeWidth={0.5} />
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
