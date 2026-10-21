"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { cn } from "@/lib/utils";

type ImageCompareProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
};

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function ImageCompare({ beforeSrc, beforeAlt, afterSrc, afterAlt }: ImageCompareProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  function moveTo(clientX: number) {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const bounds = frame.getBoundingClientRect();

    if (bounds.width === 0) {
      return;
    }

    setPosition(clamp(((clientX - bounds.left) / bounds.width) * 100));
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    draggingRef.current = true;
    setDragging(true);
    moveTo(event.clientX);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) {
      return;
    }

    moveTo(event.clientX);
  }

  function stopDragging() {
    draggingRef.current = false;
    setDragging(false);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) => clamp(current + 5));
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) => clamp(current - 5));
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  }

  return (
    <div
      ref={frameRef}
      role="slider"
      tabIndex={0}
      aria-label="Compare demonstration photographs"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)} percent of the first photograph`}
      className="relative aspect-[4/3] cursor-ew-resize touch-none overflow-hidden rounded-lg bg-sand shadow-soft select-none outline-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-bronze md:aspect-[16/10] lg:aspect-[16/9]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={onKeyDown}
    >
      <Image src={afterSrc} alt={afterAlt} fill sizes="(min-width: 1024px) 72vw, 100vw" className="object-cover" />
      <div
        className={cn(
          "absolute inset-0",
          !dragging && "transition-[clip-path] duration-300 ease-out motion-reduce:transition-none",
        )}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 72vw, 100vw"
          className="object-cover"
        />
      </div>
      <span className="pointer-events-none absolute top-3 left-3 rounded-lg bg-ivory/90 px-2.5 py-1 font-nav text-[0.65rem] tracking-[0.14em] text-charcoal uppercase sm:top-4 sm:left-4 sm:px-3 sm:text-xs sm:tracking-[0.16em]">
        Before
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-lg bg-ivory/90 px-2.5 py-1 font-nav text-[0.65rem] tracking-[0.14em] text-charcoal uppercase sm:top-4 sm:right-4 sm:px-3 sm:text-xs sm:tracking-[0.16em]">
        After
      </span>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 w-px bg-ivory",
          !dragging && "transition-[left] duration-300 ease-out motion-reduce:transition-none",
        )}
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory bg-charcoal/80 text-ivory">
          <ChevronLeft className="size-4" aria-hidden="true" />
          <ChevronRight className="-ml-2 size-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
