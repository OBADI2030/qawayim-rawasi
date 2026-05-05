import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { IMG } from "../data/translations.js";
import { SafeImg } from "../components/Shared.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Clients() {
  const { t, isRtl } = useOutletContext();
  const [active, setActive] = useState(0);
  const items = t.clients.testimonials;
  const logos = [...t.clients.partnerLogos, ...t.clients.partnerLogos];

  return (
    <>
      <PageHeader title={t.clients.pageTitle} subtitle={t.clients.pageSubtitle} tag={t.clients.tag} bgImage={IMG.workers} />

      {/* Partners marquee */}
      <section className="bg-white py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-3">{t.clients.partnersTitle}</h2>
            <p className="text-gray-600">{t.clients.partnersSubtitle}</p>
          </div>
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

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10">
          <Quote size={200} className="text-[#d4a737]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-3">{t.clients.title}</h2>
            <p className="text-gray-600">{t.clients.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative">
              <Quote className="absolute top-6 right-6 text-[#d4a737]/20" size={64} />
              <div className="relative">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(items[active].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#d4a737]" fill="#d4a737" />
                  ))}
                </div>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">"{items[active].text}"</p>
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
              <button onClick={() => setActive((a) => (a - 1 + items.length) % items.length)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all flex items-center justify-center">
                {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              </button>
              {items.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-[#d4a737]" : "w-2 bg-gray-300"}`} />
              ))}
              <button onClick={() => setActive((a) => (a + 1) % items.length)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all flex items-center justify-center">
                {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
