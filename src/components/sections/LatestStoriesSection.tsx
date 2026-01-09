"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Cardano's Proof of Stake: A Beginner's Guide",
    excerpt:
      "Learn how Cardano's Ouroboros protocol works and why it's more sustainable than traditional proof of work systems.",
    category: "Cardano",
    date: "Jan 5, 2026",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "DeFi Fundamentals: Navigating Decentralized Finance",
    excerpt:
      "A comprehensive introduction to DeFi concepts, protocols, and how to safely participate in the ecosystem.",
    category: "DeFi",
    date: "Jan 3, 2026",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Crypto Security Best Practices for 2026",
    excerpt:
      "Essential security tips to protect your digital assets and navigate the crypto space safely.",
    category: "Security",
    date: "Dec 28, 2025",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
  },
];

export function LatestStoriesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Latest Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Insights & Education
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog" className="group">
              View All Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative aspect-16/10 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
