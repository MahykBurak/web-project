import './style.css'
import Header from './components/Header.ts'
import { Home, Rooms } from './pages'
import { NAV_TABS } from './utils/constants.ts'

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <div class='container mt-2'>
    <section id='header'></section>
    <main id='main' class='mt-8'>
        <h1 id='main-header' class='text-4xl font-bold text-center text-slate-200'>Home</h1>
        <section id='main-content' class='mt-8'></section>
    </main>
  </div>
`
const main = app.querySelector<HTMLElement>('#main')!
const header = app.querySelector<HTMLElement>('#header')!

const updateMainContent = (tab: NAV_TABS): void => {
  const mainHeader = main.querySelector<HTMLElement>('#main-header')!
  const mainContent = main.querySelector<HTMLElement>('#main-content')!
  mainContent.innerHTML = ''
  switch (tab) {
    case NAV_TABS.HOME:
      mainHeader.textContent = NAV_TABS.HOME
      mainContent.appendChild(Home())
      break
    case NAV_TABS.ROOMS:
      mainHeader.textContent = NAV_TABS.ROOMS
      mainContent.appendChild(Rooms())
      break
    case NAV_TABS.STATS:
      mainHeader.textContent = NAV_TABS.STATS
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
