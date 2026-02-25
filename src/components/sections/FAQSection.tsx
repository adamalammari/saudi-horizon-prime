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
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">الأسئلة الشائعة</h2>
          <p className="text-muted-foreground">إجابات لأكثر الأسئلة تكراراً من عملائنا</p>
          <div className="gold-line max-w-24 mx-auto mt-4" />
        </div>

        <div data-animate="fade-up" data-delay="0.1">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground text-right hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
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
