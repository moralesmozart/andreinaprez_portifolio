import Image from "next/image";
import { portfolioSlideSrc } from "@/lib/portfolio-slides";
import { cn } from "@/lib/utils";

export default function PortfolioSlideImage({
  slide,
  alt,
  className,
  priority,
}: {
  slide: number;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border border-black/[0.08] bg-[#f4f4f4] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      <Image
        src={portfolioSlideSrc(slide)}
        alt={alt}
        width={1600}
        height={1000}
        className="h-auto w-full object-cover object-top"
        sizes="(max-width: 768px) 100vw, min(1120px, 92vw)"
        unoptimized
        priority={priority}
      />
    </div>
  );
}
