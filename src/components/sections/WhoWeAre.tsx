"use client";

import React from "react";
import { motion, Variants } from "motion/react";

interface WhoWeAreProps {
  description: string;
  vision: string;
  mission: string;
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const WhoWeAre: React.FC<WhoWeAreProps> = ({
  description,
  vision,
  mission,
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className="font-light"
    >
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Sticky Header */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 lg:sticky lg:top-8 lg:self-start"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
                WHO
                <br />
                WE
                <br />
                ARE?
              </h2>

              <motion.div
                variants={lineReveal}
                className="w-10 h-0.5 bg-primary mt-4 origin-left"
              />
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={container}
              className="lg:col-span-9 space-y-8"
            >
              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-[18px] font-light max-w-3xl"
              >
                {description}
              </motion.p>

              {/* Vision */}
              <motion.div variants={fadeUp} className="max-w-3xl">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  VISION
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[18px] font-light">
                  {vision}
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div variants={fadeUp} className="max-w-3xl">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  MISSION
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[18px] font-light">
                  {mission}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
