import React from 'react'

export default function ProjectCard({project}){
  return (
    <article className="relative rounded-2xl overflow-hidden shadow-2xl group">
      <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
        <img src={project.image || '/profile-placeholder.svg'} alt={project.title} className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute left-6 bottom-6 text-white">
          <h3 className="text-2xl font-serif tracking-wide drop-shadow">{project.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {(project.stack||[]).slice(0,6).map((tag, i)=> (
              <span key={i} className="bg-white/10 backdrop-blur-sm text-sm text-gray-100 px-3 py-1 rounded-full border border-white/10">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#071028]">
        <p className="text-gray-300 text-sm leading-relaxed max-h-20 overflow-hidden">{project.description}</p>
        {project.bullets && project.bullets.length > 0 && (
          <ul className="mt-3 text-gray-300 text-sm list-disc list-inside max-h-28 overflow-auto space-y-1">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-3">
            <a href={project.link|| '#'} className="text-cyan-300 text-sm">View Details →</a>
            {project.github && <a href={project.github} className="text-gray-300 text-sm" target="_blank" rel="noreferrer">GitHub</a>}
          </div>
          <a href={project.demo || '#'} className="px-3 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-md text-sm">Demo</a>
        </div>
      </div>
    </article>
  )
}
