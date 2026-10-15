import React from 'react'
import { Github, Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profileData } from '../data/centralData'

export default function ThumbNavbar() {
  return (
    <nav className="w-full pt-4 md:pt-6 pb-2 px-2 xs:px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between gap-2 xs:gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 flex-wrap">
          <a href={`mailto:${profileData.email}`} className="hover:text-neutral-900 dark:hover:text-white transition text-[9px] xs:text-[10px] sm:text-xs md:text-sm break-all"><Mail size={13} className="inline mr-1" />{profileData.email}</a>
          <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-neutral-900 dark:hover:text-white transition flex-shrink-0"><Github size={16} /></a>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 tracking-wide flex-wrap">
          <Link to="/projects" className="hover:text-neutral-900 dark:hover:text-white transition whitespace-nowrap text-[9px] xs:text-[10px] sm:text-xs">Projetos</Link>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition whitespace-nowrap text-[9px] xs:text-[10px] sm:text-xs"><FileText size={12} className="inline mr-1" />Currículo</a>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          <Link to="/contact" className="hover:text-neutral-900 dark:hover:text-white transition whitespace-nowrap text-[9px] xs:text-[10px] sm:text-xs">Contato</Link>
        </div>
      </div>
    </nav>
  )
}
