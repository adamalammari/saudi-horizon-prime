import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const projects = [
  { id: 1, name: "واجهة النخيل", city: "الرياض", status: "جاهز", image: project1, type: "سكني" },
  { id: 2, name: "مساكن الندى", city: "جدة", status: "جاهز", image: project2, type: "فلل" },
  { id: 3, name: "برج الأفق", city: "الرياض", status: "قيد الإنشاء", image: project3, type: "تجاري" },
  { id: 4, name: "مارينا الخبر", city: "الخبر", status: "جاهز", image: project4, type: "سكني" },
  { id: 5, name: "روشن ريزيدنس", city: "الرياض", status: "قيد الإنشاء", image: project5, type: "سكني" },
  { id: 6, name: "واحة المدينة", city: "المدينة", status: "جاهز", image: project6, type: "فلل" },
];

const cities = ["الكل", "الرياض", "جدة", "الخبر", "المدينة"];
const statuses = ["الكل", "جاهز", "قيد الإنشاء"];

const FeaturedProjects = () => {
  const sectionRef = useScrollAnimation();
  const [cityFilter, setCityFilter] = useState("الكل");
  const [statusFilter, setStatusFilter] = useState("الكل");

  const filtered = projects.filter(
    (p) =>
      (cityFilter === "الكل" || p.city === cityFilter) &&
      (statusFilter === "الكل" || p.status === statusFilter)
  );

  return (
    <section ref={sectionRef} className="section-padding relative">
      {/* Glow */}
      <div className="glow-orb w-80 h-80 top-0 left-1/4 bg-primary/5" />

      <div className="container mx-auto relative">
        <div className="text-center mb-14" data-animate="fade-up">
          <span className="inline-block text-xs font-semibold tracking-wider text-primary mb-3 uppercase">مشاريعنا</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            مشاريع <span className="text-gradient">مميزة</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            نقدم مشاريع عقارية متنوعة تلبي تطلعاتكم في أبرز المدن السعودية
          </p>
          <div className="gold-line max-w-20 mx-auto mt-5" />
        </div>

        {/* Filters */}
        <div data-animate="fade-up" data-delay="0.1" className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex gap-2 flex-wrap justify-center p-1.5 rounded-2xl bg-muted/60">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCityFilter(c)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  cityFilter === c
                    ? "btn-gradient shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2 p-1.5 rounded-2xl bg-muted/60">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  statusFilter === s
                    ? "btn-gradient shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              data-animate="fade-up"
              className="group rounded-3xl overflow-hidden card-hover gradient-border bg-card"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md ${
                      project.status === "جاهز"
                        ? "bg-primary/85 text-primary-foreground"
                        : "bg-accent/85 text-accent-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin size={14} className="text-primary/60" />
                  <span>{project.city}</span>
                  <span className="mx-1.5 text-border">|</span>
                  <span>{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12" data-animate="fade-up">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            عرض جميع المشاريع
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
