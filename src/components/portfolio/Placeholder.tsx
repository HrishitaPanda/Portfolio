import { ImagePlus } from "lucide-react";
import type { GalleryItem } from "@/content/portfolio";

const tints = ["bg-lavender/60", "bg-blush/60", "bg-sage/60"];

export function PhotoCard({ item, i, className = "" }: { item: GalleryItem; i: number; className?: string }) {
  return (
    <figure
      className={`lift mb-5 break-inside-avoid rounded-2xl bg-card p-3 pb-2 shadow-soft ${i % 2 ? "rotate-1" : "-rotate-1"} ${className}`}
    >
      {item.src ? (
        <img src={item.src} alt={item.alt} loading="lazy" className={`w-full rounded-xl object-cover ${item.tall ? "aspect-[3/4]" : "aspect-square"}`} />
      ) : (
        <div
          role="img"
          aria-label={`${item.alt} — photo coming soon`}
          className={`flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-foreground/15 text-muted-foreground ${tints[i % 3]} ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
        >
          <ImagePlus className="h-7 w-7" aria-hidden />
          <span className="text-xs">photo coming soon</span>
        </div>
      )}
      <figcaption className="pt-2 text-center font-hand text-xl text-foreground/80">{item.caption}</figcaption>
    </figure>
  );
}
