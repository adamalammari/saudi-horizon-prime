import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";
import valuePropImg from "@/assets/value-prop.jpg";

const points = [
  "أكثر من 12 عاماً من الخبرة في السوق السعودي",
  "فريق متخصص من المهندسين والمستشارين العقاريين",
  "التزام تام بمعايير الجودة والسلامة العالمية",
  "شراكات استراتيجية مع كبرى شركات البناء والتمويل",
];

const ValueProposition = () => {
  const sectionRef = useScrollAnimation();
  const parallaxRef = useParallax(0.3);

  return (
    <section ref={sectionRef} className="section-padding overflow-hidden mesh-bg relative">
      <div className="glow-orb w-96 h-96 top-20 -left-40 bg-primary/5" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span
              data-animate="fade-up"
              className="inline-block text-xs font-semibold tracking-wider text-primary mb-3 uppercase"
            >
              لماذا ركائز؟
            </span>
            <h2
              data-animate="fade-up"
              data-delay="0.1"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              نصنع الفرق
              <br />
              <span className="text-gradient">في كل تفصيل</span>
            </h2>
            <p
              data-animate="fade-up"
              data-delay="0.2"
              className="text-muted-foreground leading-relaxed mb-10"
            >
              نؤمن بأن العقار ليس مجرد مبنى، بل هو أسلوب حياة. لذلك نحرص على تقديم مشاريع تجمع بين الابتكار في التصميم والجودة في التنفيذ.
            </p>
            <ul className="space-y-5">
              {points.map((point, i) => (
                <li
                  key={i}
                  data-animate="fade-right"
                  data-delay={String(0.3 + i * 0.05)}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-lg btn-gradient flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} style={{ color: 'white' }} />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div data-animate="fade-left" className="relative">
            <div ref={parallaxRef} className="rounded-3xl overflow-hidden gradient-border">
              <img
                src={valuePropImg}
                alt="مكتب ركائز العقارية"
                className="w-full h-80 lg:h-[30rem] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 sm:right-6 glass p-5 rounded-2xl shadow-xl animate-float">
              <div className="text-2xl font-bold text-gradient">97%</div>
              <div className="text-xs text-muted-foreground mt-1">نسبة رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
