import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Megaphone, Settings, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "التطوير العقاري",
    desc: "نطور مشاريع سكنية وتجارية بأحدث المعايير العالمية وبتصاميم مبتكرة.",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Megaphone,
    title: "التسويق العقاري",
    desc: "استراتيجيات تسويق متكاملة لضمان وصول مشروعك للعملاء المستهدفين.",
    gradient: "from-accent/15 via-accent/5 to-transparent",
  },
  {
    icon: Settings,
    title: "إدارة الأملاك",
    desc: "إدارة شاملة لممتلكاتك العقارية بكفاءة عالية وشفافية تامة.",
    gradient: "from-primary-light/10 via-primary-light/5 to-transparent",
  },
  {
    icon: MessageSquare,
    title: "الاستشارات العقارية",
    desc: "نقدم استشارات متخصصة تساعدك في اتخاذ أفضل القرارات الاستثمارية.",
    gradient: "from-accent/10 via-primary/5 to-transparent",
  },
];

const ServicesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="section-padding section-dark relative overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 -top-48 right-0 bg-primary/15" />
      <div className="glow-orb w-64 h-64 bottom-0 left-20 bg-accent/10" />

      <div className="container mx-auto relative">
        <div className="text-center mb-14" data-animate="fade-up">
          <span className="inline-block text-xs font-semibold tracking-wider text-accent mb-3 uppercase">خدماتنا</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'white' }}>
            حلول عقارية <span className="text-gradient-gold">متكاملة</span>
          </h2>
          <p className="max-w-md mx-auto" style={{ color: 'hsla(0,0%,100%,0.6)' }}>
            من التطوير إلى التسويق وإدارة الأملاك
          </p>
          <div className="gold-line max-w-20 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              data-animate="fade-up"
              className="group p-7 rounded-3xl glass-dark card-hover text-center relative overflow-hidden"
            >
              {/* Subtle gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                  <service.icon style={{ color: 'hsl(210, 68%, 58%)' }} size={26} />
                </div>
                <h3 className="font-bold mb-3 text-lg" style={{ color: 'white' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsla(0,0%,100%,0.6)' }}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
