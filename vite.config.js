import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true'
  const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY || '').split('/')
  const defaultBase = repoName && repoName !== `${repoOwner}.github.io` ? `/${repoName}/` : '/meu-portfolio/'
  const githubPagesBase = process.env.GITHUB_PAGES_BASE || (repoName === `${repoOwner}.github.io` ? '/' : defaultBase)
  return { plugins: [react()], base: isGitHubPages ? githubPagesBase : '/' }
})
