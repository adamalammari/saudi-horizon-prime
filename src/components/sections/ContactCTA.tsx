import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, CheckCircle } from "lucide-react";

const ContactCTA = () => {
  const sectionRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "الرياض", type: "شراء" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-muted/40 geometric-pattern">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">تواصل معنا</h2>
          <p className="text-muted-foreground">
            أخبرنا عن احتياجك وسنتواصل معك في أقرب وقت
          </p>
          <div className="gold-line max-w-24 mx-auto mt-4" />
        </div>

        <form
          onSubmit={handleSubmit}
          data-animate="fade-up"
          data-delay="0.1"
          className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">الاسم</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="أدخل اسمك الكامل"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">رقم الجوال</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="05XXXXXXXX"
                dir="ltr"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">المدينة</label>
              <select
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>الرياض</option>
                <option>جدة</option>
                <option>الخبر</option>
                <option>المدينة المنورة</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">نوع الطلب</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>شراء</option>
                <option>استثمار</option>
                <option>استشارة</option>
                <option>إدارة أملاك</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-semibold btn-primary-glow transition-all hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {submitted ? (
              <>
                <CheckCircle size={16} />
                تم الإرسال بنجاح
              </>
            ) : (
              <>
                <Send size={16} />
                إرسال الطلب
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
