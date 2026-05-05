import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import { Menu, X, Linkedin, Globe, FileText, ChevronUp } from "lucide-react";
import { TikTokIcon, SnapchatIcon, XIcon, InstagramIcon } from "../components/Shared.jsx";
import { translations } from "../data/translations.js";

const LOGO_URL = "https://i.imgur.com/N1WeQzP.png";

const navItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "fleet", path: "/fleet" },
  { key: "equipmentIndex", path: "/equipment-index" },
  { key: "projects", path: "/projects" },
  { key: "clients", path: "/clients" },
  { key: "certificates", path: "/certificates" },
  { key: "contact", path: "/contact" },
];

function TopBar({ t }) {
  const socials = [
    { Icon: TikTokIcon, label: "TikTok" },
    { Icon: SnapchatIcon, label: "Snapchat" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: XIcon, label: "X" },
    { Icon: InstagramIcon, label: "Instagram" },
  ];

  return (
    <div className="bg-[#0a1628] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-11 flex items-center justify-between">
        <div className="flex items-center gap-4 order-1" style={{ direction: "ltr" }}>
          {socials.map(({ Icon, label }, i) => (
            <a key={i} href="#" aria-label={label} className="text-white/85 hover:text-[#d4a737] transition-colors">
              <Icon size={15} />
            </a>
          ))}
        </div>
        <div className="hidden sm:flex items-center gap-2 order-2 text-[13px]">
          <span className="text-white/90">{t.topBar.contact}</span>
          <a href={`tel:${t.topBar.phone}`} dir="ltr" className="text-[#d4a737] font-bold hover:text-yellow-300 transition-colors">
            {t.topBar.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
      <img src={LOGO_URL} alt="GAC - Gueim Al-Rowasi" className="h-12 w-auto object-contain" />
    </Link>
  );
}

function MainHeader({ t, lang, setLang, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`bg-white sticky top-0 z-40 transition-all duration-300 ${scrolled ? "shadow-lg border-b border-gray-100" : "border-b border-gray-100 shadow-sm"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-[68px]" : "h-[80px]"}`}>
          <div className="order-1 shrink-0 flex items-center">
            <Link to="/contact" className="hidden md:inline-flex items-center justify-center bg-[#0a1628] hover:bg-[#152a52] text-white font-semibold text-[14px] px-5 py-2.5 rounded-md transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              {t.nav.quote}
            </Link>
            <button onClick={onOpenMenu} className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors" aria-label="Open menu">
              <Menu size={26} />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1 order-2 flex-1 justify-center min-w-0">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1 px-2 py-2 rounded-md hover:bg-gray-50 transition-colors text-[13px] font-semibold text-gray-700 shrink-0">
              <span className="tracking-wider">{lang === "ar" ? "EN" : "AR"}</span>
              <span className="text-base leading-none">{lang === "ar" ? "🇺🇸" : "🇸🇦"}</span>
            </button>
            <nav className="flex items-center gap-0">
              {navItems.map((item) => (
                <NavLink key={item.key} to={item.path} end={item.path === "/"} className={({ isActive }) => `px-2.5 py-2 text-[13px] transition-colors whitespace-nowrap ${isActive ? "text-[#0a1628] font-bold" : "text-gray-700 hover:text-[#0a1628] font-medium"}`}>
                  {t.nav[item.key]}
                </NavLink>
              ))}
            </nav>
          </div>

          <button onClick={onOpenMenu} className="hidden md:inline-flex lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors order-2" aria-label="Open menu">
            <Menu size={26} />
          </button>

          <div className="order-3 shrink-0">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({ open, onClose, t, lang, setLang }) {
  const isRtl = lang === "ar";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const socials = [TikTokIcon, SnapchatIcon, Linkedin, XIcon, InstagramIcon];

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
      <aside className={`fixed top-0 ${isRtl ? "right-0" : "left-0"} h-full w-[85%] max-w-sm bg-[#0a1628] z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${open ? "translate-x-0" : isRtl ? "translate-x-full" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md flex items-center justify-center overflow-hidden bg-white/5">
              <img src={LOGO_URL} alt="GAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">قوائم الرواسي</div>
              <div className="text-white/60 text-[11px] leading-tight mt-0.5">Gueim Al-Rowasi</div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} end={item.path === "/"} onClick={onClose} className={({ isActive }) => `block px-5 py-3.5 transition-colors text-[15px] border-b border-white/5 ${isActive ? "bg-white/10 text-[#d4a737] font-bold" : "text-white/90 hover:bg-white/5 hover:text-[#d4a737]"}`}>
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="p-5 border-t border-white/10 space-y-3">
          <Link to="/contact" onClick={onClose} className="w-full inline-flex items-center justify-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-semibold py-3 rounded-md transition-colors">
            <FileText size={16} />
            {t.nav.quote}
          </Link>
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="w-full flex items-center justify-center gap-2 border border-white/20 text-white/90 py-2.5 rounded-md hover:bg-white/5 transition-colors text-sm">
            <Globe size={15} />
            {lang === "ar" ? "🇺🇸 English" : "🇸🇦 العربية"}
          </button>
          <div className="flex items-center justify-center gap-4 pt-2">
            {socials.map((Icon, i) => (
              <a key={i} href="#" className="text-white/60 hover:text-[#d4a737] transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

function Footer({ t, lang }) {
  const isRtl = lang === "ar";
  const socials = [TikTokIcon, SnapchatIcon, Linkedin, XIcon, InstagramIcon];

  return (
    <footer className="bg-[#070f1f] text-white pt-16 pb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a737] opacity-5 blur-3xl rounded-full" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 hover:opacity-90 transition-opacity">
              <div className="w-14 h-14 rounded-md flex items-center justify-center overflow-hidden bg-white/5">
                <img src={LOGO_URL} alt="GAC Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-base">{isRtl ? t.brand.line2 : t.brand.enFull}</div>
                <div className="text-white/60 text-xs">{isRtl ? t.brand.enFull : t.brand.line2}</div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-md">{t.footer.about}</p>
            <div className="flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d4a737] flex items-center justify-center transition-all hover:scale-110">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-[#d4a737]">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.key}>
                  <Link to={item.path} className="hover:text-[#d4a737] transition-colors">
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-[#d4a737]">{t.footer.services}</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {t.services.items.slice(0, 5).map((s, i) => (
                <li key={i}>
                  <Link to="/services" className="hover:text-[#d4a737] transition-colors text-start">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-[#d4a737]">{t.footer.newsletter}</h4>
            <p className="text-xs text-white/60 mb-4">{t.footer.newsletterDesc}</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input type="email" placeholder={t.footer.newsletterPh} dir="ltr" className={`w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-[#d4a737] rounded-md text-white placeholder:text-white/40 outline-none text-sm ${isRtl ? "text-right" : ""}`} />
              <button type="submit" className="w-full bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold py-2.5 rounded-md transition-colors text-sm">
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <div>{t.footer.rights}</div>
          <div className="text-[#d4a737] font-semibold">www.alrowasi.com</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions({ isRtl }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} z-50 flex flex-col gap-3`}>
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-12 h-12 bg-[#0a1628] hover:bg-[#152a52] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110" aria-label="Scroll to top">
          <ChevronUp size={20} />
        </button>
      )}
      <a href="https://wa.me/966500317111" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] hover:bg-[#1eb453] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.892 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
        </svg>
      </a>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function MainLayout({ lang, setLang }) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <div dir={t.dir} className="min-h-screen bg-white flex flex-col" style={{ fontFamily: isRtl ? "'Tajawal', 'Segoe UI', system-ui, sans-serif" : "'Inter', 'Segoe UI', system-ui, sans-serif" }}>
      <ScrollToTop />
      <TopBar t={t} />
      <MainHeader t={t} lang={lang} setLang={setLang} onOpenMenu={() => setMenuOpen(true)} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} t={t} lang={lang} setLang={setLang} />
      <main className="flex-1">
        <Outlet context={{ t, lang, isRtl }} />
      </main>
      <Footer t={t} lang={lang} />
      <FloatingActions isRtl={isRtl} />
    </div>
  );
}
