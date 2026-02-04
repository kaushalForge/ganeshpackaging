import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { FiSearch } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collection" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-orange-600"
        >
          GaneshPackaging
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
        <div className="hidden md:flex items-center gap-2 border rounded-md px-3 py-1 w-72">
          <FiSearch className="text-gray-500" />
          <Input
            placeholder="Search products..."
            className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:outline-none"
          />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="mt-6 space-y-6">
                {/* Mobile Search */}
                <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                  <FiSearch className="text-gray-500" />
                  <Input
                    placeholder="Search products..."
                    className="border-0 shadow-none focus-visible:ring-0 focus:ring-0 focus:outline-none"
                  />
                </div>

                {/* Mobile Links */}
                <ul className="space-y-4 text-base font-medium">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="block hover:text-orange-600"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
