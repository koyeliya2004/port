import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

import { profileData } from '../src/data/profile'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head>
        <title>{profileData.name} — Home</title>
        <meta name="description" content={profileData.summary.slice(0,120)} />
      </Head>
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <motion.section initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight">Hello, I’m {profileData.name.split(' ')[0]}</h1>
            <p className="mt-4 text-xl text-gray-300">Auditor | Tech Professional | Problem Solver</p>
            <p className="mt-3 text-gray-300">bhumikatewariit@gmail.com +91 8420399560 GitHub LinkedIn Kolkata, India</p>
            <p className="mt-6 text-gray-300 max-w-xl">{profileData.summary}</p>

            <div className="mt-8 flex gap-4">
              <Link href="/projects" className="px-5 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-md font-semibold text-black">View My Work</Link>
            </div>

            <div className="mt-6 flex gap-4 text-gray-400">
              <a href={`mailto:${profileData.email}`}>Email</a>
              <a href={profileData.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-[#0b0f12] to-[#081028] p-1 shadow-2xl relative">
              <img src="/profile-placeholder.svg" alt="profile" className="w-full h-full object-cover rounded-xl" />
              <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{boxShadow:'0 20px 50px rgba(0,255,153,0.08)'}}></div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
