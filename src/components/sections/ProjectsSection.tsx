"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: GraduationCap,
    title: "Cardano Academy",
    description:
      "A comprehensive online learning platform offering courses on Cardano development, staking, and ecosystem participation.",
    status: "Active",
  },
  {
    icon: Users,
    title: "Community Workshops",
    description:
      "Monthly virtual and in-person workshops bringing together crypto enthusiasts, developers, and newcomers.",
    status: "Ongoing",
  },
  {
    icon: Lightbulb,
    title: "Catalyst Education Initiative",
    description:
      "Supporting Project Catalyst by educating the community on governance and proposal evaluation.",
    status: "Active",
  },
];

export function ProjectsSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Current Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Initiatives Driving Change
          </h2>
          <p className="text-muted-foreground">
            Our active projects focus on education, community building, and
            advancing Cardano adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                  <project.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                  {project.status}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" asChild>
            <Link href="/about" className="group">
              Learn More About Our Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
