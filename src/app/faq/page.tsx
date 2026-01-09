import { PageHero } from "@/components/sections/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqCategories = [
  {
    category: "About Chosen Fintech",
    questions: [
      {
        q: "What is Chosen Fintech?",
        a: "Chosen Fintech is a fintech education agency dedicated to cryptocurrency and blockchain education. We specialize in the Cardano ecosystem while also covering broader topics in DeFi, financial literacy, and digital asset management.",
      },
      {
        q: "Why do you focus on Cardano?",
        a: "We focus on Cardano because of its scientific, peer-reviewed approach to blockchain development, its commitment to sustainability through proof-of-stake, and its mission to provide financial services to the underbanked. Cardano represents the values we believe in: rigorous research, security, and real-world impact.",
      },
      {
        q: "Who are your programs designed for?",
        a: "Our programs cater to everyone from complete beginners curious about cryptocurrency to developers wanting to build on Cardano. We offer different learning paths based on experience level and goals.",
      },
    ],
  },
  {
    category: "Cryptocurrency & Blockchain",
    questions: [
      {
        q: "What is cryptocurrency?",
        a: "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks using blockchain technology.",
      },
      {
        q: "What is blockchain technology?",
        a: "Blockchain is a distributed ledger technology that records transactions across many computers in a way that makes the records difficult to alter. Each 'block' contains transaction data and is linked to the previous block, forming a 'chain' of transparent, immutable records.",
      },
      {
        q: "Is cryptocurrency safe to invest in?",
        a: "Cryptocurrency investments carry significant risks including volatility, regulatory uncertainty, and security concerns. We encourage thorough research and education before investing. Our programs focus on education, not investment advice—we help you understand the technology so you can make informed decisions.",
      },
    ],
  },
  {
    category: "Cardano Specific",
    questions: [
      {
        q: "What is ADA?",
        a: "ADA is the native cryptocurrency of the Cardano blockchain. It's named after Ada Lovelace, a 19th-century mathematician considered to be the first computer programmer. ADA is used for transactions, staking, and governance on the Cardano network.",
      },
      {
        q: "How do I stake my ADA?",
        a: "Staking ADA involves delegating your tokens to a stake pool, which helps secure the network while earning you rewards. You maintain full control of your ADA—it never leaves your wallet. We offer comprehensive guides on how to stake through our Cardano Hub.",
      },
      {
        q: "What is Project Catalyst?",
        a: "Project Catalyst is Cardano's community-driven innovation fund. ADA holders can submit proposals for projects, vote on proposals, and help guide the development of the Cardano ecosystem. It's one of the largest decentralized innovation funds in the world.",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I start learning about crypto?",
        a: "Start with our beginner resources in the Cardano Hub or Blog sections. We recommend beginning with foundational concepts before diving into specific technologies. Our learning paths are designed to guide you step-by-step.",
      },
      {
        q: "Do I need any technical background?",
        a: "Not at all! Our beginner programs are designed for people with no prior technical or financial background. We break down complex concepts into digestible, easy-to-understand content.",
      },
      {
        q: "How can I get involved with Chosen Fintech?",
        a: "There are many ways to get involved: follow our blog and social media, attend our workshops, join our community events, or reach out through our contact page. We welcome everyone who shares our passion for financial education.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div>
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about Chosen Fintech, cryptocurrency education, and the Cardano ecosystem."
        backgroundImage={"/page-hero-faq.jpg"}
      />

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-card rounded-xl border px-6 card-shadow"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
