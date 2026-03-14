export default function ProblemSolution() {
  return (
    <section id="science" className="border-b-hairline">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Problem */}
        <div className="px-8 lg:px-16 py-16 lg:py-24 border-b-hairline lg:border-b-0 border-r-hairline">
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80] mb-6">
            The problem
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-[#0A0A08] mb-8">
            Pre-mixed peptides degrade
            <em className="italic text-[#8A8A80]"> before</em> they reach you.
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#5A5A52] mb-6">
            Most peptide delivery systems mix lyophilised powder with diluent at
            manufacture. Hydrolysis begins immediately. By the time the vial reaches
            your door — through shipping, temperature fluctuation, and storage — a
            meaningful portion of bioactive efficacy has already been lost.
          </p>
          <p className="text-[15px] font-light leading-relaxed text-[#5A5A52]">
            You pay for the peptide. You inject the degradation products.
          </p>

          {/* Degradation visual */}
          <div className="mt-10 p-6 bg-[#EDEAE2] rounded-xl">
            <p className="text-[11px] font-light tracking-wider uppercase text-[#8A8A80] mb-4">
              Typical pre-mixed peptide potency over time
            </p>
            <div className="space-y-3">
              {[
                { label: "Day 0 — mixed", pct: 100, color: "#0A0A08" },
                { label: "Day 7 — transit", pct: 82, color: "#5A5A52" },
                { label: "Day 30 — shelf", pct: 64, color: "#8A8A80" },
                { label: "Day 90 — storage", pct: 41, color: "#B8B5A8" },
              ].map(({ label, pct, color }) => (
                <div key={label} className="flex items-center gap-3">
                  <p className="text-[11px] font-light text-[#8A8A80] w-36 shrink-0">{label}</p>
                  <div className="flex-1 bg-[#D8D5C8] rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{ width: `${pct}%`, background: color }}
                    />
                  </div>
                  <p className="text-[11px] font-medium w-8 text-right" style={{ color }}>
                    {pct}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="px-8 lg:px-16 py-16 lg:py-24 bg-[#0A0A08] text-[#F5F4EF]">
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#5A5A52] mb-6">
            The DUE║MIX solution
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.15] text-[#F5F4EF] mb-8">
            Reconstituted at the moment of injection.
            <em className="italic text-[#8A8A80]"> Not before.</em>
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#8A8A80] mb-6">
            DUE║MIX's dual-chamber architecture hermetically seals lyophilised
            peptide powder and sterile diluent in separate chambers within the same
            cartridge. They never touch until you're ready.
          </p>
          <p className="text-[15px] font-light leading-relaxed text-[#8A8A80] mb-10">
            One deliberate half-twist breaks the inter-chamber membrane. Powder and
            diluent reconstitute in under 30 seconds. You inject freshly mixed,
            full-potency peptide — every single time.
          </p>

          {/* Potency comparison */}
          <div className="p-6 bg-[#1A1A16] rounded-xl">
            <p className="text-[11px] font-light tracking-wider uppercase text-[#5A5A52] mb-4">
              DUE║MIX potency at injection
            </p>
            <div className="flex items-center gap-3">
              <p className="text-[11px] font-light text-[#5A5A52] w-36 shrink-0">
                Any point in shelf life
              </p>
              <div className="flex-1 bg-[#2C2C26] rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-[#F5F4EF] w-full" />
              </div>
              <p className="text-[11px] font-medium text-[#F5F4EF] w-8 text-right">
                99%
              </p>
            </div>
          </div>

          {/* Features list */}
          <div className="mt-10 space-y-4">
            {[
              "Hermetically sealed dual-chamber cartridge",
              "Powder stable at ambient temperature until activation",
              "30-second reconstitution, no syringe required",
              "Reusable pen body — cartridges replaced per cycle",
            ].map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <span className="text-[#F5F4EF] mt-0.5 text-[10px]">◆</span>
                <p className="text-[14px] font-light text-[#8A8A80]">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
