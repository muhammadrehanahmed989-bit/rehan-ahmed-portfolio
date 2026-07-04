import { useEffect, useState } from "react";

export const Background = () => {
  const [particles, setParticles] = useState<Array<{ x: number; d: number; delay: number; size: number; hue: number }>>([]);

  useEffect(() => {
    const arr = Array.from({ length: 26 }).map(() => ({
      x: Math.random() * 100,
      d: 10 + Math.random() * 18,
      delay: -Math.random() * 20,
      size: 1 + Math.random() * 2.5,
      hue: [258, 217, 189, 320][Math.floor(Math.random() * 4)],
    }));
    setParticles(arr);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Radial hero gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-[60vh] vignette-top" />
      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-70" />
      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/25 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px] animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full bg-magenta/15 blur-[130px] animate-blob" style={{ animationDelay: "-12s" }} />
      <div className="absolute top-2/3 left-10 w-[360px] h-[360px] rounded-full bg-indigo/20 blur-[110px] animate-blob" style={{ animationDelay: "-3s" }} />

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
              boxShadow: `0 0 ${p.size * 4}px hsl(${p.hue} 90% 60% / 0.8)`,
              animation: `particle ${p.d}s linear infinite`,
              animationDelay: `${p.delay}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};
