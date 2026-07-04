import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Cpu, Palette, Rocket, Github, Linkedin, Instagram, Youtube,
  Twitter, Mail, MapPin, Zap, Layers, Wand2, LineChart, MessageSquare, Brain, Code2, Figma,
  Award, GraduationCap, Trophy, ExternalLink, Star, Quote, Send, PhoneCall,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Nav } from "@/components/Nav";
import { Background } from "@/components/Background";

/* ---------------- primitives ---------------- */

const spring = { type: "spring" as const, stiffness: 120, damping: 18, mass: 0.9 };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { ...spring } },
};

const Section: React.FC<React.PropsWithChildren<{ id?: string; eyebrow?: string; title?: React.ReactNode; kicker?: string; className?: string }>> = ({
  id, eyebrow, title, kicker, children, className = "",
}) => (
  <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
    <div className="container relative">
      {(eyebrow || title) && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 mb-5 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
              {eyebrow}
            </motion.div>
          )}
          {title && (
            <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-balance leading-[1.05]">
              {title}
            </motion.h2>
          )}
          {kicker && (
            <motion.p variants={fadeUp} className="mt-5 text-lg text-muted-foreground text-balance">
              {kicker}
            </motion.p>
          )}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

/* Continuous floating wrapper */
const Floaty: React.FC<React.PropsWithChildren<{ delay?: number; amount?: number; duration?: number; className?: string }>> = ({
  children, delay = 0, amount = 8, duration = 6, className,
}) => {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amount, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
};

/* ---------------- HERO ---------------- */

const orbitCards = [
  { icon: Sparkles, label: "Meta Ads", color: "hsl(258 89% 66%)" },
  { icon: Brain,    label: "AI Creator", color: "hsl(189 94% 55%)" },
  { icon: Figma,    label: "UI / UX", color: "hsl(320 85% 62%)" },
  { icon: Code2,    label: "Developer", color: "hsl(217 91% 60%)" },
  { icon: LineChart,label: "Growth", color: "hsl(140 70% 55%)" },
  { icon: Github,   label: "Open Source", color: "hsl(240 20% 90%)" },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-32 pb-16">
      <div className="container relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...spring }}>
              <div className="inline-flex items-center gap-2.5 glass glass-border-glow rounded-full pl-1.5 pr-4 py-1.5 text-xs font-mono uppercase tracking-[0.22em]">
                <span className="relative flex items-center justify-center h-6 w-6 rounded-full gradient-brand text-background">
                  <Sparkles size={12} />
                </span>
                Available for premium projects · 2026
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...spring }}
              className="font-display font-semibold text-[13vw] xs:text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.03em] mt-6"
            >
              <span className="block text-foreground/95">Muhammad</span>
              <span className="block">
                <span className="gradient-text">Rehan </span>
                <span className="text-foreground/95">Ahmed</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ...spring }}
              className="mt-7 max-w-xl text-lg sm:text-xl text-muted-foreground text-balance"
            >
              Digital Marketing Specialist, AI Creator & Creative Developer engineering
              <span className="text-foreground"> cinematic brand experiences </span>
              and high-performance Meta Ads that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ...spring }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
                Explore my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm hover:bg-muted/40 transition-colors">
                Start a project <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, ...spring }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { k: "6+", v: "Years crafting" },
                { k: "80+", v: "Brands scaled" },
                { k: "$4M+", v: "Ad spend managed" },
              ].map((s) => (
                <Floaty key={s.k} amount={5} duration={7} delay={Math.random()}>
                  <div className="glass rounded-2xl p-4">
                    <div className="font-display text-2xl gradient-text">{s.k}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                  </div>
                </Floaty>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait + orbit */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-square">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, ...spring }}
              className="absolute inset-0 rounded-full gradient-brand opacity-40 blur-3xl"
            />
            {/* Orbit rings */}
            <div className="absolute inset-6 rounded-full border border-border/60" />
            <div className="absolute inset-16 rounded-full border border-border/40" />
            <div className="absolute inset-28 rounded-full border border-border/20" />

            <Floaty amount={10} duration={8} className="absolute inset-8 md:inset-10">
              <div className="relative h-full w-full rounded-[42%] overflow-hidden glass-strong glass-border-glow">
                <img
                  src={portrait}
                  alt="Portrait of Muhammad Rehan Ahmed"
                  width={832}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass rounded-2xl px-3 py-2 text-xs">
                  <span className="font-mono text-muted-foreground">// karachi · remote</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    online
                  </span>
                </div>
              </div>
            </Floaty>

            {/* Orbiting cards */}
            {mounted && orbitCards.map((c, i) => {
              const angle = (i / orbitCards.length) * 360;
              const radius = "min(220px, 42vw)";
              return (
                <div
                  key={c.label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    ["--r" as any]: radius,
                    animation: `orbit ${28 + i * 2}s linear infinite`,
                    animationDelay: `-${i * 3}s`,
                  }}
                >
                  <div
                    className="glass rounded-2xl px-3 py-2 flex items-center gap-2 text-xs whitespace-nowrap shadow-lg"
                    style={{ animation: `float-slow ${5 + i}s ease-in-out infinite` }}
                  >
                    <span className="h-6 w-6 rounded-lg flex items-center justify-center" style={{ background: `${c.color}22`, color: c.color }}>
                      <c.icon size={12} />
                    </span>
                    <span className="font-medium">{c.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- ABOUT ---------------- */

const pillars = [
  { icon: Rocket, label: "Growth", desc: "Meta Ads engineered for ROAS", color: "hsl(258 89% 66%)" },
  { icon: Palette, label: "Design", desc: "UI/UX with cinematic polish", color: "hsl(320 85% 62%)" },
  { icon: Cpu, label: "AI", desc: "Automation & creative pipelines", color: "hsl(189 94% 55%)" },
  { icon: Code2, label: "Build", desc: "Production-grade experiences", color: "hsl(217 91% 60%)" },
];

const About = () => (
  <Section
    id="about"
    eyebrow="About"
    title={<>A rare hybrid of <span className="gradient-text">strategy, art & code.</span></>}
  >
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          I'm <span className="text-foreground">Rehan</span> — a multidisciplinary creator obsessed with the intersection
          of storytelling, technology and performance marketing. For the past six years I've helped brands
          break through with campaigns that feel like art and convert like a spreadsheet.
        </p>
        <p>
          I lead <span className="text-foreground">Meta Ads systems</span>, direct AI-generated visuals,
          design product interfaces and ship the code myself when the vision demands it. My work sits where
          <span className="text-foreground"> luxury branding meets machine intelligence.</span>
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {["Meta Ads", "Creative Direction", "AI Workflows", "UI/UX", "Brand Systems", "React"].map((t) => (
            <span key={t} className="glass rounded-full px-4 py-1.5 text-sm text-foreground/80">{t}</span>
          ))}
        </div>
      </div>

      {/* Pillar diagram */}
      <div className="relative aspect-square max-w-[520px] mx-auto w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={spring}
          className="absolute inset-0"
        >
          {/* rings */}
          <div className="absolute inset-8 rounded-full border border-border/60" />
          <div className="absolute inset-20 rounded-full border border-border/40" />
          {/* center */}
          <Floaty className="absolute inset-0 flex items-center justify-center">
            <div className="glass-strong glass-border-glow rounded-full h-32 w-32 flex flex-col items-center justify-center animate-glow-pulse">
              <span className="font-display text-2xl gradient-text">R.A</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Operator</span>
            </div>
          </Floaty>

          {pillars.map((p, i) => {
            const pos = [
              "top-0 left-1/2 -translate-x-1/2",
              "right-0 top-1/2 -translate-y-1/2",
              "bottom-0 left-1/2 -translate-x-1/2",
              "left-0 top-1/2 -translate-y-1/2",
            ][i];
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.15 + i * 0.08 }}
                className={`absolute ${pos}`}
              >
                <Floaty amount={6} duration={6 + i} delay={i * 0.4}>
                  <div className="glass rounded-2xl p-4 w-40 text-center hover:-translate-y-1 transition-transform">
                    <div className="mx-auto h-10 w-10 rounded-xl flex items-center justify-center mb-2"
                      style={{ background: `${p.color}22`, color: p.color, boxShadow: `0 0 20px ${p.color}55` }}>
                      <p.icon size={18} />
                    </div>
                    <div className="font-display font-semibold text-sm">{p.label}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{p.desc}</div>
                  </div>
                </Floaty>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </Section>
);

/* ---------------- SKILLS ---------------- */

const skills = [
  { name: "Meta Ads",      lvl: 98, icon: Sparkles, color: "hsl(258 89% 66%)" },
  { name: "Creative Direction", lvl: 94, icon: Wand2, color: "hsl(320 85% 62%)" },
  { name: "UI / UX",       lvl: 92, icon: Figma, color: "hsl(189 94% 55%)" },
  { name: "AI Workflows",  lvl: 90, icon: Brain, color: "hsl(217 91% 60%)" },
  { name: "React & TS",    lvl: 88, icon: Code2, color: "hsl(258 89% 66%)" },
  { name: "Copywriting",   lvl: 86, icon: MessageSquare, color: "hsl(320 85% 62%)" },
  { name: "Analytics",     lvl: 90, icon: LineChart, color: "hsl(189 94% 55%)" },
  { name: "Motion",        lvl: 82, icon: Layers, color: "hsl(217 91% 60%)" },
];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title={<>An <span className="gradient-text">operating system</span> for modern brands.</>}
    kicker="Every discipline below runs in-house. No hand-offs, no dilution — just one system that thinks, designs, builds and scales."
  >
    {/* Desktop floating layout */}
    <div className="hidden md:block relative h-[560px]">
      {skills.map((s, i) => {
        // curated positions
        const pos = [
          { top: "4%",  left: "6%" },
          { top: "0%",  left: "36%" },
          { top: "8%",  right: "8%" },
          { top: "38%", left: "18%" },
          { top: "44%", left: "48%" },
          { top: "34%", right: "4%" },
          { bottom: "4%", left: "8%" },
          { bottom: "6%", right: "22%" },
        ][i];
        return (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...spring, delay: i * 0.06 }}
            className="absolute w-64"
            style={pos as any}
          >
            <Floaty amount={7} duration={6 + (i % 3)} delay={i * 0.3}>
              <div className="group glass glass-border-glow rounded-2xl p-5 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_hsl(258_89%_50%/0.6)]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.color}22`, color: s.color, boxShadow: `0 0 24px ${s.color}55` }}>
                    <s.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-semibold">{s.name}</div>
                    <div className="text-[11px] font-mono text-muted-foreground">{s.lvl}% mastery</div>
                  </div>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.lvl}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.06, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${s.color}, hsl(189 94% 65%))` }}
                  />
                </div>
              </div>
            </Floaty>
          </motion.div>
        );
      })}
    </div>

    {/* Mobile DNA layout */}
    <div className="md:hidden relative pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-magenta opacity-60" />
      <div className="space-y-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: i * 0.05 }}
            className={`relative ${i % 2 === 0 ? "" : "ml-6"}`}
          >
            <span
              className="absolute -left-8 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full"
              style={{ background: s.color, boxShadow: `0 0 14px ${s.color}` }}
            />
            <div className="glass rounded-2xl p-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${s.color}22`, color: s.color }}>
                <s.icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-sm">{s.name}</div>
                  <div className="text-[10px] font-mono text-muted-foreground">{s.lvl}%</div>
                </div>
                <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${s.lvl}%`, background: `linear-gradient(90deg, ${s.color}, hsl(189 94% 65%))` }} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

/* ---------------- JOURNEY ---------------- */

const journey = [
  { year: "2019", title: "First campaign shipped", desc: "Started freelancing — small local brands, big lessons." },
  { year: "2021", title: "Meta Ads specialist", desc: "Managed six-figure budgets across e-com verticals." },
  { year: "2022", title: "AI early adopter",  desc: "Built creative pipelines with generative tools." },
  { year: "2024", title: "Creative studio",   desc: "Founded a boutique studio blending brand + AI." },
  { year: "2026", title: "Now",               desc: "Scaling premium brands with cinematic systems." },
];

const Journey = () => (
  <Section
    id="journey"
    eyebrow="Journey"
    title={<>Six years, <span className="gradient-text">one obsession</span>.</>}
  >
    {/* Desktop horizontal timeline */}
    <div className="hidden md:block relative">
      <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="grid grid-cols-5 gap-4">
        {journey.map((j, i) => (
          <motion.div
            key={j.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...spring, delay: i * 0.1 }}
            className="relative"
          >
            <div className="text-center font-mono text-xs tracking-widest text-muted-foreground uppercase">{j.year}</div>
            <div className="relative mx-auto my-4 h-4 w-4 rounded-full gradient-brand shadow-[0_0_20px_hsl(258_89%_66%/0.8)]">
              <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
            </div>
            <Floaty amount={5} duration={6 + (i % 3)} delay={i * 0.3}>
              <div className="glass rounded-2xl p-5 h-full">
                <div className="font-display font-semibold">{j.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{j.desc}</p>
              </div>
            </Floaty>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mobile vertical timeline */}
    <div className="md:hidden relative pl-8">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-magenta" />
      <div className="space-y-6">
        {journey.map((j, i) => (
          <motion.div
            key={j.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-8 top-2 h-4 w-4 rounded-full gradient-brand shadow-[0_0_16px_hsl(258_89%_66%/0.8)]" />
            <div className="glass rounded-2xl p-5">
              <div className="font-mono text-[11px] tracking-widest text-accent">{j.year}</div>
              <div className="font-display font-semibold mt-1">{j.title}</div>
              <p className="text-sm text-muted-foreground mt-1">{j.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

/* ---------------- CERTIFICATES ---------------- */

const certs = [
  { icon: Award, org: "Meta", title: "Certified Media Buying Professional", year: "2024", color: "hsl(217 91% 60%)" },
  { icon: GraduationCap, org: "Google", title: "Advanced Digital Marketing", year: "2023", color: "hsl(189 94% 55%)" },
  { icon: Trophy, org: "Microsoft", title: "AI Fundamentals Specialist", year: "2025", color: "hsl(258 89% 66%)" },
];

const Certificates = () => (
  <Section
    id="certificates"
    eyebrow="Certifications"
    title={<>Credentials from the <span className="gradient-text">gatekeepers</span>.</>}
  >
    <div className="grid md:grid-cols-3 gap-6">
      {certs.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: i * 0.1 }}
        >
          <Floaty amount={8} duration={7 + i} delay={i * 0.4}>
            <div className="group relative glass-strong glass-border-glow rounded-3xl p-7 h-full overflow-hidden hover:-translate-y-1 transition-transform duration-500">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70"
                style={{ background: c.color }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${c.color}22`, color: c.color, boxShadow: `0 0 30px ${c.color}55` }}>
                    <c.icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
                <div className="mt-6 font-mono text-xs tracking-widest uppercase text-muted-foreground">{c.org}</div>
                <div className="font-display text-xl font-semibold mt-1 leading-snug">{c.title}</div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Verified
                  </span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
            </div>
          </Floaty>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ---------------- DIGITAL PRESENCE ---------------- */

const DigitalPresence = () => (
  <Section
    id="presence"
    eyebrow="Digital Presence"
    title={<>Where I <span className="gradient-text">learn & build</span> in public.</>}
  >
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "Microsoft Learn",
          desc: "Continuous AI + cloud pathways. 40+ modules completed across Copilot, Azure AI, and applied prompt engineering.",
          icon: GraduationCap,
          stat1: { k: "40+", v: "Modules" },
          stat2: { k: "12", v: "Trophies" },
          color: "hsl(217 91% 60%)",
          cta: "View profile",
        },
        {
          title: "GitHub",
          desc: "Open-source components, AI experiments, and marketing tooling. Weekly commits, always shipping.",
          icon: Github,
          stat1: { k: "120+", v: "Repos" },
          stat2: { k: "1.2k", v: "Stars" },
          color: "hsl(258 89% 66%)",
          cta: "Follow",
        },
      ].map((p, i) => (
        <motion.a
          key={p.title}
          href="#"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: i * 0.1 }}
          className="group relative glass-strong glass-border-glow rounded-3xl p-8 overflow-hidden block"
        >
          <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity"
            style={{ background: `radial-gradient(ellipse at top right, ${p.color}44, transparent 60%)` }} />
          <div className="relative flex flex-col h-full">
            <div className="flex items-start justify-between">
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${p.color}22`, color: p.color, boxShadow: `0 0 30px ${p.color}55` }}>
                <p.icon size={26} />
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mt-6">{p.title}</h3>
            <p className="text-muted-foreground mt-2 max-w-md">{p.desc}</p>
            <div className="mt-8 flex gap-4">
              {[p.stat1, p.stat2].map((s) => (
                <div key={s.v} className="glass rounded-2xl px-4 py-3">
                  <div className="font-display text-xl gradient-text">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </Section>
);

/* ---------------- PROJECTS ---------------- */

const projects = [
  { name: "Noor Apparel", tag: "E-commerce · Meta Ads", desc: "Luxury modestwear scaled to $1.2M in 9 months via full-funnel Meta systems.", grad: "linear-gradient(135deg, hsl(320 85% 62%), hsl(258 89% 56%))" },
  { name: "Bloom Cafe",   tag: "Brand · Local growth", desc: "Full brand identity + local hero campaigns. 5x foot traffic within 3 months.", grad: "linear-gradient(135deg, hsl(140 60% 55%), hsl(189 94% 55%))" },
  { name: "Halo Studio",  tag: "Creative direction",  desc: "Cinematic launch film + digital microsite for a premium fragrance house.", grad: "linear-gradient(135deg, hsl(45 90% 65%), hsl(320 85% 62%))" },
  { name: "Vertex Fitness", tag: "Performance · Product", desc: "Coaching platform: UI/UX, marketing site & paid acquisition engine.", grad: "linear-gradient(135deg, hsl(0 85% 60%), hsl(30 95% 55%))" },
  { name: "Aurora AI",    tag: "AI product",           desc: "Generative moodboard tool for creative directors. Launched to 4k waitlist.", grad: "linear-gradient(135deg, hsl(258 89% 66%), hsl(189 94% 55%))" },
  { name: "Lumen Coffee", tag: "Brand system",         desc: "Wordmark, packaging system, and Shopify build for a specialty roaster.", grad: "linear-gradient(135deg, hsl(25 55% 45%), hsl(15 70% 55%))" },
  { name: "Nimbus AI",    tag: "SaaS · Growth",        desc: "Positioning overhaul + inbound engine. MRR 3.4x in two quarters.", grad: "linear-gradient(135deg, hsl(217 91% 60%), hsl(189 94% 65%))" },
];

const ProjectCard = ({ p, i, span }: { p: typeof projects[number]; i: number; span?: string }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ ...spring, delay: (i % 4) * 0.08 }}
    className={`group relative overflow-hidden rounded-3xl glass-strong glass-border-glow ${span || ""}`}
  >
    <Floaty amount={4} duration={9 + (i % 3)} delay={i * 0.2}>
      <div className="relative h-full">
        {/* cover */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-105"
            style={{ background: p.grad }} />
          <div className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 40%)" }} />
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
            {String(i + 1).padStart(2, "0")} · Case study
          </div>
          <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center group-hover:gradient-brand transition-all">
            <ArrowUpRight size={16} className="text-foreground group-hover:text-background" />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="font-display text-2xl sm:text-3xl font-semibold text-white drop-shadow">{p.name}</div>
          </div>
        </div>
        {/* meta */}
        <div className="p-5 sm:p-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-accent">{p.tag}</div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Zap size={12} className="text-accent" /> Growth · Design · Build</span>
            <span className="font-mono">2024–26</span>
          </div>
        </div>
      </div>
    </Floaty>
  </motion.article>
);

const Projects = () => (
  <Section
    id="work"
    eyebrow="Selected Work"
    title={<>Brands scaled with <span className="gradient-text">cinema-grade craft</span>.</>}
    kicker="Seven pieces of work spanning e-commerce, SaaS, hospitality and AI products."
  >
    {/* Asymmetric grid on desktop */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      <ProjectCard p={projects[0]} i={0} span="md:col-span-4" />
      <ProjectCard p={projects[1]} i={1} span="md:col-span-2" />
      <ProjectCard p={projects[2]} i={2} span="md:col-span-2" />
      <ProjectCard p={projects[3]} i={3} span="md:col-span-2" />
      <ProjectCard p={projects[4]} i={4} span="md:col-span-2" />
      <ProjectCard p={projects[5]} i={5} span="md:col-span-3" />
      <ProjectCard p={projects[6]} i={6} span="md:col-span-3" />
    </div>
  </Section>
);

/* ---------------- TESTIMONIALS ---------------- */

const testimonials = [
  { name: "Sara Malik", role: "Founder, Noor Apparel", quote: "Rehan operates like a full creative department. Our Meta Ads finally look like the brand and outperform every previous agency." },
  { name: "Daniel Ortiz", role: "CMO, Nimbus AI", quote: "Rare combination of taste and analytical rigor. He rebuilt our positioning and paid engine in six weeks." },
  { name: "Aiman Khan", role: "Owner, Bloom Cafe", quote: "From logo to launch film to Instagram funnel — everything felt cohesive. Foot traffic exploded." },
  { name: "Marcus Vale", role: "Creative Director, Halo Studio", quote: "The AI-directed campaign visuals were unreal. Client thought we shot on location in Paris." },
  { name: "Priya N.",   role: "Product Lead, Aurora AI", quote: "He shipped a beautiful marketing site AND the onboarding UI. One person, one vision, zero friction." },
  { name: "Omar Riaz",  role: "COO, Vertex Fitness", quote: "Cinematic brand, ruthless performance. Best hire of the year." },
];

const Testimonials = () => (
  <Section
    id="testimonials"
    eyebrow="Signal"
    title={<>What <span className="gradient-text">founders & operators</span> say.</>}
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {testimonials.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ ...spring, delay: (i % 3) * 0.08 }}
        >
          <Floaty amount={5} duration={7 + (i % 3)} delay={i * 0.25}>
            <div className="glass rounded-3xl p-6 h-full flex flex-col hover:-translate-y-1 transition-transform">
              <Quote className="text-primary/70" size={20} />
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={12} fill="currentColor" />)}
                </div>
              </figcaption>
            </div>
          </Floaty>
        </motion.figure>
      ))}
    </div>
  </Section>
);

/* ---------------- CONTACT ---------------- */

const socials = [
  { icon: Github, label: "GitHub" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "X / Twitter" },
  { icon: Youtube, label: "YouTube" },
];

const Contact = () => (
  <Section id="contact" eyebrow="Contact" title={<>Let's build something <span className="gradient-text">unforgettable</span>.</>}>
    <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6">
      {/* Card 1 — info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={spring}
      >
        <Floaty amount={6} duration={8}>
          <div className="relative glass-strong glass-border-glow rounded-3xl p-8 sm:p-10 overflow-hidden h-full">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Booking Q3 · 2026
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold mt-5 leading-tight">
                One collaborator. <br/> <span className="gradient-text">Every discipline.</span>
              </h3>
              <p className="text-muted-foreground mt-3 max-w-md">
                Whether you need a Meta Ads overhaul, a brand refresh, an AI creative pipeline or all three — start here.
              </p>

              <div className="mt-8 space-y-3">
                <a href="mailto:hello@rehanahmed.co" className="flex items-center gap-3 glass rounded-2xl px-4 py-3 hover:-translate-y-0.5 transition-transform">
                  <span className="h-10 w-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center"><Mail size={16} /></span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="text-sm truncate">hello@rehanahmed.co</div>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground" />
                </a>
                <div className="flex items-center gap-3 glass rounded-2xl px-4 py-3">
                  <span className="h-10 w-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center"><MapPin size={16} /></span>
                  <div className="flex-1">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Based</div>
                    <div className="text-sm">Karachi · Remote worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass rounded-2xl px-4 py-3">
                  <span className="h-10 w-10 rounded-xl bg-magenta/20 text-magenta flex items-center justify-center"><PhoneCall size={16} /></span>
                  <div className="flex-1">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Response</div>
                    <div className="text-sm">Within 24 hours, always</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a key={s.label} href="#" aria-label={s.label}
                    className="h-11 w-11 rounded-xl glass flex items-center justify-center hover:gradient-brand hover:text-background transition-all">
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Floaty>
      </motion.div>

      {/* Card 2 — form / CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...spring, delay: 0.1 }}
      >
        <Floaty amount={7} duration={9} delay={0.4}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative glass-strong glass-border-glow rounded-3xl p-8 sm:p-10 h-full flex flex-col"
          >
            <h3 className="font-display text-2xl font-semibold">Start the conversation</h3>
            <p className="text-sm text-muted-foreground mt-1">Tell me about your brand & goals.</p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Name", type: "text", placeholder: "Your name" },
                { label: "Email", type: "email", placeholder: "you@brand.com" },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">{f.label}</span>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="mt-1.5 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Project</span>
                <textarea
                  rows={4}
                  placeholder="Meta Ads, brand system, AI product, or all of the above…"
                  className="mt-1.5 w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition resize-none"
                />
              </label>
            </div>
            <button
              type="submit"
              className="group mt-6 relative inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-medium text-background hover:-translate-y-0.5 transition-transform"
            >
              Send message
              <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              <span className="absolute inset-0 rounded-full animate-glow-pulse pointer-events-none" />
            </button>
            <p className="mt-3 text-[11px] text-muted-foreground text-center">
              Or email directly — I read every message personally.
            </p>
          </form>
        </Floaty>
      </motion.div>
    </div>

    {/* Footer strip */}
    <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <span>© 2026 Muhammad Rehan Ahmed. All rights reserved.</span>
      <span className="font-mono">Crafted with intention · Karachi ⇄ World</span>
    </div>
  </Section>
);

/* ---------------- PAGE ---------------- */

const Index = () => {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Certificates />
        <DigitalPresence />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

// Nav import needs to resolve — using inline require pattern replaced by proper import.
import { Nav } from "@/components/Nav";
export default Index;
