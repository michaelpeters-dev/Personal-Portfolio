// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Main Hero section
export const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main content container */}
      <motion.div
        className="w-full max-w-[90rem] text-center z-10 space-y-10 px-2 sm:px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated headline with glowing name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight break-words"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi, I’m{" "}
          <span
            className="text-primary font-extrabold animate-glow"
            style={{
              textShadow:
                "0 0 14px rgba(0, 255, 255, 0.7), 0 0 34px rgba(0, 255, 255, 0.5)",
            }}
          >
            Michael
          </span>{" "}
          <span className="text-gradient">Peters</span>
        </motion.h1>

        {/* Mission statement and tagline */}
        <motion.div
          className="text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal space-y-3 sm:space-y-2 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white">
            <span className="font-semibold">Programming with purpose.</span>{" "}
            <span className="italic opacity-90">Coding with care.</span>{" "}
            <span className="opacity-90">Delivering real-world solutions.</span>
          </p>
          <p className="text-white">
            I have expertise in{" "}
            <span className="font-medium">Full-Stack Development</span>,{" "}
            <span className="font-medium">Applied Machine Learning</span> and{" "}
            <span className="font-medium">Startup Creation</span>.
          </p>
        </motion.div>

        {/* Key identity badges */}
        <motion.div
          className="flex justify-center gap-2 flex-wrap text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase text-muted-foreground px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="px-3 py-1 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 whitespace-nowrap">
            Honors Program
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 whitespace-nowrap">
            Computer Science @ Georgia Tech
          </span>
        </motion.div>

        {/* Call-to-action button linking to Projects section */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm sm:text-base font-medium text-white transition-all duration-300 glow-pulse"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      >
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
      </motion.div>
    </motion.section>
  );
};
