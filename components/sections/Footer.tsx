const footerLinks = {
  Product: ["The Pen", "How It Works", "Specifications", "Cartridges", "Reserve"],
  Science: ["Dual-Chamber Technology", "Peptide Stability", "Quality & Testing", "Certificates of Analysis"],
  Support: ["FAQ", "Shipping & Delivery", "Returns Policy", "Contact Us"],
  Legal: ["Research Use Policy", "Privacy Policy", "Terms of Sale", "Cookie Settings"],
};

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-0 border-b-hairline">
        {/* Brand column */}
        <div className="px-8 lg:px-16 py-14 border-r-hairline">
          <p className="font-serif text-2xl font-light tracking-[0.2em] text-[#0A0A08] uppercase mb-4">
            NanoBana
          </p>
          <p className="text-[13px] font-light leading-relaxed text-[#8A8A80] max-w-xs mb-8">
            The world's first consumer-grade dual-chamber peptide pen. Maximum
            potency. Every dose. Engineered in London.
          </p>
          <p className="text-[11px] font-light leading-relaxed text-[#B8B5A8] max-w-xs">
            All products are for research use only. Not for human consumption.
            Not evaluated by the MHRA or FDA.
          </p>
          <div className="flex gap-4 mt-8">
            {["Instagram", "X", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-[11px] font-light tracking-wide text-[#8A8A80] hover:text-[#0A0A08] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="px-8 py-14 border-r-hairline last:border-r-0">
            <p className="text-[11px] font-light tracking-[0.2em] uppercase text-[#8A8A80] mb-6">
              {heading}
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] font-light text-[#5A5A52] hover:text-[#0A0A08] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-8 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[11px] font-light text-[#B8B5A8]">
          © 2025 NanoBana Ltd. Registered in England & Wales. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Sale", "Cookie Settings"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[11px] font-light text-[#B8B5A8] hover:text-[#5A5A52] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
