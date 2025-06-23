import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useToast } from "../hooks/use-toast";

// Modal for search navigation
export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState(""); // User input
  const inputRef = useRef(null); // Ref to focus input on open
  const { toast } = useToast();

  const [visible, setVisible] = useState(isOpen);
  const [animateClass, setAnimateClass] = useState("animate-modalEnter"); // Handle enter/exit animation classes

  // Animate open/close transitions and manage focus
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setAnimateClass("animate-modalEnter");
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 150);
    } else {
      setAnimateClass("animate-modalExit");
      setTimeout(() => {
        setVisible(false);
      }, 250);
    }
  }, [isOpen]);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Command search handler
  const handleSearch = () => {
    const lower = query.toLowerCase().trim();

    // Supported commands mapped to actions
    const commands = {
      resume: () => window.open("/resume.pdf", "_blank"),
      github: () =>
        window.open("https://github.com/michaelcpeters115", "_blank"),
      linkedin: () =>
        window.open(
          "https://www.linkedin.com/in/michael-peters-b497912a3/",
          "_blank"
        ),
      contact: () => scrollToId("contact"),
      about: () => scrollToId("about"),
      projects: () => scrollToId("projects"),
      skills: () => scrollToId("skills"),
      home: () => scrollToId("hero"),
    };

    // Run matching command
    for (const key in commands) {
      if (lower.includes(key)) {
        commands[key]();
        onClose();
        return;
      }
    }

    // If no match, show toast
    toast({
      title: "Search Not Found",
      description: `We couldn't find "${query}".`,
      variant: "destructive",
    });

    onClose();
  };

  // Smooth scroll to section
  const scrollToId = (id) => {
    const target = document.querySelector(`#${id}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 transition-opacity duration-300">
      <div className={`relative w-full max-w-3xl ${animateClass}`}>
        <div className="relative flex items-center bg-[#0d0d0d] border border-white/20 rounded-2xl px-10 py-6 shadow-[0_6px_40px_rgba(0,0,0,0.6)] transition-all">
          {/* Command Input Field */}
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="w-full bg-transparent text-white placeholder-white/70 placeholder:font-bold placeholder:text-xl text-xl font-semibold outline-none pr-16"
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-8 text-white/60 hover:text-white transition"
            aria-label="Close Search"
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};
