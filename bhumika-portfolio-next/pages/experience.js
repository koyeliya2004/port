import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'
import Roadmap from '../components/Roadmap'

export default function Experience(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Experience — {profileData.name}</title></Head>
      <Navbar />
      <main className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold">Work Experience — Roadmap</h2>
        <p className="text-gray-400 mt-3">A visual roadmap of my roles and impact.</p>

        <div className="mt-12">
          <Roadmap items={profileData.experience} />
        </div>

        <h2 className="text-2xl font-semibold mt-16">Virtual Work Simulations — Roadmap</h2>
        <p className="text-gray-400 mt-2">Simulated placements and industry-focused projects across domains.</p>
        <div className="mt-8">
          <Roadmap items={profileData.virtualSimulations.map((v, i)=> ({ role: v.category, company: 'Virtual Work Simulations', duration: '', bullets: v.companies }))} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
