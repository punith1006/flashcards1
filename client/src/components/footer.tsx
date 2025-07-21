import { Twitter, Linkedin, Youtube, Globe } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Master AI Series", href: "#" },
    { name: "Intelligence Cards", href: "#" },
    { name: "Programming Cards", href: "#" },
    { name: "Complete Bundle", href: "#" },
  ],
  learning: [
    { name: "Leitner Method", href: "#" },
    { name: "Study Guides", href: "#" },
    { name: "Progress Tracking", href: "#" },
    { name: "Community", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--gk-blue)] to-[var(--gk-cyan)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GK</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">GK Cloud Solutions</h3>
                <p className="text-xs text-slate-400">Global Knowledge</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering learners worldwide with innovative educational technology and scientifically-proven learning methodologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {footerLinks.learning.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 GK Cloud Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://gkcloud.ai" className="text-slate-400 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
