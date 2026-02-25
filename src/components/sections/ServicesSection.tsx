import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Megaphone, Settings, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "التطوير العقاري",
    desc: "نطور مشاريع سكنية وتجارية بأحدث المعايير العالمية وبتصاميم مبتكرة.",
  },
  {
    icon: Megaphone,
    title: "التسويق العقاري",
    desc: "استراتيجيات تسويق متكاملة لضمان وصول مشروعك للعملاء المستهدفين.",
  },
  {
    icon: Settings,
    title: "إدارة الأملاك",
    desc: "إدارة شاملة لممتلكاتك العقارية بكفاءة عالية وشفافية تامة.",
  },
  {
    icon: MessageSquare,
    title: "الاستشارات العقارية",
    desc: "نقدم استشارات متخصصة تساعدك في اتخاذ أفضل القرارات الاستثمارية.",
  },
];

const ServicesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50 geometric-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">خدماتنا</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            حلول عقارية متكاملة من التطوير إلى التسويق وإدارة الأملاك
          </p>
          <div className="gold-line max-w-24 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              data-animate="fade-up"
              className="group bg-card p-6 rounded-2xl border border-border card-hover text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              <div className="gold-line max-w-12 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
