const stats = [
  { value: "99%", label: "Peptide purity retained at delivery" },
  { value: "3yr", label: "Pen body lifespan, cartridges replaced" },
  { value: "±1u", label: "Dosing precision, variable 1–60 units" },
  { value: "98%", label: "Less plastic waste vs single-use pens" },
];

export default function StatStrip() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 border-b-hairline">
      {stats.map(({ value, label }, i) => (
        <div
          key={value}
          className={`px-8 py-10 ${
            i < stats.length - 1 ? "border-r-hairline" : ""
          } ${i >= 2 ? "border-t-hairline lg:border-t-0" : ""}`}
        >
          <p className="font-serif text-[clamp(36px,4vw,52px)] font-light text-[#0A0A08] leading-none">
            {value}
          </p>
          <p className="text-[12px] font-light text-[#8A8A80] mt-3 leading-relaxed max-w-[180px]">
            {label}
          </p>
        </div>
      ))}
    </section>
  );
}
