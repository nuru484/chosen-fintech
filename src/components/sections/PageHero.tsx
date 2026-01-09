"use client";
import Image from "next/image";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  backgroundImage: string;
}

export function PageHero({
  badge,
  title,
  description,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4 animate-fade-in">
            {badge}
          </span>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>
          <p
            className="text-lg text-primary-foreground/80 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
