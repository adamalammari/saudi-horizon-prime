import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ر</span>
              </div>
              <span className="font-bold text-lg text-background">ركائز العقارية</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              شركة تطوير عقاري رائدة تسعى لصناعة بيئات عمرانية استثنائية في المملكة العربية السعودية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">الرئيسية</Link></li>
              <li><Link to="/projects" className="opacity-70 hover:opacity-100 transition-opacity">المشاريع</Link></li>
              <li><Link to="/about" className="opacity-70 hover:opacity-100 transition-opacity">من نحن</Link></li>
              <li><Link to="/contact" className="opacity-70 hover:opacity-100 transition-opacity">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-70">التطوير العقاري</li>
              <li className="opacity-70">التسويق العقاري</li>
              <li className="opacity-70">إدارة الأملاك</li>
              <li className="opacity-70">الاستشارات</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-70">info@rakaez.sa</li>
              <li className="opacity-70" dir="ltr">+966 XX XXX XXXX</li>
              <li className="opacity-70">المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© 2025 ركائز العقارية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 text-xs opacity-50">
            <span>سياسة الخصوصية</span>
            <span>الشروط والأحكام</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
