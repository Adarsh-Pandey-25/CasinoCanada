"use client";

import { useEffect, useState } from "react";

export default function LazyBackgroundImage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const reveal = () => setLoaded(true);
    const ric = window.requestIdleCallback;

    if (ric) {
      const id = ric(reveal, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(reveal, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  return (
    <picture
      className={`page-background__picture ${loaded ? "is-visible" : ""}`}
    >
      <source
        media="(max-width: 768px)"
        srcSet="/casino-bg-768.webp"
        type="image/webp"
      />
      <source
        media="(max-width: 1280px)"
        srcSet="/casino-bg-1280.webp"
        type="image/webp"
      />
      <source srcSet="/casino-bg.webp" type="image/webp" />
      <img
        src="/casino-bg-1280.webp"
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        fetchPriority="low"
        decoding="async"
        className="page-background__image"
      />
    </picture>
  );
}
