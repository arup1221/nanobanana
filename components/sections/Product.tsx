import Image from "next/image";

const specs = [
  { key: "Cartridge compatibility", val: "3mL dual-chamber, 9.7mm inner diameter" },
  { key: "Dosing range", val: "1–60 units, variable ±1 unit precision" },
  { key: "Activation mechanism", val: "Half-twist collar, torque-locked membrane" },
  { key: "Reconstitution time", val: "< 30 seconds from activation" },
  { key: "Needle standard", val: "ISO 11608-2 universal pen needles" },
  { key: "Material", val: "Medical-grade polymer + 316L stainless steel" },
  { key: "Pen lifespan", val: "3 years / ~1,095 cartridge cycles" },
  { key: "Cartridge storage", val: "2–8°C refrigerated" },
  { key: "Regulatory status", val: "CE-marked, MDR-compliant (UK/EU)" },
];

const cartridges = [
  { name: "BPC-157", dose: "5mg", price: "£38" },
  { name: "TB-500", dose: "5mg", price: "£44" },
  { name: "CJC-1295", dose: "5mg", price: "£34" },
  { name: "Ipamorelin", dose: "5mg", price: "£32" },
  { name: "GHK-Cu", dose: "50mg", price: "£42" },
  { name: "Semaglutide", dose: "10mg", price: "£89" },
];

export default function Product() {
  return (
    <section id="product" className="border-b-hairline">
      {/* Header */}
      <div className="px-8 lg:px-16 py-14 border-b-hairline">
        <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-4">
          The device
        </p>
        <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-[1.1] text-[#0A0A08]">
          DUE║MIX Dual-Chamber Pen
        </h2>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-hairline">
        {/* Product photo */}
        <div className="relative overflow-hidden bg-[#1A1A16] border-r-hairline min-h-[480px]">
          <Image
            src="/hero-product.jpg"
            alt="DUE║MIX pen with needle kit — full unboxed set"
            fill
            className="object-cover object-center opacity-90"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "linear-gradient(to top, rgba(26,26,22,0.8), transparent)" }}
          />
          <p className="absolute bottom-5 left-0 right-0 text-center text-[11px] font-light tracking-wider uppercase text-[#8A8A80]">
            DUE║MIX Pen — Champagne Edition with Needle Kit
          </p>
        </div>

        {/* Pricing */}
        <div className="px-8 lg:px-14 py-14 flex flex-col justify-center">
          <p className="font-serif text-[clamp(52px,7vw,80px)] font-light text-[#0A0A08] leading-none">
            £249
          </p>
          <p className="text-[13px] font-light text-[#8A8A80] mt-2 mb-8">
            Pen body · Starter cartridge included · Free UK shipping
          </p>

          <div className="space-y-3 mb-10">
            {[
              "Dual-chamber pen body (3-year lifespan)",
              "1× starter BPC-157 5mg cartridge",
              "10× ISO-compatible pen needles",
              "Insulated travel case",
              "Quick-start guide & QR-linked science kit",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[10px] text-[#0A0A08]">◆</span>
                <p className="text-[14px] font-light text-[#5A5A52]">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="btn-pill btn-primary text-center">
              Reserve now — £249
            </a>
            <a href="#" className="btn-pill btn-ghost text-center">
              Join waitlist
            </a>
          </div>

          <p className="text-[11px] font-light text-[#B8B5A8] mt-6">
            Expected dispatch Q3 2025 · Limited first batch · Ships UK & EU
          </p>
        </div>
      </div>

      {/* Specifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b-hairline">
        <div className="px-8 lg:px-16 py-12 border-r-hairline">
          <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[#8A8A80] mb-6">
            Technical specifications
          </p>
          <div className="divide-y divide-[rgba(10,10,8,0.08)]">
            {specs.map(({ key, val }) => (
              <div key={key} className="py-3 flex justify-between gap-6">
                <p className="text-[13px] font-light text-[#8A8A80] shrink-0">{key}</p>
                <p className="text-[13px] font-light text-[#0A0A08] text-right">{val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cartridge catalogue */}
        <div className="px-8 lg:px-16 py-12 bg-[#F5F4EF]">
          <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[#8A8A80] mb-6">
            Replacement cartridges
          </p>
          <div className="grid grid-cols-2 gap-3">
            {cartridges.map(({ name, dose, price }) => (
              <div
                key={name}
                className="border-hairline rounded-xl p-4 bg-[#F5F4EF] hover:bg-[#EDEAE2] transition-colors duration-200 cursor-pointer"
              >
                <p className="text-[14px] font-medium text-[#0A0A08]">{name}</p>
                <p className="text-[11px] font-light text-[#8A8A80]">{dose}</p>
                <p className="text-[16px] font-light text-[#0A0A08] mt-3 font-serif">{price}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] font-light text-[#B8B5A8] mt-6">
            All cartridges for research use only. Not for human consumption.
          </p>
        </div>
      </div>
    </section>
  );
}
