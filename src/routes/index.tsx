import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPaint from "@/assets/hero-paint.png";
import logoImg from "@/assets/logo.png";
import {
  Phone, Mail, MapPin, Clock, Check, ArrowRight, Shield, FileText,
  Palette, Star, Home, Building2, Hammer, Square, Brush, DoorOpen,
  ClipboardList, Search, CheckCircle2, X, Menu, Facebook, Instagram, Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PaintLux – Your Home Deserves Luxury | Houston Painting" },
      { name: "description", content: "Premium interior & exterior painting in Houston, TX. Free estimates. Serving Katy, The Woodlands, Sugar Land." },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { Icon: Home, title: "Interior Painting", desc: "Flawless walls, ceilings & rooms with premium low-VOC paints and meticulous prep work." },
  { Icon: Building2, title: "Exterior Painting", desc: "Weather-resistant finishes that protect your home and boost curb appeal year-round." },
  { Icon: Hammer, title: "Cabinet Painting", desc: "Transform your kitchen or bath cabinets with factory-smooth sprayed finishes." },
  { Icon: Square, title: "Trim & Molding", desc: "Crisp, clean baseboards, crown molding, and door trims that define a refined home." },
  { Icon: Brush, title: "Accent Walls", desc: "Bold feature walls with textures, patterns, or statement colors tailored to your taste." },
  { Icon: DoorOpen, title: "Door & Shutter", desc: "Doors, shutters, and entry points refinished to make a lasting first impression." },
];

const STEPS = [
  { Icon: ClipboardList, title: "Request Free Estimate", desc: "Fill out our quick form or call us. We'll reach out within 24 hours — zero pressure, zero obligation." },
  { Icon: Search, title: "Painter Visits Your Home", desc: "A professional visits, assesses the scope, and provides a detailed written estimate with timeline." },
  { Icon: CheckCircle2, title: "Job Complete — You Pay", desc: "We complete the work to perfection. Only when you're 100% satisfied do you pay." },
];

const WHY = [
  { Icon: Shield, title: "Houston's Trusted Pros", desc: "Locally rooted in Texas with a reputation built on quality craftsmanship — your home is in safe, expert hands." },
  { Icon: FileText, title: "Free Estimates", desc: "We visit your home, assess the job, and give you a detailed written quote — completely free, no pressure." },
  { Icon: Palette, title: "Premium Materials", desc: "We use only top-tier paints from Sherwin-Williams and Benjamin Moore — your walls deserve the best." },
  { Icon: Star, title: "100% Satisfaction", desc: "We don't consider a job done until you're completely satisfied. If it's not right, we'll make it right." },
];

const GALLERY = [
  { label: "Interior — Katy, TX", grad: "from-emerald-900 to-green-950", span: "lg:col-span-2 lg:row-span-2" },
  { label: "Exterior — The Woodlands", grad: "from-lime-900 to-emerald-950" },
  { label: "Cabinets — Sugar Land", grad: "from-slate-800 to-slate-950" },
  { label: "Feature Wall — Houston", grad: "from-rose-900 to-stone-950" },
  { label: "Entry Door — Katy, TX", grad: "from-amber-900 to-stone-950" },
];

const TESTIMONIALS = [
  { name: "Sarah R.", loc: "Katy, TX", initials: "SR", text: "PaintLux completely transformed our living room and master bedroom. The prep work alone was unlike anything we'd seen. The finish is absolutely flawless. Worth every penny." },
  { name: "Marcus J.", loc: "The Woodlands, TX", initials: "MJ", text: "We had our entire exterior repainted before listing. The team was professional, on time, and cleaned up daily. Our realtor said it was the biggest ROI we could've done. Closed above asking!" },
  { name: "Linda P.", loc: "Sugar Land, TX", initials: "LP", text: "The cabinet painting turned our outdated kitchen into something from a design magazine. My husband couldn't believe it was the same kitchen. Highly recommend!" },
];

const AREAS = ["Houston", "Katy", "The Woodlands", "Sugar Land", "Pearland", "Cypress", "Spring", "Stafford", "Missouri City", "Friendswood"];

function Logo() {
  return (
    <a href="#hero" className="flex items-center no-underline">
      <img src={logoImg} alt="PaintLux – Your Home Deserves Luxury" className="h-20 w-auto object-contain" />
    </a>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-[5%] transition-all duration-300 backdrop-blur-md border-b border-gold/20 ${
          scrolled ? "h-[60px] bg-green-dk" : "h-[72px] bg-green-dk/95"
        }`}
      >
        <Logo />
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 text-[0.85rem] font-semibold tracking-[0.1em] uppercase hover:text-gold transition-colors no-underline">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-gold px-5 py-2.5 text-sm inline-flex items-center gap-1.5">
            Free Estimate <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed top-[72px] inset-x-0 z-40 bg-green-dk border-t border-gold/15 px-[5%] py-8 flex flex-col gap-5 md:hidden">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-white/80 font-semibold tracking-[0.1em] uppercase border-b border-gold/10 pb-3 no-underline">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold px-5 py-3 text-center">Free Estimate</a>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-[72px] overflow-hidden bg-green-dk">
        <div className="absolute inset-0 [background:radial-gradient(ellipse_70%_70%_at_70%_50%,oklch(0.74_0.13_85/0.08)_0%,transparent_70%),radial-gradient(ellipse_50%_80%_at_20%_80%,oklch(0.32_0.05_150/0.9)_0%,transparent_60%),linear-gradient(135deg,oklch(0.22_0.04_150)_0%,oklch(0.32_0.05_150)_50%,oklch(0.22_0.04_150)_100%)]" />
        <div className="absolute -right-[5%] inset-y-0 w-[55%] -skew-x-6 border-l border-gold/15 bg-gradient-to-br from-transparent via-gold/5 to-gold/[0.02]" />
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[780px] pointer-events-none">
          <img
            src={heroPaint}
            alt="PaintLux premium paint cans with brushes"
            width={1536}
            height={1024}
            className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-[5%] py-20 w-full text-center md:text-left">
          <div className="inline-flex items-center gap-3 text-[0.75rem] font-bold tracking-[0.25em] uppercase text-gold mb-6">
            <span className="w-8 h-px bg-gold" />
            Premier Painting Service
          </div>
          <h1 className="display font-bold leading-[1.0] text-white mb-6 max-w-[700px] mx-auto md:mx-0 text-[clamp(3.5rem,7vw,6.5rem)]">
            Your Home<br />Deserves<br />
            <em className="not-italic text-gold relative">
              Luxury
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent" />
            </em>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-10">
            Premium interior & exterior painting across Houston. Free estimates, no hidden fees. Trusted by 50+ homeowners.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
            <a href="#contact" className="btn-gold px-8 py-4 text-base inline-flex items-center gap-2">
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:7135550100" className="inline-flex items-center gap-3 text-white border border-white/20 px-6 py-3.5 hover:text-gold hover:border-gold transition-colors no-underline">
              <span className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="flex flex-col items-start">
                <span className="text-[0.7rem] uppercase tracking-widest text-white/50">Call Now</span>
                <span className="font-semibold">(713) 555-0100</span>
              </span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {["5.0 Google Rating", "Free Estimates", "Premium Materials", "No Hidden Fees"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm font-semibold text-white/65 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-gold" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <div className="bg-gold py-4 px-[5%] flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
        {[
          { stars: true, label: "5.0 Google Rating" },
          { label: "Trusted by 50+ Houston Homeowners" },
          { label: "Serving Greater Houston" },
          { label: "100% Free Estimates" },
        ].map((p, i) => (
          <div key={i} className="condensed text-base font-bold tracking-wider uppercase text-green-dk flex items-center gap-2.5">
            {p.stars ? <span className="tracking-[2px]">★★★★★</span> : <Check className="w-4 h-4" strokeWidth={3} />}
            {p.label}
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 px-[5%] bg-cream">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel>What We Do</SectionLabel>
          <SectionTitle>Our Premium <em className="not-italic text-gold-dk">Services</em></SectionTitle>
          <SectionSub>Every surface treated with precision craftsmanship and premium materials — indoors and out.</SectionSub>
        </div>
        <div className="max-w-[1200px] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-green-dk/10">
          {SERVICES.map(({ Icon, title, desc }) => (
            <div key={title} className="group bg-white p-10 relative overflow-hidden transition-all duration-300 hover:bg-green-dk">
              <span className="absolute left-0 top-0 w-[3px] h-0 bg-gold group-hover:h-full transition-all duration-300" />
              <div className="w-14 h-14 rounded bg-muted group-hover:bg-gold/15 flex items-center justify-center mb-6 transition-colors">
                <Icon className="w-6 h-6 text-green-dk group-hover:text-gold transition-colors" />
              </div>
              <h3 className="condensed text-lg font-bold tracking-wider uppercase text-green-dk group-hover:text-white mb-2 transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/65 leading-relaxed transition-colors">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 px-[5%] bg-green-dk">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel light>Our Process</SectionLabel>
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] font-bold text-white leading-tight mb-4">
            Simple. Seamless. <em className="not-italic text-gold">Stunning.</em>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">Three easy steps from first call to final brushstroke.</p>
        </div>
        <div className="max-w-[1100px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-gold via-gold/30 to-gold" />
          {STEPS.map(({ Icon, title, desc }, i) => (
            <div key={title} className="md:px-10 text-center relative">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center mx-auto mb-8 relative z-10 shadow-[0_0_0_8px_oklch(0.74_0.13_85/0.12)]">
                <Icon className="w-7 h-7 text-green-dk" strokeWidth={2.2} />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green-dk text-gold condensed font-bold text-sm flex items-center justify-center border-2 border-gold">{i + 1}</span>
              </div>
              <h3 className="condensed text-xl font-bold tracking-wider uppercase text-white mb-3">{title}</h3>
              <p className="text-white/55 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel>Portfolio</SectionLabel>
          <SectionTitle>Our Recent <em className="not-italic text-gold-dk">Work</em></SectionTitle>
          <SectionSub>A glimpse of the transformations we've delivered across Houston homes.</SectionSub>
        </div>
        <div className="max-w-[1200px] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-2">
          {GALLERY.map((g, i) => (
            <div key={i} className={`group relative overflow-hidden cursor-pointer ${g.span || ""}`}>
              <div className={`w-full h-full bg-gradient-to-br ${g.grad} transition-transform duration-500 group-hover:scale-110 flex items-center justify-center`}>
                <Brush className="w-12 h-12 text-white/15" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-dk/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="condensed text-sm font-bold tracking-widest uppercase text-gold">{g.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold px-8 py-4 inline-flex items-center gap-2">
            Get Your Home Transformed <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 px-[5%] bg-cream">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel>The PaintLux Difference</SectionLabel>
          <SectionTitle>Why Homeowners <em className="not-italic text-gold-dk">Choose Us</em></SectionTitle>
          <SectionSub>We combine craftsmanship, transparency, and care to deliver results that exceed expectations every time.</SectionSub>
        </div>
        <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-green-dk/10">
          {WHY.map(({ Icon, title, desc }) => (
            <div key={title} className="group bg-white p-10 text-center relative overflow-hidden transition-colors hover:bg-green-dk">
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              <div className="w-16 h-16 rounded-full bg-green-dk/[0.07] group-hover:bg-gold/15 flex items-center justify-center mx-auto mb-6 transition-colors">
                <Icon className="w-7 h-7 text-green-dk group-hover:text-gold transition-colors" />
              </div>
              <h3 className="condensed font-bold tracking-wider uppercase text-green-dk group-hover:text-white mb-3 transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/55 leading-relaxed transition-colors">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-[5%] bg-green-dk overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionLabel light>Real Reviews</SectionLabel>
          <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] font-bold text-white leading-tight mb-4">
            What Our <em className="not-italic text-gold">Clients Say</em>
          </h2>
          <p className="text-white/55 max-w-xl mx-auto leading-relaxed">Don't take our word for it — hear from Houston homeowners who trusted PaintLux.</p>
        </div>
        <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="relative bg-white/[0.04] border border-gold/15 p-10 hover:bg-gold/5 hover:border-gold/35 hover:-translate-y-1 transition-all">
              <span className="display absolute top-4 left-6 text-6xl text-gold/40 leading-none">"</span>
              <div className="text-gold mb-4 tracking-[3px]">★★★★★</div>
              <p className="text-white/70 italic leading-relaxed mb-6 pt-2 text-[0.95rem]">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dk flex items-center justify-center condensed font-extrabold text-green-dk">{t.initials}</div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gold font-semibold tracking-widest">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AREA */}
      <section id="area" className="py-24 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionLabel>Coverage</SectionLabel>
            <SectionTitle>Serving Greater <em className="not-italic text-gold-dk">Houston</em></SectionTitle>
            <p className="text-muted-foreground leading-relaxed mb-8">We proudly serve homeowners across Houston and its most desirable surrounding communities.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {AREAS.map((a) => (
                <span key={a} className="bg-muted border border-green-dk/10 px-4 py-2 condensed text-sm font-bold tracking-wider uppercase text-green hover:bg-green hover:text-gold transition-colors cursor-default">
                  {a}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 text-sm" style={{ borderColor: "oklch(0.58 0.12 75)", color: "oklch(0.58 0.12 75)" }}>
              Check If We Serve Your Area <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="relative h-[360px] bg-muted border border-green-dk/10 overflow-hidden flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="w-12 h-12 text-gold" strokeWidth={1.5} />
            <p className="text-sm text-center max-w-xs leading-relaxed px-6">
              Houston · Katy · The Woodlands<br />Sugar Land · Pearland & surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-[5%] bg-cream">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <SectionLabel>Start Today</SectionLabel>
          <SectionTitle>Get Your Free <em className="not-italic text-gold-dk">Estimate</em></SectionTitle>
          <SectionSub>No pressure, no obligation. We'll visit your home, assess the job, and give you a transparent written quote — free of charge.</SectionSub>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="space-y-4">
            {[
              { Icon: Phone, label: "Call Us", val: "(713) 555-0100", href: "tel:7135550100" },
              { Icon: Mail, label: "Email", val: "info@paintlux.com", href: "mailto:info@paintlux.com" },
              { Icon: MapPin, label: "Service Area", val: "Houston, Katy, The Woodlands, Sugar Land & surrounding areas" },
              { Icon: Clock, label: "Hours", val: "Mon–Sat: 7:00 AM – 7:00 PM · Sun: By Appointment" },
            ].map(({ Icon, label, val, href }) => (
              <div key={label} className="flex items-start gap-4 p-5 bg-white border-l-[3px] border-gold hover:translate-x-1 transition-transform">
                <div className="w-10 h-10 bg-green-dk flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-[0.72rem] font-bold tracking-widest uppercase text-muted-foreground mb-1">{label}</div>
                  {href ? <a href={href} className="font-semibold text-green-dk hover:text-gold-dk no-underline">{val}</a> : <div className="font-semibold text-green-dk text-[0.95rem]">{val}</div>}
                </div>
              </div>
            ))}
            <div className="p-6 bg-gradient-to-br from-green to-green-dk text-white">
              <div className="condensed text-xs font-bold tracking-[0.25em] uppercase text-gold mb-2">⏳ Limited Availability</div>
              <p className="text-sm text-white/75 leading-relaxed">We're currently booking projects for June 2025. Request your estimate today to secure your spot.</p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within 24 hours."); }} className="bg-white p-10 border-t-4 border-gold shadow-sm">
            <h3 className="condensed text-2xl font-bold tracking-wider text-green-dk mb-1">Request Free Estimate</h3>
            <p className="text-sm text-muted-foreground mb-8">We'll respond within 24 hours. Usually much sooner.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full Name *" name="name" required />
              <Field label="Phone *" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" className="md:col-span-2" />
              <Field label="ZIP / Area" name="zip" />
              <SelectField label="Service Needed" name="service" options={SERVICES.map((s) => s.title)} />
            </div>
            <div className="mt-4">
              <label className="block text-[0.73rem] font-bold tracking-[0.15em] uppercase text-green-dk mb-1.5">Project Details</label>
              <textarea name="message" rows={4} className="w-full border-[1.5px] border-green-dk/15 bg-muted px-4 py-3 text-sm outline-none focus:border-gold focus:bg-white transition-colors resize-y" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="btn-gold w-full py-4 text-base mt-6">Get My Free Estimate →</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-dk px-[5%] pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-12 border-b border-gold/15">
          <div>
            <Logo />
            <p className="text-white/45 text-sm leading-relaxed my-5 max-w-sm">
              Houston's premier residential painting service. Premium materials, master craftsmanship, and complete satisfaction — guaranteed.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-gold/30 flex items-center justify-center text-white/60 hover:bg-gold hover:text-green-dk hover:border-gold transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="condensed text-sm font-bold tracking-[0.2em] uppercase text-gold mb-5">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.title}><a href="#services" className="text-white/50 hover:text-gold text-sm no-underline">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="condensed text-sm font-bold tracking-[0.2em] uppercase text-gold mb-5">Contact</div>
            <div className="space-y-3">
              <a href="tel:7135550100" className="flex items-center gap-2.5 text-white/50 hover:text-gold text-sm no-underline"><Phone className="w-4 h-4 text-gold" /> (713) 555-0100</a>
              <a href="mailto:info@paintlux.com" className="flex items-center gap-2.5 text-white/50 hover:text-gold text-sm no-underline"><Mail className="w-4 h-4 text-gold" /> info@paintlux.com</a>
              <div className="flex items-center gap-2.5 text-white/50 text-sm"><MapPin className="w-4 h-4 text-gold" /> Houston, TX</div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm"><Clock className="w-4 h-4 text-gold" /> Mon–Sat: 7AM–7PM</div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} PaintLux. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {["BBB A+", "Google 5★", "Top Rated", "Premium Materials"].map((b) => (
              <span key={b} className="text-[0.72rem] font-bold tracking-widest uppercase text-white/30 border border-white/10 px-2.5 py-1">{b}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* MOBILE FLOATING CTA */}
      <a href="#contact" className="md:hidden btn-gold animate-float-pulse fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 text-sm inline-flex items-center gap-2 whitespace-nowrap">
        <Phone className="w-4 h-4" /> Get Free Estimate
      </a>
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.25em] uppercase mb-4 ${light ? "text-gold" : "text-gold-dk"}`}>
      <span className={`w-6 h-0.5 ${light ? "bg-gold" : "bg-gold-dk"}`} />
      {children}
      <span className={`w-6 h-0.5 ${light ? "bg-gold" : "bg-gold-dk"}`} />
    </div>
  );
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)] font-bold text-green-dk leading-tight mb-4">{children}</h2>;
}
function SectionSub({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">{children}</p>;
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-[0.73rem] font-bold tracking-[0.15em] uppercase text-green-dk mb-1.5">{label}</label>
      <input type={type} name={name} required={required} className="w-full border-[1.5px] border-green-dk/15 bg-muted px-4 py-3 text-sm outline-none focus:border-gold focus:bg-white transition-colors" />
    </div>
  );
}
function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[0.73rem] font-bold tracking-[0.15em] uppercase text-green-dk mb-1.5">{label}</label>
      <select name={name} className="w-full border-[1.5px] border-green-dk/15 bg-muted px-4 py-3 text-sm outline-none focus:border-gold focus:bg-white transition-colors appearance-none">
        <option value="">Select a service...</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
