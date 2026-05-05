import React from "react";
import { useOutletContext } from "react-router-dom";
import { Briefcase, CheckCircle2, Shield, Award } from "lucide-react";
import { IMG } from "../data/translations.js";
import PageHeader from "../components/PageHeader.jsx";

export default function Certificates() {
  const { t, isRtl } = useOutletContext();
  const icons = [Briefcase, CheckCircle2, Shield, Award];
  const colorMap = {
    blue: "bg-blue-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
  };

  return (
    <>
      <PageHeader title={t.certs.pageTitle} subtitle={t.certs.pageSubtitle} tag={t.certs.tag} bgImage={IMG.blueprint} />

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-3">{t.certs.title}</h2>
            <p className="text-gray-600">{t.certs.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.certs.items.map((c, i) => {
              const Icon = icons[i] || Award;
              return (
                <div key={i} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-[#d4a737] rounded-2xl p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className={`w-20 h-20 ${colorMap[c.color] || "bg-blue-500"} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-[#0a1628] mb-2 text-lg">{c.title}</h4>
                  <div className="text-sm font-mono text-gray-500 bg-gray-100 inline-block px-3 py-1 rounded-md mb-3">{c.number}</div>
                  <p className="text-xs text-gray-600 mt-2">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Trust banner */}
          <div className="mt-16 bg-gradient-to-br from-[#0a1628] to-[#152a52] rounded-2xl p-10 text-center text-white">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Shield className="text-[#d4a737]" size={48} />
            </div>
            <h3 className="text-2xl lg:text-3xl font-black mb-3">
              {isRtl ? "موثوقون ومرخصون" : "Trusted and Licensed"}
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              {isRtl
                ? "شركة قوائم الرواسي للمقاولات شركة سعودية معتمدة بكل التراخيص الرسمية المطلوبة لممارسة أعمال المقاولات في المملكة العربية السعودية."
                : "Qawayim Al-Rawasi Contracting Co. is a Saudi company with all official licenses required to practice contracting in Saudi Arabia."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
