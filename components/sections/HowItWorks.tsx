"use client";

import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Load the cartridge",
    body: "Snap your NanoBana dual-chamber cartridge into the reusable pen body. No syringes. No mixing vessels. No contamination risk. Simply click and it locks.",
    detail: "Compatible with standard 3mL dual-chamber cartridges with 9.7mm inner diameter.",
  },
  {
    num: "02",
    title: "Activate the seal",
    body: "A single deliberate half-twist of the activation collar breaks the inter-chamber membrane. Diluent flows into the lyophilised peptide chamber. Reconstitution begins immediately — complete in under 30 seconds.",
    detail: "The membrane is designed to break only at a specific torque — preventing accidental activation during transport.",
  },
  {
    num: "03",
    title: "Dial your dose",
    body: "Rotate the dosing dial to select your precise unit count from 1 to 60. The tactile click mechanism provides both audible and haptic confirmation at each unit increment.",
    detail: "The spring-driven plunger delivers consistent pressure regardless of dose size — no variability in injection force.",
  },
  {
    num: "04",
    title: "Inject with precision",
    body: "Attach an ISO 11608-2 compatible pen needle, prime the pen with a single unit, and administer. The ergonomic grip ensures stable delivery at any injection site.",
    detail: "Replaces the cartridge after use. The pen body is designed for 3 years of daily use.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="border-b-hairline">
      <div className="px-8 lg:px-16 py-16 lg:py-20 border-b-hairline">
        <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-4">
          How it works
        </p>
        <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-[1.1] text-[#0A0A08] max-w-xl">
          Four steps to
          <em className="italic text-[#8A8A80]"> maximum potency.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Step tabs */}
        <div className="border-r-hairline">
          {steps.map((step, i) => (
            <button
              key={step.num}
              onClick={() => setActive(i)}
              className={`w-full text-left px-8 py-7 border-b-hairline transition-all duration-300 ${
                active === i
                  ? "bg-[#0A0A08] text-[#F5F4EF]"
                  : "bg-transparent text-[#0A0A08] hover:bg-[#EDEAE2]"
              }`}
            >
              <span
                className={`text-[11px] font-light tracking-widest block mb-1 ${
                  active === i ? "text-[#5A5A52]" : "text-[#8A8A80]"
                }`}
              >
                {step.num}
              </span>
              <span className="text-[15px] font-light">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Step detail */}
        <div className="px-10 lg:px-16 py-14 flex flex-col justify-center">
          <div key={active} className="animate-fade-in-up">
            <p className="font-serif text-[clamp(28px,4vw,44px)] font-light leading-[1.2] text-[#0A0A08] mb-6">
              {steps[active].title}
            </p>
            <p className="text-[16px] font-light leading-relaxed text-[#5A5A52] mb-8">
              {steps[active].body}
            </p>
            <div className="p-5 bg-[#EDEAE2] rounded-xl">
              <p className="text-[13px] font-light leading-relaxed text-[#8A8A80]">
                <span className="font-medium text-[#0A0A08]">Technical note — </span>
                {steps[active].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
