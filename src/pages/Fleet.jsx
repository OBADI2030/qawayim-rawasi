import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { IMG } from "../data/translations.js";
import { SafeImg } from "../components/Shared.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Fleet() {
  const { t, isRtl } = useOutletContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader title={t.fleet.pageTitle} subtitle={t.fleet.pageSubtitle} tag={t.fleet.tag} bgImage={IMG.excavator} />

      {/* Quick fleet grid */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {t.fleet.items.map((item, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <SafeImg src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <div className="text-[#d4a737] font-black text-2xl leading-none">{item.count}</div>
                  <div className="font-bold text-sm mt-1">{item.name}</div>
                  <div className="text-[10px] text-white/70 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed fleet section */}
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-1 bg-[#d4a737] rounded mb-4" />
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-3">
              {isRtl ? "تفاصيل المعدات" : "Equipment Details"}
            </h2>
            <p className="text-gray-600">{isRtl ? "تعرف على معداتنا بالتفصيل" : "Learn about our equipment in detail"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.fleet.items.map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-[#d4a737] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
                <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden shrink-0">
                  <SafeImg src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} bg-[#d4a737] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg`}>
                    {item.count}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#d4a737] transition-colors">{item.name}</h3>

                  {item.features && (
                    <div className="mb-4">
                      <div className="text-[11px] font-bold text-[#d4a737] uppercase tracking-wider mb-2">{t.fleet.featuresTitle}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.features.map((feature, fi) => (
                          <span key={fi} className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">{feature}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.uses && (
                    <div className="mb-4 flex-1">
                      <div className="text-[11px] font-bold text-[#d4a737] uppercase tracking-wider mb-1.5">{t.fleet.usesTitle}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.uses}</p>
                    </div>
                  )}

                  <Link to="/contact" className="inline-flex items-center gap-1 text-[#d4a737] hover:text-[#b8901f] text-sm font-bold transition-colors group/btn">
                    {t.fleet.cta}
                    <Arrow size={14} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl group">
              <FileText size={18} />
              {t.fleet.cta}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
