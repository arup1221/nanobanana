import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Peptide Catalogue — NanoBana",
  description:
    "Browse the full NanoBana dual-chamber cartridge catalogue. Research-grade lyophilised peptides including BPC-157, TB-500, CJC-1295, Semaglutide, and more.",
};

type Category = "All" | "Recovery" | "Hormone" | "Metabolic" | "Cognitive";

const peptides = [
  { name: "BPC-157", dose: "5mg", category: "Recovery", price: "£38", desc: "Body Protection Compound. Studied for tissue repair, gut health, and angiogenesis." },
  { name: "TB-500", dose: "5mg", category: "Recovery", price: "£44", desc: "Thymosin Beta-4 fragment. Investigated for muscle repair and anti-inflammatory pathways." },
  { name: "CJC-1295", dose: "5mg", category: "Hormone", price: "£34", desc: "GHRH analogue. Studied for sustained growth hormone release." },
  { name: "Ipamorelin", dose: "5mg", category: "Hormone", price: "£32", desc: "Selective GH secretagogue. Often combined with CJC-1295 in research protocols." },
  { name: "GHK-Cu", dose: "50mg", category: "Recovery", price: "£42", desc: "Copper peptide. Researched for collagen synthesis, wound healing, and anti-aging properties." },
  { name: "Semaglutide", dose: "10mg", category: "Metabolic", price: "£89", desc: "GLP-1 receptor agonist. Used extensively in metabolic and weight research." },
  { name: "Tirzepatide", dose: "10mg", category: "Metabolic", price: "£119", desc: "Dual GIP/GLP-1 agonist. Subject of major metabolic syndrome research programmes." },
  { name: "Melanotan II", dose: "10mg", category: "Hormone", price: "£28", desc: "Melanocortin receptor agonist. Studied for pigmentation and related pathways." },
  { name: "PT-141", dose: "10mg", category: "Hormone", price: "£34", desc: "Bremelanotide. Melanocortin system peptide studied for various receptor interactions." },
  { name: "NAD+", dose: "500mg", category: "Metabolic", price: "£59", desc: "Nicotinamide adenine dinucleotide. Central to cellular energy metabolism research." },
  { name: "Selank", dose: "5mg", category: "Cognitive", price: "£38", desc: "Anxiolytic peptide derived from tuftsin. Researched in Eastern Europe for cognitive effects." },
  { name: "Semax", dose: "10mg", category: "Cognitive", price: "£44", desc: "ACTH analogue. Studied for neuroprotective and cognitive enhancement properties." },
];

const categories: Category[] = ["All", "Recovery", "Hormone", "Metabolic", "Cognitive"];

export default function PeptidesPage() {
  return (
    <main className="min-h-screen bg-[#F5F4EF]">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        {/* Header */}
        <div className="px-8 lg:px-16 py-16 border-b-hairline">
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-6">
            Cartridge catalogue
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-[1.08] text-[#0A0A08]">
              Research peptides,
              <br />
              <em className="italic text-[#8A8A80]">dual-chamber ready.</em>
            </h1>
            <p className="text-[14px] font-light text-[#8A8A80] max-w-xs">
              All cartridges are HPLC-verified, GMP manufactured, and ship
              cold-chain within the UK & EU.
            </p>
          </div>
        </div>

        {/* Category filter strip */}
        <div className="flex gap-0 border-b-hairline overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-8 py-4 text-[12px] font-light tracking-wide whitespace-nowrap border-r-hairline transition-colors ${
                cat === "All"
                  ? "bg-[#0A0A08] text-[#F5F4EF]"
                  : "text-[#8A8A80] hover:bg-[#EDEAE2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {peptides.map(({ name, dose, category, price, desc }, i) => (
            <div
              key={name}
              className={`p-8 border-r-hairline border-b-hairline group cursor-pointer hover:bg-[#EDEAE2] transition-colors duration-200`}
            >
              {/* Vial visual */}
              <div className="w-full h-36 bg-[#EDEAE2] group-hover:bg-[#D8D5C8] rounded-xl mb-6 transition-colors duration-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[10px] font-light tracking-[0.15em] uppercase text-[#8A8A80] mb-1">
                    NanoBana
                  </p>
                  <p className="text-[15px] font-medium text-[#0A0A08]">{name}</p>
                  <div className="mt-1 mx-auto w-16 h-4 bg-[#0A0A08] rounded flex items-center justify-center">
                    <p className="text-[8px] font-light text-[#F5F4EF] tracking-wide">
                      Research use only
                    </p>
                  </div>
                  <p className="text-[11px] font-light text-[#8A8A80] mt-1">{dose}</p>
                </div>
              </div>

              <div className="flex items-start justify-between mb-2">
                <p className="text-[15px] font-medium text-[#0A0A08]">{name} — {dose}</p>
              </div>
              <span className="inline-block text-[10px] font-light tracking-wider uppercase text-[#8A8A80] border-hairline px-2 py-0.5 rounded-full mb-3">
                {category}
              </span>
              <p className="text-[12px] font-light leading-relaxed text-[#8A8A80] mb-5">
                {desc}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-serif text-[22px] font-light text-[#0A0A08]">{price}</p>
                <button className="btn-pill btn-primary text-[12px] py-2 px-4">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="px-8 lg:px-16 py-10 border-t-hairline bg-[#EDEAE2]">
          <p className="text-[12px] font-light leading-relaxed text-[#8A8A80] max-w-3xl">
            <strong className="font-medium text-[#5A5A52]">Research use only.</strong> All
            products on this site are intended strictly for scientific research and
            laboratory investigation. They are not intended for human consumption,
            veterinary use, or any therapeutic application. These statements have
            not been evaluated by the MHRA, FDA, or any other regulatory body.
            NanoBana Ltd accepts no liability for misuse of these compounds.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
