import React from 'react'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="group relative border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden transition hover:border-neutral-400 dark:hover:border-neutral-500 bg-white dark:bg-neutral-900">
      <div className="relative h-40 overflow-hidden bg-neutral-900">
        <img src={project.image} alt={`Ilustração do projeto ${project.title}`} className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
        {project.status && <span className="absolute top-3 left-3 text-[9px] sm:text-[10px] tracking-widest uppercase bg-white/90 text-neutral-800 border border-neutral-300 backdrop-blur px-2.5 py-1.5 rounded-full">{project.status}</span>}
      </div>
      <div className="p-5 xs:p-6">
        <h3 className="text-lg xs:text-xl font-light text-neutral-900 dark:text-white group-hover:tracking-wide transition-all">{project.title}</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2 mt-4">{project.tags.map(tag => <span key={tag} className="text-[9px] sm:text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500">{tag}</span>)}</div>
        {(project.liveUrl || project.githubUrl) && <div className="flex flex-wrap gap-5 mt-6 text-xs tracking-wide">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"><ExternalLink size={13}/> Aplicação <ArrowUpRight size={12}/></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"><Github size={13}/> Código <ArrowUpRight size={12}/></a>}</div>}
      </div>
    </article>
  )
}
