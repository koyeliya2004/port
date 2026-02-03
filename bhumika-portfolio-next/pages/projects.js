import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

export default function Projects(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Projects — {profileData.name}</title></Head>
      <Navbar />
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <p className="text-gray-400 mt-2">A selection of major projects with details and tech stacks.</p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.projects.map((p, idx)=> (
            <motion.div key={idx} whileHover={{y:-6}} transition={{type:'spring', stiffness:200}}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
