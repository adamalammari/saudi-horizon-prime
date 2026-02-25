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
    <section ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span
              data-animate="fade-up"
              className="text-primary text-sm font-semibold mb-2 block"
            >
              لماذا ركائز؟
            </span>
            <h2
              data-animate="fade-up"
              data-delay="0.1"
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            >
              نصنع الفرق في كل تفصيل
            </h2>
            <p
              data-animate="fade-up"
              data-delay="0.2"
              className="text-muted-foreground leading-relaxed mb-8"
            >
              نؤمن بأن العقار ليس مجرد مبنى، بل هو أسلوب حياة. لذلك نحرص على تقديم مشاريع تجمع بين الابتكار في التصميم والجودة في التنفيذ.
            </p>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <li
                  key={i}
                  data-animate="fade-right"
                  data-delay={String(0.3 + i * 0.05)}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div data-animate="fade-left" className="relative">
            <div ref={parallaxRef} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={valuePropImg}
                alt="مكتب ركائز العقارية"
                className="w-full h-80 lg:h-[28rem] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
