import { useEffect, useState } from "react";

export const Background = () => {
  const [particles, setParticles] = useState<Array<{ x: number; d: number; delay: number; size: number; hue: number }>>([]);

  useEffect(() => {
    const hues = [271, 330, 205, 187]; // purple, pink, sky, cyan
    const arr = Array.from({ length: 26 }).map(() => ({
      x: Math.random() * 100,
      d: 14 + Math.random() * 22,
      delay: -Math.random() * 24,
      size: 2 + Math.random() * 3.5,
      hue: hues[Math.floor(Math.random() * hues.length)],
    }));
    setParticles(arr);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora layered gradients */}
      <div className="absolute inset-0 animate-aurora" style={{ backgroundImage: "var(--aurora-1), var(--aurora-2), var(--aurora-3), var(--aurora-4)" }} />

      {/* Floating aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-purple/40 blur-[140px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[680px] h-[680px] rounded-full bg-sky/40 blur-[160px] animate-blob" style={{ animationDelay: "-8s" }} />
      <div className="absolute bottom-0 left-1/4 w-[540px] h-[540px] rounded-full bg-pink/30 blur-[140px] animate-blob" style={{ animationDelay: "-14s" }} />
      <div className="absolute top-2/3 left-10 w-[420px] h-[420px] rounded-full bg-cyan/30 blur-[120px] animate-blob" style={{ animationDelay: "-4s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay" />

      {/* Top white vignette */}
      <div className="absolute inset-x-0 top-0 h-[70vh] vignette-top" />

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-[-10px] rounded-full"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
              background: `hsl(${p.hue} 90% 70%)`,
              boxShadow: `0 0 ${p.size * 6}px hsl(${p.hue} 90% 65% / 0.9)`,
              animation: `particle ${p.d}s linear infinite`,
              animationDelay: `${p.delay}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    </div>
  );
};
