import { ArrowLeft, ArrowUpRight } from "lucide-react"

const details: Record<string, { name: string; category: string; type: string; image: string; overview: string }> = {
  "13isu": { name: "13ISU", category: "Branding & Identity", type: "Branding / Packaging / Marketing", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1800&q=85", overview: "A considered identity and packaging system built to make a new point of view feel unmistakable on shelf and on screen." },
  "lumora-beauty": { name: "Lumora Beauty", category: "Packaging Design", type: "Beauty branding / Product marketing", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9c5c9d?auto=format&fit=crop&w=1800&q=85", overview: "A soft, expressive beauty world shaped around clarity, tactility and a confident everyday ritual." },
  "sole-trust-media": { name: "Sole Trust Media", category: "Website Development", type: "Agency identity / Digital experience", image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1800&q=85", overview: "Our own brand system: a digital home for strategy, creativity, marketing and technology." },
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = details[slug] ?? details["13isu"]
  return <main className="site-shell"><nav className="nav"><a className="wordmark" href="/" aria-label="Sole Trust Media home"><span>STM</span><small>SOLE TRUST MEDIA</small></a><div className="nav-links"><a href="/work">Work</a><a href="/#services">Capabilities</a><a href="/#contact">Contact</a></div></nav><section className="case-hero"><a className="text-link" href="/work"><ArrowLeft data-icon="inline-start" /> Back to work</a><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p>{project.type}</p></section><div className="case-cover"><img src={project.image} alt={`${project.name} case study`} /></div><section className="case-overview section-grid"><div className="section-label">Project overview</div><div><h2>Built with <i>intent.</i></h2><p>{project.overview}</p><div className="case-facts"><span>Scope<strong>{project.type}</strong></span><span>Studio<strong>Sole Trust Media</strong></span><span>Status<strong>Selected work</strong></span></div></div></section><section className="statement"><p>Want to build something with a point of view?</p><h2>Start a <i>project.</i></h2><a className="button button-light" href="/#contact">Get in touch <ArrowUpRight data-icon="inline-end" /></a></section></main>
}
