"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="section-padding flex items-center justify-center min-h-[60vh]">
      <div className="text-center animate-fade-in">
        <div className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4">
          404
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Let&apos;s
          get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
