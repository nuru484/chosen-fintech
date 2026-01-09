"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Third-Generation Blockchain",
    description:
      "Cardano is built on peer-reviewed research and evidence-based development, representing the evolution of blockchain technology.",
  },
  {
    icon: Shield,
    title: "Proof of Stake Security",
    description:
      "Ouroboros, Cardano's proof-of-stake protocol, is mathematically proven secure while being energy-efficient.",
  },
  {
    icon: Zap,
    title: "Scalability & Sustainability",
    description:
      "Designed for the future with Hydra layer-2 solutions and a governance model that ensures long-term sustainability.",
  },
  {
    icon: Globe,
    title: "Real-World Impact",
    description:
      "From identity solutions in Africa to supply chain tracking, Cardano focuses on solving real problems for real people.",
  },
];

export function CardanoSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Cardano?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building on the Most{" "}
            <span className="gradient-text">Advanced Blockchain</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We chose to focus on Cardano because of its scientific approach to
            blockchain development, commitment to sustainability, and vision for
            financial inclusion worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
