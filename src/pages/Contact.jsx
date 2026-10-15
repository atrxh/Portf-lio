import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Mail, FileText, ArrowLeft, ArrowUpRight } from 'lucide-react'
import { profileData } from '../data/centralData'

export default function Contact() {
  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-6 sm:top-8 md:top-10 right-4 sm:right-6 md:right-10 text-[8px] sm:text-[10px] md:text-xs tracking-[0.4em] text-neutral-300 dark:text-neutral-700">ARTHUR G. GOMES DA SILVA</div>
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        <div><p className="text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 uppercase mb-3">Contato</p><h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 dark:text-white leading-tight">Vamos conversar<br/>sobre oportunidades.</h1></div>
        <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">Estou buscando oportunidades em desenvolvimento de software, rotinas administrativas, backoffice, almoxarifado, logística e áreas fiscais.</p>
        <div className="space-y-4 sm:space-y-6"><h2 className="text-xl sm:text-2xl font-light text-neutral-900 dark:text-white">Entre em contato para —</h2><div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400"><p>• Oportunidades de trabalho e processos seletivos</p><p>• Conversas sobre meus projetos e ferramentas</p><p>• Assuntos profissionais e colaboração</p></div></div>
        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-neutral-200 dark:border-neutral-800"><p className="text-xs sm:text-sm text-neutral-400 mb-2">E-mail</p><a href={`mailto:${profileData.email}`} className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-900 dark:text-white hover:tracking-wide transition break-all">{profileData.email}</a><div className="flex flex-wrap gap-6 sm:gap-8 mt-8 text-neutral-500 dark:text-neutral-400"><a href={profileData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition"><Github size={17}/>GitHub <ArrowUpRight size={13}/></a><a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition"><FileText size={17}/>Currículo em PDF <ArrowUpRight size={13}/></a></div></div>
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800"><Link to="/" className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-wide text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition"><ArrowLeft size={14}/>Voltar ao início</Link></div>
      </div>
    </section>
  )
}
