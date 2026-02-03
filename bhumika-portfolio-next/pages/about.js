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

      <main className="container mx-auto px-6 py-20">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">About</h2>
            <p className="mt-4 text-gray-300">{profileData.summary}</p>

            <h3 className="mt-8 text-2xl font-semibold">Skills</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              {profileData.skills.map((s,idx)=> (
                <div key={idx} className="bg-[#071024] p-4 rounded-lg border border-gray-800">
                  <h4 className="font-semibold">{s.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((it,i)=>(
                      <span key={i} className="px-3 py-1 text-sm bg-black/40 border border-gray-700 rounded-full text-gray-200">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Highlights</h3>
            <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
              {profileData.achievements.map((a,i)=>(<li key={i}>{a}</li>))}
            </ul>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
