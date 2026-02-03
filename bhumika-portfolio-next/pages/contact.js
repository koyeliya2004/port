import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [sent,setSent] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Contact</title></Head>
      <Navbar />
      <main className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <div className="mt-8 max-w-xl">
          {!sent ? (
            <form onSubmit={(e)=>{e.preventDefault(); setSent(true)}} className="grid gap-4">
              <input placeholder="Name" className="p-3 rounded bg-[#071024] border border-gray-800" required />
              <input placeholder="Email" type="email" className="p-3 rounded bg-[#071024] border border-gray-800" required />
              <textarea placeholder="Message" className="p-3 rounded bg-[#071024] border border-gray-800 h-32" required />
              <button className="px-4 py-2 bg-cyan-400 text-black rounded font-semibold">Send Message</button>
            </form>
          ) : (
            <div className="p-6 bg-[#071024] rounded">Thanks — your message was queued (demo).</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
