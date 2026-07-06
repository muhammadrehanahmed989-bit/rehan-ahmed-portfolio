import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Feedback" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`glass glass-border-glow rounded-full flex items-center gap-1 px-3 py-2 transition-all duration-500 ${
          scrolled ? "shadow-[0_20px_60px_-20px_hsl(271_91%_60%/0.35)]" : ""
        }`}
      >
        <a href="#home" className="flex items-center gap-2 pl-3 pr-4">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full gradient-brand text-[13px] font-display font-bold text-white shadow-[0_6px_20px_-4px_hsl(271_91%_60%/0.6)]">
            R
          </span>
          <span className="hidden sm:inline font-display text-sm tracking-wide">
            Rehan<span className="text-muted-foreground">.ahmed</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex ml-2 items-center rounded-full gradient-brand px-4 py-1.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_hsl(271_91%_60%/0.7)] magnetic-btn"
        >
          Let's talk
        </a>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 inset-x-4 glass-strong rounded-[28px] p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm hover:bg-muted/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl gradient-brand px-4 py-3 text-center text-sm font-medium text-white"
            >
              Let's talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
