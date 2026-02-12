import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar(){
  const router = useRouter()

  const isActive = (path) => {
    return router.pathname === path
  }

  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="container mx-auto px-6">
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-3 flex items-center justify-between shadow-md border border-white/5">
          <Link href="/" className="text-white font-bold tracking-wide text-lg hover:text-cyan-400 transition-colors">
            BHUMIKA TEWARI
          </Link>
          
          <div className="hidden md:flex gap-6 text-gray-300 text-sm">
            <Link href="/" className={`hover:text-cyan-400 transition-colors ${isActive('/') ? 'text-cyan-400 font-semibold' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`hover:text-cyan-400 transition-colors ${isActive('/about') ? 'text-cyan-400 font-semibold' : ''}`}>
              About
            </Link>
            <Link href="/experience" className={`hover:text-cyan-400 transition-colors ${isActive('/experience') ? 'text-cyan-400 font-semibold' : ''}`}>
              Experience
            </Link>
            <Link href="/projects" className={`hover:text-cyan-400 transition-colors ${isActive('/projects') ? 'text-cyan-400 font-semibold' : ''}`}>
              Projects
            </Link>
            <Link href="/certifications" className={`hover:text-cyan-400 transition-colors ${isActive('/certifications') ? 'text-cyan-400 font-semibold' : ''}`}>
              Certifications
            </Link>
            <Link href="/contact" className={`hover:text-cyan-400 transition-colors ${isActive('/contact') ? 'text-cyan-400 font-semibold' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button (Placeholder - can expand later) */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
