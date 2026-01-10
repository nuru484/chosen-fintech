"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "motion/react";

const projects = [
  {
    imageUrl: "/cardano-ghana-community.png",
    title: "Cardano Ghana",
    link: "/projects/cardano-ghana",
  },
  {
    imageUrl: "/scale-up-icp-logo.png",
    title: "Scale-UP ICP Ghana",
    link: "/projects/scale-up-icp-ghana",
  },
  {
    imageUrl: "/bch-house-africa.png",
    title: "BCH House, Africa",
    link: "/projects/bch-house-africa",
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

const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          >
            <motion.div variants={fadeUp} className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                OUR PROJECTS
              </h2>
              <motion.div
                variants={lineReveal}
                className="w-10 h-0.5 bg-primary mt-4 origin-left"
              />
              <p className="text-muted-foreground mt-3">
                Our projects are built in close partnership with organizations
                to drive meaningful outcomes.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button variant="outline" asChild className="w-fit">
                <Link href="/projects" className="group">
                  View All Our Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Projects Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={cardVariant}>
                <Link href={project.link} className="group block h-full">
                  <Card className="overflow-hidden rounded-sm  hover:shadow-xl hover:border-primary  transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      {/* Project Image/Logo Area */}
                      <div className="w-full aspect-square max-w-50 p-6 flex justify-center items-center bg-white rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105">
                        <div className="relative w-full h-full">
                          <Image
                            src={project.imageUrl}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300 mt-auto">
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
