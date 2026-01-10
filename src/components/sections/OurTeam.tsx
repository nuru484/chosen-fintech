// components/sections/OurTeam.tsx
import React from "react";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface OurTeamProps {
  title?: string;
  teamMembers: TeamMember[];
}

export const OurTeam: React.FC<OurTeamProps> = ({
  title = "OUR TEAM",
  teamMembers,
}) => {
  return (
    <section className="section-padding bg-linear-to-b from-[#1e3a8a] to-[#1e40af]">
      <div className="container-wide">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
          <div className="w-16 h-1 bg-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-[#1e3a8a] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
