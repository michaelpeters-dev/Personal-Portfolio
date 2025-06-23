/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  safelist: [
    "text-foreground",
    "text-foreground/80",
    "text-foreground/100",
    "text-muted-foreground",
    "bg-background",
    "text-primary",
    "text-primary-foreground",
    "bg-card",
    "border-border",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        card: "hsl(var(--card))",
        border: "hsl(var(--border))",
        input: "hsl(var(--border))",
        mutedForeground: "#94a3b8",
      },
    },
  },
  plugins: [],
};
