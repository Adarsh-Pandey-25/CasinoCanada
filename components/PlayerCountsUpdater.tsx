"use client";

import { useEffect } from "react";

const MAX_PLAYERS = 1500;

interface PlayerCountsUpdaterProps {
  casinos: { id: number; basePlayerCount: number }[];
}

export default function PlayerCountsUpdater({
  casinos,
}: PlayerCountsUpdaterProps) {
  useEffect(() => {
    const counts = new Map(
      casinos.map((c) => [c.id, c.basePlayerCount] as const)
    );

    const start = () => {
      casinos.forEach((c) => {
        const dot = document.querySelector(
          `.player-live-dot[data-casino-id="${c.id}"]`
        );
        if (dot && !dot.previousElementSibling?.classList.contains("animate-ping")) {
          const ping = document.createElement("span");
          ping.className =
            "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75";
          dot.parentElement?.insertBefore(ping, dot);
        }
      });

      const interval = setInterval(() => {
        counts.forEach((prev, id) => {
          const delta = Math.floor(Math.random() * 5) + 1;
          const next = Math.min(prev + delta, MAX_PLAYERS);
          counts.set(id, next);

          const el = document.getElementById(`player-count-${id}`);
          if (el) {
            el.textContent = next.toLocaleString("en-CA");
          }
        });
      }, 4500);

      return interval;
    };

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const ric = window.requestIdleCallback;

    if (ric) {
      const idleId = ric(
        () => {
          intervalId = start();
        },
        { timeout: 2500 }
      );
      return () => {
        window.cancelIdleCallback(idleId);
        if (intervalId) clearInterval(intervalId);
      };
    }

    const timer = setTimeout(() => {
      intervalId = start();
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [casinos]);

  return null;
}
