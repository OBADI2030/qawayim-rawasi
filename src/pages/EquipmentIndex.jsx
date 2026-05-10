import React, { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import {
  Truck, Construction, Forklift, Bus, Droplet,
  Zap, Lightbulb, Search, ArrowLeft, ArrowRight,
} from "lucide-react";

// قائمة المعدات الكاملة
const equipmentList = [
  { id: 1,  ar: "شيولات",         en: "Wheel Loaders",      icon: "🏗️" },
  { id: 2,  ar: "بلدوزرات",       en: "Bulldozers",         icon: "🚜" },
  { id: 3,  ar: "حفارات",         en: "Excavators",         icon: "⚙️" },
  { id: 4,  ar: "جريدرات",        en: "Graders",            icon: "🛣️" },
  { id: 5,  ar: "رصاصات",         en: "Bullets",            icon: "🔧" },
  { id: 6,  ar: "رافعات شوكية",   en: "Forklifts",          icon: "🏭" },
  { id: 7,  ar: "رافعات وكرينات", en: "Cranes",             icon: "🏗️" },
  { id: 8,  ar: "شاحنات وقلابات", en: "Trucks & Dump Trucks", icon: "🚛" },
  { id: 9,  ar: "دينات",          en: "Diesels",            icon: "🚚" },
  { id: 10, ar: "باصات النقل",    en: "Transport Buses",    icon: "🚌" },
  { id: 11, ar: "فرادات أسفلت",   en: "Asphalt Spreaders",  icon: "🛤️" },
  { id: 12, ar: "قشاطات اسفلت",   en: "Asphalt Scrapers",   icon: "🔨" },
  { id: 13, ar: "وايتات ماء",     en: "Water Tankers",      icon: "💧" },
  { id: 14, ar: "ميني إكسفيتور",  en: "Mini Excavators",    icon: "⛏️" },
  { id: 15, ar: "بوم ترك",        en: "Boom Trucks",        icon: "🏗️" },
  { id: 16, ar: "مولدات كهرباء",  en: "Electric Generators", icon: "⚡" },
  { id: 17, ar: "وايتات ديزل",    en: "Diesel Tankers",     icon: "⛽" },
  { id: 18, ar: "جولة لايت",      en: "Tour Light",         icon: "💡" },
  { id: 19, ar: "عرجاء",          en: "Limp Loaders",       icon: "🔩" },
  { id: 20, ar: "بوبكات",         en: "Bobcats",            icon: "🚧" },
  { id: 21, ar: "رافعات تلسكوب",  en: "Telescopic Cranes",  icon: "🏗️" },
];

export default function EquipmentIndex() {
  const { t, lang, isRtl } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");

  // فلترة المعدات حسب البحث
  const filteredEquipment = equipmentList.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.ar.toLowerCase().includes(term) ||
      item.en.toLowerCase().includes(term)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#152a52] text-white py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a737] opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a737] opacity-5 blur-3xl rounded-full" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#d4a737]/15 text-[#d4a737] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
            {isRtl ? "فهرس شامل" : "Complete Index"}
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">
            {isRtl ? "فهرس المعدات" : "Equipment Index"}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {isRtl
              ? "استعرض جميع معداتنا الثقيلة المتوفرة للتأجير"
              : "Browse our complete fleet of heavy equipment available for rent"}
          </p>

          {/* عداد المعدات */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-3xl font-black text-[#d4a737]">{equipmentList.length}+</span>
            <span className="text-white/80 text-sm">
              {isRtl ? "نوع من المعدات" : "Types of Equipment"}
            </span>
          </div>
        </div>
      </section>

      {/* محتوى الصفحة */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        {/* خانة البحث */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search
              size={20}
              className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${isRtl ? "right-4" : "left-4"}`}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isRtl ? "ابحث عن معدة..." : "Search equipment..."}
              className={`w-full py-3 ${isRtl ? "pr-12 pl-4 text-right" : "pl-12 pr-4 text-left"} bg-white border-2 border-gray-200 focus:border-[#d4a737] rounded-xl outline-none transition-colors shadow-sm text-[15px]`}
            />
          </div>
        </div>

        {/* شبكة البطاقات */}
        {filteredEquipment.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredEquipment.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#d4a737] transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center"
              >
                {/* رقم */}
                <div className="text-xs font-bold text-gray-400 mb-2">
                  #{item.id.toString().padStart(2, "0")}
                </div>

                {/* الأيقونة */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* الأسماء */}
                <div className="space-y-1">
                  <h3 className="text-[#0a1628] font-bold text-base leading-tight">
                    {isRtl ? item.ar : item.en}
                  </h3>
                  <p className="text-gray-500 text-xs leading-tight" dir={isRtl ? "ltr" : "rtl"}>
                    {isRtl ? item.en : item.ar}
                  </p>
                </div>

                {/* خط ذهبي صغير */}
                <div className="mt-4 h-0.5 w-8 bg-[#d4a737] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        ) : (
          // رسالة عدم وجود نتائج
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">
              {isRtl ? "لا توجد نتائج للبحث" : "No results found"}
            </p>
          </div>
        )}

        {/* CTA للأسطول والتواصل */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link
            to="/fleet"
            className="group bg-gradient-to-br from-[#0a1628] to-[#152a52] text-white p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">
              {isRtl ? "🚜 شاهد الأسطول" : "🚜 View Our Fleet"}
            </h3>
            <p className="text-white/70 text-sm mb-3">
              {isRtl
                ? "تصفح صور وتفاصيل كل معدة"
                : "Browse photos and details of each piece"}
            </p>
            <span className="inline-flex items-center gap-2 text-[#d4a737] font-bold text-sm group-hover:gap-3 transition-all">
              {isRtl ? "اذهب للأسطول" : "Go to Fleet"}
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </span>
          </Link>

          <Link
            to="/contact"
            className="group bg-gradient-to-br from-[#d4a737] to-[#b8901f] text-white p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">
              {isRtl ? "📞 طلب تسعيرة" : "📞 Request a Quote"}
            </h3>
            <p className="text-white/90 text-sm mb-3">
              {isRtl
                ? "تواصل معنا للحصول على عرض سعر"
                : "Contact us for pricing details"}
            </p>
            <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
              {isRtl ? "تواصل الآن" : "Contact Now"}
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
