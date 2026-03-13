export default function PenIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 480"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* Pen cap */}
      <rect x="72" y="20" width="56" height="90" rx="28" fill="#1A1A16" />
      <rect x="78" y="22" width="20" height="86" rx="10" fill="#2C2C26" opacity="0.4" />
      {/* Cap clip */}
      <rect x="116" y="40" width="6" height="60" rx="3" fill="#3A3A32" />
      <rect x="116" y="95" width="12" height="6" rx="3" fill="#3A3A32" />

      {/* Cap–body join ring */}
      <rect x="68" y="108" width="64" height="10" rx="2" fill="#D8D5C8" />

      {/* Body */}
      <rect x="70" y="116" width="60" height="240" rx="8" fill="url(#bodyGrad)" />

      {/* Body highlight */}
      <rect x="74" y="118" width="16" height="236" rx="6" fill="white" opacity="0.15" />

      {/* Dual-chamber window */}
      <rect x="84" y="148" width="32" height="130" rx="6" fill="white" opacity="0.08" stroke="#C8C5B8" strokeWidth="0.5" />

      {/* Chamber A — liquid */}
      <rect x="85" y="149" width="30" height="63" rx="5" fill="rgba(100,160,255,0.25)" />
      <text x="100" y="182" textAnchor="middle" fontSize="8" fill="#3366AA" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="1">DILUENT</text>

      {/* Chamber separator */}
      <rect x="84" y="211" width="32" height="1.5" fill="#C8C5B8" />
      <rect x="88" y="209" width="24" height="5" rx="2" fill="#B8B5A8" />

      {/* Chamber B — powder */}
      <rect x="85" y="213" width="30" height="63" rx="5" fill="rgba(255,255,255,0.35)" />
      <text x="100" y="247" textAnchor="middle" fontSize="8" fill="#6A6A60" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="1">PEPTIDE</text>

      {/* Dose dial ring */}
      <rect x="68" y="340" width="64" height="20" rx="4" fill="#D0CEC6" />
      <rect x="72" y="343" width="8" height="14" rx="2" fill="#A8A59E" />
      <text x="115" y="354" textAnchor="end" fontSize="9" fill="#5A5A52" fontFamily="DM Sans, sans-serif">10 u</text>

      {/* Lower body */}
      <rect x="74" y="358" width="52" height="36" rx="4" fill="url(#lowerGrad)" />

      {/* Needle hub */}
      <rect x="82" y="392" width="36" height="14" rx="7" fill="#C0BDB4" />

      {/* Needle */}
      <rect x="96" y="405" width="8" height="28" rx="4" fill="#A8A59E" />
      <rect x="98" y="405" width="2" height="28" rx="1" fill="white" opacity="0.3" />

      {/* Dose window callout line */}
      <line x1="116" y1="180" x2="148" y2="168" stroke="#C8C5B8" strokeWidth="0.5" />
      <circle cx="148" cy="168" r="2" fill="#C8C5B8" />

      <line x1="116" y1="247" x2="148" y2="255" stroke="#C8C5B8" strokeWidth="0.5" />
      <circle cx="148" cy="255" r="2" fill="#C8C5B8" />

      <defs>
        <linearGradient id="bodyGrad" x1="70" y1="116" x2="130" y2="116" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C8C5BC" />
          <stop offset="35%" stopColor="#EDEAE2" />
          <stop offset="65%" stopColor="#F5F2EA" />
          <stop offset="100%" stopColor="#B8B5AC" />
        </linearGradient>
        <linearGradient id="lowerGrad" x1="74" y1="358" x2="126" y2="358" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B8B5AC" />
          <stop offset="50%" stopColor="#D8D5CC" />
          <stop offset="100%" stopColor="#B0ADA4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
