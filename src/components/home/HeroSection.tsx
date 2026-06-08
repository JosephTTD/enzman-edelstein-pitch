"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    src: "/videos/video1.mp4",
    title: "Die Kunst des Schliffs",
    description:
      "Erfahren Sie, wie aus einem rohen Kristall ein funkelnder Edelstein wird.",
    cta: { label: "Wissen entdecken", href: "/wissen" },
    zoom: "scale-[2]",
  },
  {
    src: "/videos/video2.mp4",
    title: "Faszination Edelstein",
    description:
      "Entdecken Sie die Welt der seltenen Steine in unseren Videos.",
    cta: { label: "Mehr erfahren", href: "/wissen" },
    zoom: "scale-150",
  },
  {
    src: "/videos/video3.mp4",
    title: "Seltene Schätze",
    description: "Paraiba-Turmaline, Demantoide und weitere Raritäten.",
    cta: { label: "Entdecken", href: "/kollektion" },
    zoom: "scale-150",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === current || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    const nextIndex = (current + 1) % slides.length;
    goTo(nextIndex);
  }, [current, goTo]);

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    goTo(prevIndex);
  }, [current, goTo]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    timeoutRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        return next;
      });
    }, 6000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isAutoPlaying]);

  const slide = slides[current];

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Desktop: side-by-side layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:min-h-[85vh]">
        {/* Left: text content */}
        <div className="relative z-10 flex items-center bg-background px-12 xl:px-20">
          <div className="max-w-lg w-full">
            {/* Fixed-height text area to prevent jumping */}
            <div className="min-h-[280px] flex flex-col justify-center">
              <h1
                className={`font-display text-hero text-text-primary transition-all duration-300 ease-out ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`mt-4 text-body-lg text-text-secondary transition-all duration-300 ease-out delay-75 ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slide.description}
              </p>
              <div
                className={`mt-8 transition-all duration-300 ease-out delay-100 ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Button href={slide.cta.href}>{slide.cta.label}</Button>
              </div>
            </div>

            {/* Desktop controls */}
            <div className="mt-16 flex items-center gap-4">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      goTo(i);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-0.5 transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-text-primary"
                        : "w-4 bg-text-secondary/30 hover:bg-text-secondary/50"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex h-8 w-8 items-center justify-center border border-border text-text-secondary transition-colors duration-150 hover:border-text-primary hover:text-text-primary"
                  aria-label={isAutoPlaying ? "Pause" : "Play"}
                >
                  {isAutoPlaying ? (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => {
                    prev();
                    setIsAutoPlaying(false);
                  }}
                  className="flex h-8 w-8 items-center justify-center border border-border text-text-secondary transition-colors duration-150 hover:border-text-primary hover:text-text-primary"
                  aria-label="Zurück"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="15,18 9,12 15,6" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    next();
                    setIsAutoPlaying(false);
                  }}
                  className="flex h-8 w-8 items-center justify-center border border-border text-text-secondary transition-colors duration-150 hover:border-text-primary hover:text-text-primary"
                  aria-label="Weiter"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="9,18 15,12 9,6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: video carousel */}
        <div className="relative">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <video
                src={s.src}
                autoPlay
                muted
                loop
                playsInline
                className={`h-full w-full object-cover ${s.zoom}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: video with text overlay */}
      <div className="lg:hidden relative h-[85vh] min-h-[500px]">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <video
              src={s.src}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Mobile text overlay */}
        <div className="relative z-10 flex h-full items-end pb-20">
          <div className="px-6 w-full">
            <div className="max-w-sm">
              <h1
                className={`font-display text-hero text-white transition-all duration-300 ease-out ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`mt-4 text-base text-white/80 transition-all duration-300 ease-out delay-75 ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {slide.description}
              </p>
              <div
                className={`mt-8 transition-all duration-300 ease-out delay-100 ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Button
                  href={slide.cta.href}
                  className="bg-white !text-black hover:bg-white/90 border-0"
                >
                  {slide.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex h-10 w-10 items-center justify-center border border-white/30 text-white/70 transition-colors duration-150 hover:border-white hover:text-white"
            aria-label={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>
          <button
            onClick={() => {
              prev();
              setIsAutoPlaying(false);
            }}
            className="flex h-10 w-10 items-center justify-center border border-white/30 text-white/70 transition-colors duration-150 hover:border-white hover:text-white"
            aria-label="Zurück"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <button
            onClick={() => {
              next();
              setIsAutoPlaying(false);
            }}
            className="flex h-10 w-10 items-center justify-center border border-white/30 text-white/70 transition-colors duration-150 hover:border-white hover:text-white"
            aria-label="Weiter"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-6 left-6 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goTo(i);
                setIsAutoPlaying(false);
              }}
              className={`h-0.5 transition-all duration-300 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
