import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <NavLink to="/">
              <h2 className="font-bold text-3xl text-white">
                Smart<span className="text-primary">Deals</span>
              </h2>
            </NavLink>
            <p className="text-sm text-gray-400 leading-relaxed">
              Deal your products in a smart way. buy, sell, and shop locally.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
               
                className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                
                className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                
                className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "Browse Products",
                "Sell a Product",
                "How It Works",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Help Center",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                support@smartdeals.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +8809638599635
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Dhaka,Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} SmartDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
