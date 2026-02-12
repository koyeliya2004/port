import React from 'react'

const rows = [
  { text: 'ED MATTHI', speed: 18, delay: 0 },
  { text: 'FREELANCE DESIGNER DEVELOPER', speed: 24, delay: 1 },
  { text: 'CREATIVE PORTFOLIO', speed: 20, delay: 0.5 },
]

export default function AnimatedBackground(){
  return (
    <div aria-hidden="true" className="animated-bg fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="gradient-layer absolute inset-0"></div>

      <div className="blobs">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
      </div>

      {/* Large moving letters (right-to-left) centered behind hero */}
      <div className="animated-letters absolute inset-0 flex flex-col justify-center items-center gap-6 pointer-events-none">
        {rows.map((row, i) => (
          <div key={i} className="marquee-row w-full max-w-[2200px] mx-auto overflow-hidden relative">
            <div
              className="marquee inline-block will-change-transform whitespace-nowrap"
              style={{ animationDuration: `${row.speed}s`, animationDelay: `${row.delay}s` }}
            >
              {/* repeat the text several times so the marquee is continuous */}
              {Array.from({length: 8}).map((_, idx) => (
                <span key={idx} className="inline-block mx-8 md:mx-12 text-[5.5rem] md:text-[9rem] lg:text-[12rem] font-black uppercase text-white/[0.04] leading-none tracking-tight" style={{WebkitTextStroke: '0.8px rgba(255,255,255,0.03)'}}>{row.text}</span>
              ))}
            </div>
            {/* left and right fade masks to avoid overlap with edge content */}
            <div className="absolute left-0 top-0 bottom-0 w-36 pointer-events-none" style={{background:'linear-gradient(90deg,rgba(5,6,10,1),rgba(5,6,10,0))'}} />
            <div className="absolute right-0 top-0 bottom-0 w-36 pointer-events-none" style={{background:'linear-gradient(270deg,rgba(5,6,10,1),rgba(5,6,10,0))'}} />
          </div>
        ))}
      </div>
    </div>
  )
}
