import React from "react";
import { Link, useParams, useOutletContext, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, Phone, Star } from "lucide-react";
import { SafeImg } from "../components/Shared.jsx";

const SERVICE_IDS = [
  "heavy-equipment-rental",
  "excavation-hauling",
  "paving-asphalt",
  "concrete-projects",
  "demolition-projects",
  "curbs-interlock",
];

const SERVICE_FEATURES_AR = [
  ["أسطول حديث ومتنوع", "صيانة دورية للمعدات", "مشغلين محترفين", "تأمين شامل", "أسعار تنافسية", "خدمة 24/7"],
  ["معدات حفر متطورة", "فريق هندسي متخصص", "دراسة الموقع", "السلامة العامة", "إنجاز سريع", "تقارير دورية"],
  ["مواد عالية الجودة", "معدات أسفلت حديثة", "خبرة في الطرق السريعة", "ضمان الجودة", "مطابقة المواصفات السعودية", "تسليم في الوقت"],
  ["خرسانة بمواصفات عالية", "أساسات وأسقف", "خرسانة مسلحة", "مهندسون متخصصون", "اختبارات الجودة", "تصاميم متعددة"],
  ["معدات هدم متخصصة", "خطط سلامة محكمة", "إدارة المخلفات", "تأمين شامل", "خبرة في المباني الكبيرة", "تنظيف الموقع"],
  ["تركيب احترافي", "تصاميم متنوعة", "مواد مستوردة", "ضمان طويل المدى", "أرصفة وممرات", "أعمال تجميلية"],
];

const SERVICE_FEATURES_EN = [
  ["Modern diverse fleet", "Regular maintenance", "Professional operators", "Full insurance", "Competitive pricing", "24/7 service"],
  ["Advanced excavation equipment", "Specialized engineering team", "Site survey", "Public safety", "Fast completion", "Regular reports"],
  ["High-quality materials", "Modern asphalt equipment", "Highway expertise", "Quality assurance", "Saudi standards compliance", "On-time delivery"],
  ["High-spec concrete", "Foundations & ceilings", "Reinforced concrete", "Specialized engineers", "Quality testing", "Multiple designs"],
  ["Specialized demolition equipment", "Strict safety plans", "Waste management", "Full insurance", "Large-building expertise", "Site cleanup"],
  ["Professional installation", "Various designs", "Imported materials", "Long-term warranty", "Sidewalks & walkways", "Aesthetic work"],
];

const STATS_AR = [
  { label: "سنوات خبرة", value: "+15" },
  { label: "مشروع منجز", value: "+200" },
  { label: "دعم متواصل", value: "24/7" },
  { label: "ضمان الجودة", value: "100%" },
];

const STATS_EN = [
  { label: "Years Experience", value: "+15" },
  { label: "Completed Projects", value: "+200" },
  { label: "Continuous Support", value: "24/7" },
  { label: "Quality Guarantee", value: "100%" },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const { t, isRtl } = useOutletContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  const serviceIndex = SERVICE_IDS.indexOf(serviceId);

  if (serviceIndex === -1) {
    return <Navigate to="/services" replace />;
  }

  const service = t.services.items[serviceIndex];
  const features = isRtl ? SERVICE_FEATURES_AR[serviceIndex] : SERVICE_FEATURES_EN[serviceIndex];
  const stats = isRtl ? STATS_AR : STATS_EN;

  const otherServices = t.services.items
    .map((item, i) => ({ ...item, id: SERVICE_IDS[i], index: i }))
    .filter((_, i) => i !== serviceIndex)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] text-white overflow-hidden">
        <div className="absolute inset-0">
          <SafeImg src={service.img} alt={service.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-[#0a1628]/40" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-[#d4a737] mb-6 transition-colors text-sm font-semibold">
            <BackArrow size={16} />
            {isRtl ? "رجوع للخدمات" : "Back to Services"}
          </Link>
          <div className="inline-block bg-[#d4a737]/20 border border-[#d4a737]/30 text-[#d4a737] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            {t.services.tag}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">{service.title}</h1>
          <p className="text-white/85 text-lg lg:text-xl max-w-3xl leading-relaxed mb-8">{service.desc}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-xl group">
              <FileText size={18} />
              {t.cta.btn}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${t.topBar.phone}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-7 py-3.5 rounded-md transition-all">
              <Phone size={18} />
              {t.cta.call}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#152a52] py-12 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto bg-[#d4a737]/20 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle2 className="text-[#d4a737]" size={26} />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-[#d4a737]/10 text-[#d4a737] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                {isRtl ? "ما يميزنا" : "What sets us apart"}
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-5 leading-tight">
                {isRtl ? "خدمة احترافية بمواصفات عالمية" : "Professional Service, World-Class Standards"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isRtl
                  ? `نقدم لكم خدمة "${service.title}" بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يعمل على ضمان تنفيذ مشروعكم بكفاءة عالية وفي الوقت المحدد، باستخدام أحدث المعدات والتقنيات في المملكة العربية السعودية.`
                  : `We provide our "${service.title}" service with the highest quality and professionalism standards. Our specialized team ensures your project is executed efficiently and on time, using the latest equipment and technologies in Saudi Arabia.`}
              </p>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="shrink-0 w-6 h-6 bg-[#d4a737]/10 group-hover:bg-[#d4a737] rounded-full flex items-center justify-center mt-0.5 transition-colors">
                      <CheckCircle2 className="text-[#d4a737] group-hover:text-white" size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <SafeImg src={service.img} alt={service.title} className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#d4a737]/10 text-[#d4a737] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              {t.why.tag}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-3">
              {isRtl ? "لماذا نحن الخيار الأفضل؟" : "Why Choose Us?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.why.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why.items.slice(0, 6).map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-[#d4a737]/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="text-[#d4a737]" size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#0a1628] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#d4a737]/10 text-[#d4a737] text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              {isRtl ? "خدمات أخرى" : "Other Services"}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628]">
              {isRtl ? "اكتشف خدماتنا الأخرى" : "Discover Our Other Services"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other, i) => (
              <Link
                key={i}
                to={`/services/${other.id}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImg src={other.img} alt={other.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#d4a737] transition-colors">{other.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{other.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#d4a737] text-sm font-bold group-hover:gap-2 transition-all">
                    {t.services.readMore}
                    <Arrow size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#152a52] py-16 lg:py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">{t.cta.title}</h2>
          <p className="text-white/80 text-lg mb-8">{t.cta.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-8 py-4 rounded-md transition-all shadow-xl group">
              <FileText size={18} />
              {t.cta.btn}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${t.topBar.phone}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-md transition-all">
              <Phone size={18} />
              {t.cta.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
