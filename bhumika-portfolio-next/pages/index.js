import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

import { profileData } from '../src/data/profile'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white relative overflow-hidden">
      <Head>
        <title>{`${profileData.name} — Portfolio`}</title>
        <meta name="description" content={profileData.summary.slice(0,120)} />
      </Head>
      <Navbar />

      {/* Hero Section - Full Screen */}
      <main className="min-h-screen flex items-center justify-center px-6 relative">

        {/* Large animated background text moving right to left */}
        <div className="animated-letters">
          <div className="marquee-row">
            <div
              className="marquee text-[3rem] md:text-[5.5rem] font-extrabold uppercase tracking-[0.35em] text-white/5"
              style={{ animationDuration: '28s' }}
            >
              <span className="mr-24">{profileData.name} · Developer · Designer · Creator ·</span>
              <span className="mr-24">{profileData.name} · Developer · Designer · Creator ·</span>
            </div>
          </div>
          <div className="marquee-row">
            <div
              className="marquee text-[3rem] md:text-[5.5rem] font-extrabold uppercase tracking-[0.35em] text-white/3"
              style={{ animationDuration: '32s' }}
            >
              <span className="mr-24">Portfolio · Frontend Engineer · Problem Solver ·</span>
              <span className="mr-24">Portfolio · Frontend Engineer · Problem Solver ·</span>
            </div>
          </div>
        </div>

        {/* Centered Portrait, full-cover like reference */}
        <motion.div 
          initial={{opacity:0, scale:0.8}} 
          animate={{opacity:1, scale:1}} 
          transition={{duration:0.8, delay:0.2}}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="relative">
            <div className="w-[15rem] md:w-[20rem] lg:w-[24rem] aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] border border-white/10 bg-[#0b1120]">
              {/* Save your portrait image as public/hero.png to use here. */}
              <img src="/hero.png" alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        {/* Text Content Above Portrait */}
        <motion.div 
          initial={{opacity:0, y:-20}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.8}}
          className="text-center z-30 absolute top-24 md:top-32 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-sm md:text-base uppercase tracking-widest text-cyan-400 font-semibold">Freelance</p>
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-300 mt-1">Designer & Developer</p>
        </motion.div>

        {/* CTA Buttons Below Portrait */}
        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{duration:0.8, delay:0.4}}
          className="text-center z-30 absolute bottom-24 md:bottom-32 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-4 justify-center"
        >
          <Link href="/projects" className="px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
            View My Work
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all">
            Contact Me
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
