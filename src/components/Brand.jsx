import { Link } from "react-router-dom";

function TrueCareMark({ compact = false }) {
  return (
    <svg width={compact ? 38 : 48} height={compact ? 38 : 48} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="tc-gradient" x1="8" y1="7" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0877b8" />
          <stop offset="1" stopColor="#12a6a1" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="19" fill="url(#tc-gradient)" />
      <path d="M17 32h9l4-10 7 21 4-11h7" fill="none" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 51C18 43 11 35 11 25c0-7 5-12 12-12 4 0 7 2 9 5 2-3 5-5 9-5 7 0 12 5 12 12 0 10-7 18-21 26Z" fill="none" stroke="white" strokeOpacity=".42" strokeWidth="2.4" />
    </svg>
  );
}

export default function Brand({ compact = false }) {
  return (
    <Link className="brand" to="/" aria-label="TrueCare Nursing Services home">
      <span className="brand__mark"><TrueCareMark compact={compact} /></span>
      <span>
        <strong>TRUECARE</strong>
        {!compact && <small>NURSING SERVICES</small>}
      </span>
    </Link>
  );
}
