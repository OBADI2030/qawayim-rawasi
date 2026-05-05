import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Globe } from "lucide-react";
import { IMG } from "../data/translations.js";
import PageHeader from "../components/PageHeader.jsx";

export default function Contact() {
  const { t, isRtl } = useOutletContext();
  const [submitted, setSubmitted] = useState(false);
  const icons = [MapPin, Phone, Mail, Clock];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <PageHeader title={t.contact.pageTitle} subtitle={t.contact.pageSubtitle} tag={t.contact.tag} bgImage={IMG.aerial} />

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {t.contact.info.map((info, i) => {
                const Icon = icons[i] || MapPin;
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

              {/* Real Google Maps */}
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
                    title="موقع شركة قوائم الرواسي"
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

            {/* Form */}
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
                      {t.services.items.map((s, i) => (
                        <option key={i}>{s.title}</option>
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
                      {t.contact.form.success}
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
    </>
  );
}
