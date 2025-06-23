import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      () => {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current.reset();
        setIsSubmitting(false);
      },
      () => {
        toast({
          title: "Failed to send",
          description: "There was a problem. Please try again later.",
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Subtext description */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-2 sm:px-0">
          Have a project in mind or want to work together? Feel free to reach
          out. I'm always excited to discuss new opportunities and
          collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card */}
          <div className="bg-[#0f172a] p-6 sm:p-8 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.08)] border border-white/10">
            <h3 className="text-xl font-semibold mb-6 text-primary border-b border-white/10 pb-2">
              Contact Information
            </h3>

            <div className="space-y-6 text-sm">
              {[
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  label: "Email",
                  value: "michaelcpeters115@gmail.com",
                  href: "mailto:michaelcpeters115@gmail.com",
                },
                {
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                  label: "Location",
                  value: "Pretoria, South Africa",
                },
              ].map(({ icon, label, value, href }, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
                  <div className="flex-1 text-start break-words">
                    <div className="font-semibold text-white">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground break-all">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-3">Connect with Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/michael-peters-b497912a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/michael_peters_10/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/michaelpeters-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Email Form Card */}
          <div className="bg-[#0f172a] p-6 sm:p-8 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.08)] border border-white/10 z-50">
            <h3 className="text-xl font-semibold mb-6 text-primary border-b border-white/10 pb-2">
              Send a Message
            </h3>

            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Michael Peters..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-black text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
