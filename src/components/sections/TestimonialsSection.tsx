import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "أحمد العتيبي",
    role: "مستثمر عقاري",
    text: "تعاملت مع ركائز في شراء وحدة سكنية في مشروع واجهة النخيل، وكانت التجربة ممتازة من حيث الجودة والالتزام.",
  },
  {
    name: "سارة المطيري",
    role: "مالكة عقار",
    text: "خدمة إدارة الأملاك من ركائز وفرت علي الكثير من الوقت والجهد. فريق محترف ومتابعة دقيقة.",
  },
  {
    name: "فهد الدوسري",
    role: "رائد أعمال",
    text: "الاستشارة العقارية من ركائز ساعدتني في اتخاذ قرار استثماري صائب. أنصح بالتعامل معهم.",
  },
  {
    name: "نورة القحطاني",
    role: "مستثمرة",
    text: "احترافية عالية في التعامل وشفافية كاملة. تجربة مميزة من البداية حتى استلام الوحدة.",
  },
  {
    name: "خالد الشمري",
    role: "مطور عقاري",
    text: "شراكتنا مع ركائز كانت من أنجح القرارات. جودة التنفيذ والالتزام بالمواعيد ممتازة.",
  },
];

// Duplicate for infinite scroll
const allTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollPos += speed;
        // Reset when we've scrolled through the first set
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos >= halfWidth) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="glow-orb w-80 h-80 top-10 right-10 bg-accent/8" />

      <div className="container mx-auto relative mb-8 px-4 sm:px-6">
        <div className="text-center" data-animate="fade-up">
          <span className="inline-block text-xs font-semibold tracking-wider text-primary mb-3 uppercase">آراء العملاء</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            ماذا يقول <span className="text-gradient">عملاؤنا</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            ثقة عملائنا هي أكبر شهادة على جودة خدماتنا
          </p>
          <div className="gold-line max-w-16 mx-auto mt-4" />
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 overflow-hidden cursor-grab px-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {allTestimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 p-5 rounded-2xl card-hover gradient-border bg-card transition-transform duration-300 hover:scale-[1.03]"
          >
            <Quote size={22} className="text-primary/15 mb-2" />
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={11} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs text-foreground leading-relaxed mb-5">"{t.text}"</p>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                <span className="text-xs font-bold" style={{ color: 'white' }}>{t.name[0]}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-xs">{t.name}</p>
                <p className="text-[10px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
