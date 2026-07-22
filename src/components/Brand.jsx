import { Link } from "react-router-dom";

function TrueCareMark({
  compact = false,
}) {
  const size = compact ? 40 : 52;

  return (
    <svg
      className="truecare-mark"
      width={size}
      height={size}
      viewBox="0 0 72 72"
      role="img"
      aria-label="TrueCare butterfly and stethoscope symbol"
    >
      <path
        d="M34.6 30.6C25.6 16.5 13.4 12.9 8.4 20.1C3.2 27.5 10.9 39.5 29.7 43.7C31.1 39.8 32.7 35.1 34.6 30.6Z"
        fill="#D6336C"
      />

      <path
        d="M37.4 30.6C46.4 16.5 58.6 12.9 63.6 20.1C68.8 27.5 61.1 39.5 42.3 43.7C40.9 39.8 39.3 35.1 37.4 30.6Z"
        fill="#2FBAA8"
      />

      <path
        d="M32.7 34.5C25.5 33.3 18.2 36.6 18.7 43.1C19.2 49.2 26.7 52.6 34.4 46.4C34 42.5 33.4 38.3 32.7 34.5Z"
        fill="#F48DAE"
      />

      <path
        d="M39.3 34.5C46.5 33.3 53.8 36.6 53.3 43.1C52.8 49.2 45.3 52.6 37.6 46.4C38 42.5 38.6 38.3 39.3 34.5Z"
        fill="#78D5CC"
      />

      <path
        d="M36 23.5V45.5"
        fill="none"
        stroke="#0D1B3D"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      <circle
        cx="36"
        cy="20.2"
        r="3.1"
        fill="#0D1B3D"
      />

      <path
        d="M29.9 40.2V46.8C29.9 52.6 33.1 56 37.7 56C42.3 56 45.5 52.6 45.5 48.2V43.1"
        fill="none"
        stroke="#0D1B3D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M42.7 41.1L45.5 43.2L48.3 41.1"
        fill="none"
        stroke="#0D1B3D"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="37.7"
        cy="57"
        r="3.2"
        fill="none"
        stroke="#0D1B3D"
        strokeWidth="2.6"
      />
    </svg>
  );
}

export default function Brand({
  compact = false,
}) {
  return (
    <Link
      className={`brand ${compact ? "brand--compact" : ""}`}
      to="/"
      aria-label="TrueCare Nursing Services home"
    >
      <span className="brand__mark">
        <TrueCareMark compact={compact} />
      </span>

      <span className="brand__wordmark">
        <strong>
          <span className="brand__true">True</span>
          <span className="brand__care">Care</span>
        </strong>

        {!compact && (
          <small>NURSING SERVICES</small>
        )}
      </span>
    </Link>
  );
}
