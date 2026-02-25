import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { label: "سنوات الخبرة", value: 12, suffix: "+" },
  { label: "مشروع منجز", value: 40, suffix: "+" },
  { label: "وحدة سكنية", value: 1200, suffix: "+" },
  { label: "رضا العملاء", value: 97, suffix: "%" },
];

const StatItem = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const countRef = useCountUp();
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
        <span ref={countRef} data-target={value}>0</span>
        <span>{suffix}</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const TrustBar = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="section-padding bg-card border-y border-border">
      <div className="container mx-auto">
        {/* Partners */}
        <div data-animate="fade-up" className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12 opacity-50">
          {["شركاء التمويل", "شركاء البناء", "شركاء التصميم", "شركاء التسويق"].map((p) => (
            <div key={p} className="px-6 py-3 border border-border rounded-lg text-sm text-muted-foreground">
              {p}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
