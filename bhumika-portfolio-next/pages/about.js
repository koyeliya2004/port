import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head>
        <title>About — {profileData.name}</title>
      </Head>
      <Navbar />

      <main className="container mx-auto px-6 py-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Me</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Building scalable solutions and converting problems into products.</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Summary - Large Card */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.1}}
            className="bento-card p-8 md:col-span-2 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">{profileData.summary}</p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:0.6, delay:0.2}}
            className="bento-card p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
          >
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-white">30+</p>
                <p className="text-sm text-gray-400">Full-Stack Apps</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">45+</p>
                <p className="text-sm text-gray-400">REST APIs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">250+</p>
                <p className="text-sm text-gray-400">Issues Resolved</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          {profileData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.1 * (idx + 3)}}
              className="bento-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-semibold mb-4 text-purple-400">{skillGroup.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.slice(0, 6).map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
                {skillGroup.items.length > 6 && (
                  <span className="skill-tag text-gray-500">+{skillGroup.items.length - 6}</span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Achievements Card */}
          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.5}}
            className="bento-card p-8 md:col-span-2 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Achievements & Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {profileData.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-300 text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.6, delay:0.6}}
            className="bento-card p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10"
          >
            <h2 className="text-xl font-bold mb-4 text-pink-400">Education</h2>
            {profileData.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold text-white">{edu.degree}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.school}</p>
                <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
