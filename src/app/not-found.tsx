"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

const buttonsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const hoverVariants: Variants = {
  rest: { x: "-100%" },
  hover: {
    x: "0%",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const NotFound = () => {
  return (
    <section
      className="section-padding px-4 pt-42 pb-18 md:pt-56 md:pb-24 
 flex items-center justify-center min-h-[60vh] overflow-hidden"
    >
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 */}
        <motion.div
          className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4"
          variants={numberVariants}
        >
          404
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4"
          variants={textVariants}
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-muted-foreground mb-8 max-w-md mx-auto"
          variants={textVariants}
        >
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Let&apos;s
          get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-row gap-4 justify-center"
          variants={buttonsVariants}
        >
          {/* Go Home – simple spring button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button size="lg" asChild>
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </motion.div>

          {/* Go Back – animated sweep button */}
          <motion.div initial="rest" whileHover="hover" className="relative">
            <Button
              variant="outline"
              size="lg"
              className="relative z-10 overflow-hidden group"
              onClick={() => window.history.back()}
            >
              <span className="relative z-20 flex items-center text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </span>

              <motion.span
                className="absolute inset-0 bg-primary z-10"
                variants={hoverVariants}
              />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NotFound;
