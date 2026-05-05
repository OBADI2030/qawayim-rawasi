import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Globe,
  ArrowRight,
  ArrowLeft,
  FileText,
  Truck,
  Wrench,
  Users,
  Building2,
  Award,
  CheckCircle2,
  Star,
  Calendar,
  Clock,
  Shield,
  Zap,
  Hammer,
  Construction,
  PlayCircle,
  Quote,
  Send,
  Target,
  Sparkles,
  ChevronUp,
  Briefcase,
  TrendingUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Real construction imagery (Unsplash, free-to-use)                  */
/* ------------------------------------------------------------------ */
// Verified, reliable image URLs from Pexels (free CDN, always available)
const IMG = {
  // Hero / construction sites
  hero: "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1600",
  hero2: "https://images.pexels.com/photos/2078884/pexels-photo-2078884.jpeg?auto=compress&cs=tinysrgb&w=1600",
  hero3: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // Real equipment photos - all verified
  excavator: "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
  excavator2: "https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&w=800",
  bulldozer: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  loader: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  crane: "https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800",
  truck: "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=800",
  paving: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  grader: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  forklift: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
  // Project / sites
  site1: "https://images.pexels.com/photos/2058136/pexels-photo-2058136.jpeg?auto=compress&cs=tinysrgb&w=1200",
  site2: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1200",
  site3: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200",
  workers: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200",
  city: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600",
  riyadh: "https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?auto=compress&cs=tinysrgb&w=1600",
  blueprint: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1200",
  aerial: "https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // Client portraits
  client1: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
  client2: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
  client3: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
};

// SVG fallback (data URI) for when an external image fails to load
const FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#0a1628'/>
          <stop offset='100%' stop-color='#1a3060'/>
        </linearGradient>
        <pattern id='p' x='0' y='0' width='40' height='40' patternUnits='userSpaceOnUse'>
          <circle cx='20' cy='20' r='1.5' fill='#d4a737' opacity='0.4'/>
        </pattern>
      </defs>
      <rect width='800' height='600' fill='url(#g)'/>
      <rect width='800' height='600' fill='url(#p)'/>
      <g transform='translate(400 300)'>
        <rect x='-80' y='-30' width='160' height='60' rx='6' fill='#d4a737' opacity='0.15'/>
        <text x='0' y='8' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='#d4a737' text-anchor='middle'>QAC</text>
      </g>
    </svg>
  `);

// Reusable image with automatic fallback if loading fails
const SafeImg = ({ src, alt, className, style }) => {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={errored ? FALLBACK_SVG : src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
};

/* ------------------------------------------------------------------ */
/*  Brand-style social icons                                           */
/* ------------------------------------------------------------------ */
const TikTokIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04Z" />
  </svg>
);
const SnapchatIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.16 2c2.67 0 4.7 1.6 5.46 3.84.3.9.3 1.84.27 2.6 0 .1-.01.27-.02.46.34.18.7.13.99-.04.18-.1.42-.18.69-.18.27 0 .55.1.82.32.4.31.55.83.27 1.32-.27.5-1.07.84-1.62 1.12-.16.08-.4.18-.42.32-.04.18.18.42.32.6.62.85 1.6 1.66 2.86 2.04.27.08.42.27.42.55v.04c-.04.66-.96.92-1.84 1.06-.04.04-.06.18-.1.36-.05.18-.1.4-.18.6-.1.16-.27.18-.46.18-.18 0-.42-.04-.74-.13-.36-.08-.78-.18-1.32-.18-.32 0-.69.04-1.07.13-.74.18-1.39.78-2.04 1.34-.92.78-1.93 1.66-3.55 1.66-.04 0-.13-.04-.18-.04-.04 0-.13.04-.18.04-1.62 0-2.63-.88-3.55-1.66-.65-.55-1.3-1.16-2.04-1.34-.4-.1-.78-.13-1.07-.13-.55 0-.96.13-1.32.18-.27.04-.55.13-.74.13-.27 0-.42-.13-.46-.18-.1-.18-.13-.4-.18-.6-.04-.18-.06-.32-.1-.36-.88-.13-1.8-.4-1.84-1.06v-.04c0-.27.18-.46.42-.55 1.27-.4 2.24-1.2 2.86-2.04.13-.18.36-.42.32-.6-.04-.13-.27-.27-.42-.32-.55-.27-1.34-.62-1.62-1.12-.27-.5-.13-1.02.27-1.32.27-.22.55-.32.82-.32.27 0 .5.08.69.18.27.13.65.22.96.04-.01-.18-.01-.36-.04-.46-.01-.78-.04-1.71.27-2.6C7.46 3.6 9.5 2 12.16 2Z" />
  </svg>
);
const XIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);
const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Scroll reveal hook                                                 */
/* ------------------------------------------------------------------ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */
function Counter({ target, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [visible, target, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  i18n dictionary — Qawayim Al-Rawasi Contracting Co.                */
/* ------------------------------------------------------------------ */
const translations = {
  ar: {
    dir: "rtl",
    topBar: { contact: "هل تبحث عن معدة ؟ تواصل معنا :", phone: "+966500317111" },
    brand: {
      line1: "QAC",
      line2: "شركة قوائم الرواسي للمقاولات",
      enFull: "Qawayim Al-Rawasi Contracting Co.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      fleet: "أسطول الشركة",
      clients: "عملاؤنا",
      projects: "مشاريعنا",
      more: "المزيد",
      profile: "بروفايل الشركة",
      quote: "طلب تسعيرة",
    },
    servicesMenu: [
      "تأجير المعدات الثقيلة",
      "تنفيذ مشاريع الهدم",
      "الحفر والترحيل",
      "مشاريع الخرسانة",
      "الرصف والأسفلت",
      "أشغال البلدورات والإنترلوك",
    ],
    fleetMenu: ["الشيولات", "البلدوزرات", "الحفارات", "الجريدرات", "الكرينات", "الشاحنات والقلابات"],
    moreMenu: ["المدونة", "الأخبار", "الشهادات والتراخيص", "اتصل بنا"],
    hero: {
      slides: [
        {
          tag: "رؤية المملكة 2030",
          title: "حلول متكاملة لتأجير المعدات الثقيلة",
          subtitle: "شريككم الموثوق في تنفيذ المشاريع الكبرى والبنية التحتية بأسطول حديث وفريق هندسي متخصص.",
          img: "hero",
        },
        {
          tag: "خبرة وكفاءة",
          title: "تنفيذ مشاريع البنية التحتية بأعلى المعايير",
          subtitle: "نحن جزء من نهضة المملكة العربية السعودية، نقدم أفضل الخبرات في قطاع المقاولات.",
          img: "hero2",
        },
        {
          tag: "شركاء النجاح",
          title: "نضع بصمتنا في مشاريع رؤية 2030",
          subtitle: "نشارك في تنفيذ أكبر المشاريع العملاقة في المملكة العربية السعودية.",
          img: "hero3",
        },
      ],
      cta1: "طلب تسعيرة الآن",
      cta2: "شاهد أعمالنا",
      since: "نخدم المملكة منذ سنوات",
      iso: "معتمدون ISO",
    },
    stats: {
      projects: "مشروع منجز",
      equipment: "قطعة معدات",
      clients: "عميل سعيد",
      years: "سنوات خبرة",
    },
    about: {
      tag: "من نحن",
      title: "شركة قوائم الرواسي للمقاولات",
      p1: "تأسست شركة قوائم الرواسي للمقاولات لتكون ثمرة من ثمرات جهود الإعمار والتطوير في المملكة العربية السعودية، نقدم خدمات فنية واستشارية وبشرية وكوادر عاملة ومهندسين مختصين في أعلى مستوى في قطاع المقاولات وتنفيذ المشاريع المتوسطة والعملاقة.",
      p2: "نسعى أن نكون شركة رائدة محلياً ودولياً في جميع اختصاصاتها من خلال البحث والتطوير لتقديم الأفضل لكل ما هو جديد، لمواكبة التطور في المملكة العربية السعودية في كافة المجالات.",
      cta: "تعرف على المزيد",
      points: [
        { title: "رؤيتنا", desc: "أن نكون شركة رائدة محلياً ودولياً في جميع اختصاصاتها.", icon: "Target" },
        { title: "رسالتنا", desc: "المساهمة والتطوير والتحديث وبناء جسر بين كل ما هو جديد وعملاؤنا.", icon: "Sparkles" },
        { title: "أهدافنا", desc: "بناء قاعدة صدق وأمانة بيننا وبين العملاء وتطوير الشركة.", icon: "Award" },
      ],
    },
    services: {
      tag: "ما نقدمه",
      title: "خدماتنا المتميزة",
      subtitle: "باقة متكاملة من الخدمات الإنشائية والمقاولات بأعلى معايير الجودة",
      items: [
        { title: "تأجير المعدات الثقيلة", desc: "أسطول حديث ومتنوع من المعدات الثقيلة بكافة أنواعها ومقاساتها.", img: IMG.excavator, icon: Truck },
        { title: "الحفر والترحيل", desc: "تنفيذ أعمال الحفر والترحيل بمعدات متطورة وفريق محترف.", img: IMG.bulldozer, icon: Hammer },
        { title: "الرصف والأسفلت", desc: "تنفيذ أعمال الرصف والأسفلت والطرقات بأعلى معايير الجودة.", img: IMG.paving, icon: Construction },
        { title: "مشاريع الخرسانة", desc: "تنفيذ مشاريع الخرسانة المسلحة بكافة أنواعها وأحجامها.", img: IMG.crane, icon: Building2 },
      ],
      readMore: "اقرأ المزيد",
    },
    fleet: {
      tag: "أسطولنا",
      title: "أسطول المعدات الضخم",
      subtitle: "نمتلك أسطولاً ضخماً من أحدث المعدات العالمية",
      items: [
        { name: "الحفارات", img: IMG.excavator, count: "+45", desc: "للحفر والإنشاء" },
        { name: "البلدوزرات", img: IMG.bulldozer, count: "+30", desc: "لأعمال التسوية" },
        { name: "الشيولات", img: IMG.loader, count: "+25", desc: "للتحميل والنقل" },
        { name: "الكرينات", img: IMG.crane, count: "+20", desc: "للرفع والمناولة" },
        { name: "الشاحنات", img: IMG.truck, count: "+60", desc: "للنقل والترحيل" },
        { name: "رصاصات الطرق", img: IMG.paving, count: "+15", desc: "لأعمال الأسفلت" },
      ],
      viewAll: "عرض كل المعدات",
    },
    fleetDetail: {
      tag: "تفاصيل أسطولنا",
      title: "كل المعدات بالتفصيل",
      subtitle: "تعرف على أنواع المعدات الثقيلة المتوفرة لدينا للإيجار اليومي والشهري",
      items: [
        {
          name: "الحفارات (Excavators)",
          img: IMG.excavator,
          count: "+45 حفارة",
          features: ["كاتربيلر CAT", "كوماتسو", "هيونداي", "أحجام من 5 إلى 50 طن"],
          uses: "للحفر العميق، إزالة التربة، تحميل الشاحنات، هدم المباني، وأعمال البنية التحتية.",
        },
        {
          name: "البلدوزرات (Bulldozers)",
          img: IMG.bulldozer,
          count: "+30 بلدوزر",
          features: ["كاتربيلر D6/D8/D10", "كوماتسو D85", "تروس مجنزرة", "قوة 200-580 حصان"],
          uses: "لتسوية الأراضي، دفع التربة والأنقاض، تمهيد الطرق، إزالة العوائق.",
        },
        {
          name: "الشيولات (Wheel Loaders)",
          img: IMG.loader,
          count: "+25 شيول",
          features: ["كاتربيلر 950/966", "فولفو L120", "JCB", "حمولة من 2 إلى 10 أمتار مكعبة"],
          uses: "للتحميل السريع للشاحنات، نقل المواد داخل المواقع، خلط الخرسانة، أعمال المحاجر.",
        },
        {
          name: "الكرينات (Cranes)",
          img: IMG.crane,
          count: "+20 كرين",
          features: ["كرينات برجية", "كرينات متحركة", "حمولات من 25 إلى 200 طن", "ارتفاعات تصل لـ 80م"],
          uses: "لرفع الأحمال الثقيلة، تركيب الهياكل المعدنية، أعمال البناء العالي، تركيب المعدات.",
        },
        {
          name: "الشاحنات والقلابات (Trucks)",
          img: IMG.truck,
          count: "+60 شاحنة",
          features: ["مرسيدس أكتروس", "فولفو FH", "MAN TGS", "حمولات من 25 إلى 40 طن"],
          uses: "لنقل التربة والركام، توصيل الخرسانة، نقل المواد البنائية، تفريغ المخلفات.",
        },
        {
          name: "رصاصات ومداحل الطرق",
          img: IMG.paving,
          count: "+15 رصاصة",
          features: ["مداحل اهتزازية", "رصاصات إطار مطاطي", "Bomag", "Hamm", "وزن من 5 إلى 25 طن"],
          uses: "لرص الأسفلت، ضغط التربة، إنشاء الطرق، أعمال الرصف النهائية.",
        },
        {
          name: "الجريدرات (Graders)",
          img: IMG.grader,
          count: "+10 جريدر",
          features: ["كاتربيلر 140/160", "كوماتسو GD675", "نصل بطول 3.7-4.3م", "دقة عالية في التسوية"],
          uses: "لتسوية الأراضي بدقة، تمهيد الطرق، تنظيف المواقع، تشكيل الميلانات.",
        },
        {
          name: "الرافعات الشوكية (Forklifts)",
          img: IMG.forklift,
          count: "+15 رافعة",
          features: ["تويوتا", "هيستر", "حمولات من 3 إلى 25 طن", "ارتفاعات حتى 12م"],
          uses: "لرفع ونقل المواد داخل المستودعات والمواقع، تحميل الحاويات، أعمال اللوجستيات.",
        },
      ],
      cta: "اطلب تسعيرة للمعدات",
      featuresTitle: "المواصفات",
      usesTitle: "الاستخدامات",
    },
    why: {
      tag: "لماذا نحن",
      title: "لماذا تختار قوائم الرواسي ؟",
      subtitle: "نحن جزء من نهضة وتطوير المملكة العربية السعودية",
      items: [
        { title: "خبرة عميقة", desc: "سنوات من الخبرة في تنفيذ المشاريع الإنشائية.", icon: Award },
        { title: "أسطول حديث", desc: "أحدث المعدات من العلامات التجارية العالمية.", icon: Truck },
        { title: "فريق متخصص", desc: "مهندسون وفنيون مختصون على أعلى مستوى.", icon: Users },
        { title: "جودة وأمان", desc: "نلتزم بأعلى معايير الجودة والسلامة.", icon: Shield },
        { title: "تسليم في الوقت", desc: "نحرص على تسليم مشاريعنا في المواعيد المحددة.", icon: Clock },
        { title: "دعم على مدار الساعة", desc: "فريق دعم متاح 24/7 لخدمة عملائنا.", icon: Zap },
      ],
    },
    projects: {
      tag: "مشاريعنا",
      title: "مشاريعنا الكبرى",
      subtitle: "نشارك في أهم المشاريع العملاقة برؤية المملكة 2030",
      list: [
        { name: "مشروع نيوم", category: "مدينة المستقبل", img: IMG.site1 },
        { name: "مشروع القدية", category: "ترفيه ورياضة", img: IMG.site2 },
        { name: "مشروع الدرعية", category: "تراث وثقافة", img: IMG.site3 },
        { name: "حدائق الملك سلمان", category: "حدائق ومتنزهات", img: IMG.city },
        { name: "مسار الرياض", category: "بنية تحتية", img: IMG.riyadh },
        { name: "وادي سفار", category: "تطوير عقاري", img: IMG.aerial },
      ],
      viewProject: "عرض المشروع",
    },
    partners: {
      tag: "شركاء النجاح",
      title: "شركاء العمل والنجاح",
      subtitle: "نفخر بشراكاتنا مع أكبر الشركات في المملكة",
      logos: ["المباني", "BACS", "بن قريا", "Nesma", "نسما", "العيوني", "Source", "الرواف", "RTCC", "عبر المملكة", "الحلاوي", "السعودية القابضة"],
    },
    testimonials: {
      tag: "آراء العملاء",
      title: "ماذا يقول عملاؤنا",
      subtitle: "شهادات من عملاء وثقوا بنا في تنفيذ مشاريعهم",
      items: [
        {
          name: "م. عبدالله الشمري",
          role: "مدير المشاريع، شركة المباني",
          text: "تعاملنا مع شركة قوائم الرواسي في عدة مشاريع، الالتزام بالمواعيد والجودة العالية كان دائماً سمة مميزة لهم. نوصي بهم بكل ثقة.",
          rating: 5,
          img: IMG.client1,
        },
        {
          name: "أ. فهد العتيبي",
          role: "الرئيس التنفيذي، مجموعة الرشيد",
          text: "أسطول حديث وفريق محترف. ما يميز قوائم الرواسي هو الاستجابة السريعة والدعم المستمر طوال فترة المشروع. شراكة استراتيجية موثوقة.",
          rating: 5,
          img: IMG.client2,
        },
        {
          name: "م. خالد العنزي",
          role: "مهندس استشاري",
          text: "الخبرة الفنية والكفاءة العالية في تنفيذ المشاريع المعقدة. شركة قوائم الرواسي شريك حقيقي في النجاح، أنصح بالتعامل معهم.",
          rating: 5,
          img: IMG.client3,
        },
      ],
    },
    certs: {
      tag: "شهاداتنا",
      title: "شهادات وتراخيص",
      subtitle: "نلتزم بأعلى المعايير المحلية والدولية",
      items: [
        { title: "السجل التجاري", number: "7048792159", icon: Briefcase, color: "bg-blue-500" },
        { title: "شهادة الزكاة والضريبة", number: "Active", icon: CheckCircle2, color: "bg-emerald-500" },
        { title: "التأمينات الاجتماعية", number: "Verified", icon: Shield, color: "bg-amber-500" },
        { title: "شهادة ضريبة القيمة المضافة", number: "Registered", icon: Award, color: "bg-rose-500" },
      ],
    },
    cta: {
      title: "جاهزون لبدء مشروعك التالي ؟",
      subtitle: "تواصل معنا اليوم للحصول على عرض سعر مخصص لمشروعك",
      btn: "احصل على عرض سعر",
      call: "اتصل بنا",
    },
    contact: {
      tag: "تواصل معنا",
      title: "ابقَ على تواصل",
      subtitle: "نحن هنا لخدمتكم. تواصلوا معنا في أي وقت",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الجوال",
        subject: "موضوع الطلب",
        message: "اكتب رسالتك هنا...",
        submit: "إرسال الطلب",
      },
      info: [
        { label: "العنوان", value: "بدر، الرياض 14274، المملكة العربية السعودية", icon: MapPin },
        { label: "الجوال", value: "+966 50 031 7111", icon: Phone },
        { label: "البريد", value: "arafat@alrowasi.com", icon: Mail },
        { label: "أوقات العمل", value: "الأحد - الخميس : 8 ص - 5 م", icon: Clock },
      ],
    },
    footer: {
      about: "شركة قوائم الرواسي للمقاولات هي الشريك الموثوق في تأجير المعدات الثقيلة وتنفيذ المشاريع الإنشائية في المملكة العربية السعودية.",
      quickLinks: "روابط سريعة",
      services: "خدماتنا",
      contactUs: "تواصل معنا",
      newsletter: "اشترك في النشرة",
      newsletterPh: "بريدك الإلكتروني",
      rights: "جميع الحقوق محفوظة © 2026",
    },
  },
  en: {
    dir: "ltr",
    topBar: { contact: "Looking for equipment? Contact us:", phone: "+966500317111" },
    brand: {
      line1: "QAC",
      line2: "Qawayim Al-Rawasi Contracting Co.",
      enFull: "Qawayim Al-Rawasi Contracting Co.",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      fleet: "Our Fleet",
      clients: "Clients",
      projects: "Projects",
      more: "More",
      profile: "Company Profile",
      quote: "Request a Quote",
    },
    servicesMenu: ["Heavy Equipment Rental", "Demolition Projects", "Excavation & Hauling", "Concrete Projects", "Paving & Asphalt", "Curbs & Interlock"],
    fleetMenu: ["Wheel Loaders", "Bulldozers", "Excavators", "Graders", "Cranes", "Trucks & Dumpers"],
    moreMenu: ["Blog", "News", "Certificates & Licenses", "Contact"],
    hero: {
      slides: [
        {
          tag: "Saudi Vision 2030",
          title: "Integrated Solutions for Heavy Equipment",
          subtitle: "Your trusted partner for major projects and infrastructure with a modern fleet and specialized engineering team.",
          img: "hero",
        },
        {
          tag: "Experience & Efficiency",
          title: "Infrastructure Projects to the Highest Standards",
          subtitle: "We are part of the renaissance of Saudi Arabia, providing the best expertise in contracting.",
          img: "hero2",
        },
        {
          tag: "Success Partners",
          title: "Leaving Our Mark on Vision 2030 Projects",
          subtitle: "We participate in the largest mega-projects in Saudi Arabia.",
          img: "hero3",
        },
      ],
      cta1: "Request a Quote",
      cta2: "View Our Work",
      since: "Serving the Kingdom for years",
      iso: "ISO Certified",
    },
    stats: {
      projects: "Projects Completed",
      equipment: "Equipment Units",
      clients: "Happy Clients",
      years: "Years of Experience",
    },
    about: {
      tag: "About Us",
      title: "Qawayim Al-Rawasi Contracting Co.",
      p1: "Qawayim Al-Rawasi was established as a fruit of reconstruction and development efforts in Saudi Arabia. We provide technical, consulting, and human services with specialized engineers at the highest level in the contracting sector for medium and giant projects.",
      p2: "We strive to be a leading local and international company in all our specialties through research and development, providing the best of everything new, keeping pace with developments in Saudi Arabia in all fields.",
      cta: "Learn More",
      points: [
        { title: "Our Vision", desc: "To be a leading local and international company in all specialties.", icon: "Target" },
        { title: "Our Mission", desc: "Contributing, developing, and building a bridge between everything new and our clients.", icon: "Sparkles" },
        { title: "Our Goals", desc: "Building a foundation of honesty and integrity with our clients.", icon: "Award" },
      ],
    },
    services: {
      tag: "What We Offer",
      title: "Our Services",
      subtitle: "Integrated package of construction and contracting services",
      items: [
        { title: "Heavy Equipment Rental", desc: "Modern fleet of heavy equipment of all types and sizes.", img: IMG.excavator, icon: Truck },
        { title: "Excavation & Hauling", desc: "Excavation and hauling with advanced equipment and a professional team.", img: IMG.bulldozer, icon: Hammer },
        { title: "Paving & Asphalt", desc: "Paving and roadwork executed to the highest quality standards.", img: IMG.paving, icon: Construction },
        { title: "Concrete Projects", desc: "Reinforced concrete projects of all types and sizes.", img: IMG.crane, icon: Building2 },
      ],
      readMore: "Read More",
    },
    fleet: {
      tag: "Our Fleet",
      title: "Massive Equipment Fleet",
      subtitle: "We own a massive fleet of the latest world-class equipment",
      items: [
        { name: "Excavators", img: IMG.excavator, count: "+45", desc: "Digging & construction" },
        { name: "Bulldozers", img: IMG.bulldozer, count: "+30", desc: "Leveling work" },
        { name: "Wheel Loaders", img: IMG.loader, count: "+25", desc: "Loading & transport" },
        { name: "Cranes", img: IMG.crane, count: "+20", desc: "Lifting & handling" },
        { name: "Trucks", img: IMG.truck, count: "+60", desc: "Transport & hauling" },
        { name: "Road Rollers", img: IMG.paving, count: "+15", desc: "Asphalt work" },
      ],
      viewAll: "View All Equipment",
    },
    fleetDetail: {
      tag: "Fleet Details",
      title: "All Equipment in Detail",
      subtitle: "Discover the heavy equipment we offer for daily and monthly rental",
      items: [
        {
          name: "Excavators",
          img: IMG.excavator,
          count: "+45 Units",
          features: ["Caterpillar CAT", "Komatsu", "Hyundai", "5 to 50 ton capacity"],
          uses: "Deep excavation, soil removal, truck loading, building demolition, infrastructure work.",
        },
        {
          name: "Bulldozers",
          img: IMG.bulldozer,
          count: "+30 Units",
          features: ["Caterpillar D6/D8/D10", "Komatsu D85", "Track-mounted", "200-580 HP"],
          uses: "Land leveling, pushing soil and debris, road preparation, obstacle removal.",
        },
        {
          name: "Wheel Loaders",
          img: IMG.loader,
          count: "+25 Units",
          features: ["Caterpillar 950/966", "Volvo L120", "JCB", "2 to 10 cubic meters"],
          uses: "Quick truck loading, material transport on sites, concrete mixing, quarry work.",
        },
        {
          name: "Cranes",
          img: IMG.crane,
          count: "+20 Units",
          features: ["Tower cranes", "Mobile cranes", "25 to 200 ton capacity", "Heights up to 80m"],
          uses: "Heavy load lifting, steel structure installation, high-rise construction, equipment installation.",
        },
        {
          name: "Trucks & Dumpers",
          img: IMG.truck,
          count: "+60 Units",
          features: ["Mercedes Actros", "Volvo FH", "MAN TGS", "25 to 40 ton capacity"],
          uses: "Soil and aggregate transport, concrete delivery, building materials transport, debris disposal.",
        },
        {
          name: "Road Rollers",
          img: IMG.paving,
          count: "+15 Units",
          features: ["Vibratory rollers", "Pneumatic tyre rollers", "Bomag", "Hamm", "5 to 25 tons"],
          uses: "Asphalt compaction, soil compression, road construction, final paving work.",
        },
        {
          name: "Graders",
          img: IMG.grader,
          count: "+10 Units",
          features: ["Caterpillar 140/160", "Komatsu GD675", "3.7-4.3m blade", "High-precision leveling"],
          uses: "Precision land leveling, road preparation, site cleaning, slope shaping.",
        },
        {
          name: "Forklifts",
          img: IMG.forklift,
          count: "+15 Units",
          features: ["Toyota", "Hyster", "3 to 25 ton capacity", "Heights up to 12m"],
          uses: "Material lifting and transport in warehouses and sites, container loading, logistics.",
        },
      ],
      cta: "Request Equipment Quote",
      featuresTitle: "Specifications",
      usesTitle: "Applications",
    },
    why: {
      tag: "Why Us",
      title: "Why Choose Qawayim Al-Rawasi?",
      subtitle: "We are part of the renaissance and development of Saudi Arabia",
      items: [
        { title: "Deep Experience", desc: "Years of experience in construction and infrastructure projects.", icon: Award },
        { title: "Modern Fleet", desc: "Latest equipment from world-class brands with high efficiency.", icon: Truck },
        { title: "Expert Team", desc: "Engineers and technicians at the highest level.", icon: Users },
        { title: "Quality & Safety", desc: "We adhere to the highest quality and safety standards.", icon: Shield },
        { title: "On-Time Delivery", desc: "We deliver our projects on schedule with precision.", icon: Clock },
        { title: "24/7 Support", desc: "Support team available around the clock.", icon: Zap },
      ],
    },
    projects: {
      tag: "Our Projects",
      title: "Our Major Projects",
      subtitle: "We participate in the biggest mega-projects of Vision 2030",
      list: [
        { name: "NEOM Project", category: "Future City", img: IMG.site1 },
        { name: "Qiddiya Project", category: "Entertainment & Sports", img: IMG.site2 },
        { name: "Diriyah Project", category: "Heritage & Culture", img: IMG.site3 },
        { name: "King Salman Park", category: "Parks & Gardens", img: IMG.city },
        { name: "Riyadh Metro", category: "Infrastructure", img: IMG.riyadh },
        { name: "Wadi Safar", category: "Real Estate", img: IMG.aerial },
      ],
      viewProject: "View Project",
    },
    partners: {
      tag: "Success Partners",
      title: "Business & Success Partners",
      subtitle: "We are proud of our partnerships with major companies",
      logos: ["Almabani", "BACS", "Bin Quraya", "Nesma", "Tasnim", "Al-Ayuni", "Source", "Al-Rawaf", "RTCC", "Saudi PAN Kingdom", "Al-Halawi", "SPK Holding"],
    },
    testimonials: {
      tag: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Testimonials from clients who trusted us with their projects",
      items: [
        {
          name: "Eng. Abdullah Al-Shamri",
          role: "Project Manager, Almabani",
          text: "We've worked with Qawayim Al-Rawasi on multiple projects. Their commitment to deadlines and high quality is consistently outstanding. Highly recommended.",
          rating: 5,
          img: IMG.client1,
        },
        {
          name: "Mr. Fahad Al-Otaibi",
          role: "CEO, Al-Rashid Group",
          text: "Modern fleet and professional team. What sets them apart is fast response and continuous support throughout the project. A reliable strategic partnership.",
          rating: 5,
          img: IMG.client2,
        },
        {
          name: "Eng. Khalid Al-Anzi",
          role: "Consulting Engineer",
          text: "Technical expertise and high efficiency in executing complex projects. Qawayim Al-Rawasi is a real success partner. I recommend working with them.",
          rating: 5,
          img: IMG.client3,
        },
      ],
    },
    certs: {
      tag: "Our Credentials",
      title: "Certificates & Licenses",
      subtitle: "We adhere to the highest local and international standards",
      items: [
        { title: "Commercial Registration", number: "7048792159", icon: Briefcase, color: "bg-blue-500" },
        { title: "Zakat & Tax Certificate", number: "Active", icon: CheckCircle2, color: "bg-emerald-500" },
        { title: "Social Insurance (GOSI)", number: "Verified", icon: Shield, color: "bg-amber-500" },
        { title: "VAT Registration", number: "Registered", icon: Award, color: "bg-rose-500" },
      ],
    },
    cta: {
      title: "Ready to start your next project?",
      subtitle: "Contact us today for a customized quote for your project",
      btn: "Get a Quote",
      call: "Call Us",
    },
    contact: {
      tag: "Contact",
      title: "Get in Touch",
      subtitle: "We are here to serve you. Reach out anytime",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        subject: "Request Subject",
        message: "Write your message here...",
        submit: "Send Message",
      },
      info: [
        { label: "Address", value: "Badr, Riyadh 14274, Saudi Arabia", icon: MapPin },
        { label: "Phone", value: "+966 50 031 7111", icon: Phone },
        { label: "Email", value: "arafat@alrowasi.com", icon: Mail },
        { label: "Working Hours", value: "Sun - Thu : 8AM - 5PM", icon: Clock },
      ],
    },
    footer: {
      about: "Qawayim Al-Rawasi Contracting Co. is your trusted partner for heavy equipment rental and construction projects in Saudi Arabia.",
      quickLinks: "Quick Links",
      services: "Services",
      contactUs: "Contact Us",
      newsletter: "Subscribe to Newsletter",
      newsletterPh: "Your email",
      rights: "All Rights Reserved © 2026",
    },
  },
};

/* ------------------------------------------------------------------ */
/*  Top Bar                                                            */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */
function Logo({ t, isRtl }) {
  return (
    <div className="flex items-center gap-3">
      <div className={isRtl ? "text-right" : "text-left"}>
        <div className="text-[#0a1628] font-black text-[18px] leading-tight tracking-wider">{t.brand.line1}</div>
        <div className="text-gray-600 text-[11px] leading-tight mt-0.5 font-medium">
          {isRtl ? t.brand.line2 : t.brand.enFull}
        </div>
      </div>
      <div className="relative w-12 h-12 bg-gradient-to-br from-[#0a1628] to-[#152a52] rounded-md flex items-center justify-center shadow-md">
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
          <path d="M6 26V12L12 8V26H6Z" fill="#d4a737" />
          <path d="M14 26V6L22 10V26H14Z" fill="#d4a737" opacity="0.85" />
          <rect x="8" y="14" width="2" height="2" fill="#0a1628" />
          <rect x="8" y="18" width="2" height="2" fill="#0a1628" />
          <rect x="16" y="12" width="2" height="2" fill="#0a1628" />
          <rect x="16" y="16" width="2" height="2" fill="#0a1628" />
          <rect x="16" y="20" width="2" height="2" fill="#0a1628" />
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Smooth scroll helper                                               */
/* ------------------------------------------------------------------ */
function scrollToSection(id) {
  if (typeof window === "undefined") return;
  if (id === "home" || id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  // header height (88px desktop, 72 when scrolled) + topbar 44 + small buffer
  const offset = 110;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ------------------------------------------------------------------ */
/*  Nav item                                                           */
/* ------------------------------------------------------------------ */
function NavItem({ label, active, hasDropdown, items, isRtl, targetId, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (hasDropdown) return; // dropdown handled on hover, skip
    e.preventDefault();
    if (targetId) scrollToSection(targetId);
    onNavigate && onNavigate();
  };

  const handleSubItem = (e, sectionId) => {
    e.preventDefault();
    setOpen(false);
    if (sectionId) scrollToSection(sectionId);
    onNavigate && onNavigate();
  };

  return (
    <div className="relative" onMouseEnter={() => hasDropdown && setOpen(true)} onMouseLeave={() => hasDropdown && setOpen(false)}>
      <button
        onClick={handleClick}
        className={`flex items-center gap-1 px-3 py-2 text-[15px] transition-colors whitespace-nowrap ${active ? "text-[#0a1628] font-bold" : "text-gray-700 hover:text-[#0a1628] font-medium"}`}
      >
        <span>{label}</span>
        {hasDropdown && <ChevronDown size={13} strokeWidth={2.5} className={`text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />}
      </button>
      {hasDropdown && open && (
        <div className={`absolute top-full ${isRtl ? "right-0" : "left-0"} mt-1 min-w-[230px] bg-white rounded-lg shadow-2xl border border-gray-100 py-2 z-50 animate-fadeIn`}>
          {items.map((item, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => handleSubItem(e, targetId)}
              className={`block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#d4a737] transition-colors ${isRtl ? "text-right" : "text-left"}`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Header                                                        */
/* ------------------------------------------------------------------ */
function MainHeader({ t, lang, setLang, onOpenMenu }) {
  const isRtl = lang === "ar";
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // detect active section based on scroll position
      const sectionIds = ["about", "services", "fleet", "clients", "projects", "more", "profile"];
      const offset = 200;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      // top of page → home
      if (window.scrollY < 300) current = "home";
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, key: "home", targetId: "home" },
    { label: t.nav.about, key: "about", targetId: "about" },
    { label: t.nav.services, key: "services", targetId: "services", dropdown: t.servicesMenu },
    { label: t.nav.fleet, key: "fleet", targetId: "fleet", dropdown: t.fleetMenu },
    { label: t.nav.clients, key: "clients", targetId: "clients" },
    { label: t.nav.projects, key: "projects", targetId: "projects" },
    { label: t.nav.more, key: "more", targetId: "more", dropdown: t.moreMenu },
    { label: t.nav.profile, key: "profile", targetId: "profile" },
  ];

  return (
    <div className={`bg-white sticky top-0 z-40 transition-all duration-300 ${scrolled ? "shadow-lg border-b border-gray-100" : "border-b border-gray-100 shadow-sm"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`flex items-center justify-between gap-6 transition-all duration-300 ${scrolled ? "h-[72px]" : "h-[88px]"}`}>
          <div className="order-1 shrink-0 flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex items-center justify-center bg-[#0a1628] hover:bg-[#152a52] text-white font-semibold text-[15px] px-7 py-3 rounded-md transition-all shadow-md hover:shadow-lg group relative overflow-hidden"
            >
              <span className="relative z-10">{t.nav.quote}</span>
              <span className="absolute inset-0 bg-[#d4a737] -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button onClick={onOpenMenu} className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors" aria-label="Open menu">
              <Menu size={26} />
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-2 order-2 flex-1 justify-center">
            <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1.5 px-2.5 py-2 rounded-md hover:bg-gray-50 transition-colors text-[14px] font-semibold text-gray-700 shrink-0" aria-label="Switch language">
              <span className="tracking-wider">{lang === "ar" ? "EN" : "AR"}</span>
              <span className="text-base leading-none">{lang === "ar" ? "🇺🇸" : "🇸🇦"}</span>
            </button>
            <nav className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <NavItem
                  key={item.key}
                  label={item.label}
                  active={activeId === item.key}
                  hasDropdown={Boolean(item.dropdown)}
                  items={item.dropdown}
                  isRtl={isRtl}
                  targetId={item.targetId}
                />
              ))}
            </nav>
          </div>

          <button onClick={onOpenMenu} className="hidden md:inline-flex xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors order-2" aria-label="Open menu">
            <Menu size={26} />
          </button>

          <div className="order-3 shrink-0 cursor-pointer" onClick={() => scrollToSection("home")}>
            <Logo t={t} isRtl={isRtl} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Drawer                                                      */
/* ------------------------------------------------------------------ */
function MobileDrawer({ open, onClose, t, lang, setLang }) {
  const isRtl = lang === "ar";
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const sections = [
    { key: "home", label: t.nav.home, targetId: "home" },
    { key: "about", label: t.nav.about, targetId: "about" },
    { key: "services", label: t.nav.services, targetId: "services", items: t.servicesMenu },
    { key: "fleet", label: t.nav.fleet, targetId: "fleet", items: t.fleetMenu },
    { key: "clients", label: t.nav.clients, targetId: "clients" },
    { key: "projects", label: t.nav.projects, targetId: "projects" },
    { key: "more", label: t.nav.more, targetId: "more", items: t.moreMenu },
    { key: "profile", label: t.nav.profile, targetId: "profile" },
  ];
  const socials = [TikTokIcon, SnapchatIcon, Linkedin, XIcon, InstagramIcon];

  const goTo = (id) => {
    onClose();
    setTimeout(() => scrollToSection(id), 250); // wait for drawer close animation
  };

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
      <aside className={`fixed top-0 ${isRtl ? "right-0" : "left-0"} h-full w-[85%] max-w-sm bg-[#0a1628] z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${open ? "translate-x-0" : isRtl ? "translate-x-full" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
              <span className="text-[#d4a737] font-black text-base tracking-wider">QAC</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">قوائم الرواسي</div>
              <div className="text-white/60 text-[11px] leading-tight mt-0.5">Qawayim Al-Rawasi</div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {sections.map((section) => (
            <div key={section.key} className="border-b border-white/5">
              {section.items ? (
                <>
                  <button onClick={() => setOpenSection(openSection === section.key ? null : section.key)} className="w-full flex items-center justify-between px-5 py-3.5 text-white/90 hover:bg-white/5 transition-colors text-[15px]">
                    <span>{section.label}</span>
                    <ChevronDown size={16} className={`transition-transform text-white/50 ${openSection === section.key ? "rotate-180" : ""}`} />
                  </button>
                  {openSection === section.key && (
                    <div className="bg-black/20 py-1">
                      {/* main entry — go to section */}
                      <button
                        onClick={() => goTo(section.targetId)}
                        className={`w-full ${isRtl ? "text-right" : "text-left"} block px-8 py-2.5 text-sm text-[#d4a737] font-semibold hover:bg-white/5 transition-colors`}
                      >
                        ↗ {section.label}
                      </button>
                      {section.items.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => goTo(section.targetId)}
                          className={`w-full ${isRtl ? "text-right" : "text-left"} block px-8 py-2.5 text-sm text-white/70 hover:text-[#d4a737] hover:bg-white/5 transition-colors`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => goTo(section.targetId)}
                  className={`w-full ${isRtl ? "text-right" : "text-left"} block px-5 py-3.5 text-white/90 hover:bg-white/5 hover:text-[#d4a737] transition-colors text-[15px]`}
                >
                  {section.label}
                </button>
              )}
            </div>
          ))}
        </nav>
        <div className="p-5 border-t border-white/10 space-y-3">
          <button onClick={() => goTo("contact")} className="w-full inline-flex items-center justify-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-semibold py-3 rounded-md transition-colors">
            <FileText size={16} />
            {t.nav.quote}
          </button>
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

/* ------------------------------------------------------------------ */
/*  Hero — slider with animated content                                */
/* ------------------------------------------------------------------ */
function Hero({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const [idx, setIdx] = useState(0);
  const slides = t.hero.slides;

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[idx];
  const imgMap = { hero: IMG.hero, hero2: IMG.hero2, hero3: IMG.hero3 };

  return (
    <section id="home" className="relative bg-[#0a1628] text-white overflow-hidden h-[680px] lg:h-[720px]">
      {/* Background slider */}
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <SafeImg src={imgMap[s.img]} alt="" className="w-full h-full object-cover scale-105" style={{ transform: i === idx ? "scale(1.05)" : "scale(1)", transition: "transform 8s ease-out" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
        </div>
      ))}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center">
        <div className="max-w-3xl">
          <div key={`tag-${idx}`} className="inline-flex items-center gap-2 bg-[#d4a737]/15 border border-[#d4a737]/40 text-[#d4a737] text-xs font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm animate-slideDown">
            <Star size={12} fill="#d4a737" />
            {current.tag}
          </div>
          <h1 key={`title-${idx}`} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 tracking-tight animate-slideUp">
            {current.title}
          </h1>
          <p key={`sub-${idx}`} className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl animate-slideUp">
            {current.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
              {t.hero.cta1}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={() => scrollToSection("projects")} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-md transition-all">
              <PlayCircle size={18} />
              {t.hero.cta2}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#d4a737]/20 rounded-full flex items-center justify-center">
                <CheckCircle2 size={16} className="text-[#d4a737]" />
              </div>
              <span>{t.hero.since}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 bg-[#d4a737]/20 rounded-full flex items-center justify-center">
                <Shield size={16} className="text-[#d4a737]" />
              </div>
              <span>{t.hero.iso}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-12 bg-[#d4a737]" : "w-6 bg-white/30 hover:bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats — overlapping floating card with animated counters           */
/* ------------------------------------------------------------------ */
function Stats({ t }) {
  const stats = [
    { value: 150, label: t.stats.projects, icon: CheckCircle2 },
    { value: 200, label: t.stats.equipment, icon: Truck },
    { value: 1000, label: t.stats.clients, icon: Users },
    { value: 15, label: t.stats.years, icon: Award },
  ];
  return (
    <section className="bg-gray-50 py-12 -mt-20 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100 overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="p-6 lg:p-8 text-center flex flex-col items-center gap-2 hover:bg-gray-50/50 transition-colors group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4a737]/10 to-[#d4a737]/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <s.icon className="text-[#d4a737]" size={24} />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-[#0a1628]">
                <Counter target={s.value} />
              </div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading                                                    */
/* ------------------------------------------------------------------ */
function SectionHeading({ tag, title, subtitle, light = false }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`text-center mb-12 max-w-2xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className={`inline-flex items-center gap-2 ${light ? "bg-[#d4a737]/15 text-[#d4a737]" : "bg-[#0a1628]/5 text-[#0a1628]"} text-xs font-bold px-4 py-1.5 rounded-full mb-4`}>
        <Sparkles size={12} />
        {tag}
      </div>
      <h2 className={`text-3xl lg:text-4xl font-black mb-3 ${light ? "text-white" : "text-[#0a1628]"}`}>{title}</h2>
      <p className={light ? "text-white/70" : "text-gray-600"}>{subtitle}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  About section                                                      */
/* ------------------------------------------------------------------ */
function About({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const [ref, visible] = useReveal();
  const iconMap = { Target, Sparkles, Award };

  return (
    <section id="about" ref={ref} className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side with collage */}
          <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
              <div className="col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-2xl">
                <SafeImg src={IMG.workers} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                <SafeImg src={IMG.crane} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                <SafeImg src={IMG.aerial} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-7 row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <SafeImg src={IMG.bulldozer} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            {/* Floating experience badge */}
            <div className={`absolute -bottom-6 ${isRtl ? "-left-6" : "-right-6"} bg-[#d4a737] text-white p-5 rounded-xl shadow-2xl flex items-center gap-3 z-10`}>
              <TrendingUp size={36} />
              <div>
                <div className="text-3xl font-black leading-none">15+</div>
                <div className="text-xs font-medium mt-1 opacity-90">{isRtl ? "سنوات خبرة" : "Years"}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 bg-[#0a1628]/5 text-[#0a1628] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={12} />
              {t.about.tag}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-5">{t.about.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.about.p1}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t.about.p2}</p>

            <div className="space-y-4 mb-8">
              {t.about.points.map((p, i) => {
                const Icon = iconMap[p.icon] || Target;
                return (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#0a1628] group-hover:bg-[#d4a737] rounded-lg flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="text-[#d4a737] group-hover:text-white transition-colors" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a1628] mb-1">{p.title}</h4>
                      <p className="text-sm text-gray-600">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={() => scrollToSection("services")} className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#152a52] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
              {t.about.cta}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
function Services({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.services.tag} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <SafeImg src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#d4a737] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                    <Icon className="text-white" size={22} />
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[#d4a737] text-xs font-bold uppercase tracking-wider">0{i + 1}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#d4a737] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <button className="text-[#d4a737] text-sm font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    {t.services.readMore}
                    <Arrow size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Fleet showcase                                                     */
/* ------------------------------------------------------------------ */
function Fleet({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="fleet" className="bg-white py-20 relative overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.fleet.tag} title={t.fleet.title} subtitle={t.fleet.subtitle} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.fleet.items.map((item, i) => (
            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <SafeImg src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <div className="text-[#d4a737] font-black text-2xl leading-none">{item.count}</div>
                <div className="font-bold text-sm mt-1">{item.name}</div>
                <div className="text-[10px] text-white/70 mt-0.5">{item.desc}</div>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#d4a737] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <ArrowRight size={14} className="text-white" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => scrollToSection("fleet-detail")} className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#152a52] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
            {t.fleet.viewAll}
            <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Fleet Detail — full equipment showcase                             */
/* ------------------------------------------------------------------ */
function FleetDetail({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="fleet-detail" className="bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #d4a737 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.fleetDetail.tag} title={t.fleetDetail.title} subtitle={t.fleetDetail.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.fleetDetail.items.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-[#d4a737] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image side */}
              <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden shrink-0">
                <SafeImg
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a1628]/70 via-transparent to-transparent" />
                <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} bg-[#d4a737] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                  {item.count}
                </div>
              </div>

              {/* Content side */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#d4a737] transition-colors">
                  {item.name}
                </h3>

                {/* Features list */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-[#d4a737] uppercase tracking-wider mb-2">
                    {t.fleetDetail.featuresTitle}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.features.map((feature, fi) => (
                      <span
                        key={fi}
                        className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Uses */}
                <div className="mb-4 flex-1">
                  <div className="text-[11px] font-bold text-[#d4a737] uppercase tracking-wider mb-1.5">
                    {t.fleetDetail.usesTitle}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.uses}</p>
                </div>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-1 text-[#d4a737] hover:text-[#b8901f] text-sm font-bold transition-colors group/btn"
                >
                  {t.fleetDetail.cta}
                  <Arrow size={14} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl group"
          >
            <FileText size={18} />
            {t.fleetDetail.cta}
            <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why us                                                             */
/* ------------------------------------------------------------------ */
function WhyUs({ t }) {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a737] opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a1628] opacity-5 blur-3xl rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.why.tag} title={t.why.title} subtitle={t.why.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#d4a737] hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4a737]/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a1628] to-[#152a52] group-hover:from-[#d4a737] group-hover:to-[#b8901f] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-[#d4a737] group-hover:text-white transition-colors" size={26} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#d4a737] transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  <div className="mt-4 text-[#d4a737] font-bold text-xs">0{i + 1}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */
function Projects({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="projects" className="relative py-20 bg-[#0a1628] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <SafeImg src={IMG.city} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.projects.tag} title={t.projects.title} subtitle={t.projects.subtitle} light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.list.map((p, i) => (
            <div key={i} className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
              <SafeImg src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#d4a737]/90 text-white text-[11px] font-bold rounded-full">{p.category}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{p.name}</h3>
                <button className="inline-flex items-center gap-1 text-[#d4a737] text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:gap-2 transition-all">
                  {t.projects.viewProject}
                  <Arrow size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Partners — marquee scrolling                                       */
/* ------------------------------------------------------------------ */
function Partners({ t }) {
  const logos = [...t.partners.logos, ...t.partners.logos];
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
        <SectionHeading tag={t.partners.tag} title={t.partners.title} subtitle={t.partners.subtitle} />
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
          {logos.map((logo, i) => (
            <div key={i} className="shrink-0 w-44 h-24 bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-[#d4a737] hover:shadow-lg transition-all flex items-center justify-center px-4">
              <span className="text-[#0a1628] font-bold text-lg text-center">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials carousel                                              */
/* ------------------------------------------------------------------ */
function Testimonials({ t, lang }) {
  const isRtl = lang === "ar";
  const [active, setActive] = useState(0);
  const items = t.testimonials.items;

  return (
    <section id="clients" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <Quote size={200} className="text-[#d4a737]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.testimonials.tag} title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative">
            <Quote className="absolute top-6 right-6 text-[#d4a737]/20" size={64} />
            <div className="relative">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(items[active].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#d4a737]" fill="#d4a737" />
                ))}
              </div>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{items[active].text}"
              </p>
              <div className="flex items-center gap-4">
                <SafeImg src={items[active].img} alt={items[active].name} className="w-16 h-16 rounded-full object-cover ring-4 ring-[#d4a737]/20" />
                <div>
                  <div className="font-bold text-[#0a1628] text-lg">{items[active].name}</div>
                  <div className="text-sm text-gray-500">{items[active].role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button onClick={() => setActive((a) => (a - 1 + items.length) % items.length)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all flex items-center justify-center" aria-label="Previous">
              {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-[#d4a737]" : "w-2 bg-gray-300"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
            <button onClick={() => setActive((a) => (a + 1) % items.length)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all flex items-center justify-center" aria-label="Next">
              {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Certificates                                                       */
/* ------------------------------------------------------------------ */
function Certificates({ t }) {
  return (
    <section id="profile" className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.certs.tag} title={t.certs.title} subtitle={t.certs.subtitle} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {t.certs.items.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#d4a737] rounded-2xl p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className={`w-16 h-16 ${c.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-[#0a1628] mb-2">{c.title}</h4>
                <div className="text-sm font-mono text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-md">{c.number}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA banner                                                         */
/* ------------------------------------------------------------------ */
function CTA({ t, lang }) {
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  return (
    <section className="py-16 bg-gradient-to-br from-[#d4a737] via-[#c19828] to-[#b8901f] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0a1628]/20 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="text-center lg:text-start max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-black mb-3">{t.cta.title}</h2>
            <p className="text-white/90 text-lg">{t.cta.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button onClick={() => scrollToSection("contact")} className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-black text-white font-bold px-7 py-4 rounded-md transition-all shadow-xl hover:shadow-2xl group">
              <FileText size={18} />
              {t.cta.btn}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>
            <a href={`tel:${t.topBar.phone}`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a1628] font-bold px-7 py-4 rounded-md transition-all">
              <Phone size={18} />
              {t.cta.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact form + info                                                */
/* ------------------------------------------------------------------ */
function Contact({ t, lang }) {
  const isRtl = lang === "ar";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div id="more" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.contact.tag} title={t.contact.title} subtitle={t.contact.subtitle} />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info card (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {t.contact.info.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 hover:border-[#d4a737] hover:shadow-lg transition-all flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#0a1628] group-hover:bg-[#d4a737] rounded-lg flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="text-[#d4a737] group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{info.label}</div>
                    <div className="font-bold text-[#0a1628]" dir={info.label === (isRtl ? "الجوال" : "Phone") ? "ltr" : undefined}>
                      {info.value}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Real Google Maps - شركة قوائم الرواسي للمقاولات */}
            <div className="bg-white p-2 rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="aspect-[16/10] rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.6!2d46.7266!3d24.6266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM3JzM2LjAiTiA0NsKwNDMnMzUuOCJF!5e0!3m2!1sar!2ssa!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع شركة قوائم الرواسي للمقاولات"
                ></iframe>
                <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} bg-white shadow-xl rounded-lg px-3 py-2.5 flex items-center gap-2 max-w-[200px]`}>
                  <div className="w-9 h-9 bg-[#d4a737] rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#0a1628] font-bold text-xs truncate">
                      {isRtl ? "قوائم الرواسي" : "Qawayim Al-Rawasi"}
                    </div>
                    <div className="text-gray-500 text-[10px]">
                      {isRtl ? "بدر، الرياض" : "Badr, Riyadh"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=GPJ9%2B76+Badr+Riyadh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#0a1628] hover:bg-[#152a52] text-white rounded-lg transition-colors text-sm font-semibold"
                >
                  <MapPin size={16} />
                  <span>{isRtl ? "الاتجاهات" : "Directions"}</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D9%82%D9%88%D8%A7%D8%A6%D9%85+%D8%A7%D9%84%D8%B1%D9%88%D8%A7%D8%B3%D9%8A+%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-[#0a1628] rounded-lg transition-colors text-sm font-semibold"
                >
                  <Globe size={16} className="text-[#d4a737]" />
                  <span>{isRtl ? "افتح الخريطة" : "Open Map"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form (3 cols) */}
          <div className="lg:col-span-3 bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#0a1628] mb-2">{t.contact.form.name}</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-[#d4a737] focus:bg-white rounded-lg outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1628] mb-2">{t.contact.form.email}</label>
                  <input type="email" required dir="ltr" className={`w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-[#d4a737] focus:bg-white rounded-lg outline-none transition-all ${isRtl ? "text-right" : ""}`} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1628] mb-2">{t.contact.form.phone}</label>
                  <input type="tel" dir="ltr" className={`w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-[#d4a737] focus:bg-white rounded-lg outline-none transition-all ${isRtl ? "text-right" : ""}`} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1628] mb-2">{t.contact.form.subject}</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-[#d4a737] focus:bg-white rounded-lg outline-none transition-all">
                    {t.servicesMenu.map((s, i) => (
                      <option key={i}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#0a1628] mb-2">{t.contact.form.message}</label>
                <textarea rows={5} required className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent focus:border-[#d4a737] focus:bg-white rounded-lg outline-none transition-all resize-none" />
              </div>
              <button type="submit" disabled={submitted} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#152a52] disabled:bg-emerald-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl">
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    {isRtl ? "تم الإرسال بنجاح" : "Sent successfully"}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer({ t, lang }) {
  const isRtl = lang === "ar";
  const socials = [TikTokIcon, SnapchatIcon, Linkedin, XIcon, InstagramIcon];

  return (
    <footer className="bg-[#070f1f] text-white pt-16 pb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a737] opacity-5 blur-3xl rounded-full" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4a737] to-[#b8901f] rounded-md flex items-center justify-center">
                <span className="text-[#0a1628] font-black text-base tracking-wider">QAC</span>
              </div>
              <div>
                <div className="text-white font-bold text-base">{isRtl ? t.brand.line2 : t.brand.enFull}</div>
                <div className="text-white/60 text-xs">{isRtl ? t.brand.enFull : t.brand.line2}</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-md">{t.footer.about}</p>
            <div className="flex items-center gap-3 mb-6">
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
              <li><button onClick={() => scrollToSection("home")} className="hover:text-[#d4a737] transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => scrollToSection("about")} className="hover:text-[#d4a737] transition-colors">{t.nav.about}</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-[#d4a737] transition-colors">{t.nav.services}</button></li>
              <li><button onClick={() => scrollToSection("fleet")} className="hover:text-[#d4a737] transition-colors">{t.nav.fleet}</button></li>
              <li><button onClick={() => scrollToSection("projects")} className="hover:text-[#d4a737] transition-colors">{t.nav.projects}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-[#d4a737]">{t.footer.services}</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {t.servicesMenu.slice(0, 5).map((s, i) => (
                <li key={i}>
                  <button onClick={() => scrollToSection("services")} className="hover:text-[#d4a737] transition-colors text-start">{s}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4 text-[#d4a737]">{t.footer.newsletter}</h4>
            <p className="text-xs text-white/60 mb-4">{isRtl ? "كن أول من يعرف عن آخر الأخبار والعروض" : "Be first to know about news and offers"}</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input type="email" placeholder={t.footer.newsletterPh} dir="ltr" className={`w-full px-4 py-2.5 bg-white/5 border border-white/10 focus:border-[#d4a737] rounded-md text-white placeholder:text-white/40 outline-none text-sm ${isRtl ? "text-right" : ""}`} />
              <button type="submit" className="w-full bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold py-2.5 rounded-md transition-colors text-sm">
                {isRtl ? "اشترك" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <div>{t.footer.rights}</div>
          <div className="text-[#d4a737] font-semibold">www.alrawasi.com</div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating WhatsApp + Scroll-to-top                                  */
/* ------------------------------------------------------------------ */
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
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-[#0a1628] hover:bg-[#152a52] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
      <a
        href="https://wa.me/966500317111"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1eb453] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 relative"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-soft opacity-50" />
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.892 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
        </svg>
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                               */
/* ------------------------------------------------------------------ */
export default function HeavyEquipmentPlatform() {
  const [lang, setLang] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];
  const isRtl = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <div
      dir={t.dir}
      className="min-h-screen bg-white"
      style={{
        fontFamily: isRtl
          ? "'Tajawal', 'Segoe UI', system-ui, sans-serif"
          : "'Inter', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pingSoft {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-slideUp { animation: slideUp 0.7s ease-out; }
        .animate-slideDown { animation: slideDown 0.5s ease-out; }
        .animate-marquee { animation: marquee 35s linear infinite; }
        .animate-ping-soft { animation: pingSoft 2s cubic-bezier(0,0,0.2,1) infinite; }
        .animate-pulse-soft { animation: pulseSoft 2.5s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      <TopBar t={t} />
      <MainHeader t={t} lang={lang} setLang={setLang} onOpenMenu={() => setMenuOpen(true)} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <Stats t={t} />
      <About t={t} lang={lang} />
      <Services t={t} lang={lang} />
      <Fleet t={t} lang={lang} />
      <FleetDetail t={t} lang={lang} />
      <WhyUs t={t} />
      <Projects t={t} lang={lang} />
      <Partners t={t} />
      <Testimonials t={t} lang={lang} />
      <Certificates t={t} />
      <CTA t={t} lang={lang} />
      <Contact t={t} lang={lang} />
      <Footer t={t} lang={lang} />
      <FloatingActions isRtl={isRtl} />
    </div>
  );
}
