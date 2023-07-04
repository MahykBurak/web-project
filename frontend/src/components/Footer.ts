interface Props {
  element: HTMLElement
}

const logout = () => {
  localStorage.removeItem('user')
  window.location.reload()
}
const Footer = (props: Props) => {
  const { element } = props
  const footerContainer = document.createElement('footer')

  footerContainer.classList.add('mainFooter')
  footerContainer.innerHTML = `
    <h1 class='text-3xl'>Welcome</h1>
    <div class='ml-auto flex items-center gap-3'>
      <span class='font-semibold text-lg'>Burak Mike</span>
      <button id="logout_button" class='w-32 rounded-lg py-2 text-center  hover:cursor-pointer bg-slate-700 text-slate-50 hover:bg-slate-800 transition-all border border-sky-700'>Log out</button>
    </div>
    `
  const logoutButton = footerContainer.querySelector('#logout_button')!
  logoutButton.addEventListener('click', logout)
  element.appendChild(footerContainer)
}

export default Footer
