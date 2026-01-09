"use client";
import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Cardano", "DeFi", "Security", "Guides", "News"];

const blogPosts = [
  {
    id: 1,
    title: "Understanding Cardano's Proof of Stake: A Beginner's Guide",
    excerpt:
      "Learn how Cardano's Ouroboros protocol works and why it's more sustainable than traditional proof of work systems.",
    category: "Cardano",
    date: "Jan 5, 2026",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    featured: true,
  },
  {
    id: 2,
    title: "DeFi Fundamentals: Navigating Decentralized Finance",
    excerpt:
      "A comprehensive introduction to DeFi concepts, protocols, and how to safely participate in the ecosystem.",
    category: "DeFi",
    date: "Jan 3, 2026",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Crypto Security Best Practices for 2026",
    excerpt:
      "Essential security tips to protect your digital assets and navigate the crypto space safely.",
    category: "Security",
    date: "Dec 28, 2025",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "How to Stake ADA: A Complete Guide",
    excerpt:
      "Step-by-step instructions for staking your Cardano ADA tokens and earning rewards.",
    category: "Guides",
    date: "Dec 22, 2025",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "The Future of Smart Contracts on Cardano",
    excerpt:
      "Exploring Plutus, Marlowe, and the evolving landscape of smart contracts in the Cardano ecosystem.",
    category: "Cardano",
    date: "Dec 18, 2025",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Understanding Tokenomics: A Practical Guide",
    excerpt:
      "What makes a cryptocurrency valuable? Learn to analyze tokenomics and make informed decisions.",
    category: "Guides",
    date: "Dec 15, 2025",
    image:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&auto=format&fit=crop&q=60",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div>
      <PageHero title="Blog" />

      {/* Search and Filters */}
      <section className="py-8 border-b border-border bg-background sticky top-0 z-20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    activeCategory === category ? "default" : "secondary"
                  }
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content - Magazine Style Layout */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          {/* Featured Article */}
          {featuredPost && (
            <Card className="mb-12 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-4/3 lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <Button variant="link" className="p-0 h-auto group/btn">
                      Read Article
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {regularPosts.map((post, index) => {
              // Create varied layouts
              const isLandscape = index % 5 === 0 || index % 5 === 3;
              const isLarge = index % 5 === 1;

              if (isLandscape) {
                // Landscape card - spans full width on mobile, half on tablet+
                return (
                  <Card
                    key={post.id}
                    className="lg:col-span-8 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="md:w-2/5 aspect-4/3 md:aspect-auto overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="md:w-3/5 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto self-start group/btn"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              }

              if (isLarge) {
                // Large portrait card
                return (
                  <Card
                    key={post.id}
                    className="lg:col-span-4 lg:row-span-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-3/4 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto group/btn">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              }

              // Regular portrait card
              return (
                <Card
                  key={post.id}
                  className="lg:col-span-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <Button variant="link" className="p-0 h-auto group/btn">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
