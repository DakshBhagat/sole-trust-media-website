"use client"

import { ArrowUpRight, Menu, X, Mail, MapPin, Plus } from "lucide-react"
import { useState } from "react"

const projects = [
  { name: "13ISU", type: "Branding / Packaging / Marketing", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=85", tone: "peach" },
  { name: "Lumora Beauty", type: "Beauty branding / Product marketing", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9c5c9d?auto=format&fit=crop&w=1200&q=85", tone: "sage" },
  { name: "Sole Trust Media", type: "Agency identity / Digital experience", image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=85", tone: "lavender" },
]

const services = ["Brand Strategy", "Branding & Visual Identity", "Social Media Management", "Performance Marketing", "Creative Direction", "Content Creation", "Photography & Videography", "Website & E-commerce", "UI/UX Design", "SEO & AI Search Visibility", "Business Automation", "Custom Web Applications"]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <main className="site-shell">
      <nav className="nav"><a className="wordmark" href="#top" aria-label="Sole Trust Media home"><span>STM</span><small>SOLE TRUST MEDIA</small></a><div className={`nav-links ${menuOpen ? "open" : ""}`}><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#services" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></nav>

      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Independent creative agency · Bengaluru / Worldwide</p><h1>We create <em>brands</em> that people remember.</h1><p className="hero-sub">We combine strategy, creativity and technology to build meaningful brands and digital experiences.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore our work <ArrowUpRight data-icon="inline-end" /></a><a className="text-link" href="#contact">Start a project <ArrowUpRight data-icon="inline-end" /></a></div></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=85" alt="Colorful abstract art installation" /></div><div className="hero-meta"><span>01 / 06</span><span>Scroll to explore ↓</span></div></section>

      <section className="intro section-grid" id="about"><div className="section-label">01 / Why STM</div><div className="intro-content"><h2>Strategy. Creativity.<br /><i>Technology.</i></h2><p>We are a brand building, creative, marketing and technology agency for ambitious founders and teams. We find the thing that makes you different, then make it impossible to ignore.</p><a className="text-link" href="#contact">Get to know us <ArrowUpRight data-icon="inline-end" /></a></div></section>

      <section className="work section-grid" id="work"><div className="section-label">02 / Selected work</div><div className="work-content"><div className="section-heading"><h2>Made to<br /><i>matter.</i></h2><p>Concepts, identities and experiences designed to move brands forward.</p></div><div className="project-list">{projects.map((project, i) => <a href="#contact" className={`project-card ${project.tone}`} key={project.name}><div className="project-image"><img src={project.image} alt={`${project.name} project`} loading="lazy" /></div><div className="project-info"><span>0{i + 1}</span><div><h3>{project.name}</h3><p>{project.type}</p></div><ArrowUpRight /></div></a>)}</div></div></section>

      <section className="statement"><p>Everything your brand needs</p><h2>to <i>grow.</i></h2><div className="statement-mark">STM<span>®</span></div></section>

      <section className="services section-grid" id="services"><div className="section-label">03 / Capabilities</div><div className="services-content"><div className="section-heading"><h2>Many disciplines.<br /><i>One point of view.</i></h2><p>From the first spark to the final pixel, we build connected brand systems that work in the real world.</p></div><div className="service-list">{services.map((service, i) => <div className="service-row" key={service}><span>0{i + 1}</span><h3>{service}</h3><Plus /></div>)}</div></div></section>

      <section className="philosophy"><div className="philosophy-image"><img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=85" alt="Editorial fashion detail" loading="lazy" /></div><div className="philosophy-copy"><p className="eyebrow">Our philosophy</p><h2>Not just seen.<br /><i>Remembered.</i></h2><p>Attention is earned. We make work with enough clarity to be understood, and enough character to stay with you.</p></div></section>

      <section className="process section-grid"><div className="section-label">04 / How we work</div><div className="process-content"><h2>Small steps.<br /><i>Big shifts.</i></h2><div className="process-grid">{["Discover", "Define", "Create", "Execute", "Evolve"].map((step, i) => <div className="process-step" key={step}><span>0{i + 1}</span><h3>{step}</h3><p>{["Find the truth worth building on.", "Give the idea a direction.", "Make it tangible and magnetic.", "Put the work into the world.", "Keep making it better."][i]}</p></div>)}</div></div></section>

      <section className="contact" id="contact"><div className="contact-inner"><p className="eyebrow">Have a good one?</p><h2>Let&apos;s make<br /><i>something memorable.</i></h2><form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="success">Thank you. We&apos;ll be in touch shortly.</div> : <><div className="form-row"><input aria-label="Your name" required placeholder="Your name" /><input aria-label="Email address" type="email" required placeholder="Email address" /></div><textarea aria-label="Project details" required placeholder="Tell us a little about your project..." rows={3} /><button className="button button-light" type="submit">Send enquiry <ArrowUpRight data-icon="inline-end" /></button></>}</form><div className="contact-details"><a href="mailto:support@soletrustmedia.agency"><Mail /> support@soletrustmedia.agency</a><span><MapPin /> 560066, Whitefield, Bengaluru, India</span></div></div></section>

      <footer><div className="footer-top"><a className="wordmark footer-mark" href="#top"><span>STM</span><small>SOLE TRUST MEDIA</small></a><p>Brand building, creative,<br />marketing & technology.</p><div className="socials"><a href="#contact" aria-label="Instagram">IG</a><a href="#contact" aria-label="LinkedIn">IN</a></div></div><div className="footer-bottom"><span>© 2026 Sole Trust Media</span><span>Not Just Seen. Remembered.</span><div><a href="#contact">Privacy</a><a href="#contact">Terms</a></div></div></footer>
    </main>
  )
}
