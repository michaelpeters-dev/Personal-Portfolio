import { StarBackground } from "../components/StarBackground";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground className="fixed inset-0 -z-10 pointer-events-none" />
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold mb-4">
          404 – <span className="text-primary">Page Not Found</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="cosmic-button flex items-center gap-2 px-6 py-2 rounded-full transition hover:scale-105"
        >
          <ArrowLeft size={16} />
          Go Back Home
        </Link>
      </main>
    </div>
  );
};
