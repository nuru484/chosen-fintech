// components/blog/BlogSidebar.tsx
"use client";
import { Search, Calendar, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

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
      {/* Mobile: Search + Filter Button (outside card) */}
      <div className="lg:hidden flex gap-3 mb-6">
        <div className="relative flex-1">
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
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 shrink-0 border-border/50"
          onClick={() => setIsDrawerOpen(true)}
        >
          <SlidersHorizontal size={18} />
          <span className="sr-only">Open filters</span>
        </Button>
      </div>

      {/* Mobile: Bottom Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-200"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer */}
          <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-background rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto">
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
              <div>
                <h3 className="font-display text-base font-semibold mb-4 text-foreground">
                  Categories
                </h3>
                <div className="flex flex-col gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        activeCategory === category ? "default" : "ghost"
                      }
                      className="justify-start h-11 text-sm font-medium transition-all duration-200"
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="font-display text-base font-semibold mb-5 text-foreground">
                  Recent Posts
                </h3>
                <div className="space-y-5">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-3 group cursor-pointer"
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Desktop: Original Sidebar */}
      <aside className="hidden lg:block space-y-6 lg:space-y-8">
        {/* Search */}
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

        {/* Categories */}
        <Card className="border-border/50 p-0 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-5 lg:p-6">
            <h3 className="font-display text-base lg:text-lg font-semibold mb-4 text-foreground">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  className="justify-start h-11 text-sm font-medium transition-all duration-200 hover:translate-x-1"
                  onClick={() => onCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card className="border-border/50 p-0 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-5 lg:p-6">
            <h3 className="font-display text-base lg:text-lg font-semibold mb-5 text-foreground">
              Recent Posts
            </h3>
            <div className="space-y-5">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-3 group cursor-pointer">
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
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>
    </>
  );
};
