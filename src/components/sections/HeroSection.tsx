"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse-soft" />
            <span className="text-sm font-medium">
              Cardano Ecosystem Advocates
            </span>
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Empowering the Future of{" "}
            <span className="underline decoration-primary-foreground/30 decoration-4 underline-offset-8">
              Decentralized Finance
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Chosen Fintech is your trusted partner in cryptocurrency education,
            specializing in the Cardano ecosystem, blockchain technology, and
            financial literacy for the digital age.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href="/cardano-hub" className="group">
                Learn Cardano
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/about">
                <Play className="mr-2" size={18} />
                Explore Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
