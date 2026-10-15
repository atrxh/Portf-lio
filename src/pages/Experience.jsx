import React from 'react'
import { BriefcaseBusiness, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const roles = [
  {
    title: 'Assistente de Almoxarifado',
    company: 'SHPX Logística LTDA',
    location: 'Guarulhos, SP',
    period: 'Março de 2024 – janeiro de 2026',
    tasks: [
      'Lançamento de notas fiscais e emissão de documentos fiscais e físicos em sistema ERP.',
      'Organização de planilhas e relatórios do setor.',
      'Acompanhamento e orientação da equipe de triagem e apoio à padronização de processos pela metodologia 5S.',
      'Controle de entradas, saídas e insumos no sistema.'
    ]
  },
  {
    title: 'Almoxarife',
    company: 'Trade e Talentos — alocação na SHPX Logística LTDA',
    location: 'Guarulhos, SP',
    period: 'Novembro de 2023 – março de 2024',
    tasks: [
      'Conferência e lançamento de notas fiscais de entrada no sistema.',
      'Atendimento ao público e ao balcão, organização de cadastros e controle de estoque.',
      'Apoio às rotinas administrativas e à organização de materiais e informações com 5S.'
    ]
  },
  {
    title: 'Almoxarife',
    company: 'A Rural Madeiras e Materiais de Construção LTDA',
    location: 'Ponte Nova, MG',
    period: 'Março de 2022 – junho de 2023',
    tasks: [
      'Atendimento ao cliente e suporte a vendas.',
      'Rotinas de caixa, recebimento de pagamentos e fechamento.',
      'Emissão de notas fiscais, conferência de entradas e saídas de mercadorias e organização da loja.'
    ]
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <PageHeader />
      <main className="flex-grow px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24 pt-6 xs:pt-8 sm:pt-12 pb-16 xs:pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 xs:mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-4"><BriefcaseBusiness size={18} className="text-neutral-900 dark:text-white" /><p className="text-xs tracking-[0.4em] uppercase text-neutral-400">Experiência profissional</p></div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 dark:text-white mb-5">Minha trajetória</h1>
            <p className="text-sm xs:text-base text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed">Experiência em almoxarifado, controle de estoque, notas fiscais, sistemas ERP e rotinas administrativas — competências que levo também para meus projetos de tecnologia.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 xs:gap-4 mb-12 xs:mb-16 sm:mb-20">
            {[
              ['Administrativo', 'Backoffice, cadastros e relatórios'],
              ['Almoxarifado e logística', 'Movimentação e controle de materiais'],
              ['Fiscal e ERP', 'Conferência e lançamento de notas fiscais']
            ].map(([title, desc]) => <div key={title} className="p-5 xs:p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl"><p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">{title}</p><p className="text-xs xs:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{desc}</p></div>)}
          </div>

          <div className="space-y-6 xs:space-y-8">
            {roles.map((role, index) => <article key={`${role.company}-${role.title}`} className="relative border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 xs:p-7 sm:p-9 hover:border-neutral-400 dark:hover:border-neutral-600 transition">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div><p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-3">Experiência {String(index + 1).padStart(2, '0')}</p><h2 className="text-xl xs:text-2xl sm:text-3xl font-light text-neutral-900 dark:text-white">{role.title}</h2><p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">{role.company}</p></div>
                <div className="flex flex-col gap-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 shrink-0"><span className="flex items-center gap-2"><CalendarDays size={14}/>{role.period}</span><span className="flex items-center gap-2"><MapPin size={14}/>{role.location}</span></div>
              </div>
              <ul className="space-y-3">{role.tasks.map(task => <li key={task} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"><CheckCircle2 size={15} className="mt-1 shrink-0 text-neutral-400"/><span>{task}</span></li>)}</ul>
            </article>)}
          </div>

          <div className="mt-12 xs:mt-16 sm:mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Também estou desenvolvendo projetos pessoais em Python, APIs e aplicações web. Eles estão descritos na seção de projetos com o status atual de cada um.</p>
            <Link to="/projects" className="inline-block mt-4 text-sm text-neutral-900 dark:text-white underline underline-offset-4">Ver projetos ↗</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
