import { ArrowUp } from "lucide-react";

// Website Footer with socials and copyright
export const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-[#000000]/90 backdrop-blur-sm text-muted-foreground py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">michaelpeters.tech</span>.
          All rights reserved.
        </p>

        {/* Scroll-to-top anchor */}
        <a
          href="#hero"
          className="inline-flex items-center gap-1 text-primary hover:text-white transition-colors"
        >
          <ArrowUp size={14} className="relative top-[1px]" />
          <span className="text-sm font-medium">Back to top</span>
        </a>
      </div>
    </footer>
  );
};
