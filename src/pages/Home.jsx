import React, { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  Phone, Mail, MapPin, ArrowRight, ArrowLeft, FileText, Truck, Wrench, Users,
  Building2, Award, CheckCircle2, Star, Calendar, Clock, Shield, Zap, Hammer,
  Construction, PlayCircle, Quote, ChevronLeft, ChevronRight, Sparkles, Target,
  TrendingUp, Briefcase,
} from "lucide-react";
import { IMG } from "../data/translations.js";
import { SafeImg, SectionHeading, useReveal, Counter } from "../components/Shared.jsx";

// ====================================================================
//  HERO with slider
// ====================================================================
function Hero({ t, isRtl }) {
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const [idx, setIdx] = useState(0);
  const slides = [
    { tag: t.hero.tag, title: t.hero.title, subtitle: t.hero.subtitle, img: IMG.hero },
    { tag: t.hero.tag, title: t.hero.title, subtitle: t.hero.subtitle, img: IMG.hero2 },
    { tag: t.hero.tag, title: t.hero.title, subtitle: t.hero.subtitle, img: IMG.hero3 },
  ];

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative bg-[#0a1628] text-white overflow-hidden h-[680px] lg:h-[720px]">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <SafeImg src={s.img} alt="" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/30" />
        </div>
      ))}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#d4a737]/15 border border-[#d4a737]/40 text-[#d4a737] text-xs font-bold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <Star size={12} fill="#d4a737" />
            {slides[idx].tag}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 tracking-tight">{slides[idx].title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">{slides[idx].subtitle}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
              {t.hero.cta1}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-md transition-all">
              <PlayCircle size={18} />
              {t.hero.cta2}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#d4a737]/20 rounded-full flex items-center justify-center">
                <CheckCircle2 size={16} className="text-[#d4a737]" />
              </div>
              <span>{t.hero.since}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 bg-[#d4a737]/20 rounded-full flex items-center justify-center">
                <Shield size={16} className="text-[#d4a737]" />
              </div>
              <span>{t.hero.iso}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-12 bg-[#d4a737]" : "w-6 bg-white/30 hover:bg-white/50"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

// ====================================================================
//  Stats
// ====================================================================
function Stats({ t }) {
  const stats = [
    { value: 150, label: t.stats.projects, icon: CheckCircle2 },
    { value: 200, label: t.stats.equipment, icon: Truck },
    { value: 1000, label: t.stats.clients, icon: Users },
    { value: 15, label: t.stats.years, icon: Award },
  ];
  return (
    <section className="bg-gray-50 py-12 -mt-20 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100 overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="p-6 lg:p-8 text-center flex flex-col items-center gap-2 hover:bg-gray-50/50 transition-colors group">
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4a737]/10 to-[#d4a737]/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <s.icon className="text-[#d4a737]" size={24} />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-[#0a1628]"><Counter target={s.value} /></div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  About Preview
// ====================================================================
function AboutPreview({ t, isRtl }) {
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const [ref, visible] = useReveal();
  const iconMap = [Target, Sparkles, Award];

  return (
    <section ref={ref} className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
              <div className="col-span-7 row-span-4 rounded-2xl overflow-hidden shadow-2xl">
                <SafeImg src={IMG.workers} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                <SafeImg src={IMG.crane} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-5 row-span-3 rounded-2xl overflow-hidden shadow-xl">
                <SafeImg src={IMG.aerial} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="col-span-7 row-span-2 rounded-2xl overflow-hidden shadow-xl">
                <SafeImg src={IMG.bulldozer} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
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

          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="inline-flex items-center gap-2 bg-[#0a1628]/5 text-[#0a1628] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={12} />
              {t.about.tag}
            </div>
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

            <Link to="/about" className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#152a52] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
              {isRtl ? "اعرف المزيد عنا" : "Learn More About Us"}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  Services Preview
// ====================================================================
function ServicesPreview({ t, isRtl }) {
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const icons = [Truck, Hammer, Construction, Building2];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.services.tag} title={t.services.title} subtitle={t.services.subtitle} Sparkles={Sparkles} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.slice(0, 4).map((item, i) => {
            const Icon = icons[i];
            return (
              <Link to="/services" key={i} className="group bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <SafeImg src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#d4a737] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                    <Icon className="text-white" size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#d4a737] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <span className="text-[#d4a737] text-sm font-bold inline-flex items-center gap-1">
                    {t.services.readMore}
                    <Arrow size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#152a52] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
            {isRtl ? "كل خدماتنا" : "All Services"}
            <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  Fleet Preview
// ====================================================================
function FleetPreview({ t, isRtl }) {
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #0a1628 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.fleet.tag} title={t.fleet.title} subtitle={t.fleet.subtitle} Sparkles={Sparkles} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.fleet.items.slice(0, 6).map((item, i) => (
            <Link to="/fleet" key={i} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <SafeImg src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <div className="text-[#d4a737] font-black text-2xl leading-none">{item.count}</div>
                <div className="font-bold text-sm mt-1">{item.name}</div>
                <div className="text-[10px] text-white/70 mt-0.5">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/fleet" className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#152a52] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
            {isRtl ? "عرض كل المعدات" : "View All Equipment"}
            <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  Why Us
// ====================================================================
function WhyUs({ t }) {
  const icons = [Award, Truck, Users, Shield, Clock, Zap];
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a737] opacity-5 blur-3xl rounded-full" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.why.tag} title={t.why.title} subtitle={t.why.subtitle} Sparkles={Sparkles} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#d4a737] hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4a737]/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a1628] to-[#152a52] group-hover:from-[#d4a737] group-hover:to-[#b8901f] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-[#d4a737] group-hover:text-white transition-colors" size={26} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#d4a737] transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  Projects Preview
// ====================================================================
function ProjectsPreview({ t, isRtl }) {
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  return (
    <section className="relative py-20 bg-[#0a1628] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <SafeImg src={IMG.city} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0a1628]/85" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.projects.tag} title={t.projects.title} subtitle={t.projects.subtitle} light Sparkles={Sparkles} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.list.slice(0, 6).map((p, i) => (
            <Link to="/projects" key={i} className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
              <SafeImg src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="px-3 py-1 bg-[#d4a737]/90 text-white text-[11px] font-bold rounded-full inline-block self-start mb-2">{p.category}</span>
                <h3 className="text-white text-xl font-bold mb-3">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 bg-[#d4a737] hover:bg-[#b8901f] text-white font-bold px-7 py-3.5 rounded-md transition-all shadow-md hover:shadow-xl group">
            {isRtl ? "كل المشاريع" : "All Projects"}
            <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  Partners marquee
// ====================================================================
function Partners({ t }) {
  const logos = [...t.clients.partnerLogos, ...t.clients.partnerLogos];
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
        <SectionHeading tag={t.clients.partnersTag} title={t.clients.partnersTitle} subtitle={t.clients.partnersSubtitle} Sparkles={Sparkles} />
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
  );
}

// ====================================================================
//  Testimonials
// ====================================================================
function Testimonials({ t, isRtl }) {
  const [active, setActive] = useState(0);
  const items = t.clients.testimonials;
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <Quote size={200} className="text-[#d4a737]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading tag={t.clients.tag} title={t.clients.title} subtitle={t.clients.subtitle} Sparkles={Sparkles} />
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
            <button onClick={() => setActive((a) => (a - 1 + items.length) % items.length)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all flex items-center justify-center" aria-label="Previous">
              {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            {items.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all ${i === active ? "w-10 bg-[#d4a737]" : "w-2 bg-gray-300"}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
            <button onClick={() => setActive((a) => (a + 1) % items.length)} className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] transition-all flex items-center justify-center" aria-label="Next">
              {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  CTA Banner
// ====================================================================
function CTABanner({ t, isRtl }) {
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  return (
    <section className="py-16 bg-gradient-to-br from-[#d4a737] via-[#c19828] to-[#b8901f] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0a1628]/20 rounded-full blur-3xl" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
          <div className="text-center lg:text-start max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-black mb-3">{t.cta.title}</h2>
            <p className="text-white/90 text-lg">{t.cta.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-black text-white font-bold px-7 py-4 rounded-md transition-all shadow-xl hover:shadow-2xl group">
              <FileText size={18} />
              {t.cta.btn}
              <Arrow size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${t.topBar.phone}`} className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#0a1628] font-bold px-7 py-4 rounded-md transition-all">
              <Phone size={18} />
              {t.cta.call}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ====================================================================
//  HOME PAGE
// ====================================================================
export default function Home() {
  const { t, lang, isRtl } = useOutletContext();
  return (
    <>
      <Hero t={t} isRtl={isRtl} />
      <Stats t={t} />
      <AboutPreview t={t} isRtl={isRtl} />
      <ServicesPreview t={t} isRtl={isRtl} />
      <FleetPreview t={t} isRtl={isRtl} />
      <WhyUs t={t} />
      <ProjectsPreview t={t} isRtl={isRtl} />
      <Partners t={t} />
      <Testimonials t={t} isRtl={isRtl} />
      <CTABanner t={t} isRtl={isRtl} />
    </>
  );
}
