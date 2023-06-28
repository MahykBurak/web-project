import { NAV_TABS } from '../utils/constants'
interface PROPS {
  element: HTMLElement
  onTabChange: (tab: NAV_TABS) => void
}
const Header = (props: PROPS): string => {
  const { element, onTabChange } = props
  const header = document.createElement('header')
  let currentTab = NAV_TABS.HOME
  header.innerHTML = `
    <nav class='container'>
      <ul class='flex justify-center gap-8 items-center text-base font-medium text-slate-200'>
      ${Object.keys(NAV_TABS)
        .map(
          (key) =>
            `<li id='${key}-nav-item' class='hover:text-slate-50 w-32 text-center py-1 rounded-lg backdrop-blur hover:bg-slate-600 bg-slate-700 hover:cursor-pointer transition-all'>${
              NAV_TABS[key as keyof typeof NAV_TABS]
            }</li>`
        )
        .join('')}
      </ul>
    </nav>
  `
  const liItems = header.querySelectorAll('li')

  liItems.forEach((li) => {
    li.addEventListener('click', () => {
      currentTab = li.textContent! as NAV_TABS
      updateActiveTab(currentTab, header)
      onTabChange(currentTab)
    })
  })
  updateActiveTab(currentTab, header)

  element.appendChild(header)
  return currentTab
}

const updateActiveTab = (currentTab: NAV_TABS, header: HTMLElement) => {
  const liItems = header.querySelectorAll('li')

  liItems.forEach((li) => {
    const tab = li.textContent! as NAV_TABS
    if (tab === currentTab) {
      li.classList.add('border', 'border-white')
    } else {
      li.classList.remove('border', 'border-white')
    }
  })
}

export default Header
