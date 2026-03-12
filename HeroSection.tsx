import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-perfume.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Amani's luxury perfume on leather backdrop"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-up">
            Luxury Fragrances
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Tuscon<br />
            <span className="text-gradient-gold italic">Leather</span>
          </h1>
          <p className="font-elegant text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A bold symphony of aged leather, warm amber, and desert botanicals. 
            Our bestselling signature scent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/shop"
              className="bg-gradient-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 hover:opacity-90 transition-opacity text-center"
            >
              Shop Now
            </Link>
            <Link
              to="/shop"
              className="border border-primary/30 text-foreground font-body text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary/10 transition-colors text-center"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
