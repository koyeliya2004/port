import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Projects — {profileData.name}</title></Head>
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Selected Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Major projects showcasing full-stack development, AI/ML, and data engineering.</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, y:30}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.1 * idx}}
              whileHover={{y:-8}}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-[#071024] via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description.slice(0, 150)}...</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10">{tech}</span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-500">+{project.stack.length - 4}</span>
                  )}
                </div>

                {/* View Button */}
                <button className="w-full py-2.5 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 rounded-lg font-semibold text-sm text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:text-white transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6, delay:0.6}}
          className="mt-20 text-center bento-card p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-400 mb-8">Let's build something amazing.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
            Get In Touch
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
