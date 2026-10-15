import React from 'react'
import { Github, Mail, MapPin, BriefcaseBusiness, Code2, ClipboardList, FileText, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import PixelTransition from '../components/PixelTransition'
import { profileData } from '../data/centralData'

export default function Profile() {
  return (
    <div className="relative bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen flex flex-col">
      <PageHeader />
      <main className="flex-grow px-4 xs:px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto w-full">
        <section className="grid md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-center mb-16 xs:mb-20 sm:mb-24 md:mb-32">
          <div>
            <p className="text-[10px] xs:text-xs tracking-[0.4em] uppercase text-neutral-400 mb-5">Perfil profissional</p>
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-light tracking-tight leading-[0.98] mb-5 xs:mb-7">Arthur Guilherme<br/>Gomes da Silva</h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">Profissional com experiência em suporte administrativo, backoffice, controle de estoque e sistemas ERP. Em paralelo, desenvolvo projetos próprios com Python e tecnologias web, com interesse em oportunidades de desenvolvimento de software.</p>
            <div className="flex items-center gap-3 xs:gap-4 sm:gap-6 mt-6 xs:mt-8 text-xs xs:text-sm text-neutral-500 dark:text-neutral-400 flex-wrap"><span className="flex items-center gap-2"><MapPin size={15}/>{profileData.location}</span><span>Disponível para oportunidades remotas, híbridas ou presenciais</span></div>
            <div className="flex gap-3 flex-wrap mt-7">
              <a href={profileData.cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs sm:text-sm hover:opacity-80 transition"><FileText size={15}/>Abrir currículo <ArrowUpRight size={14}/></a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full text-xs sm:text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Entrar em contato</Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end"><div className="relative"><div className="absolute inset-0 -z-10 blur-3xl bg-neutral-200/40 dark:bg-neutral-800/40 rounded-full w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 translate-x-6 translate-y-6"/><div className="relative w-48 h-48 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"><PixelTransition firstContent={<img src={`${import.meta.env.BASE_URL}assets/arthur-monogram.svg`} alt="Monograma AGS" className="w-full h-full object-cover grayscale"/>} secondContent={<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"><p className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light text-white transform -rotate-12">Olá!</p></div>} gridSize={8} pixelColor="#ffffff" once={false} animationStepDuration={0.4} aspectRatio="100%" style={{width:'100%',height:'100%'}}/></div></div></div>
        </section>

        <section className="mb-8 xs:mb-10 sm:mb-12 md:mb-16"><h2 className="text-[10px] xs:text-xs tracking-[0.4em] uppercase text-neutral-400">Áreas de interesse</h2></section>
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 mb-16 xs:mb-20 sm:mb-24 md:mb-32">
          <InfoBlock icon={<Code2 size={20}/>} title="Software Engineering" desc="Projetos pessoais com Python, APIs, automação e tecnologias web, com foco em aprender construindo soluções práticas."/>
          <InfoBlock icon={<BriefcaseBusiness size={20}/>} title="Administrativo e Backoffice" desc="Experiência com cadastros, planilhas, relatórios, suporte operacional e sistemas ERP."/>
          <InfoBlock icon={<ClipboardList size={20}/>} title="Almoxarifado, Logística e Fiscal" desc="Controle de entradas e saídas, estoque de insumos, conferência e lançamento de notas fiscais e organização 5S."/>
        </section>

        <section className="border-t border-neutral-200 dark:border-neutral-800 pt-6 xs:pt-8 sm:pt-10 md:pt-12">
          <p className="text-[10px] xs:text-xs tracking-[0.4em] uppercase text-neutral-400 mb-5">Contato</p>
          <div className="flex gap-6 xs:gap-8 sm:gap-10 text-neutral-500 dark:text-neutral-400 flex-wrap">
            <ContactIcon href={`mailto:${profileData.email}`} label={profileData.email}><Mail size={18}/></ContactIcon>
            <ContactIcon href={profileData.github} label="GitHub" external><Github size={18}/></ContactIcon>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function InfoBlock({ icon, title, desc }) {
  return <div><div className="mb-4 text-neutral-400">{icon}</div><h3 className="text-base xs:text-lg sm:text-xl font-medium mb-2 xs:mb-3 tracking-tight">{title}</h3><p className="text-xs xs:text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p></div>
}

function ContactIcon({ href, label, children, external = false }) {
  return <a href={href} aria-label={label} title={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white transition duration-300">{children}<span className="text-xs sm:text-sm">{label}</span></a>
}
