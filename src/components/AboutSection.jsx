import { Briefcase, Code, BrainCircuit } from "lucide-react";
import michaelImage from "@/assets/michaelpeters.jpg";

// Top feature showing my specialities
const featureCards = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Full-Stack Development",
    desc: "Creating scalable and stunning software using modern frameworks and databases.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "Machine Learning",
    desc: "Training models that turn raw data into intelligent tools to help others.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Connective Engineer",
    desc: "Integrating my experiences, ideas, and systems into solutions with depth.",
  },
];

// Main About section component
export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative bg-black">
      <div className="container mx-auto max-w-[90rem]">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 -mt-8">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Responsive grid: Image / Description / Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.2fr_2fr] gap-16 lg:gap-20 items-start">
          {/* Profile Image */}
          <div className="flex justify-center items-start">
            <img
              src={michaelImage}
              alt="Michael Peters"
              className="rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] w-full max-w-[400px] max-h-[580px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Personal Introduction */}
          <div className="flex flex-col text-left text-[1.05rem] leading-[1.75] h-full space-y-6">
            <p className="text-muted-foreground">
              I'm a first-year Computer Science student at Georgia Tech, part of
              the Honors Program. My interests span machine learning, language
              (I speak English, Afrikaans, German, and a bit of French), and
              building things that connect people and solve problems — whether
              that's through code or conversation. I hope to continue to become
              more experienced and keep doing more.
            </p>
            <p className="text-muted-foreground">
              Outside the classroom, I love to stay active — playing tennis,
              sailing, hitting the gym (225lb bench press coming soon...), and
              composing music both on the Electric Guitar and the Piano. In
              every moment... I create, whether it's a software project, a song,
              or a strategy on the court.
            </p>
            <hr className="border-t-2 border-white opacity-70 my-6 w-[98%]" />
          </div>

          {/* Highlighted Skill Cards */}
          <div className="grid grid-cols-1 gap-6 text-[1.05rem] leading-snug">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#111927] border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.08)] rounded-xl p-6 card-hover transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="p-3 rounded-full bg-primary/20 shadow-inner">
                    {card.icon}
                  </div>
                  {/* Title and Description */}
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground text-sm leading-[1.4]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-16 flex justify-center">
          <a href="#contact" className="cosmic-button glow-pulse">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
