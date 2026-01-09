"use client";
import { Users, BookOpen, Briefcase, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Learners Reached" },
  { icon: BookOpen, value: "120+", label: "Educational Programs" },
  { icon: Briefcase, value: "35", label: "Active Projects" },
  { icon: Award, value: "15", label: "Industry Partners" },
];

export function StatsSection() {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
