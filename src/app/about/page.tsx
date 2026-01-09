import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Education First",
    description:
      "We believe knowledge is the foundation of empowerment. Every program we create prioritizes clear, accessible education.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "In a space often clouded by hype, we commit to honest, evidence-based information and open communication.",
  },
  {
    icon: Heart,
    title: "Inclusion",
    description:
      "Decentralized finance should benefit everyone. We work to bring blockchain education to underserved communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the forefront of blockchain technology, continuously evolving our approach to meet the needs of learners.",
  },
];

const About = () => {
  return (
    <div>
      <PageHero title="About Us" />

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Making Blockchain Accessible to All
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are dedicated to educating individuals and organizations
                about cryptocurrency, blockchain technology, and decentralized
                finance. Our focus on the Cardano ecosystem reflects our belief
                in technology that is sustainable, secure, and built for
                real-world impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through courses, workshops, and community initiatives, we break
                down complex concepts into accessible knowledge that empowers
                people to participate confidently in the digital economy.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Vision
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A World of Financial Inclusion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We envision a future where everyone has the knowledge and tools
                to participate in the global financial system. Blockchain
                technology, particularly Cardano, offers unprecedented
                opportunities for financial inclusion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to be the leading education partner for individuals
                and organizations looking to understand and leverage blockchain
                technology for positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Guides Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
