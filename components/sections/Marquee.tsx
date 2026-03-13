const items = [
  "Dual-Chamber Precision",
  "Maximum Peptide Stability",
  "Research-Grade Delivery",
  "Reusable. Refined.",
  "London-Engineered",
  "Lyophilised Payload",
  "ISO 11608-2 Compliant",
  "±1 Unit Dosing Accuracy",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="border-t-hairline border-b-hairline overflow-hidden mt-16 lg:mt-20 py-4">
      <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-[11px] font-light tracking-[0.2em] uppercase text-[#8A8A80]">
              {item}
            </span>
            <span className="text-[#C8C5B8] text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
