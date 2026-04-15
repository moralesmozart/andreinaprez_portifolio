"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type UseScrollOptions } from "framer-motion";
import { cn } from "@/lib/utils";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] mt-1 inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

const defaultOffset: UseScrollOptions["offset"] = ["start 0.9", "start 0.12"];

export default function ScrollRevealWords({
  lines,
  className,
  label,
  labelClassName,
  offset = defaultOffset,
  /** When false (default), unlabeled blocks get max-w-xl for line length. */
  fullWidth = false,
  textClassName,
}: {
  lines: string[];
  className?: string;
  label?: string;
  labelClassName?: string;
  offset?: UseScrollOptions["offset"];
  fullWidth?: boolean;
  textClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset ?? defaultOffset,
  });

  const wordsPerLine = lines.map((line) => line.split(/\s+/).filter(Boolean));
  const totalWords = wordsPerLine.reduce((n, w) => n + w.length, 0);
  let wordIndex = 0;

  return (
    <div
      ref={containerRef}
      className={cn(label ? "grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,140px)_1fr] md:gap-8" : "", className)}
    >
      {label ? (
        <div className="pt-0.5 md:pt-1">
          <span className={cn("text-sm text-[#999]", labelClassName)}>{label}</span>
        </div>
      ) : null}
      <p
        className={cn(
          "flex flex-wrap font-[family-name:var(--font-heading)] text-xl font-bold tracking-[-0.03em] text-[#111] md:text-2xl lg:text-[1.65rem] lg:leading-snug",
          textClassName,
          !label && !fullWidth && "max-w-xl",
        )}
      >
        {wordsPerLine.map((words, lineIdx) => (
          <span key={lineIdx} className="contents">
            {words.map((word) => {
              const i = wordIndex++;
              const start = i / totalWords;
              const end = start + 1 / totalWords;
              return (
                <Word key={`${lineIdx}-${i}`} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
            {lineIdx < wordsPerLine.length - 1 ? <span className="basis-full" /> : null}
          </span>
        ))}
      </p>
    </div>
  );
}
