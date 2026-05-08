import React from "react";
import { Link, useParams, useOutletContext, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText, Phone } from "lucide-react";

const SERVICE_IDS = [
  "heavy-equipment-rental",
  "excavation-hauling",
  "paving-asphalt",
  "concrete-projects",
  "demolition-projects",
  "curbs-interlock",
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const context = useOutletContext();
  const t = context?.t;
  const isRtl = context?.isRtl;
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  const serviceIndex = SERVICE_IDS.indexOf(serviceId);

  if (serviceIndex === -1) {
    return <Navigate to="/services" replace />;
  }

  if (!t || !t.services || !t.services.items || !t.services.items[serviceIndex]) {
    return <Navigate to="/services" replace />;
  }

  const service = t.services.items[serviceIndex];

  return (
    <>
      <section className="relative bg-[#0a1628] text-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-[#d4a737] mb-6 transition-colors text-sm font-semibold">
            <BackArrow size={16} />
            {isRtl ? "رجوع للخدمات" : "Back to Services"}
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">{service.title}</h1>
          <p className="text-white/85 text-lg lg:text-xl max-w-3xl mb-8">{service.desc}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-7 py-3.5 rounded-md transition-all">
              <FileText size={18} />
              {isRtl ? "احصل على عرض سعر" : "Get a Quote"}
              <Arrow size={18} />
            </Link>
            <a href="tel:+966500317111" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3.5 rounded-md transition-all">
              <Phone size={18} />
              {isRtl ? "اتصل بنا" : "Call Us"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-5">
              {isRtl ? "خدمة احترافية بمواصفات عالمية" : "Professional Service"}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {isRtl
                ? `نقدم لكم خدمة "${service.title}" بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يعمل على ضمان تنفيذ مشروعكم بكفاءة عالية وفي الوقت المحدد.`
                : `We provide our "${service.title}" service with the highest quality and professionalism standards.`}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0a1628] to-[#152a52] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">
            {isRtl ? "جاهزون لبدء مشروعك؟" : "Ready to start?"}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {isRtl ? "تواصل معنا للحصول على عرض سعر مخصص" : "Contact us for a customized quote"}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-8 py-4 rounded-md transition-all">
            <FileText size={18} />
            {isRtl ? "احصل على عرض سعر" : "Get a Quote"}
          </Link>
        </div>
      </section>
    </>
  );
}
