import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mt-2">
              SoftSell
            </h2>
            <p className="mt-2 text-sm">
              Sell your unused software licenses for cash — securely and
              instantly.
            </p>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="mailto:contact@softsell.io" aria-label="Email">
                <Mail className="w-5 h-5 hover:text-indigo-600" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-indigo-600" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-indigo-600" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-indigo-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 mb-3 text-sm text-center border-t pt-4 border-gray-200 dark:border-slate-700">
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
