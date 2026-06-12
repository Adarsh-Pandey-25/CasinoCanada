function Star({
  fillPercent,
  clipId,
}: {
  fillPercent: number;
  clipId: string;
}) {
  return (
    <svg
      className="h-5 w-5 shrink-0 drop-shadow-[0_0_6px_rgba(255,215,0,0.35)]"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="#3f3f46"
      />
      <clipPath id={clipId}>
        <rect x="0" y="0" width={24 * fillPercent} height="24" />
      </clipPath>
      <path
        clipPath={`url(#${clipId})`}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="#FFD700"
      />
    </svg>
  );
}

export default function StarRating({
  rating,
  idPrefix,
}: {
  rating: number;
  idPrefix: string;
}) {
  const starsOutOf5 = rating / 2;

  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${starsOutOf5.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          clipId={`${idPrefix}-star-${i}`}
          fillPercent={Math.min(1, Math.max(0, starsOutOf5 - i))}
        />
      ))}
    </div>
  );
}
