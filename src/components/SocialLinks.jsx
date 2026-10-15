import React from 'react'
import TrueFocus from './ui/TrueFocus'
import { socialLinks } from '../data/centralData'
import { Github, Mail } from 'lucide-react'

const iconMap = {
  GitHub: <Github size={22} strokeWidth={1.5} />,
  'E-mail': <Mail size={22} strokeWidth={1.5} />
}

export default function SocialLinks() {
  return (
    <section className="w-full py-6 xs:py-8 sm:py-10 md:py-16 lg:py-20">
      <div className="w-full px-2 xs:px-4 sm:px-6 md:px-16 lg:px-24">
        <p className="text-[9px] xs:text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-neutral-400 mb-4 xs:mb-6 sm:mb-8 md:mb-10">Contato</p>
        <div className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16"><TrueFocus sentence="Vamos conversar" manualMode={false} blurAmount={2} borderColor="currentColor" animationDuration={0.4} pauseBetweenAnimations={1} /></div>
        <div className="grid grid-cols-2 max-w-2xl">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target={link.name === 'GitHub' ? '_blank' : undefined} rel={link.name === 'GitHub' ? 'noopener noreferrer' : undefined} className="group py-4 xs:py-6 sm:py-8 md:py-10 px-2 xs:px-3 sm:px-4 md:px-6 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4"><div className="text-neutral-900 dark:text-white group-hover:translate-x-1 transition">{iconMap[link.name]}</div><span className="text-xs sm:text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition">{link.name}</span></div>
            </a>
          ))}
        </div>
        <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 max-w-xl"><p className="text-neutral-400 dark:text-neutral-500 text-[10px] xs:text-xs sm:text-sm leading-relaxed">GitHub para acompanhar meus projetos e e-mail para oportunidades profissionais e contato.</p></div>
      </div>
    </section>
  )
}
