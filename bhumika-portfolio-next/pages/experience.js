import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'
import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Experience — {profileData.name}</title></Head>
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Work Experience</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Building impactful solutions across cybersecurity, ed-tech, and full-stack development.</p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 space-y-12">
          {profileData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, x:-30}}
              animate={{opacity:1, x:0}}
              transition={{duration:0.6, delay:0.1 * idx}}
              className="relative"
            >
              {/* Timeline Line */}
              {idx !== profileData.experience.length - 1 && (
                <div className="absolute left-4 md:left-8 top-16 w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
              )}

              <div className="flex gap-6 md:gap-12">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center pt-6 relative z-10">
                  <div className="timeline-dot"></div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 bento-card p-6 md:p-8 rounded-2xl hover:border-cyan-400/30 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-semibold">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Virtual Work Simulations */}
        <motion.div
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6, delay:0.5}}
          className="mt-24"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Virtual Work Simulations</h2>
          <p className="text-gray-400 mb-12">Industry-focused simulated placements across multiple domains.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {profileData.virtualSimulations.map((sim, idx) => (
              <motion.div
                key={idx}
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.6, delay:0.1 * idx}}
                className="bento-card p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">{sim.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {sim.companies.map((company, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
