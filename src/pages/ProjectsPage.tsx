import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { projects } from "@/components/sections/FeaturedProjects";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = ["الكل", "الرياض", "جدة", "الخبر", "المدينة"];

const ProjectsPage = () => {
  const sectionRef = useScrollAnimation();
  const [cityFilter, setCityFilter] = useState("الكل");

  const filtered = projects.filter(
    (p) => cityFilter === "الكل" || p.city === cityFilter
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-animate="fade-up">
            <h1 className="text-4xl font-bold text-foreground mb-3">مشاريعنا</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              اكتشف مشاريعنا العقارية المتميزة في أبرز المدن السعودية
            </p>
            <div className="gold-line max-w-24 mx-auto mt-4" />
          </div>

          <div data-animate="fade-up" className="flex flex-wrap justify-center gap-3 mb-10">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCityFilter(c)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  cityFilter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                data-animate="fade-up"
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
              >
                <div className="relative h-60 overflow-hidden">
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
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
