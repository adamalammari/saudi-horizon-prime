import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "ما هي المدن التي تعملون فيها؟",
    a: "نعمل حالياً في الرياض وجدة والخبر والمدينة المنورة، مع خطط توسعية لتغطية مدن إضافية في المستقبل القريب.",
  },
  {
    q: "هل توفرون خيارات تمويل عقاري؟",
    a: "نعم، نتعاون مع عدة جهات تمويلية معتمدة لتوفير خيارات تمويل مرنة تناسب احتياجاتكم، بما في ذلك التمويل العقاري المدعوم.",
  },
  {
    q: "كم يستغرق تسليم المشروع؟",
    a: "تختلف مدة التسليم حسب حجم ونوع المشروع، لكننا نلتزم بالجداول الزمنية المتفق عليها ونوفر تحديثات دورية لعملائنا.",
  },
  {
    q: "هل يمكنني زيارة المشاريع قبل الشراء؟",
    a: "بالتأكيد! نرحب بزيارتكم لمشاريعنا الجاهزة في أي وقت. يمكنكم حجز موعد زيارة من خلال نموذج التواصل أو الاتصال بنا مباشرة.",
  },
  {
    q: "ما هي ضمانات الجودة التي تقدمونها؟",
    a: "نقدم ضمانات شاملة تغطي الهيكل الإنشائي والتشطيبات، بالإضافة إلى خدمة ما بعد البيع لضمان رضاكم التام.",
  },
];

const FAQSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="section-padding mesh-bg relative">
      <div className="container mx-auto max-w-3xl relative">
        <div className="text-center mb-14" data-animate="fade-up">
          <span className="inline-block text-xs font-semibold tracking-wider text-primary mb-3 uppercase">أسئلة شائعة</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            الأسئلة <span className="text-gradient">الشائعة</span>
          </h2>
          <p className="text-muted-foreground">إجابات لأكثر الأسئلة تكراراً من عملائنا</p>
          <div className="gold-line max-w-20 mx-auto mt-5" />
        </div>

        <div data-animate="fade-up" data-delay="0.1">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="gradient-border bg-card rounded-2xl px-6 data-[state=open]:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground text-right hover:no-underline py-5 hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
