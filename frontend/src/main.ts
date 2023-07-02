import './style.css'
import { Header, Footer } from './components'
import { Home, Rooms, Stats } from './pages'
import { NAV_TABS } from './utils/constants.ts'

const app = document.querySelector<HTMLDivElement>('#app')!
app.classList.add('container', 'flex', 'flex-col', 'gap-4')
app.innerHTML = `
    <section id='header'></section>
    <main id='main' class='h-full'>
    </main>
    <footer id='footer'></footer>
`

const main = app.querySelector<HTMLElement>('#main')!
const header = app.querySelector<HTMLElement>('#header')!
const footer = app.querySelector<HTMLElement>('#footer')!

const updateMainContent = (tab: NAV_TABS): void => {
  main.innerHTML = ''
  switch (tab) {
    case NAV_TABS.HOME:
      main.appendChild(Home())
      break
    case NAV_TABS.ROOMS:
      main.appendChild(Rooms())
      break
    case NAV_TABS.STATS:
      main.appendChild(Stats())
      break
    default:
      break
  }
}

updateMainContent(NAV_TABS.HOME)

Header({
  element: header,
  onTabChange: updateMainContent,
})
Footer({ element: footer })
