import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ArrowLeft, ArrowRight, Truck, Hammer, Construction, Building2, FileText } from "lucide-react";
import { IMG } from "../data/translations.js";
import { SafeImg } from "../components/Shared.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Services() {
  const { t, isRtl } = useOutletContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const icons = [Truck, Hammer, Construction, Building2, Hammer, Construction];

  return (
    <>
      <PageHeader title={t.services.pageTitle} subtitle={t.services.pageSubtitle} tag={t.services.tag} bgImage={IMG.bulldozer} />

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.items.map((item, i) => {
              const Icon = icons[i] || Truck;
              return (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
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
                    <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#d4a737] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">{item.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-[#d4a737] hover:text-[#b8901f] text-sm font-bold transition-colors group/btn">
                      {t.services.readMore}
                      <Arrow size={14} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-gradient-to-br from-[#0a1628] to-[#152a52] rounded-2xl p-10 lg:p-14 text-white">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">{t.cta.title}</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-8 py-4 rounded-md transition-all shadow-xl group">
              <FileText size={18} />
              {t.cta.btn}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
