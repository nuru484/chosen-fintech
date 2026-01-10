"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion, Variants } from "motion/react";

export interface FocusArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhatWeDoProps {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: FocusArea[];
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
  title,
  subtitle,
  description,
  focusAreas,
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className="bg-foreground py-16 md:py-24"
    >
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div variants={fadeUp} className="max-w-xl">
            <div className="mb-6 relative">
              <span className="inline-block text-primary text-sm font-medium uppercase tracking-widest relative z-10">
                {subtitle}
              </span>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-0.5 bg-primary/20 mr-2"></div>
            </div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              {description}
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-medium bg-primary hover:bg-primary/90 transition-colors py-3 px-8 rounded-[5px] text-sm uppercase tracking-wider"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={cardVariant}
                whileHover="hover"
                className="relative group"
              >
                <Card className="relative bg-[#252b3b] border border-[#2a3142] rounded-[5px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-primary z-0"
                    initial={{ scaleX: 0 }}
                    variants={{
                      hover: {
                        scaleX: 1,
                        transition: {
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    style={{ originX: 0 }}
                  />

                  <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div className="w-10 h-10 mb-6">
                      <motion.div
                        variants={{
                          hover: { scale: 1.15 },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <area.icon className="w-full h-full text-primary group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {area.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {area.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
