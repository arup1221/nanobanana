"use client";

import { useEffect, useRef } from "react";
import PenIllustration from "@/components/ui/PenIllustration";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    const children = leftRef.current?.querySelectorAll("[data-animate]");
    children?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="the-pen"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] border-b-hairline"
    >
      {/* Left — copy */}
      <div
        ref={leftRef}
        className="flex flex-col justify-center px-8 lg:px-16 py-20 border-r-hairline"
      >
        <p
          data-animate
          className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-100"
        >
          Introducing the NanoBana Pen
        </p>

        <h1
          data-animate
          className="font-serif text-[clamp(52px,7vw,88px)] font-light leading-[1.02] text-[#0A0A08] mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          Precision
          <br />
          lives in{" "}
          <em className="italic text-[#8A8A80]">
            two
            <br />
            chambers.
          </em>
        </h1>

        <p
          data-animate
          className="text-[15px] font-light leading-relaxed text-[#5A5A52] max-w-md mb-10 opacity-0 translate-y-8 transition-all duration-700 delay-300"
        >
          The world's first consumer-grade dual-chamber peptide pen. Lyophilised
          peptide powder and diluent, hermetically separated — reconstituted only
          at the moment of injection. Maximum potency. Every dose.
        </p>

        <div
          data-animate
          className="flex flex-wrap gap-3 opacity-0 translate-y-8 transition-all duration-700 delay-400"
        >
          <a href="#product" className="btn-pill btn-primary">
            Reserve yours — £249
          </a>
          <a href="#how-it-works" className="btn-pill btn-ghost">
            Watch how it works →
          </a>
        </div>

        <div
          data-animate
          className="flex gap-8 mt-16 pt-8 border-t-hairline opacity-0 translate-y-8 transition-all duration-700 delay-500"
        >
          {[
            { val: "99%", label: "Purity retained" },
            { val: "3yr", label: "Pen lifespan" },
            { val: "±1u", label: "Dose precision" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="font-serif text-3xl font-light text-[#0A0A08]">{val}</p>
              <p className="text-[11px] font-light tracking-wide text-[#8A8A80] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — pen illustration */}
      <div className="relative flex items-center justify-center bg-[#EDEAE2] min-h-[60vh] lg:min-h-0 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0A0A08 1px, transparent 1px), linear-gradient(90deg, #0A0A08 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating pen */}
        <div className="pen-float relative z-10">
          <PenIllustration className="h-[400px] lg:h-[520px] drop-shadow-2xl" />
        </div>

        {/* Callout badge — chamber A */}
        <div className="absolute right-8 top-[32%] bg-[#F5F4EF] border-hairline rounded-xl p-3 shadow-sm max-w-[130px]">
          <p className="text-[10px] font-light tracking-wider uppercase text-[#8A8A80] mb-1">
            Chamber A
          </p>
          <p className="text-[13px] font-medium text-[#0A0A08]">Diluent</p>
          <p className="text-[11px] text-[#8A8A80] mt-0.5">Sterile water solution</p>
        </div>

        {/* Callout badge — chamber B */}
        <div className="absolute right-8 top-[55%] bg-[#F5F4EF] border-hairline rounded-xl p-3 shadow-sm max-w-[130px]">
          <p className="text-[10px] font-light tracking-wider uppercase text-[#8A8A80] mb-1">
            Chamber B
          </p>
          <p className="text-[13px] font-medium text-[#0A0A08]">Peptide</p>
          <p className="text-[11px] text-[#8A8A80] mt-0.5">Lyophilised powder</p>
        </div>

        {/* Research use disclaimer */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-[10px] font-light tracking-wider uppercase text-[#B8B5A8]">
            For research use only · Not for human consumption
          </p>
        </div>
      </div>
    </section>
  );
}
