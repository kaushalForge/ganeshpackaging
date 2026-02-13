import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { useProducts } from "../../context/ProductContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collection" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { products } = useProducts();
  // Filter products as user types
  const searchProduct = (term) => {
    setSearchTerm(term);
    if (!term) {
      setSearchResults([]);
      return;
    }
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(results);
  };

  // Navigate to product page
  const goToProduct = (id) => {
    setSearchTerm("");
    setSearchResults([]);
    navigate(`/product/${id}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center outline-none">
          <img
            src="/images/ganeshpackaginglogo.png"
            alt="Logo"
            className="h-18 w-20 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="hover:text-orange-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-col relative items-center gap-2 border rounded-md px-3 py-1 w-72">
          <div className="flex items-center w-full">
            <FiSearch className="text-gray-500" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => searchProduct(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:outline-none"
            />
          </div>

          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <ul className="absolute top-12 left-0 right-0 bg-white shadow-md border rounded-md max-h-60 overflow-auto z-50">
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  onClick={() => goToProduct(product._id)}
                  className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 p-6 bg-white flex flex-col justify-start gap-8 shadow-xl"
            >
              {/* Mobile Search */}
              <div className="relative flex flex-col gap-2">
                <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-full">
                  <FiSearch className="text-gray-500" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => searchProduct(e.target.value)}
                    className="border-0 shadow-none focus-visible:ring-0 focus:ring-0 focus:outline-none pr-10"
                  />
                </div>

                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <ul className="bg-white shadow-md border rounded-md max-h-60 overflow-auto z-50">
                    {searchResults.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => goToProduct(product.id)}
                        className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-6 text-lg font-medium mt-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="block hover:text-orange-600 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Optional Contact Button */}
              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full bg-orange-600 text-white hover:bg-orange-500"
                >
                  <a
                    href="https://wa.me/your_number"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
