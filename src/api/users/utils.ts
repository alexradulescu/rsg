import { ApiUser, User } from './interfaces'
import { OperatorStatus } from './enums'

export function formatUserData(userApiData: ApiUser[]): User[] {
  return userApiData
  // .map(({id, name, email, age, role, status }) => ({
  //   id,
  // name,
  // email,
  // age: Number(age),
  // role: ROLES
  // status: OperatorStatus
  // }))
}
