import { getAllUsers } from '.'

const Login = async (username: string, password: string) => {
  const users = await getAllUsers()
  const user = users?.find((user) => user.username === username)
  if (user?.password === password) {
    return user
  }
  return undefined
}

export { Login }
