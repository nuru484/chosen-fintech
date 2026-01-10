// components/cardano/UpdatesSidebar.tsx
"use client";
import { Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";

interface RecentUpdate {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface UpdatesSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  recentUpdates: RecentUpdate[];
}

export const UpdatesSidebar = ({
  searchQuery,
  onSearchChange,
  recentUpdates,
}: UpdatesSidebarProps) => {
  return (
    <aside className="space-y-6 lg:space-y-8">
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
              Search Updates
            </h3>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                size={18}
              />
              <Input
                type="search"
                placeholder="Search updates..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 h-11 bg-background/50 border-border/50 focus:border-primary transition-colors"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recent Updates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ y: -2 }}
      >
        <Card className="border-border/50 p-0 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-5 lg:p-6">
            <h3 className="font-display text-base lg:text-lg font-semibold mb-5 text-foreground">
              Recent Updates
            </h3>
            <div className="space-y-5">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={update.id}
                  className="flex gap-3 group cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden ring-1 ring-border/50 group-hover:ring-primary/50 transition-all duration-300">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-2 leading-snug">
                      {update.title}
                    </h4>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {update.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </aside>
  );
};
