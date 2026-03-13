const testimonials = [
  {
    quote:
      "The dual-chamber design is the most significant advance in peptide delivery I've seen in a decade of research. Reconstitution at point-of-use eliminates the biggest variable in our protocols.",
    name: "Dr. A. Whitmore",
    title: "Research Lead, Longevity Sciences Institute",
    initials: "AW",
  },
  {
    quote:
      "We've switched our entire clinic to NanoBana cartridges. The consistency in potency between doses is remarkable — our clients report noticeably better outcomes.",
    name: "Dr. S. Patel",
    title: "Director, Precision Wellness Clinic, London",
    initials: "SP",
  },
  {
    quote:
      "Finally, a pen that treats peptides with the respect they deserve. The engineering is genuinely impressive — the torque-locked membrane alone is worth the premium.",
    name: "T. Nakamura",
    title: "Biohacker & Peptide Protocol Developer",
    initials: "TN",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b-hairline">
      <div className="px-8 lg:px-16 py-14 border-b-hairline">
        <p className="text-[11px] font-light tracking-[0.25em] uppercase text-[#8A8A80]">
          What researchers say
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {testimonials.map(({ quote, name, title, initials }, i) => (
          <div
            key={name}
            className={`px-8 lg:px-10 py-12 ${
              i < testimonials.length - 1 ? "border-b-hairline lg:border-b-0 border-r-hairline" : ""
            }`}
          >
            <p className="font-serif text-[32px] font-light text-[#D8D5C8] leading-none mb-4">
              &ldquo;
            </p>
            <p className="text-[15px] font-light leading-relaxed text-[#5A5A52] mb-8 italic">
              {quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EDEAE2] flex items-center justify-center text-[12px] font-medium text-[#5A5A52]">
                {initials}
              </div>
              <div>
                <p className="text-[13px] font-medium text-[#0A0A08]">{name}</p>
                <p className="text-[11px] font-light text-[#8A8A80]">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
