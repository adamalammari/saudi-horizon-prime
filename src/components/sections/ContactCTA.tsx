import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, CheckCircle, Phone, MapPin } from "lucide-react";

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
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="glow-orb w-96 h-96 -top-20 right-1/4 bg-primary/5" />
      <div className="glow-orb w-72 h-72 bottom-0 left-10 bg-accent/8" />

      <div className="container mx-auto max-w-5xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Info side */}
          <div className="lg:col-span-2" data-animate="fade-up">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary mb-3 uppercase">تواصل معنا</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              ابدأ رحلتك <span className="text-gradient">العقارية</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              أخبرنا عن احتياجك وسنتواصل معك في أقرب وقت لتقديم أفضل الحلول.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl glass">
                <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shrink-0">
                  <Phone size={16} style={{ color: 'white' }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">اتصل بنا</p>
                  <p className="text-sm font-semibold text-foreground" dir="ltr">+966 XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl glass">
                <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shrink-0">
                  <MapPin size={16} style={{ color: 'white' }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">الموقع</p>
                  <p className="text-sm font-semibold text-foreground">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            data-animate="fade-up"
            data-delay="0.15"
            className="lg:col-span-3 rounded-3xl gradient-border bg-card p-7 sm:p-9 space-y-5 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">الاسم</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">رقم الجوال</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  placeholder="05XXXXXXXX"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">المدينة</label>
                <select
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                >
                  <option>الرياض</option>
                  <option>جدة</option>
                  <option>الخبر</option>
                  <option>المدينة المنورة</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">نوع الطلب</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-input bg-muted/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
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
              className="w-full btn-gradient py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  تم الإرسال بنجاح!
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
      </div>
    </section>
  );
};

export default ContactCTA;
