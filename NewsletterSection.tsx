import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Welcome to the Amani's family! Check your inbox for exclusive offers.");
    setEmail("");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-gold" />
      </div>
      <div className="relative container mx-auto px-6 text-center max-w-2xl">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Stay Connected
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Join the <span className="text-gradient-gold italic">Inner Circle</span>
        </h2>
        <p className="text-muted-foreground font-elegant text-lg mb-10">
          Be the first to discover new scents, exclusive offers, and behind-the-scenes stories.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-secondary border border-border px-6 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button
            type="submit"
            className="bg-gradient-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-8 py-4 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
