import React from "react";
import { Sparkles } from "lucide-react";

// Simple page header for inner pages
export default function PageHeader({ title, subtitle, tag, bgImage }) {
  return (
    <section className="relative bg-[#0a1628] text-white overflow-hidden h-[320px] lg:h-[380px] flex items-center">
      {bgImage && (
        <div className="absolute inset-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-[#0a1628]/60" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #d4a737 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        {tag && (
          <div className="inline-flex items-center gap-2 bg-[#d4a737]/15 border border-[#d4a737]/40 text-[#d4a737] text-xs font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <Sparkles size={12} />
            {tag}
          </div>
        )}
        <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-300 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
