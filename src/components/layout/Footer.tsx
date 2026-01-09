import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { to: "/about", label: "About Us" },
    { to: "/team", label: "Our Team" },
    { to: "/contact", label: "Contact" },
  ],
  resources: [
    { to: "/blog", label: "Blog" },
    { to: "/cardano-hub", label: "Cardano Hub" },
    { to: "/faq", label: "FAQ" },
  ],
  social: [
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10  flex items-center justify-center">
                <Image
                  src={"/logo.jpg"}
                  width={50}
                  height={50}
                  alt="chosen fintech logo"
                />
              </div>
              <span className="font-display font-bold text-xl">
                Chosen Fintech
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Empowering individuals and organizations through cryptocurrency
              education, with a special focus on the Cardano ecosystem and
              decentralized finance.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Chosen Fintech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
            <Mail size={16} />
            <a
              href="mailto:hello@chosenfintech.com"
              className="hover:text-primary-foreground transition-colors"
            >
              info@chosenfintech.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
