import { ApiUser, User } from './interfaces'
import { UserStatus } from './enums'

export function formatUserData(userApiData: ApiUser[]): User[] {
  return userApiData.map(({ id, name, email, age, level, status }: ApiUser) => ({
    id,
    name,
    email,
    level,
    age: Number(age),
    status: status as UserStatus,
  }))
}
