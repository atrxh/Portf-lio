import React from 'react'
import { Code2, CircleHelp } from 'lucide-react'
import { mainProjects } from '../data/projectsData'
import ProjectCard from '../components/cards/ProjectCard'
import GitHubCalendar from '../components/projects/GitHubCalendar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col transition-colors duration-[2000ms] ease-in-out">
      <PageHeader />
      <main className="flex-grow px-4 xs:px-6 sm:px-8 md:px-16 lg:px-24 pt-6 xs:pt-8 sm:pt-12 pb-16 xs:pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 xs:mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-4"><Code2 size={18} className="text-neutral-900 dark:text-white"/><p className="text-xs tracking-[0.4em] uppercase text-neutral-400">Projetos pessoais</p></div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-light text-neutral-900 dark:text-white mb-5">Coisas que estou construindo</h1>
            <p className="text-sm xs:text-base text-neutral-500 dark:text-neutral-400 max-w-3xl leading-relaxed">Projetos em diferentes fases de desenvolvimento. As etiquetas indicam o status atual; a ideia é mostrar o processo de aprendizado com transparência, sem apresentar protótipos como produtos finalizados.</p>
          </div>
          <div className="flex items-start gap-3 p-4 xs:p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl mb-8 xs:mb-10"><CircleHelp size={17} className="text-neutral-400 mt-0.5 shrink-0"/><p className="text-xs xs:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed"><strong className="font-medium text-neutral-700 dark:text-neutral-300">Sobre os status:</strong> “Em desenvolvimento” indica que ainda há implementação pela frente; “Em evolução” indica que o projeto pode funcionar, mas continua recebendo melhorias.</p></div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
            {mainProjects.map(project => <ProjectCard key={project.id} project={project}/>)}
          </div>
          <GitHubCalendar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
