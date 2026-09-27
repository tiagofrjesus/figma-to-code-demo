import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const sectionsDir = resolve(__dirname, 'src/sections')

// Inline the section files into index.html so the page is static HTML (fast first paint, no JS needed to render)
function sections(): Plugin {
  return {
    name: 'inline-sections',
    transformIndexHtml(html) {
      const body = readdirSync(sectionsDir)
        .filter(f => f.endsWith('.html'))
        .sort()
        .map(f => readFileSync(resolve(sectionsDir, f), 'utf8'))
        .join('\n')
      return html.replace('<!-- sections -->', body)
    },
    handleHotUpdate({ file, server }) {
      if (file.startsWith(sectionsDir)) server.ws.send({ type: 'full-reload' })
    },
  }
}

export default defineConfig({
  // Relative base so the build works on GitHub Pages under /<repo>/
  base: './',
  plugins: [tailwindcss(), sections()],
})
