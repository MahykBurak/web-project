import { Login } from '../db'

const submitForm = async (event: Event) => {
  event.preventDefault()

  var form = document.getElementById('loginForm') as HTMLFormElement
  var formData = new FormData(form)
  var username = formData.get('username')
  var password = formData.get('password')

  if (!username || !password) return
  const user = await Login(username as string, password as string)
  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/'
  }
}
const LoginPage = () => {
  const loginContainer = document.createElement('div')
  loginContainer.classList.add('loginPage')
  loginContainer.innerHTML = `
    <h1>Home Automation System</h1>
    <form id="loginForm" class="loginForm">
      <input type="text" class="border-2 border-sky-900 rounded-lg p-2 md:w-40 w-full" name="username" placeholder="Username" />
      <input type="password" class="border-2 border-sky-900 rounded-lg p-2 md:w-40 w-full" name="password" placeholder="Password"/>
      <button type="submit" class="bg-sky-900 rounded-lg text-white md:w-40 w-full py-2">Login</button>
      <button type="submit" class="bg-sky-900 rounded-lg text-white md:w-40 w-full py-2">Sign up</button>
    </form>
  `
  const form = loginContainer.querySelector('#loginForm') as HTMLFormElement
  form.addEventListener('submit', submitForm)
  return loginContainer
}

export default LoginPage
