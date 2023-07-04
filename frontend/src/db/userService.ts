import { API_ROUTE } from '../utils/constants'
import { fetcher } from '../utils/helpers'
import { UserModel, UserModelRequest } from './api'

const userRoute = `${API_ROUTE}/users`

const getAllUsers = async (): Promise<Array<UserModel> | undefined> => {
  try {
    const res = await fetcher(userRoute)
    console.log(res)
    return res as Array<UserModel>
  } catch (err) {
    console.log(err)
  }
}

const getUserById = async (id: number): Promise<UserModel | undefined> => {
  const allUsers = await getAllUsers()
  return allUsers?.find((user) => user.user_id === id)
}

const deleteUserById = async (id: number): Promise<boolean> => {
  try {
    const res = await fetcher(`${userRoute}?id=${id}`, { method: 'DELETE' })
    return res as boolean
  } catch (err) {
    console.log(err)
  }
  return false
}

const createUser = async (
  data: UserModelRequest
): Promise<UserModel | undefined> => {
  try {
    const res = await fetcher(userRoute, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    return res as UserModel
  } catch (err) {
    console.log(err)
  }
}
export { getAllUsers, getUserById, deleteUserById, createUser }
