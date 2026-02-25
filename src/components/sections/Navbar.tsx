import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المشاريع", href: "/projects" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-solid" : "nav-glass"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl btn-gradient flex items-center justify-center shadow-lg">
            <span className="font-bold text-sm sm:text-lg" style={{ color: 'white' }}>ر</span>
          </div>
          <span className="font-bold text-lg sm:text-xl text-foreground">
            ركائز <span className="text-gradient">العقارية</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute -bottom-1 right-0 left-0 h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-gradient px-6 py-2.5 rounded-xl text-sm font-medium"
          >
            احجز استشارة
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`py-2.5 text-sm font-medium ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-medium text-center mt-2"
            >
              احجز استشارة
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
