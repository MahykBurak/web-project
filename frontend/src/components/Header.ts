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
    <nav class='flex items-center justify-between'>
      <h1 class='text-3xl font-bold'>AutoHome</h1>
      <ul class='flex justify-center gap-4 items-center text-base font-medium'>
      ${Object.keys(NAV_TABS)
        .map(
          (key) =>
            `<li id='${key}-nav-item' class='w-32 rounded-lg py-2 text-center  hover:cursor-pointer bg-slate-700 text-slate-50 hover:bg-slate-800 transition-all'>${
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
      li.classList.add('underline')
    } else {
      li.classList.remove('underline')
    }
  })
}

export default Header
