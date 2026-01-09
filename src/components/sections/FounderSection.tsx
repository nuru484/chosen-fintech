"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export function FounderSection() {
  return (
    <section className="relative bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]  xl:gap-20 2xl:gap-28 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* IMAGE */}
          <motion.div
            className="relative h-105 sm:h-130 lg:h-160 xl:h-180"
            variants={imageVariants}
          >
            <Image
              src="/founder.jpg"
              alt="Founder of Chosen Fintech"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <div className="container">
            <motion.div
              className="max-w-xl py-16 sm:py-20 lg:py-24 px-4"
              variants={contentVariants}
            >
              <motion.h2
                className="font-display text-primary font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-6 leading-tight"
                variants={textVariants}
              >
                FROM OUR FOUNDER
              </motion.h2>

              <motion.div
                className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed mb-8"
                variants={textVariants}
              >
                <p>
                  “When I started Chosen Fintech, my vision was simple: make
                  blockchain technology and cryptocurrency accessible to
                  everyone. Too often, financial innovation leaves behind the
                  very people who could benefit most from it.”
                </p>

                <p>
                  “We chose Cardano as our focus because it represents what we
                  believe in — a technology built on rigorous research, designed
                  for sustainability, and committed to real-world impact.”
                </p>

                <p className="font-medium text-foreground">
                  — Yakub Mohammed Mustapha, Founder & CEO
                </p>
              </motion.div>

              <motion.div
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about" className="group">
                    Read Our Full Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
