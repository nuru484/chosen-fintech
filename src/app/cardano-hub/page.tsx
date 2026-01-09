import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Wallet,
  Vote,
  Code,
  Coins,
  Shield,
  Calendar,
} from "lucide-react";

const guides = [
  {
    icon: Wallet,
    title: "Getting Started with Cardano",
    description:
      "Learn the basics: what is Cardano, how to set up a wallet, and buy your first ADA.",
    level: "Beginner",
  },
  {
    icon: Coins,
    title: "Staking & Delegation",
    description:
      "Understand how to stake your ADA, choose stake pools, and earn passive rewards.",
    level: "Beginner",
  },
  {
    icon: Vote,
    title: "Project Catalyst & Governance",
    description:
      "Participate in Cardano's decentralized governance and vote on funding proposals.",
    level: "Intermediate",
  },
  {
    icon: Code,
    title: "Smart Contracts on Cardano",
    description:
      "Introduction to Plutus and Marlowe for building decentralized applications.",
    level: "Advanced",
  },
  {
    icon: Shield,
    title: "NFTs on Cardano",
    description:
      "Explore the native NFT ecosystem, marketplaces, and how to mint your own NFTs.",
    level: "Intermediate",
  },
  {
    icon: BookOpen,
    title: "DeFi on Cardano",
    description:
      "Navigate DEXs, lending protocols, and yield opportunities in the Cardano ecosystem.",
    level: "Intermediate",
  },
];

const updates = [
  {
    title: "Chang Hard Fork Successfully Deployed",
    date: "Jan 6, 2026",
    excerpt:
      "The Chang hard fork marks a major milestone in Cardano's governance evolution with on-chain voting.",
  },
  {
    title: "Midnight Sidechain Testnet Launch",
    date: "Jan 2, 2026",
    excerpt:
      "Input Output Global announces the public testnet for Midnight, Cardano's privacy-focused sidechain.",
  },
  {
    title: "ADA Staking Rewards Update",
    date: "Dec 28, 2025",
    excerpt:
      "Current epoch staking parameters and analysis of stake pool performance metrics.",
  },
];

const CardanoHub = () => {
  return (
    <div>
      <PageHero title="Cardano Hub" />

      {/* Educational Guides */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Learn
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational Guides
            </h2>
            <p className="text-muted-foreground">
              From beginner basics to advanced development, explore our curated
              learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <Card
                key={guide.title}
                className="cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                      <guide.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        guide.level === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : guide.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {guide.level}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto group">
                    Start Learning
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Updates */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Stay Updated
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Ecosystem Updates
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog" className="group">
                View All Updates
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {updates.map((update, index) => (
              <Card
                key={update.title}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    {update.date}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {update.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {update.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center bg-primary rounded-3xl p-12 md:p-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Dive Into Cardano?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join our community of learners and start your journey into the
              Cardano ecosystem today.
            </p>
            <Button asChild>
              <Link href="/contact">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardanoHub;
