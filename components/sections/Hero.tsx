"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const children = contentRef.current?.querySelectorAll("[data-animate]");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="the-pen"
      className="relative min-h-[100vh] flex flex-col justify-end border-b-hairline overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-product.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video-final.mp4" type="video/mp4" />
        </video>
        <Image
          src="/hero-product.jpg"
          alt="DUE║MIX product"
          fill
          className="object-cover -z-10"
          priority
        />
      </div>

      {/* Gradient overlay — dark at bottom for legibility */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,8,0.08) 0%, rgba(10,10,8,0.15) 40%, rgba(10,10,8,0.75) 75%, rgba(10,10,8,0.92) 100%)",
        }}
      />

      {/* Chamber callout badges */}
      <div className="absolute top-[30%] right-8 lg:right-14 z-20 flex flex-col gap-3">
        <div className="bg-[#F5F4EF]/88 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg max-w-[128px]">
          <p className="text-[10px] font-light tracking-wider uppercase text-[#8A8A80] mb-1">Chamber I</p>
          <p className="text-[13px] font-medium text-[#0A0A08]">Diluent</p>
          <p className="text-[11px] text-[#8A8A80] mt-0.5">Sterile solution</p>
        </div>
        <div className="bg-[#F5F4EF]/88 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg max-w-[128px]">
          <p className="text-[10px] font-light tracking-wider uppercase text-[#8A8A80] mb-1">Chamber II</p>
          <p className="text-[13px] font-medium text-[#0A0A08]">Peptide</p>
          <p className="text-[11px] text-[#8A8A80] mt-0.5">Lyophilised powder</p>
        </div>
      </div>

      {/* Copy — bottom left over gradient */}
      <div ref={contentRef} className="relative z-20 px-8 lg:px-16 pb-16 pt-40 max-w-4xl">
        <p
          data-animate
          className="text-[11px] font-light tracking-[0.3em] uppercase text-[#C8C5B8] mb-5 opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          Introducing DUE║MIX™ Technology
        </p>

        <h1
          data-animate
          className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.05] text-[#F5F4EF] mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          Two chambers.
          <br />
          <em className="italic text-[#C8C5B8]">One perfect dose.</em>
        </h1>

        <p
          data-animate
          className="text-[15px] font-light leading-relaxed text-[#A8A5A0] max-w-lg mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-300"
        >
          Lyophilised peptide and diluent, hermetically separated — reconstituted
          only at the moment of injection. Maximum potency. Every time.
        </p>

        <div
          data-animate
          className="flex flex-wrap gap-3 mb-14 opacity-0 translate-y-8 transition-all duration-700 delay-400"
        >
          <a
            href="#product"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-light tracking-wide bg-[#F5F4EF] text-[#0A0A08] hover:bg-white transition-colors duration-200"
          >
            Reserve yours — £249
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-light tracking-wide border border-white/25 text-[#F5F4EF] hover:border-white/50 transition-colors duration-200"
          >
            How it works →
          </a>
        </div>

        <div
          data-animate
          className="flex gap-10 pt-8 border-t border-white/15 opacity-0 translate-y-8 transition-all duration-700 delay-500"
        >
          {[
            { val: "99%", label: "Purity retained" },
            { val: "3yr", label: "Pen lifespan" },
            { val: "±1u", label: "Dose precision" },
            { val: "98%", label: "Less waste" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="font-serif text-3xl font-light text-[#F5F4EF]">{val}</p>
              <p className="text-[11px] font-light tracking-wide text-[#8A8A80] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
        <p className="text-[10px] font-light tracking-wider uppercase text-[#5A5A52]">
          For research use only · Not for human consumption
        </p>
      </div>
    </section>
  );
}
