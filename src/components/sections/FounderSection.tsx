"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FounderSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-4/5 max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden card-shadow">
              <Image
                src={"/founder.jpg"}
                alt="Founder of Chosen Fintech"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 gradient-bg rounded-2xl -z-10 opacity-20" />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              From Our Founder
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Message of Vision & Purpose
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                &quot;When I started Chosen Fintech, my vision was simple: make
                blockchain technology and cryptocurrency accessible to everyone.
                Too often, financial innovation leaves behind the very people
                who could benefit most from it.&quot;
              </p>
              <p>
                &quot;We chose Cardano as our focus because it represents what
                we believe in—a technology built on rigorous research, designed
                for sustainability, and committed to real-world impact. Our
                mission is to educate, empower, and advocate for a more
                inclusive financial future.&quot;
              </p>
              <p className="font-medium text-foreground">
                — David Okonkwo, Founder & CEO
              </p>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about" className="group">
                Read Our Full Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
