import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="section-dark pt-16 pb-8 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 -bottom-48 left-1/3 bg-primary/10" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="ركائز العقارية" className="h-10 w-auto brightness-0 invert" />
              <span className="font-bold text-lg" style={{ color: 'white' }}>ركائز العقارية</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'hsla(0,0%,100%,0.55)' }}>
              شركة تطوير عقاري رائدة تسعى لصناعة بيئات عمرانية استثنائية في المملكة العربية السعودية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-5" style={{ color: 'white' }}>روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "المشاريع", href: "/projects" },
                { label: "من نحن", href: "/about" },
                { label: "تواصل معنا", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="transition-all hover:text-primary-light" style={{ color: 'hsla(0,0%,100%,0.55)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-5" style={{ color: 'white' }}>خدماتنا</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'hsla(0,0%,100%,0.55)' }}>
              <li>التطوير العقاري</li>
              <li>التسويق العقاري</li>
              <li>إدارة الأملاك</li>
              <li>الاستشارات</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5" style={{ color: 'white' }}>تواصل معنا</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'hsla(0,0%,100%,0.55)' }}>
              <li>info@rakaez.sa</li>
              <li dir="ltr">0551234567</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="gold-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'hsla(0,0%,100%,0.35)' }}>© 2025 ركائز العقارية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-xs" style={{ color: 'hsla(0,0%,100%,0.35)' }}>
            <span className="hover:text-primary-light cursor-pointer transition-colors">سياسة الخصوصية</span>
            <span className="hover:text-primary-light cursor-pointer transition-colors">الشروط والأحكام</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
