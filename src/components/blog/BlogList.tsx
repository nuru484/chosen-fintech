// components/blog/BlogList.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Blog Posts */}
      <div className="space-y-6 lg:space-y-8">
        {currentPosts.map((post, index) => (
          <Card
            key={post.id}
            className="animate-fade-in group overflow-hidden p-0 border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative aspect-16/10 md:aspect-auto md:h-full overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <CardContent className="md:col-span-3 p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                {/* Meta Info */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <Calendar size={13} strokeWidth={2} />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 lg:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm lg:text-base text-muted-foreground line-clamp-2 lg:line-clamp-3 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <Button
                  variant="link"
                  className="p-0 h-auto self-start group/btn text-sm lg:text-base font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8 lg:pt-12">
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
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageClick(page)}
                  className="min-w-10 h-10 border-border/50 hover:border-primary/50 transition-all duration-200 font-medium"
                >
                  {page}
                </Button>
              );
            })}
          </div>

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
        </div>
      )}
    </div>
  );
};
