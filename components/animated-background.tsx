"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      // standalone `translate` composes with the keyframe `transform` without conflict
      if (blob1.current) blob1.current.style.translate = `0px ${y * 0.12}px`;
      if (blob2.current) blob2.current.style.translate = `0px ${y * -0.08}px`;
      if (blob3.current) blob3.current.style.translate = `0px ${y * 0.06}px`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="blob-container">
      <div ref={blob1} className="blob blob-1" />
      <div ref={blob2} className="blob blob-2" />
      <div ref={blob3} className="blob blob-3" />
    </div>
  );
}
