import React from 'react'
import { Github, Mail } from 'lucide-react'
import { profileData } from '../data/centralData'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-2 xs:px-4 sm:px-6 md:px-12 lg:px-24 py-4 xs:py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 xs:gap-4">
          <p className="text-[10px] xs:text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 text-center sm:text-left">© {new Date().getFullYear()} {profileData.name}. Portfólio pessoal.</p>
          <div className="flex items-center gap-4">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"><Github size={18} /></a>
            <a href={`mailto:${profileData.email}`} aria-label="E-mail" className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
