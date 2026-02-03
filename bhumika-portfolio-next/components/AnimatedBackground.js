import React from 'react'

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
    </div>
  )
}
