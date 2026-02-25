import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";

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
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">مشاريعنا المميزة</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            نقدم مشاريع عقارية متنوعة تلبي تطلعاتكم في أبرز المدن السعودية
          </p>
          <div className="gold-line max-w-24 mx-auto mt-4" />
        </div>

        {/* Filters */}
        <div data-animate="fade-up" data-delay="0.1" className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="flex gap-2 flex-wrap justify-center">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCityFilter(c)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  cityFilter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="flex gap-2">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  statusFilter === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              data-animate="fade-up"
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      project.status === "جاهز"
                        ? "bg-primary/90 text-primary-foreground"
                        : "bg-accent/90 text-accent-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-2">{project.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{project.city}</span>
                  <span className="mx-2">·</span>
                  <span>{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
