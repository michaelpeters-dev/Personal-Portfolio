import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

// Project linking and information
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A website showcasing my person, skills and projects",
    image: "/projects/personalportfolio.png",
    tags: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Lucide",
      "Responsive Design",
      "Hot Toast",
    ],
    year: 2025,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Finance Application",
    description:
      "A dashboard and multi-feature machine learning risk analysis software",
    image: "/projects/financeapplication.png",
    tags: [
      "React",
      "Typescript",
      "Fullstack",
      "MongoDB",
      "TensorFlow",
      "MUI",
      "Recharts",
      "ARIMA",
    ],
    year: 2025,
    demoUrl: "https://finance-app-seven-ruby.vercel.app/",
    githubUrl: "https://github.com/michaelpeters-dev/Finance-Application",
  },
];

// Main project showcase section
export const ProjectsSection = () => {
  const [selectedYear, setSelectedYear] = useState("all");

  // Extract unique project years for filtering
  const years = Array.from(
    new Set(projects.map((p) => p.year.toString()))
  ).sort((a, b) => Number(b) - Number(a));

  // Apply year filter if selected
  const filteredProjects =
    selectedYear === "all"
      ? projects
      : projects.filter((p) => p.year.toString() === selectedYear);

  return (
    <section id="projects" className="relative z-10 py-24 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          My <span className="text-primary">Projects</span>
        </h2>

        {/* Year Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 bg-secondary/40 px-4 py-2 rounded-full shadow-inner">
            <button
              onClick={() => setSelectedYear("all")}
              className={cn(
                "px-5 py-1.5 rounded-full capitalize font-medium transition duration-300",
                selectedYear === "all"
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "px-5 py-1.5 rounded-full capitalize font-medium transition duration-300",
                  selectedYear === year
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative z-10 bg-[#0f172a] border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.08)] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="w-full overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 bg-[#0f172a]">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links to Demo and GitHub */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="text-center mt-12 overflow-visible">
          <a
            className="cosmic-button glow-pulse w-fit flex items-center mx-auto gap-2 px-6 py-2 text-white font-semibold rounded-full"
            target="_blank"
            href="https://github.com/michaelpeters-dev"
            rel="noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
