import { PageHero } from "@/components/sections/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "David Okonkwo",
    role: "Founder & CEO",
    bio: "A passionate advocate for blockchain technology with over 10 years in fintech. David founded Chosen Fintech to bridge the knowledge gap in cryptocurrency education.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Chen",
    role: "Head of Education",
    bio: "Former university professor with expertise in curriculum development. Sarah designs our educational programs to maximize learning outcomes.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Michael Adebayo",
    role: "Cardano Technical Lead",
    bio: "Certified Cardano developer and stake pool operator. Michael brings deep technical knowledge to our Cardano-focused initiatives.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    bio: "Building and nurturing our global community of crypto enthusiasts. Emily ensures every member feels supported on their learning journey.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "James Kimani",
    role: "Content Strategist",
    bio: "Award-winning content creator specializing in making complex financial topics accessible. James leads our content and publication efforts.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Lisa Nakamoto",
    role: "Partnerships Director",
    bio: "Connecting Chosen Fintech with leading organizations in the blockchain space. Lisa builds the relationships that power our programs.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
    social: { twitter: "#", linkedin: "#" },
  },
];

const Team = () => {
  return (
    <div>
      <PageHero
        badge="Our Team"
        title="Meet the People Behind Chosen Fintech"
        description="A diverse team of educators, technologists, and crypto enthusiasts united by a shared mission to make blockchain education accessible to everyone."
        backgroundImage={"/page-hero-team.jpg"}
      />

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.social.twitter}
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're always looking for passionate individuals who share our
              vision for blockchain education and financial inclusion.
            </p>
            <a
              href="mailto:careers@chosenfintech.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
