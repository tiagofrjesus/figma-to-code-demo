import './style.css'

// Each section is a plain HTML fragment in src/sections, rendered in file-name order
const sections = import.meta.glob<string>('./sections/*.html', { query: '?raw', import: 'default', eager: true })

document.querySelector<HTMLElement>('#app')!.innerHTML = Object.keys(sections)
  .sort()
  .map(path => sections[path])
  .join('\n')

// Mobile navigation toggle
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]')
const menu = document.querySelector<HTMLElement>('[data-menu]')
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true'
  toggle.setAttribute('aria-expanded', String(open))
  menu?.classList.toggle('hidden', !open)
})
