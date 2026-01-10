"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "motion/react";

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

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function LatestStoriesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          >
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                LATEST STORIES
              </h2>
              <p className="text-muted-foreground mt-3 hidden md:block">
                Stay updated with the latest trends, guides, and insights in the
                crypto world.
              </p>
            </div>
            <Button variant="outline" asChild className="w-fit">
              <Link href="/blog" className="group">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Blog Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={cardVariant}>
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <Card className="overflow-hidden border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative aspect-16/10 overflow-hidden bg-muted">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      {/* Meta Information */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wide">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
