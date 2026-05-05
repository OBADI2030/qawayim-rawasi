import React, { useState, useEffect, useRef } from "react";

// ====================================================================
//  SafeImg with fallback
// ====================================================================
const FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#0a1628'/>
          <stop offset='100%' stop-color='#1a3060'/>
        </linearGradient>
      </defs>
      <rect width='800' height='600' fill='url(#g)'/>
      <text x='400' y='305' font-family='Arial' font-size='36' font-weight='bold' fill='#d4a737' text-anchor='middle'>QAC</text>
    </svg>
  `);

export const SafeImg = ({ src, alt, className, style }) => {
  const [errored, setErrored] = useState(false);
  return (
    <img
      src={errored ? FALLBACK_SVG : src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
      loading="lazy"
    />
  );
};

// ====================================================================
//  Reveal hook
// ====================================================================
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ====================================================================
//  Animated counter
// ====================================================================
export function Counter({ target, suffix = "+", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [visible, target, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ====================================================================
//  Section heading
// ====================================================================
export function SectionHeading({ tag, title, subtitle, light = false, Sparkles }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`text-center mb-12 max-w-2xl mx-auto transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 ${
          light ? "bg-[#d4a737]/15 text-[#d4a737]" : "bg-[#0a1628]/5 text-[#0a1628]"
        } text-xs font-bold px-4 py-1.5 rounded-full mb-4`}
      >
        {Sparkles && <Sparkles size={12} />}
        {tag}
      </div>
      <h2 className={`text-3xl lg:text-4xl font-black mb-3 ${light ? "text-white" : "text-[#0a1628]"}`}>
        {title}
      </h2>
      <p className={light ? "text-white/70" : "text-gray-600"}>{subtitle}</p>
    </div>
  );
}

// ====================================================================
//  Brand-style social icons
// ====================================================================
export const TikTokIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04Z" />
  </svg>
);

export const SnapchatIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.16 2c2.67 0 4.7 1.6 5.46 3.84.3.9.3 1.84.27 2.6 0 .1-.01.27-.02.46.34.18.7.13.99-.04.18-.1.42-.18.69-.18.27 0 .55.1.82.32.4.31.55.83.27 1.32-.27.5-1.07.84-1.62 1.12-.16.08-.4.18-.42.32-.04.18.18.42.32.6.62.85 1.6 1.66 2.86 2.04.27.08.42.27.42.55v.04c-.04.66-.96.92-1.84 1.06-.04.04-.06.18-.1.36-.05.18-.1.4-.18.6-.1.16-.27.18-.46.18-.18 0-.42-.04-.74-.13-.36-.08-.78-.18-1.32-.18-.32 0-.69.04-1.07.13-.74.18-1.39.78-2.04 1.34-.92.78-1.93 1.66-3.55 1.66-.04 0-.13-.04-.18-.04-.04 0-.13.04-.18.04-1.62 0-2.63-.88-3.55-1.66-.65-.55-1.3-1.16-2.04-1.34-.4-.1-.78-.13-1.07-.13-.55 0-.96.13-1.32.18-.27.04-.55.13-.74.13-.27 0-.42-.13-.46-.18-.1-.18-.13-.4-.18-.6-.04-.18-.06-.32-.1-.36-.88-.13-1.8-.4-1.84-1.06v-.04c0-.27.18-.46.42-.55 1.27-.4 2.24-1.2 2.86-2.04.13-.18.36-.42.32-.6-.04-.13-.27-.27-.42-.32-.55-.27-1.34-.62-1.62-1.12-.27-.5-.13-1.02.27-1.32.27-.22.55-.32.82-.32.27 0 .5.08.69.18.27.13.65.22.96.04-.01-.18-.01-.36-.04-.46-.01-.78-.04-1.71.27-2.6C7.46 3.6 9.5 2 12.16 2Z" />
  </svg>
);

export const XIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

export const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
