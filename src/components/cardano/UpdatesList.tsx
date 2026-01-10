// components/cardano/UpdatesList.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";

interface Update {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

interface UpdatesListProps {
  updates: Update[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: index * 0.1,
    },
  }),
};

const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.7, ease: "easeOut" } },
};

export const UpdatesList = ({ updates }: UpdatesListProps) => {
  if (updates.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-dashed border-2 border-border/50">
          <CardContent className="text-center py-16 lg:py-20">
            <div className="max-w-md mx-auto">
              <p className="text-muted-foreground text-base lg:text-lg mb-2">
                No updates found
              </p>
              <p className="text-muted-foreground/70 text-sm">
                Try adjusting your search criteria
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      <AnimatePresence mode="wait">
        <motion.div
          className="space-y-6 lg:space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Card className="group overflow-hidden p-0 border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <motion.div
                    className="md:col-span-2 relative aspect-16/10 md:aspect-auto md:h-full overflow-hidden bg-muted"
                    variants={imageVariants}
                  >
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Content Section */}
                  <CardContent className="md:col-span-3 p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                    {/* Date */}
                    <motion.div
                      className="flex items-center gap-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar size={13} strokeWidth={2} />
                        {update.date}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="font-display text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 lg:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {update.title}
                    </motion.h3>

                    {/* Excerpt */}
                    <motion.p
                      className="text-sm lg:text-base text-muted-foreground line-clamp-2 lg:line-clamp-3 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {update.excerpt}
                    </motion.p>

                    {/* Read More Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <Button
                        variant="link"
                        className="p-0 h-auto self-start group/btn text-sm lg:text-base font-semibold"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
