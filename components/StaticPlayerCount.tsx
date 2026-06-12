export default function StaticPlayerCount({
  casinoId,
  count,
}: {
  casinoId: number;
  count: number;
}) {
  return (
    <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-300">
      <span className="relative flex h-2 w-2">
        <span
          className="player-live-dot relative inline-flex h-2 w-2 rounded-full bg-green-500"
          data-casino-id={casinoId}
        />
      </span>
      👥{" "}
      <span id={`player-count-${casinoId}`}>
        {count.toLocaleString("en-CA")}
      </span>{" "}
      Players Online
    </span>
  );
}
