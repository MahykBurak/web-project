import {
  AcCard,
  CoffeCard,
  DoorsCard,
  FridgeCard,
  LightsCard,
  VacuumCleanerCard,
  WashingMachineCard,
} from '../sections/home'
const Home = () => {
  const page = document.createElement('section')
  page.classList.add(
    'flex',
    'flex-col',
    'h-full',
    'items-start',
    'w-full',
    'gap-4'
  )
  page.innerHTML = `
  <section class='space-y-2'>
    <h1 class='text-4xl font-bold'>Home Automation System</h1> 
    <p class=' lg:w-2/3'>Welcome to the Home Automation System. This system is designed to allow you to control your home's lights, temperature, and more from anywhere in the world.</p>
</section>
  <div class='flex flex-col gap-4 h-full w-full'>
    <div id='home-row-1' class='h-60 flex gap-4 rounded-lg w-full '></div>
    <div id='home-row-2' class='h-60 flex gap-4 rounded-lg w-full '></div>
    <div id='home-row-3' class='h-36 flex gap-4 rounded-lg w-full '></div>
  </div>`
  const homeRow1 = page.querySelector<HTMLElement>('#home-row-1')!
  const homeRow2 = page.querySelector<HTMLElement>('#home-row-2')!
  const homeRow3 = page.querySelector<HTMLElement>('#home-row-3')!
  homeRow1.appendChild(AcCard())
  homeRow1.appendChild(LightsCard())
  homeRow1.appendChild(DoorsCard())
  homeRow2.appendChild(CoffeCard())
  homeRow2.appendChild(FridgeCard())
  homeRow2.appendChild(WashingMachineCard())
  homeRow3.appendChild(VacuumCleanerCard())

  return page
}

export { Home as default }
