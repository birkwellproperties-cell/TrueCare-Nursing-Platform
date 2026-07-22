export default function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}) {
  return (
    <div className={`section-heading ${centered ? "section-heading--centered" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

