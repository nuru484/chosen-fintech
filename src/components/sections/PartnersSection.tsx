"use client";

const GenericLogo = ({ name }: { name: string }) => (
  <svg
    viewBox="0 0 100 20"
    className="w-full h-full max-w-37.5 opacity-90 transition-opacity duration-300 hover:opacity-100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <style>{`
      .logo-fill { fill: white; }
    `}</style>
    <rect className="logo-fill" x="0" y="5" width="5" height="10" rx="1" />
    <rect className="logo-fill" x="8" y="5" width="5" height="10" rx="1" />
    <polygon className="logo-fill" points="18,5 25,15 32,5" />
    <text
      className="logo-fill"
      x="35"
      y="14"
      fontFamily="Arial, sans-serif"
      fontSize="10"
      fontWeight="bold"
    >
      {name.split(" ")[0]}
    </text>
  </svg>
);

const partners = [
  "Zencargo",
  "Trustology",
  "Ecknuovo",
  "Shepper",
  "OpenEdge",
  "Global",
];

export function PartnersSection() {
  const partnersBoxColor = "#2c2c36";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-16 lg:my-16">
      <div
        className="relative text-center space-y-8 shadow-2xl p-6 md:p-8 lg:p-14"
        style={{
          backgroundColor: partnersBoxColor,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h2 className="text-xs md:text-sm font-light text-white uppercase tracking-widest">
          TRUSTED BY BIG ONES.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex items-center justify-center w-full h-10 md:h-12 lg:h-16"
            >
              <GenericLogo name={partner} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
