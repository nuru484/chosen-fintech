// components/blog/BlogList.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 5;

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

export const BlogList = ({ posts }: BlogListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (posts.length === 0) {
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
                No articles found
              </p>
              <p className="text-muted-foreground/70 text-sm">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Blog Posts */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="space-y-6 lg:space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
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
                      src={post.image}
                      alt={post.title}
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
                    {/* Meta Info */}
                    <motion.div
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Calendar size={13} strokeWidth={2} />
                        {post.date}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="font-display text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 lg:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      {post.title}
                    </motion.h3>

                    {/* Excerpt */}
                    <motion.p
                      className="text-sm lg:text-base text-muted-foreground line-clamp-2 lg:line-clamp-3 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.excerpt}
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
                        Read Full Article
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

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          className="flex items-center justify-center gap-2 pt-8 lg:pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="h-10 px-3 border-border/50 hover:border-primary/50 transition-all duration-200 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
          </motion.div>

          <div className="flex items-center gap-1 lg:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const showPage =
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1);

              const showEllipsis =
                (page === currentPage - 2 && currentPage > 3) ||
                (page === currentPage + 2 && currentPage < totalPages - 2);

              if (showEllipsis) {
                return (
                  <span
                    key={page}
                    className="px-2 text-muted-foreground text-sm font-medium"
                  >
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <motion.div
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageClick(page)}
                    className="min-w-10 h-10 border-border/50 hover:border-primary/50 transition-all duration-200 font-medium"
                  >
                    {page}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="h-10 px-3 border-border/50 hover:border-primary/50 transition-all duration-200 disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
