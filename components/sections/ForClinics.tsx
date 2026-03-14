const benefits = [
  {
    title: "Bulk cartridge supply",
    body: "Order cartridges by the case at wholesale pricing. Dedicated account management for orders over 50 units/month.",
  },
  {
    title: "White-label options",
    body: "Custom branding on pen bodies and cartridge labels available for clinics establishing their own peptide protocol brand.",
  },
  {
    title: "Certificate of Analysis",
    body: "Every batch ships with a full CoA including HPLC purity data, mass spectrometry confirmation, and sterility testing.",
  },
  {
    title: "Cold-chain logistics",
    body: "All clinic orders dispatched with validated cold-chain packaging. Temperature-logging included on orders over £500.",
  },
];

export default function ForClinics() {
  return (
    <section id="for-clinics" className="border-b-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left — dark panel */}
        <div className="bg-[#0A0A08] px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#5A5A52] mb-6">
            For clinics & researchers
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.15] text-[#F5F4EF] mb-8">
            Built for professionals
            <em className="italic text-[#5A5A52]"> who demand certainty.</em>
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#8A8A80] mb-10">
            DUE║MIX partners with wellness clinics, longevity practitioners, and
            research institutions across the UK and EU. Our B2B programme offers
            wholesale pricing, custom branding, and priority dispatch — with the
            same research-grade quality standards.
          </p>
          <a
            href="mailto:hello@duemix.com"
            className="btn-pill self-start"
            style={{
              background: "transparent",
              color: "#F5F4EF",
              border: "0.5px solid rgba(255,255,255,0.2)",
            }}
          >
            Enquire about clinic pricing →
          </a>
        </div>

        {/* Right — benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-l-hairline">
          {benefits.map(({ title, body }, i) => (
            <div
              key={title}
              className={`px-8 py-10 ${
                i % 2 === 0 ? "border-r-hairline" : ""
              } ${i < 2 ? "border-b-hairline" : ""}`}
            >
              <p className="text-[14px] font-medium text-[#0A0A08] mb-3">{title}</p>
              <p className="text-[13px] font-light leading-relaxed text-[#8A8A80]">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation strip */}
      <div className="px-8 lg:px-16 py-8 border-t-hairline bg-[#EDEAE2] flex flex-wrap items-center gap-8">
        <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[#B8B5A8]">
          Accreditations & compliance
        </p>
        {[
          "CE Marked",
          "MDR Compliant",
          "ISO 11608-2",
          "ISO 14040/44",
          "HPLC Tested",
          "GMP Manufactured",
        ].map((badge) => (
          <span
            key={badge}
            className="text-[11px] font-light tracking-wide text-[#5A5A52] px-3 py-1.5 border-hairline rounded-full bg-[#F5F4EF]"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
