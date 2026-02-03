import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="container mx-auto px-6">
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-3 flex items-center justify-between shadow-md">
          <div className="text-white font-semibold tracking-wide">BHUMIKA TEWARI</div>
          <div className="hidden md:flex gap-6 text-gray-300">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <Link href="/about" className="hover:text-cyan-300">About</Link>
            <Link href="/experience" className="hover:text-cyan-300">Experience</Link>
            <Link href="/projects" className="hover:text-cyan-300">Projects</Link>
            <Link href="/certifications" className="hover:text-cyan-300">Certifications</Link>
            <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
