import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Cpu, Palette, Rocket, Github, Linkedin, Instagram,
  Mail, MapPin, Zap, Layers, Wand2, LineChart, MessageSquare, Brain, Code2, Figma,
  Award, GraduationCap, Trophy, ExternalLink, Send, GraduationCap as MSIcon,
  BarChart3, Target, Bot, Workflow, Tag, PieChart,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Nav } from "@/components/Nav";
import { Background } from "@/components/Background";
import { MouseSpotlight } from "@/components/MouseSpotlight";

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
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
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

/* ---------------- HERO with functional orbiting icons ---------------- */

type Orb = { label: string; href: string; icon: React.ComponentType<any>; color: string };

const orbitIcons: Orb[] = [
  { label: "GitHub",     href: "https://github.com/muhammadrehanahmed989-bit",             icon: Github,    color: "#111827" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/",                                icon: Linkedin,  color: "#0A66C2" },
  { label: "Meta Ads",   href: "https://www.facebook.com/business/ads",                    icon: Target,    color: "#1877F2" },
  { label: "Google Ads", href: "https://ads.google.com/",                                  icon: BarChart3, color: "#34A853" },
  { label: "Gmail",      href: "mailto:muhammadrehanahmed989@gmail.com",                   icon: Mail,      color: "#EA4335" },
  { label: "Figma",      href: "https://www.figma.com/",                                   icon: Figma,     color: "#A259FF" },
  { label: "AI",         href: "https://openai.com/",                                      icon: Brain,     color: "#8B5CF6" },
  { label: "Instagram",  href: "https://www.instagram.com/",                               icon: Instagram, color: "#E1306C" },
];

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-32 pb-16">
      <div className="container relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, ...spring }}>
              <div className="inline-flex items-center gap-2.5 glass glass-border-glow rounded-full pl-1.5 pr-4 py-1.5 text-xs font-mono uppercase tracking-[0.22em]">
                <span className="relative flex items-center justify-center h-6 w-6 rounded-full gradient-brand text-white">
                  <Sparkles size={12} />
                </span>
                Available for premium projects · 2026
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ...spring }}
              className="font-display font-semibold text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.03em] mt-6"
            >
              <span className="block text-foreground">Muhammad</span>
              <span className="block">
                <span className="gradient-text">Rehan </span>
                <span className="text-foreground">Ahmed</span>
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
              and high-performance Meta &amp; Google Ads that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ...spring }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#work" className="group relative inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-medium text-white magnetic-btn shadow-[0_20px_50px_-15px_hsl(271_91%_60%/0.6)]">
                Explore my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm hover:bg-white/70 transition-colors magnetic-btn">
                Start a project <ArrowUpRight size={16} />
              </a>
            </motion.div>

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
              ].map((s, i) => (
                <Floaty key={s.k} amount={5} duration={6 + i} delay={i * 0.3}>
                  <div className="glass rounded-3xl p-4">
                    <div className="font-display text-2xl gradient-text">{s.k}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                  </div>
                </Floaty>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait + orbiting functional icons */}
          <div className="relative mx-auto w-full max-w-[560px] aspect-square">
            {/* Aurora glow behind */}
            <div className="absolute inset-6 rounded-full bg-purple/30 blur-3xl animate-glow-pulse" />
            <div className="absolute inset-10 rounded-full bg-cyan/25 blur-3xl" />

            {/* Rotating rings */}
            <div className="absolute inset-4 rounded-full border border-purple/25 animate-ring-spin" />
            <div className="absolute inset-16 rounded-full border border-sky/25 animate-ring-spin-rev" />
            <div className="absolute inset-28 rounded-full border border-pink/20 animate-ring-spin" style={{ animationDuration: "60s" }} />

            {/* Portrait */}
            <Floaty amount={10} duration={8} className="absolute inset-[18%]">
              <div className="relative h-full w-full rounded-full overflow-hidden glass-strong glass-border-glow shadow-[0_40px_100px_-30px_hsl(271_91%_60%/0.5)]">
                <img
                  src={portrait}
                  alt="Portrait of Muhammad Rehan Ahmed"
                  width={832}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/60" />
              </div>
            </Floaty>

            {/* Status pill */}
            <Floaty amount={6} duration={5} className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-10">
              <div className="glass-strong rounded-full px-4 py-2 flex items-center gap-2 text-xs whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                <span className="font-mono">Faisalabad · Available</span>
              </div>
            </Floaty>

            {/* Orbiting functional icons — single evenly spaced ring */}
            {mounted && orbitIcons.map((c, i) => {
              const duration = 42;
              const angleOffset = (i / orbitIcons.length) * duration;
              return (
                <div
                  key={c.label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    ["--r" as any]: "min(240px, 42vw)",
                    animation: `orbit ${duration}s linear infinite`,
                    animationDelay: `-${angleOffset}s`,
                  }}
                >
                  <Floaty amount={4} duration={4 + (i % 3)} delay={i * 0.15}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={c.label}
                      className="group relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-2xl glass glass-border-glow hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_-10px_hsl(271_91%_60%/0.35)]"
                      style={{ color: c.color }}
                    >
                      <c.icon size={18} />
                      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono uppercase tracking-wider whitespace-nowrap glass rounded-full px-2 py-1 text-foreground">
                        {c.label}
                      </span>
                    </a>
                  </Floaty>
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
  { icon: Rocket,  label: "Growth",  desc: "Meta & Google Ads engineered for ROAS", color: "#8B5CF6" },
  { icon: Palette, label: "Design",  desc: "UI/UX with cinematic polish",           color: "#EC4899" },
  { icon: Cpu,     label: "AI",      desc: "Automation & creative pipelines",       color: "#22D3EE" },
  { icon: Code2,   label: "Build",   desc: "Production-grade experiences",          color: "#60A5FA" },
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
          I'm <span className="text-foreground font-medium">Rehan</span> — a multidisciplinary creator obsessed with the intersection
          of storytelling, technology and performance marketing. For the past six years I've helped brands
          break through with campaigns that feel like art and convert like a spreadsheet.
        </p>
        <p>
          I lead <span className="text-foreground font-medium">Meta &amp; Google Ads systems</span>, direct AI-generated visuals,
          design product interfaces and ship the code myself when the vision demands it. My work sits where
          <span className="text-foreground font-medium"> luxury branding meets machine intelligence.</span>
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {["Meta Ads", "Google Ads", "Creative Direction", "AI Workflows", "UI/UX", "Brand Systems", "React"].map((t) => (
            <span key={t} className="glass rounded-full px-4 py-1.5 text-sm text-foreground/80">{t}</span>
          ))}
        </div>
      </div>

      <div className="relative aspect-square max-w-[520px] mx-auto w-full">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={spring}
          className="absolute inset-0"
        >
          <div className="absolute inset-8 rounded-full border border-purple/20 animate-ring-spin" />
          <div className="absolute inset-20 rounded-full border border-sky/20 animate-ring-spin-rev" />
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
                  <div className="glass rounded-3xl p-4 w-40 text-center hover:-translate-y-1 transition-transform">
                    <div className="mx-auto h-10 w-10 rounded-2xl flex items-center justify-center mb-2"
                      style={{ background: `${p.color}1a`, color: p.color, boxShadow: `0 0 24px ${p.color}55` }}>
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
  { name: "Meta Ads",           lvl: 98, icon: Target,        color: "#1877F2" },
  { name: "Google Ads",         lvl: 94, icon: BarChart3,     color: "#34A853" },
  { name: "Creative Direction", lvl: 94, icon: Wand2,         color: "#EC4899" },
  { name: "UI / UX",            lvl: 92, icon: Figma,         color: "#A259FF" },
  { name: "AI Workflows",       lvl: 90, icon: Brain,         color: "#8B5CF6" },
  { name: "React & TS",         lvl: 88, icon: Code2,         color: "#60A5FA" },
  { name: "Copywriting",        lvl: 86, icon: MessageSquare, color: "#F9A8D4" },
  { name: "Analytics",          lvl: 90, icon: LineChart,     color: "#22D3EE" },
];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title={<>An <span className="gradient-text">operating system</span> for modern brands.</>}
    kicker="Every discipline runs in-house. One system that thinks, designs, builds and scales."
  >
    {/* Bento grid works across devices */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {skills.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: i * 0.05 }}
        >
          <Floaty amount={6} duration={6 + (i % 3)} delay={i * 0.2}>
            <div className="group glass glass-border-glow rounded-3xl p-5 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_hsl(271_91%_60%/0.35)]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${s.color}1a`, color: s.color, boxShadow: `0 0 24px ${s.color}44` }}>
                  <s.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold truncate">{s.name}</div>
                  <div className="text-[11px] font-mono text-muted-foreground">{s.lvl}% mastery</div>
                </div>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.lvl}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${s.color}, #22D3EE)` }}
                />
              </div>
            </div>
          </Floaty>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ---------------- JOURNEY ---------------- */

const journey = [
  { year: "2019", icon: GraduationCap, title: "Started with digital branding",  desc: "Cut teeth on visual identity & early Meta campaigns for local brands." },
  { year: "2021", icon: Rocket,        title: "Scaled first 7-figure funnel",   desc: "Built a repeatable ad system that took a DTC brand from 0 to $1M." },
  { year: "2023", icon: Brain,         title: "Went all-in on AI",              desc: "Integrated generative pipelines into every creative workflow." },
  { year: "2024", icon: Award,         title: "Meta Ads certified specialist",  desc: "Deepened performance marketing across regional & global accounts." },
  { year: "2026", icon: Trophy,        title: "Full-stack creative operator",   desc: "Designing, building & scaling premium brand systems end-to-end." },
];

const Journey = () => (
  <Section
    id="journey"
    eyebrow="Journey"
    title={<>Six years of <span className="gradient-text">compounding craft.</span></>}
  >
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple/40 via-sky/30 to-transparent md:-translate-x-1/2" />
      <div className="space-y-8 md:space-y-16">
        {journey.map((j, i) => (
          <motion.div
            key={j.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...spring, delay: i * 0.06 }}
            className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`}
          >
            <Floaty amount={5} duration={6 + (i % 3)} delay={i * 0.2}>
              <div className={`glass glass-border-glow rounded-3xl p-6 ${i % 2 === 0 ? "md:mr-4" : "md:ml-4"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-2xl gradient-brand flex items-center justify-center text-white">
                    <j.icon size={18} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{j.year}</span>
                </div>
                <div className="font-display text-xl font-semibold">{j.title}</div>
                <p className="text-muted-foreground mt-2">{j.desc}</p>
              </div>
            </Floaty>
            {/* dot */}
            <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full gradient-brand ring-4 ring-white shadow-[0_0_20px_hsl(271_91%_60%/0.6)]" />
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

/* ---------------- WORK ---------------- */

const projects = [
  { title: "Noor Apparel",    tag: "Meta Ads · Brand",   desc: "7-figure DTC campaign system with cinematic creative direction.", color: "#8B5CF6" },
  { title: "Aurora AI",       tag: "AI · Product",       desc: "Generative brand pipeline turning prompts into launch-ready assets.", color: "#22D3EE" },
  { title: "Lumen Studio",    tag: "UI/UX · Web",        desc: "Luxury studio site with glassmorphic system & smooth motion.", color: "#EC4899" },
  { title: "Vector Labs",     tag: "Automation",         desc: "End-to-end ad ops automation across Meta & Google.", color: "#60A5FA" },
  { title: "Halo Cosmetics",  tag: "Google Ads · CRO",   desc: "Full-funnel search + shopping strategy with 4.8x ROAS.", color: "#F9A8D4" },
  { title: "Nova Financial",  tag: "Brand · Web",        desc: "Trust-first fintech identity with premium interaction design.", color: "#38BDF8" },
];

const Work = () => (
  <Section
    id="work"
    eyebrow="Work"
    title={<>Selected <span className="gradient-text">signature</span> projects.</>}
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: i * 0.06 }}
          className="group relative"
        >
          <Floaty amount={5} duration={7 + (i % 3)} delay={i * 0.25}>
            <div className="glass glass-border-glow rounded-[32px] p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_-30px_hsl(271_91%_60%/0.4)]">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden relative mb-5"
                style={{ background: `linear-gradient(135deg, ${p.color}33, #22D3EE33, #EC489933)` }}>
                <div className="absolute inset-0 grid-overlay opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-strong rounded-2xl px-4 py-2 font-display text-sm">{p.tag}</div>
                </div>
                <div className="absolute -inset-10 rounded-full blur-3xl opacity-40"
                  style={{ background: p.color }} />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-display text-xl font-semibold">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </div>
                <div className="h-9 w-9 rounded-full glass flex items-center justify-center shrink-0 group-hover:gradient-brand group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </Floaty>
        </motion.a>
      ))}
    </div>
  </Section>
);

/* ---------------- CONTACT ---------------- */

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title={<>Let's build something <span className="gradient-text">unforgettable.</span></>}
    kicker="Meta Ads systems, AI-driven creative, luxury brand builds — pick a lane, or bring your own vision."
  >
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
      <Floaty amount={6} duration={7}>
        <div className="glass glass-border-glow rounded-[36px] p-8 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-2xl gradient-brand flex items-center justify-center text-white shadow-[0_15px_40px_-10px_hsl(271_91%_60%/0.6)]">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-display text-lg font-semibold">Direct line</div>
              <div className="text-sm text-muted-foreground">Fastest reply within 24 hours</div>
            </div>
          </div>
          <a href="mailto:muhammadrehanahmed989@gmail.com" className="block font-display text-lg gradient-text break-all hover:underline underline-offset-4">
            muhammadrehanahmed989@gmail.com
          </a>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} /> Faisalabad, Pakistan · Remote worldwide
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { href: "https://github.com/muhammadrehanahmed989-bit", icon: Github, label: "GitHub" },
              { href: "https://learn.microsoft.com/en-gb/users/rehanahmad-1241/", icon: MSIcon, label: "MS Learn" },
              { href: "https://www.linkedin.com/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://www.instagram.com/", icon: Instagram, label: "Instagram" },
              { href: "https://www.figma.com/", icon: Figma, label: "Figma" },
              { href: "mailto:muhammadrehanahmed989@gmail.com", icon: Mail, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-3 flex flex-col items-center gap-1.5 hover:-translate-y-1 transition-transform"
              >
                <s.icon size={18} />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </Floaty>

      <Floaty amount={6} duration={8} delay={0.3}>
        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:muhammadrehanahmed989@gmail.com"; }}
          className="glass glass-border-glow rounded-[36px] p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Name</span>
              <input required className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Email</span>
              <input required type="email" className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="you@brand.com" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Project</span>
            <select className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40">
              <option>Meta Ads system</option>
              <option>Google Ads system</option>
              <option>AI creative pipeline</option>
              <option>UI/UX & web build</option>
              <option>Brand strategy</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Vision</span>
            <textarea required rows={5} className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 resize-none" placeholder="Tell me about the brand, goals & timeline…" />
          </label>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-4 text-sm font-medium text-white magnetic-btn shadow-[0_20px_50px_-15px_hsl(271_91%_60%/0.6)]">
            Send message <Send size={16} />
          </button>
        </form>
      </Floaty>
    </div>
  </Section>
);

/* ---------------- FOOTER ---------------- */

const Footer = () => (
  <footer className="relative py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="h-7 w-7 rounded-full gradient-brand flex items-center justify-center text-white text-xs font-display font-bold">R</span>
        <span className="font-display">Muhammad Rehan Ahmed · © 2026</span>
      </div>
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
        <Zap size={12} className="text-primary" /> Crafted with care
      </div>
    </div>
  </footer>
);

/* ---------------- PAGE ---------------- */

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <Background />
    <MouseSpotlight />
    <Nav />
    <main>
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Work />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
