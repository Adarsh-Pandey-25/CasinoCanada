import LazyBackgroundImage from "@/components/LazyBackgroundImage";

export default function PageBackground() {
  return (
    <div className="page-background" aria-hidden="true">
      <div className="page-background__fallback" />
      <LazyBackgroundImage />
      <div className="page-background__overlay" />
      <div className="page-background__vignette" />
    </div>
  );
}
