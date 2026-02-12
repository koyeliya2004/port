import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'
import { motion } from 'framer-motion'

export default function Certifications(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Certifications — {profileData.name}</title></Head>
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Certifications</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Industry-recognized certifications across cloud, AI, data, and cybersecurity.</p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.05 * idx}}
              className="bento-card p-6 rounded-2xl group hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white leading-snug">{cert}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6, delay:0.8}}
          className="mt-20 bento-card p-12 rounded-3xl text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {profileData.certifications.length}+ Professional Certifications
          </h2>
          <p className="text-gray-400 mb-8">Continuous learning across emerging technologies and industry best practices.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <p className="text-3xl font-bold text-cyan-400">AWS</p>
              <p className="text-sm text-gray-500 mt-1">Cloud & Solutions</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-purple-400">AI/ML</p>
              <p className="text-sm text-gray-500 mt-1">Artificial Intelligence</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-pink-400">Data</p>
              <p className="text-sm text-gray-500 mt-1">Analytics & Science</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-blue-400">Security</p>
              <p className="text-sm text-gray-500 mt-1">Cybersecurity</p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
