import { Link } from "react-router-dom";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { ArrowLeft, Sparkles } from "lucide-react";
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
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Geometric pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 -top-20 -right-20 bg-primary/20 animate-float" />
      <div className="glow-orb w-72 h-72 bottom-20 left-10 bg-accent/15 animate-float-delayed" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
        <div className="max-w-2xl">

          <h1
            data-animate="fade-up"
            data-delay="0.1"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] mb-6"
            style={{ color: 'white' }}
          >
            نبني مستقبل
            <br />
            <span className="shimmer-text">العقار السعودي</span>
          </h1>

          <p
            data-animate="fade-up"
            data-delay="0.2"
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: 'hsla(0,0%,100%,0.75)' }}
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
              className="btn-gradient px-8 py-4 rounded-2xl text-sm font-semibold text-center inline-flex items-center justify-center gap-2"
            >
              استعرض المشاريع
              <ArrowLeft size={16} />
            </Link>
            <Link
              to="/contact"
              className="btn-glass px-8 py-4 rounded-2xl text-sm font-semibold text-center"
            >
              احجز استشارة مجانية
            </Link>
          </div>

          {/* Mini stats */}
          <div
            data-animate="fade-up"
            data-delay="0.5"
            className="mt-14 flex gap-8 sm:gap-12"
          >
            {[
              { val: "+12", label: "سنة خبرة" },
              { val: "+40", label: "مشروع" },
              { val: "+1200", label: "وحدة" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: 'white' }}>{s.val}</div>
                <div className="text-xs mt-1" style={{ color: 'hsla(0,0%,100%,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: 'linear-gradient(to top, hsl(220, 20%, 97%), transparent)'
      }} />
    </section>
  );
};

export default HeroSection;
