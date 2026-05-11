import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ArrowLeft, ArrowRight, Target, Sparkles, Award, TrendingUp } from "lucide-react";
import { IMG } from "../data/translations.js";
import { SafeImg } from "../components/Shared.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function About() {
  const { t, isRtl } = useOutletContext();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const iconMap = [Target, Sparkles, Award];

  return (
    <>
      <PageHeader title={t.about.pageTitle} subtitle={t.about.pageSubtitle} tag={t.about.tag} bgImage={IMG.workers} />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                <div className="col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-2xl">
                  <SafeImg src={IMG.workers} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                  <SafeImg src={IMG.crane} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                  <SafeImg src={IMG.aerial} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-7 row-span-2 rounded-2xl overflow-hidden shadow-xl">
                  <SafeImg src={IMG.bulldozer} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`absolute -bottom-6 ${isRtl ? "-left-6" : "-right-6"} bg-[#d4a737] text-white p-5 rounded-xl shadow-2xl flex items-center gap-3 z-10`}>
                <TrendingUp size={36} />
                <div>
                  <div className="text-3xl font-black leading-none">15+</div>
                  <div className="text-xs font-medium mt-1 opacity-90">{isRtl ? "سنوات خبرة" : "Years"}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-5">{t.about.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{t.about.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t.about.p2}</p>

              <div className="space-y-4 mb-8">
                {t.about.points.map((p, i) => {
                  const Icon = iconMap[i];
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

              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#152a52] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
                {t.about.cta}
                <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us section */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-3">{t.why.title}</h2>
            <p className="text-gray-600">{t.why.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why.items.map((item, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#d4a737] hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-[#0a1628] rounded-xl flex items-center justify-center mb-5">
                  <Award className="text-[#d4a737]" size={26} />
                </div>
                <h4 className="text-lg font-bold text-[#0a1628] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
