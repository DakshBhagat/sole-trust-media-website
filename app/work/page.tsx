"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const projects = [
  { slug: "13isu", name: "13ISU", category: "Branding & Identity", type: "Branding / Packaging / Marketing", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=85" },
  { slug: "lumora-beauty", name: "Lumora Beauty", category: "Packaging Design", type: "Beauty branding / Product marketing", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9c5c9d?auto=format&fit=crop&w=1200&q=85" },
  { slug: "sole-trust-media", name: "Sole Trust Media", category: "Website Development", type: "Agency identity / Digital experience", image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=85" },
]

const filters = ["All work", "Branding & Identity", "Packaging Design", "Website Development"]

export default function WorkPage() {
  const [active, setActive] = useState("All work")
  const visible = active === "All work" ? projects : projects.filter((project) => project.category === active)

  return <main className="site-shell"><nav className="nav"><a className="wordmark" href="/" aria-label="Sole Trust Media home"><span>STM</span><small>SOLE TRUST MEDIA</small></a><div className="nav-links"><a href="/work">Work</a><a href="/#services">Capabilities</a><a href="/#about">About</a><a href="/#contact">Contact</a></div></nav><section className="work-page-hero"><p className="eyebrow">04 / Complete portfolio</p><h1>Selected work.<br /><i>Distinctive thinking.</i></h1><p>Real work, thoughtful systems and creative direction built to help ambitious businesses move forward.</p></section><section className="portfolio-section"><div className="filter-bar" role="tablist" aria-label="Portfolio filters">{filters.map((filter) => <button key={filter} className={active === filter ? "active" : ""} onClick={() => setActive(filter)} role="tab" aria-selected={active === filter}>{filter}</button>)}</div><div className="portfolio-grid">{visible.map((project) => <a className="portfolio-card" href={`/work/${project.slug}`} key={project.slug}><div className="portfolio-card-image"><img src={project.image} alt={`${project.name} project`} /></div><div className="portfolio-card-meta"><div><p>{project.category}</p><h2>{project.name}</h2><span>{project.type}</span></div><ArrowUpRight /></div></a>)}</div></section><section className="contact portfolio-contact"><div className="contact-inner"><p className="eyebrow">Have a good one?</p><h2>Let&apos;s make<br /><i>something memorable.</i></h2><a className="button button-light" href="/#contact">Start a project <ArrowUpRight data-icon="inline-end" /></a></div></section></main>
}
