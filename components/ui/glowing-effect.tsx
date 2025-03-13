"use client";

import { useEffect, useRef } from "react";

interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
  borderWidth?: number;
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  borderWidth = 3,
}: GlowingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const container = containerRef.current;
    const glow = glowRef.current;

    if (!container || !glow) return;

    const updateGlow = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );

      const maxDistance = Math.sqrt(
        Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
      );

      if (distance < maxDistance * inactiveZone) {
        glow.style.background = "none";
        return;
      }

      const angle = Math.atan2(y - centerY, x - centerX);
      const offsetX = Math.cos(angle) * proximity;
      const offsetY = Math.sin(angle) * proximity;

      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const intensity = Math.max(0, 1 - normalizedDistance);

      const glowX = centerX + offsetX;
      const glowY = centerY + offsetY;

      const gradient = `radial-gradient(circle at ${glowX}px ${glowY}px, 
        rgba(106, 190, 208, ${intensity * 0.5}), 
        transparent ${spread}%)`;

      glow.style.background = gradient;
    };

    const handleMouseLeave = () => {
      glow.style.background = "none";
    };

    container.addEventListener("mousemove", updateGlow);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", updateGlow);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [spread, glow, disabled, proximity, inactiveZone]);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 rounded-[1.25rem] md:rounded-[1.5rem]"
      />
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-[1.25rem] transition-opacity md:rounded-[1.5rem]"
        style={{
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: `xor`,
          maskComposite: `exclude`,
          padding: borderWidth,
        }}
      />
    </>
  );
} 