import { useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMui,
  SiPython,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";

const skills = [
  { name: "HTML/CSS", level: 90, icon: <SiHtml5 />, category: "frontend" },
  {
    name: "JavaScript",
    level: 80,
    icon: <SiJavascript />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    level: 75,
    icon: <SiTypescript />,
    category: "frontend",
  },
  { name: "React", level: 90, icon: <SiReact />, category: "frontend" },
  {
    name: "Tailwind CSS",
    level: 75,
    icon: <SiTailwindcss />,
    category: "frontend",
  },
  {
    name: "Redux Toolkit",
    level: 25,
    icon: <SiJavascript />,
    category: "frontend",
  },
  { name: "MUI", level: 80, icon: <SiMui />, category: "frontend" },
  { name: "Node.js", level: 5, icon: <SiNodedotjs />, category: "backend" },
  { name: "Express.js", level: 60, icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", level: 75, icon: <SiMongodb />, category: "backend" },
  { name: "Python", level: 95, icon: <SiPython />, category: "backend" },
  { name: "Java", level: 80, icon: <FaJava />, category: "backend" },
  { name: "Git/GitHub", level: 80, icon: <SiGithub />, category: "tools" },
  { name: "Docker", level: 35, icon: <SiDocker />, category: "tools" },
  { name: "VS Code", level: 95, icon: <FaCode />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills
    .filter((skill) =>
      activeCategory === "all" ? true : skill.category === activeCategory
    )
    .sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-[300px] sm:max-w-none mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm sm:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-card p-5 sm:p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.12)] transition duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.03,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              {/* Header: Icon, Skill Name, Proficiency */}
              <div className="flex flex-wrap items-center justify-between mb-2 gap-2 sm:gap-0">
                <div className="flex items-center gap-2 font-semibold text-white whitespace-nowrap">
                  <span className="text-xl hover:drop-shadow-[0_0_5px_#00ffff] transition duration-300">
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Proficiency Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
