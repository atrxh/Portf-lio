import React from 'react'
import { AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center p-6"><div className="text-center"><AlertCircle size={64} className="text-neutral-400 mx-auto mb-4"/><h1 className="text-6xl font-light text-neutral-900 dark:text-white mb-2">404</h1><p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">Página não encontrada</p><Link to="/" className="inline-block px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full hover:opacity-80 transition">Voltar ao início</Link></div></div>
}
