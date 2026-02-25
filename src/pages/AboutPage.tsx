import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ValueProposition from "@/components/sections/ValueProposition";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutPage = () => {
  const sectionRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12" data-animate="fade-up">
            <h1 className="text-4xl font-bold text-foreground mb-3">من نحن</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              ركائز العقارية شركة سعودية رائدة في مجال التطوير العقاري، تأسست على أسس راسخة من الخبرة والجودة والابتكار.
            </p>
            <div className="gold-line max-w-24 mx-auto mt-4" />
          </div>

          <div data-animate="fade-up" data-delay="0.2" className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed mb-16">
            <p>
              منذ أكثر من 12 عاماً، ونحن نعمل بشغف لتقديم مشاريع عقارية تتميز بجودة التصميم والتنفيذ. نؤمن بأن العقار ليس مجرد استثمار مادي، بل هو بيئة حياة متكاملة تؤثر في جودة حياة الأفراد والمجتمعات.
            </p>
            <p>
              فريقنا يضم نخبة من المهندسين والمستشارين العقاريين ذوي الخبرة الواسعة في السوق السعودي والعالمي. نحرص على تبني أحدث التقنيات والمعايير العالمية في جميع مشاريعنا.
            </p>
            <p>
              رؤيتنا أن نكون الشريك العقاري الأول في المملكة العربية السعودية، من خلال تقديم تجارب سكنية وتجارية استثنائية تتجاوز توقعات عملائنا.
            </p>
          </div>
        </div>

        <ValueProposition />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
