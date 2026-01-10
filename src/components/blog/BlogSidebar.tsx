// components/blog/BlogSidebar.tsx
"use client";
import { Search, Calendar, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RecentPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface BlogSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  recentPosts: RecentPost[];
}

export const BlogSidebar = ({
  searchQuery,
  onSearchChange,
  categories,
  activeCategory,
  onCategoryChange,
  recentPosts,
}: BlogSidebarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Mobile: Search + Filter Button */}
      <div className="lg:hidden flex gap-3 mb-6">
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            size={18}
          />
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-11 bg-background border-border/50 focus:border-primary transition-colors"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 shrink-0 border-border/50"
            onClick={() => setIsDrawerOpen(true)}
          >
            <SlidersHorizontal size={18} />
            <span className="sr-only">Open filters</span>
          </Button>
        </motion.div>
      </div>

      {/* Mobile: Bottom Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Drawer Header */}
              <div className="sticky top-0 bg-background border-b border-border/50 px-6 py-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <X size={18} />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="font-display text-base font-semibold mb-4 text-foreground">
                    Categories
                  </h3>
                  <div className="flex flex-col gap-2">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.05 }}
                      >
                        <Button
                          variant={
                            activeCategory === category ? "default" : "ghost"
                          }
                          className="justify-start h-11 text-sm font-medium transition-all duration-200 w-full"
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Posts */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h3 className="font-display text-base font-semibold mb-5 text-foreground">
                    Recent Posts
                  </h3>
                  <div className="space-y-5">
                    {recentPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        className="flex gap-3 group cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.08 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden ring-1 ring-border/50 group-hover:ring-primary/50 transition-all duration-300">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-2 leading-snug">
                            {post.title}
                          </h4>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            {post.date}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop: Original Sidebar */}
      <aside className="hidden lg:block space-y-6 lg:space-y-8">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -2 }}
        >
          <Card className="border-border/50 p-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-5 lg:p-6">
              <h3 className="font-display text-base lg:text-lg font-semibold mb-4 text-foreground">
                Search Articles
              </h3>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  size={18}
                />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 h-11 bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -2 }}
        >
          <Card className="border-border/50 p-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-5 lg:p-6">
              <h3 className="font-display text-base lg:text-lg font-semibold mb-4 text-foreground">
                Categories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <Button
                      variant={
                        activeCategory === category ? "default" : "ghost"
                      }
                      className="justify-start h-11 text-sm font-medium transition-all duration-200 hover:translate-x-1"
                      onClick={() => onCategoryChange(category)}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -2 }}
        >
          <Card className="border-border/50 p-0 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-5 lg:p-6">
              <h3 className="font-display text-base lg:text-lg font-semibold mb-5 text-foreground">
                Recent Posts
              </h3>
              <div className="space-y-5">
                {recentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="flex gap-3 group cursor-pointer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden ring-1 ring-border/50 group-hover:ring-primary/50 transition-all duration-300">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-2 leading-snug">
                        {post.title}
                      </h4>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </aside>
    </>
  );
};
