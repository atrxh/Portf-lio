import React from 'react'
import { GraduationCap, BookOpen, CalendarDays, CheckCircle2, Clock3 } from 'lucide-react'
import { education, courses } from '../data/achievementsData'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

export default function Achievements() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <PageHeader />
      <main className="flex-grow px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24 pt-6 xs:pt-8 sm:pt-12 pb-16 xs:pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 xs:mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-4"><GraduationCap size={18}/><p className="text-xs tracking-[0.4em] uppercase text-neutral-400">Formação e aprendizado</p></div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 dark:text-white mb-5">Formação & cursos</h1>
            <p className="text-sm xs:text-base text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed">Formações e cursos informados no currículo. Os itens abaixo são apresentados como cursos e estudos, sem alegar certificações não anexadas.</p>
          </div>

          <section className="mb-14 xs:mb-18 sm:mb-24">
            <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-6 xs:mb-8">Escolaridade</p>
            <div className="grid sm:grid-cols-2 gap-4 xs:gap-5">{education.map(item => <article key={item.id} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 xs:p-7"><div className="flex items-start justify-between gap-3"><div><h2 className="text-xl font-light text-neutral-900 dark:text-white">{item.title}</h2><p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{item.institution}</p></div><GraduationCap className="text-neutral-400 shrink-0" size={20}/></div><div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400"><span className="flex items-center gap-2"><CalendarDays size={13}/>{item.period}</span><span>{item.status}</span></div></article>)}</div>
          </section>

          <section>
            <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-6 xs:mb-8">Cursos</p>
            <div className="space-y-3 xs:space-y-4">{courses.map(item => <article key={item.id} className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 xs:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-neutral-400 dark:hover:border-neutral-600 transition"><div className="flex items-start gap-3 xs:gap-4"><div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"><BookOpen size={18}/></div><div><h2 className="text-base xs:text-lg font-light text-neutral-900 dark:text-white">{item.title}</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{item.institution}</p></div></div><div className="sm:text-right sm:min-w-[210px]"><p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-2 sm:justify-end"><CalendarDays size={13}/>{item.period}</p><p className={`inline-flex items-center gap-1.5 mt-2 text-[10px] uppercase tracking-widest ${item.status === 'Em andamento' ? 'text-amber-600 dark:text-amber-400' : 'text-neutral-400 dark:text-neutral-500'}`}>{item.status === 'Em andamento' ? <Clock3 size={12}/> : <CheckCircle2 size={12} />}{item.status}</p></div></article>)}</div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
