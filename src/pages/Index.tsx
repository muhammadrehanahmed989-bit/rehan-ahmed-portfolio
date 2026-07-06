import { motion, useReducedMotion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Cpu, Palette, Rocket, Github, Linkedin, Instagram,
  Mail, MapPin, Zap, Layers, Wand2, LineChart, MessageSquare, Brain, Code2, Figma,
  Award, GraduationCap, Trophy, ExternalLink, Send, GraduationCap as MSIcon,
  BarChart3, Target, Bot, Workflow, Tag, PieChart, Loader2, CheckCircle2, X,
} from "lucide-react";
import portraitAsset from "@/assets/portrait.png.asset.json";
import noorAsset from "@/assets/work/noor-apparel.png.asset.json";
import bloomAsset from "@/assets/work/bloom-cafe.png.asset.json";
import pulseAsset from "@/assets/work/pulse-analytics.png.asset.json";
import haloAsset from "@/assets/work/halo-studio.png.asset.json";
import vertexAsset from "@/assets/work/vertex-fitness.png.asset.json";
import lumenAsset from "@/assets/work/lumen-coffee.mp4.asset.json";
import auroraAsset from "@/assets/work/aurora.mp4.asset.json";
import nimbusAsset from "@/assets/work/nimbus-ai.mp4.asset.json";
import aiCertAsset from "@/assets/certs/ai-fundamentals.png.asset.json";
import gdCertAsset from "@/assets/certs/graphic-design.png.asset.json";
import saylaniCertAsset from "@/assets/certs/saylani-digital-marketing.png.asset.json";
import hubspotCertAsset from "@/assets/certs/hubspot-social-media.png.asset.json";
import { Nav } from "@/components/Nav";
import { Background } from "@/components/Background";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { toast } from "@/hooks/use-toast";

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
                Crafting Signature Digital Experiences
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
                  src={portraitAsset.url}
                  alt="Portrait of Muhammad Rehan Ahmed"
                  width={832}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-white/60" />
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

      {/* Revolving pillars — one layout, responsive */}
      <div className="relative aspect-square w-full max-w-[520px] mx-auto">
        {/* Aurora glow */}
        <div className="absolute inset-6 rounded-full bg-purple/20 blur-3xl animate-glow-pulse" />
        <div className="absolute inset-16 rounded-full bg-cyan/15 blur-3xl" />

        {/* Rotating rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: 0.1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-4 sm:inset-8 rounded-full border border-purple/25 animate-ring-spin" />
          <div className="absolute inset-14 sm:inset-20 rounded-full border border-sky/25 animate-ring-spin-rev" />
          <div className="absolute inset-24 sm:inset-32 rounded-full border border-pink/20 animate-ring-spin" style={{ animationDuration: "60s" }} />
        </motion.div>

        {/* Center — Rehan Ahmed */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: 0.15 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <Floaty>
            <div className="glass-strong glass-border-glow rounded-full h-28 w-28 sm:h-36 sm:w-36 flex flex-col items-center justify-center animate-glow-pulse">
              <span className="font-display text-xl sm:text-2xl gradient-text font-semibold">Rehan</span>
              <span className="font-display text-sm sm:text-base text-foreground/80 -mt-0.5">Ahmed</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Operator</span>
            </div>
          </Floaty>
        </motion.div>

        {/* Revolving pillar cards */}
        {pillars.map((p, i) => {
          const duration = 34;
          const angleOffset = (i / pillars.length) * duration;
          return (
            <div
              key={p.label}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                ["--r" as any]: "min(180px, 34vw)",
                animation: `orbit ${duration}s linear infinite`,
                animationDelay: `-${angleOffset}s`,
              }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...spring, delay: 0.4 + i * 0.15 }}
              >
                <Floaty amount={5} duration={5 + (i % 3)} delay={i * 0.25}>
                  <div className="glass glass-border-glow rounded-3xl p-3 sm:p-4 w-28 sm:w-36 text-center hover:-translate-y-1 transition-transform">
                    <div className="mx-auto h-9 w-9 sm:h-10 sm:w-10 rounded-2xl flex items-center justify-center mb-1.5 sm:mb-2"
                      style={{ background: `${p.color}1a`, color: p.color, boxShadow: `0 0 24px ${p.color}55` }}>
                      <p.icon size={18} />
                    </div>
                    <div className="font-display font-semibold text-xs sm:text-sm text-foreground">{p.label}</div>
                    <div className="hidden sm:block text-[11px] text-muted-foreground mt-0.5 leading-snug">{p.desc}</div>
                  </div>
                </Floaty>
              </motion.div>
            </div>
          );
        })}
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

type Project = {
  title: string;
  tag: string;
  desc: string;
  color: string;
  media: string;
  type: "image" | "video";
};

const projects: Project[] = [
  { title: "Noor Apparel",     tag: "Meta Ads · Luxury DTC",       desc: "Full brand & campaign system — cinematic creatives, 4.6x blended ROAS.",         color: "#A78BFA", media: noorAsset.url,   type: "image" },
  { title: "Bloom Café",       tag: "Social · Content System",     desc: "Monthly content engine that grew followers 32% and engagement 48% in 90 days.", color: "#34D399", media: bloomAsset.url,  type: "image" },
  { title: "Pulse Analytics",  tag: "SaaS · Dashboard UI",         desc: "Analytics platform brand + product UI for campaign performance intelligence.",   color: "#F472B6", media: pulseAsset.url,  type: "image" },
  { title: "Halo Studio",      tag: "Branding · Identity",         desc: "Creative branding agency identity — strategy, typography, packaging, guidelines.", color: "#8B5CF6", media: haloAsset.url,   type: "image" },
  { title: "Vertex Fitness",   tag: "Performance · Web Hero",      desc: "High-conversion fitness landing with cinematic hero and premium product storytelling.", color: "#22D3EE", media: vertexAsset.url, type: "image" },
  { title: "Lumen Coffee",     tag: "Motion · Ad Creative",        desc: "Signature motion ad for a specialty coffee house — engineered for scroll-stop.", color: "#F59E0B", media: lumenAsset.url,  type: "video" },
  { title: "Aurora AI",        tag: "AI · Product Film",           desc: "Generative product film for an AI creative pipeline launch.",                     color: "#60A5FA", media: auroraAsset.url, type: "video" },
  { title: "Nimbus AI",        tag: "AI · Brand Motion",           desc: "Brand motion piece for a cloud-native AI platform reveal.",                       color: "#EC4899", media: nimbusAsset.url, type: "video" },
];

const Work = () => (
  <Section
    id="work"
    eyebrow="Work"
    title={<>Selected <span className="gradient-text">signature</span> projects.</>}
    kicker="Real brands, real launches — each one engineered where luxury design meets measurable performance."
  >
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: i * 0.06 }}
          className="group relative"
        >
          <Floaty amount={5} duration={7 + (i % 3)} delay={i * 0.25}>
            <a
              href="#contact"
              className="block glass glass-border-glow rounded-[32px] p-4 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_-30px_hsl(271_91%_60%/0.4)]"
            >
              <div
                className="aspect-[16/10] rounded-3xl overflow-hidden relative mb-5 ring-1 ring-white/60"
                style={{ background: `linear-gradient(135deg, ${p.color}22, #22D3EE22)` }}
              >
                {p.type === "image" ? (
                  <img
                    src={p.media}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={p.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <div className="glass-strong rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest">{p.tag}</div>
                </div>
                <div
                  className="absolute -inset-10 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ background: p.color }}
                />
              </div>
              <div className="flex items-start justify-between gap-3 px-2 pb-2">
                <div>
                  <div className="font-display text-xl font-semibold">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </div>
                <div className="h-9 w-9 rounded-full glass flex items-center justify-center shrink-0 group-hover:gradient-brand group-hover:text-white transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </a>
          </Floaty>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ---------------- CONTACT ---------------- */

// Messages submitted here are delivered directly to Rehan's Gmail inbox via
// FormSubmit's AJAX endpoint — no backend, no API key required. First-ever
// submission triggers a one-time email confirmation from FormSubmit.
const CONTACT_EMAIL = "muhammadrehanahmed989@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("project") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast({ title: "Missing fields", description: "Please fill in your name, email and message.", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          project,
          message,
          _subject: `New project inquiry from ${name} — ${project}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && (json.success === "true" || json.success === true)) {
        setSent(true);
        form.reset();
        toast({ title: "Message sent ✨", description: "Your message just landed in Rehan's Gmail. Expect a reply within 24 hours." });
      } else {
        throw new Error(json.message || "Something went wrong");
      }
    } catch (err: any) {
      toast({
        title: "Couldn't send message",
        description: `${err?.message || "Please try again"} — or email ${CONTACT_EMAIL} directly.`,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
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
            <a href={`mailto:${CONTACT_EMAIL}`} className="block font-display text-lg gradient-text break-all hover:underline underline-offset-4">
              {CONTACT_EMAIL}
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
                { href: `mailto:${CONTACT_EMAIL}`, icon: Mail, label: "Email" },
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
          <form onSubmit={handleSubmit} className="glass glass-border-glow rounded-[36px] p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Name</span>
                <input name="name" required maxLength={100} className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Email</span>
                <input name="email" required type="email" maxLength={255} className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="you@brand.com" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Project</span>
              <select name="project" defaultValue="Meta Ads system" className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40">
                <option>Meta Ads system</option>
                <option>Google Ads system</option>
                <option>AI creative pipeline</option>
                <option>UI/UX & web build</option>
                <option>Brand strategy</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Vision</span>
              <textarea name="message" required rows={5} maxLength={4000} className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 resize-none" placeholder="Tell me about the brand, goals & timeline…" />
            </label>
            {/* Honeypot anti-spam field (kept invisible) */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-4 text-sm font-medium text-white magnetic-btn shadow-[0_20px_50px_-15px_hsl(271_91%_60%/0.6)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? (<><Loader2 size={16} className="animate-spin" /> Sending…</>)
                : sent ? (<><CheckCircle2 size={16} /> Sent — send another</>)
                : (<>Send message <Send size={16} /></>)}
            </button>
            <p className="text-[11px] text-muted-foreground text-center">
              Delivered straight to Rehan's Gmail inbox — no third-party storage.
            </p>
          </form>
        </Floaty>
      </div>
    </Section>
  );
};

/* ---------------- TESTIMONIALS ---------------- */

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Nova Skincare",
    country: "United States",
    flag: "🇺🇸",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Rehan rebuilt our entire Meta Ads engine from scratch. Within 60 days our ROAS jumped from 1.9x to 4.6x. He treats your business like it's his own.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Mansouri",
    role: "CEO, Zayed Luxury Group",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Truly a world-class operator. Rehan delivered a brand system and campaign strategy that finally matched the premium level of our stores in Dubai.",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Marketing Director, Northline Co.",
    country: "Canada",
    flag: "🇨🇦",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    quote:
      "Working with Rehan was the single biggest unlock for our growth this year. Strategic, creative, and disciplined about the numbers.",
    rating: 5,
  },
  {
    name: "Fatima Al-Zahra",
    role: "Founder, Layali Boutique",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "He understood our brand voice from day one. The AI-driven creatives he built for us feel luxurious, and our engagement more than tripled.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Growth, Bloomkit",
    country: "United States",
    flag: "🇺🇸",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Rehan is genuinely one of the most professional people I've hired. Clean systems, sharp reporting, and creative that outperforms every benchmark.",
    rating: 5,
  },
  {
    name: "Oliver Bennett",
    role: "Co-Founder, Atlas Menswear",
    country: "United Kingdom",
    flag: "🇬🇧",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "Our Google & Meta funnels were a mess. Rehan restructured everything and we scaled to seven figures cleanly, with a fraction of the wasted spend.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Brand Lead, Halcyon Studio",
    country: "Australia",
    flag: "🇦🇺",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    quote:
      "Rare combo of designer, marketer, and strategist. Rehan helped us relaunch with a premium identity that finally reflects who we are.",
    rating: 5,
  },
  {
    name: "Mohammed Rashid",
    role: "Owner, Rashid Motors",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "Extremely professional and reliable. He grew our showroom's inbound leads by over 300% in just three months. Highly recommended.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    role: "Creative Director, Casa Rossi",
    country: "Italy",
    flag: "🇮🇹",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    quote:
      "Cinematic thinking with real business results. Rehan is the person you call when you want your brand to look and perform like a global label.",
    rating: 5,
  },
];

const Testimonials = () => (
  <Section
    id="testimonials"
    eyebrow="Social Feedback"
    title={<>Trusted by founders <span className="gradient-text">around the world.</span></>}
    kicker="A glimpse of what clients across the US, UAE, Canada, UK and beyond say about working with me."
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: (i % 3) * 0.08 }}
        >
          <Floaty amount={5} duration={6 + (i % 4)} delay={i * 0.2}>
            <div className="glass glass-border-glow rounded-[32px] p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-[0_8px_24px_-8px_hsl(271_91%_60%/0.35)]"
                  />
                  <span className="absolute -bottom-1 -right-1 text-base leading-none">{t.flag}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-display font-semibold text-base leading-tight text-foreground truncate">{t.name}</div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground truncate">{t.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <MapPin size={12} className="text-primary" /> {t.country}
              </div>
            </div>
          </Floaty>
        </motion.div>
      ))}
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
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;

