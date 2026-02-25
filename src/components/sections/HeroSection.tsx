import { Link } from "react-router-dom";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import heroImg from "@/assets/hero-building.jpg";

const HeroSection = () => {
  const sectionRef = useScrollAnimation();
  const parallaxRef = useParallax(0.6);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 -top-20 -bottom-20">
        <img
          src={heroImg}
          alt="مبنى عقاري حديث"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div
            data-animate="fade-up"
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm"
          >
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">
              شريكك الموثوق في التطوير العقاري
            </span>
          </div>

          <h1
            data-animate="fade-up"
            data-delay="0.1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            نبني مستقبل
            <br />
            <span className="text-gradient">العقار السعودي</span>
          </h1>

          <p
            data-animate="fade-up"
            data-delay="0.2"
            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
          >
            نطور مشاريع سكنية وتجارية بأعلى معايير الجودة والابتكار، لنصنع بيئات عمرانية تجمع بين الفخامة والراحة.
          </p>

          <div
            data-animate="fade-up"
            data-delay="0.3"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold btn-primary-glow transition-all hover:opacity-90 text-center"
            >
              استعرض المشاريع
            </Link>
            <Link
              to="/contact"
              className="border border-border bg-card/60 backdrop-blur-sm text-foreground px-8 py-3.5 rounded-xl text-sm font-semibold transition-all hover:bg-card text-center"
            >
              احجز استشارة
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 gold-line" />
    </section>
  );
};

export default HeroSection;
