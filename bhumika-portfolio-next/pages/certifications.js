import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { profileData } from '../src/data/profile'

export default function Certifications(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Certifications — {profileData.name}</title></Head>
      <Navbar />
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {profileData.certifications.map((c, idx)=> (
            <div key={idx} className="bg-[#071024] p-4 rounded-lg border border-gray-800">
              <h4 className="font-semibold">{c}</h4>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
