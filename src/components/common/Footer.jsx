import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              YourBrand
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Premium custom packaging solutions for brands that care about
              presentation, protection, and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link to="/" className="hover:text-orange-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-orange-600 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-600">
              <li>T-Shirt Boxes</li>
              <li>Luxury Garment Boxes</li>
              <li>Eco Kraft Packaging</li>
              <li>Custom Printed Boxes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>📍 Kathmandu, Nepal</li>
              <li>📞 +977 98XXXXXXXX</li>
              <li>✉️ info@yourbrand.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-orange-600">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-orange-600">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
