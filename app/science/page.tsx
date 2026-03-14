import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "The Science — DUE║MIX",
  description:
    "How dual-chamber architecture preserves peptide potency. The science behind lyophilisation, hydrolysis, and reconstitution at point of injection.",
};

const faqs = [
  {
    q: "What is lyophilisation and why does it matter?",
    a: "Lyophilisation (freeze-drying) removes water from a peptide compound by freezing it and then reducing the surrounding pressure to allow the frozen water to sublimate. The result is a dry powder that is far more stable than the liquid form. By keeping the powder dry and separate from the diluent until injection, DUE║MIX preserves near-complete bioactivity.",
  },
  {
    q: "What is hydrolysis and how does it degrade peptides?",
    a: "Hydrolysis is a chemical reaction where water molecules break chemical bonds in the peptide chain. In pre-mixed peptide solutions, hydrolysis begins immediately and continues throughout storage and transit. Temperature, pH, and light exposure accelerate the process. The dual-chamber design prevents hydrolysis entirely until the moment of activation.",
  },
  {
    q: "How long does reconstitution take?",
    a: "The inter-chamber membrane breaks with a deliberate half-twist of the activation collar. Diluent flows into the peptide chamber under the pen's internal pressure. Full reconstitution takes under 30 seconds for most lyophilised peptides.",
  },
  {
    q: "Does the pen work with all peptides?",
    a: "DUE║MIX cartridges are pre-filled and matched to specific peptides with appropriate diluent formulations. You cannot use third-party vials in the pen — the dual-chamber design requires matched cartridges. We offer a growing catalogue of research peptides in compatible cartridges.",
  },
  {
    q: "Is the pen CE marked?",
    a: "The DUE║MIX pen body is CE-marked under the EU Medical Device Regulation (MDR). The cartridges are manufactured under GMP conditions. All batches are tested by HPLC for purity and confirmed by mass spectrometry.",
  },
];

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF]">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        {/* Hero */}
        <div className="px-8 lg:px-16 py-20 border-b-hairline max-w-4xl">
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-6">
            The science
          </p>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.05] text-[#0A0A08] mb-8">
            Why separation
            <br />
            <em className="italic text-[#8A8A80]">is everything.</em>
          </h1>
          <p className="text-[16px] font-light leading-relaxed text-[#5A5A52] max-w-2xl">
            Peptides are fragile. Pre-mixing a lyophilised peptide with its
            diluent triggers an irreversible clock — hydrolysis begins, potency
            decays. DUE║MIX stops that clock until the moment you need it.
          </p>
        </div>

        {/* Science blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-b-hairline">
          {[
            {
              num: "I",
              heading: "Lyophilisation",
              body: "The freeze-drying process removes all water molecules from the peptide compound. In the absence of water, hydrolysis cannot occur. The powder form is stable at ambient temperature for months — eliminating cold-chain dependency for the active compound itself.",
            },
            {
              num: "II",
              heading: "Hermetic separation",
              body: "The dual-chamber cartridge seals powder and diluent in separate compartments behind a torque-locked membrane. Even during shipping in adverse conditions, the two components cannot contact each other until the user deliberately activates the pen.",
            },
            {
              num: "III",
              heading: "Point-of-use reconstitution",
              body: "The half-twist activation mechanism is calibrated to break the membrane at a specific torque value — preventing accidental activation. Once broken, reconstitution is complete in under 30 seconds. You inject fresh solution, every time.",
            },
          ].map(({ num, heading, body }, i) => (
            <div
              key={num}
              className={`px-10 py-14 ${i < 2 ? "border-r-hairline" : ""}`}
            >
              <p className="font-serif text-[48px] font-light text-[#D8D5C8] leading-none mb-6">
                {num}
              </p>
              <h2 className="text-[18px] font-medium text-[#0A0A08] mb-4">{heading}</h2>
              <p className="text-[14px] font-light leading-relaxed text-[#5A5A52]">{body}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="px-8 lg:px-16 py-16 border-b-hairline">
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-12">
            Frequently asked questions
          </p>
          <div className="space-y-0 divide-y divide-[rgba(10,10,8,0.08)] max-w-3xl">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-8">
                <p className="text-[16px] font-medium text-[#0A0A08] mb-4">{q}</p>
                <p className="text-[14px] font-light leading-relaxed text-[#5A5A52]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
