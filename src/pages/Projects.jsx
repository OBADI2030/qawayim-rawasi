import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { IMG } from "../data/translations.js";
import { SafeImg } from "../components/Shared.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Projects() {
  const { t, isRtl } = useOutletContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader title={t.projects.pageTitle} subtitle={t.projects.pageSubtitle} tag={t.projects.tag} bgImage={IMG.city} />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.list.map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#d4a737] overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <SafeImg src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#d4a737]/90 text-white text-[11px] font-bold rounded-full backdrop-blur-sm">{p.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{p.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#d4a737] text-xs font-semibold mb-2">
                    <Calendar size={12} />
                    <span>{isRtl ? "رؤية 2030" : "Vision 2030"}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 text-[#d4a737] hover:text-[#b8901f] text-sm font-bold transition-colors group/btn">
                    {t.projects.viewProject}
                    <Arrow size={14} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
