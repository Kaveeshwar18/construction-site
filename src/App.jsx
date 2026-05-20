import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle2,
  Home as HomeIcon,
  Building2,
  Sofa,
  Hammer,
  ClipboardList,
  Compass,
} from 'lucide-react'

// ==========================================
// LOCAL DATA
// ==========================================
const stats = [
  { value: '20+', label: 'Years of experience' },
  { value: '180+', label: 'Projects delivered' },
  { value: '95%', label: 'Repeat clients' },
  { value: '40+', label: 'Specialists on staff' },
]

const features = [
  {
    title: 'Quality craftsmanship',
    description: 'Materials, finishes and workmanship held to a standard we would accept in our own homes.',
  },
  {
    title: 'On-time delivery',
    description: 'Realistic schedules, weekly reporting and a project manager accountable from start to handover.',
  },
  {
    title: 'Transparent pricing',
    description: 'Itemised quotes and open-book budgeting — no surprise change orders during construction.',
  },
  {
    title: 'Licensed & insured',
    description: 'Fully certified team, safety-first sites and complete documentation for every project.',
  },
]

const services = [
  {
    iconName: 'Home',
    title: 'Residential Construction',
    description: 'Custom homes and residential builds designed for everyday comfort, durability and timeless style.',
  },
  {
    iconName: 'Building2',
    title: 'Commercial Construction',
    description: 'Offices, retail and mixed-use spaces delivered on schedule with rigorous quality control.',
  },
  {
    iconName: 'Sofa',
    title: 'Interior Design',
    description: 'Considered interiors that balance function, materials and natural light for refined living and working.',
  },
  {
    iconName: 'Hammer',
    title: 'Renovation',
    description: 'Sensitive renovations and full remodels that preserve character while upgrading performance.',
  },
  {
    iconName: 'ClipboardList',
    title: 'Project Management',
    description: 'End-to-end management from permits to handover — transparent timelines, budgets and reporting.',
  },
  {
    iconName: 'Compass',
    title: 'Architectural Consulting',
    description: 'Pre-construction guidance on feasibility, materials, sustainability and planning approvals.',
  },
]

const projects = [
  {
    id: 1,
    title: 'Riverside Residence',
    category: 'Residential',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    title: 'Northbridge Office Tower',
    category: 'Commercial',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    title: 'Mira Interior',
    category: 'Interior',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 4,
    title: 'Heritage Villa Restoration',
    category: 'Renovation',
    location: 'Pondicherry, India',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 5,
    title: 'Cedar Hills Estate',
    category: 'Residential',
    location: 'Coimbatore, India',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 6,
    title: 'Aurora Retail Plaza',
    category: 'Commercial',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 7,
    title: 'Lumen Studio Loft',
    category: 'Interior',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 8,
    title: 'Greenfield Warehouse',
    category: 'Commercial',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80',
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation']

const team = [
  {
    name: 'Arjun Jothis',
    role: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Priya Raman',
    role: 'Head of Architecture',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Vikram Shah',
    role: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Anika Mehta',
    role: 'Lead Interior Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
]

const principles = [
  {
    title: 'Mission',
    body: 'To deliver construction projects of consistent quality — built with care, finished with rigour, and handed over on schedule.',
  },
  {
    title: 'Vision',
    body: 'To be the construction partner most clients return to — known for craft, transparency and the calibre of our finished work.',
  },
  {
    title: 'Values',
    body: 'Integrity in our quotes. Discipline on site. Respect for our clients, neighbours and the people who build with us.',
  },
]

const processSteps = [
  {
    title: 'Discover',
    body: 'A short brief, a site walk and a candid conversation about scope, timeline and budget.',
  },
  {
    title: 'Design',
    body: 'Plans, drawings and a fixed scope of work — reviewed together until everything fits.',
  },
  {
    title: 'Build',
    body: 'Construction on site with weekly reporting, quality checks and a dedicated project manager.',
  },
  {
    title: 'Handover',
    body: 'Final inspection, documentation pack, snag list and a warranty you can rely on.',
  },
]

// ==========================================
// HELPERS
// ==========================================
const renderServiceIcon = (name, className) => {
  const props = { className, size: 24 }
  switch (name) {
    case 'Home': return <HomeIcon {...props} />
    case 'Building2': return <Building2 {...props} />
    case 'Sofa': return <Sofa {...props} />
    case 'Hammer': return <Hammer {...props} />
    case 'ClipboardList': return <ClipboardList {...props} />
    case 'Compass': return <Compass {...props} />
    default: return <Building2 {...props} />
  }
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }, [currentPage])

  // Track window scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation Links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
      
      {/* HEADER / NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm'
            : 'bg-white border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 focus:outline-none"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center bg-gray-900 text-white font-bold text-sm">
              J
            </span>
            <span className="font-semibold text-lg tracking-tight text-gray-900">
              Jothis<span className="text-amber-500">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? 'text-amber-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Quote Button */}
          <button
            onClick={() => setCurrentPage('contact')}
            className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 bg-amber-500 text-white hover:bg-amber-600 rounded"
          >
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`text-left py-2 text-base font-medium transition-colors ${
                    currentPage === link.id ? 'text-amber-500' : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 bg-amber-500 text-white hover:bg-amber-600 rounded"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 pt-16 md:pt-20">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* CTA SECTION (Shown on all pages except Contact) */}
      {currentPage !== 'contact' && (
        <section className="bg-gray-900 text-white py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
                Start a project
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                Have a project in mind? Let's build it together.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <p className="text-gray-300 max-w-md mb-6">
                Tell us about your project and our team will reach out within one
                business day with next steps.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 bg-amber-500 text-white hover:bg-amber-600 rounded"
              >
                Contact our team <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 grid gap-12 md:grid-cols-4">
          <div>
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-2 focus:outline-none"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center bg-amber-500 text-white font-bold text-sm">
                J
              </span>
              <span className="font-semibold text-lg tracking-tight">
                Jothis<span className="text-amber-500">.</span>
              </span>
            </button>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Building with precision since 2004. Residential, commercial and
              interior construction across India.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center border border-gray-800 text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center border border-gray-800 text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center border border-gray-800 text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center border border-gray-800 text-gray-400 hover:text-amber-500 hover:border-amber-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-sm text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title} className="text-sm text-gray-400">
                  {s.title.replace(' Construction', '')}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-amber-500 shrink-0" />
                <span>14 Anna Salai, Chennai 600002, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-amber-500 shrink-0" />
                <span>+91 44 4000 5000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-amber-500 shrink-0" />
                <span>hello@jothisconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Jothis Construction. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Privacy · Terms · Sitemap
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

// ==========================================
// HOME PAGE COMPONENT
// ==========================================
function HomePage({ setCurrentPage }) {
  const featuredServices = services.slice(0, 5)
  const featuredProjects = projects.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              Jothis Construction · Est. 2004
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Building with <span className="text-amber-500">precision</span>,
              <br />
              finished with care.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-gray-600 leading-relaxed">
              A construction studio delivering residential, commercial and
              interior projects across India — on time, on budget, and to a
              standard we are proud of.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 bg-amber-500 text-white hover:bg-amber-600 rounded"
              >
                Start a project <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 border border-gray-950 text-gray-950 hover:bg-gray-950 hover:text-white rounded"
              >
                View our work
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Construction site"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white border border-gray-200 p-5 rounded shadow-lg max-w-[220px]">
              <div className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
                Active sites
              </div>
              <div className="mt-2 text-2xl font-bold">24 ongoing</div>
              <div className="text-xs text-gray-500 mt-1">
                across 6 cities in India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[5/4] overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              alt="Team at work"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              About us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Two decades of building, learning and improving.
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Founded in 2004, Jothis Construction has grown into a multi-disciplinary
              studio of architects, engineers and project managers. We work with
              homeowners, developers and businesses on projects of every scale —
              guided by craftsmanship, transparency and an obsession with the details.
            </p>
            <button
              onClick={() => setCurrentPage('about')}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-amber-500 transition-colors focus:outline-none"
            >
              More about us <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
                What we do
              </span>
              <h2 className="mt-2 text-3xl font-bold">Services tailored to every kind of build</h2>
              <p className="mt-3 text-sm text-gray-500 max-w-lg">
                From the first sketch to the final walk-through, we handle every phase of construction in-house.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('services')}
              className="text-sm font-medium text-gray-900 hover:text-amber-500 transition-colors inline-flex items-center gap-2 focus:outline-none"
            >
              All services <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <div key={s.title} className="p-6 border border-gray-200 rounded bg-white hover:border-gray-900 transition-colors">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-gray-50 text-amber-500 rounded mb-4">
                  {renderServiceIcon(s.iconName)}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
                Selected work
              </span>
              <h2 className="mt-2 text-3xl font-bold">Recent projects</h2>
              <p className="mt-3 text-sm text-gray-500 max-w-lg">
                A small selection of our recent residential, commercial and interior builds.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('projects')}
              className="text-sm font-medium text-gray-900 hover:text-amber-500 transition-colors inline-flex items-center gap-2 focus:outline-none"
            >
              All projects <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p) => (
              <div key={p.id} className="group cursor-pointer" onClick={() => setCurrentPage('projects')}>
                <div className="aspect-[4/5] overflow-hidden rounded bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-400">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-gray-900 leading-tight">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              Why choose us
            </span>
            <h2 className="mt-2 text-3xl font-bold">A construction partner you can rely on</h2>
            <p className="mt-3 text-sm text-gray-500 max-w-lg">
              The reasons our clients keep coming back — and refer us to their friends and partners.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.title} className="p-8 border border-gray-200 rounded bg-white">
                <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ==========================================
// ABOUT PAGE COMPONENT
// ==========================================
function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
            About us
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-900 max-w-3xl">
            A construction studio guided by craft, discipline and care.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            For over twenty years we have built homes, offices and interiors across India. Quietly, carefully, and with the people who started this company still on site every week.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1581094289810-adf5d25690e3?auto=format&fit=crop&w=1200&q=80"
              alt="Architects reviewing plans"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              Our story
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              From a single project in 2004 to a studio of forty.
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Jothis Construction was founded in Chennai in 2004 with one
              residential project and three site engineers. Today we are a
              forty-person studio with offices across South India, working
              on residential, commercial and interior projects of every scale.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              What has not changed is the way we work — close to our clients,
              honest about timelines and costs, and stubborn about the
              quality of what we build.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-amber-500">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              What guides us
            </span>
            <h2 className="mt-2 text-3xl font-bold">Mission, vision and values</h2>
            <p className="mt-3 text-sm text-gray-500 max-w-lg">
              Three short statements that we actually hold ourselves to — not a glossy brochure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="p-8 border border-gray-200 rounded bg-white">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              The team
            </span>
            <h2 className="mt-2 text-3xl font-bold">People behind the work</h2>
            <p className="mt-3 text-sm text-gray-500 max-w-lg">
              A small group of architects, engineers and project managers who lead every Jothis Construction project.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded bg-white border border-gray-200">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-bold text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ==========================================
// SERVICES PAGE COMPONENT
// ==========================================
function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
            Our services
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-900 max-w-3xl">
            From the first drawing to the last detail.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            A focused set of services covering everything from new residential builds to commercial interiors and renovation work.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="p-6 border border-gray-200 rounded bg-white">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-gray-50 text-amber-500 rounded mb-4">
                  {renderServiceIcon(s.iconName)}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
              How we work
            </span>
            <h2 className="mt-2 text-3xl font-bold">A simple four-step process</h2>
            <p className="mt-3 text-sm text-gray-500 max-w-lg">
              No surprises, no hidden steps. The same approach for a single-room renovation or a multi-storey build.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <div key={p.title} className="p-8 bg-white border border-gray-200 rounded">
                <span className="font-bold text-amber-500 text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ==========================================
// PROJECTS PAGE COMPONENT
// ==========================================
function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
            Projects
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-900 max-w-3xl">
            A look at recent work.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            A selection of residential, commercial and interior projects we have delivered over the last few years.
          </p>
        </div>
      </div>

      {/* Projects Gallery */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-sm font-medium border rounded transition-colors ${
                  active === c
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-900 hover:text-gray-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.id} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded bg-gray-100 border border-gray-200">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
                    {p.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-gray-900 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{p.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  )
}

// ==========================================
// CONTACT PAGE COMPONENT
// ==========================================
function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const serviceOptions = [
    'Residential Construction',
    'Commercial Construction',
    'Interior Design',
    'Renovation',
    'Project Management',
    'Other',
  ]

  return (
    <>
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-amber-500">
            Contact
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-gray-900 max-w-3xl">
            Tell us about your project.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
            Share a few details and our team will reach out within one business day.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-gray-200 rounded bg-white p-10 text-center shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center bg-amber-50 text-amber-500 rounded-full">
                  <CheckCircle2 size={24} />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-gray-900">
                  Message sent
                </h3>
                <p className="mt-3 text-gray-600 max-w-md mx-auto">
                  Thanks for reaching out — we will get back to you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false)
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      service: '',
                      message: '',
                    })
                  }}
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium tracking-wide border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors rounded"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+91 98400 00000"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors rounded"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                    Project details *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell us about the location, size, timeline and any specific requirements."
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900 transition-colors rounded resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 bg-amber-500 text-white hover:bg-amber-600 rounded"
                >
                  Send message <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Info Panels */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 border border-gray-200 rounded bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-gray-50 text-amber-500 rounded shrink-0">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    Office
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    14 Anna Salai, Teynampet
                    <br />
                    Chennai 600 002, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-gray-50 text-amber-500 rounded shrink-0">
                  <Phone size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    Phone
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    +91 44 4000 5000
                    <br />
                    +91 98400 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-gray-50 text-amber-500 rounded shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    Email
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    hello@jothisconstruction.com
                    <br />
                    projects@jothisconstruction.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-gray-50 text-amber-500 rounded shrink-0">
                  <Clock size={18} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    Hours
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    Mon–Sat · 9:00 – 18:00
                    <br />
                    Sun · By appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded bg-white shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                Follow
              </h3>
              <div className="mt-4 flex gap-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-600 hover:text-amber-500 hover:border-amber-500 transition-colors rounded"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-600 hover:text-amber-500 hover:border-amber-500 transition-colors rounded"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-600 hover:text-amber-500 hover:border-amber-500 transition-colors rounded"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-600 hover:text-amber-500 hover:border-amber-500 transition-colors rounded"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-gray-200">
        <iframe
          title="Jothis Construction Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.966843979854!2d80.24820017454478!3d13.043695987268268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b9b16fc72d%3A0x52c98f3dd77b0c2f!2sTeynampet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
