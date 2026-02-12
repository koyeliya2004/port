import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { profileData } from '../src/data/profile'

export default function Contact(){
  const [sent,setSent] = useState(false)
  const [formData, setFormData] = useState({name:'', email:'', message:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {setSent(false); setFormData({name:'', email:'', message:''})}, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05060a] to-[#0f1724] text-white">
      <Head><title>Contact — {profileData.name}</title></Head>
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Have a project in mind? Let's discuss how we can work together.</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{opacity:0, x:-30}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.6, delay:0.2}}
            className="bento-card p-8 rounded-2xl"
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text"
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full input-modern" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email"
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full input-modern" 
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Message</label>
                  <textarea 
                    placeholder="Tell me about your project..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full input-modern h-40 resize-none" 
                    required 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{opacity:0, scale:0.9}}
                animate={{opacity:1, scale:1}}
                className="p-8 text-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-400/30"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{opacity:0, x:30}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.6, delay:0.3}}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="bento-card p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 hover:border-cyan-400/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors">{profileData.email}</a>
            </div>

            {/* Phone Card */}
            <div className="bento-card p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <a href={`tel:${profileData.phone}`} className="text-gray-400 hover:text-purple-400 transition-colors">{profileData.phone}</a>
            </div>

            {/* Location Card */}
            <div className="bento-card p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 hover:border-green-400/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-400">{profileData.location}</p>
            </div>

            {/* Social Links */}
            <div className="bento-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href={profileData.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-xl flex items-center justify-center transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 rounded-xl flex items-center justify-center transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
