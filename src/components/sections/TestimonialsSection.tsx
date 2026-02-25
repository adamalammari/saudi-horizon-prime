import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد العتيبي",
    role: "مستثمر عقاري",
    text: "تعاملت مع ركائز في شراء وحدة سكنية في مشروع واجهة النخيل، وكانت التجربة ممتازة من حيث الجودة والالتزام بالمواعيد.",
  },
  {
    name: "سارة المطيري",
    role: "مالكة عقار",
    text: "خدمة إدارة الأملاك من ركائز وفرت علي الكثير من الوقت والجهد. فريق محترف ومتابعة دقيقة لكل التفاصيل.",
  },
  {
    name: "فهد الدوسري",
    role: "رائد أعمال",
    text: "الاستشارة العقارية من ركائز ساعدتني في اتخاذ قرار استثماري صائب. أنصح بالتعامل معهم بشدة.",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">ماذا يقول عملاؤنا</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            ثقة عملائنا هي أكبر شهادة على جودة خدماتنا
          </p>
          <div className="gold-line max-w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-animate="fade-up"
              className="bg-card p-6 rounded-2xl border border-border card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
