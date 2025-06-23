import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, Menu, Search } from "lucide-react";
import { SearchModal } from "@/components/SearchModal";

// Navigation items for scrolling and linking
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Main Navbar Component
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Detect scroll state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle mobile menu
  const [showSearchModal, setShowSearchModal] = useState(false); // Toggle search modal

  // Scroll listener to add shadow and blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Search modal appears conditionally */}
      {showSearchModal && (
        <SearchModal isOpen={true} onClose={() => setShowSearchModal(false)} />
      )}

      {/* Sticky navbar */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo and Name*/}
          <a href="#hero" className="flex items-center group">
            <span className="text-2xl font-extrabold tracking-wide uppercase transition-transform duration-300 group-hover:scale-105">
              <span className="text-primary drop-shadow-[0_0_4px_#61dafb]">
                Michael
              </span>
              <span className="ml-1 text-foreground/100 dark:text-white">
                Peters
              </span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-foreground/100 dark:text-white uppercase text-sm font-semibold tracking-widest hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Search Button */}
          <div className="hidden md:flex items-center gap-2 text-foreground/80 dark:text-white">
            <button
              onClick={() => setShowSearchModal(true)}
              className="flex items-center gap-2 hover:text-primary transition"
              aria-label="Open Search"
            >
              {/* Magnifying Glass Icon */}
              <Search className="h-4 w-5 text-white" />
              <span className="uppercase text-sm font-semibold tracking-wider">
                Search
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-white z-[9999]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center px-4 pt-10 md:hidden">
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)} // Auto-close on selection
                className="uppercase text-lg font-semibold tracking-wide hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
