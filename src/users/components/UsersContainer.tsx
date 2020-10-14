import React, { FC, useState } from 'react'

import { SpacedRow, ROLES } from 'src/global'
import { UserStatus, User } from 'src/api'

import { OPERATORS_MOCK_DATA } from '../mockData'
import { UsersGrid } from './UsersGrid'
import { UserForm } from './UserForm'

export const UsersContainer: FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const [searchFilter, setSearchFilter] = useState('')

  const onUserSelect = (item: User) => {
    const user = OPERATORS_MOCK_DATA.find((user: User) => user.id === item.id)
    setSelectedUser(user)
  }

  const openAddUserForm = () => {
    setSelectedUser({
      id: '',
      name: '',
      email: '',
      level: '',
      age: 18,
      status: UserStatus.ACTIVE,
    })
  }

  const onNameChange = (name: string) => {
    if (selectedUser) {
      setSelectedUser({
        ...selectedUser,
        name,
      })
    }
  }
  const onEmailChange = (email: string) => {
    if (selectedUser) {
      setSelectedUser({
        ...selectedUser,
        email,
      })
    }
  }
  const onStatusChange = (status: string | number) => {
    if (selectedUser) {
      setSelectedUser({
        ...selectedUser,
        status: status as UserStatus,
      })
    }
  }
  const onLevelChange = (level: string | number) => {
    if (selectedUser) {
      setSelectedUser({
        ...selectedUser,
        level: level as ROLES,
      })
    }
  }
  const onRequestClose = () => {
    setSelectedUser(null)
  }
  const onAddOrUpdateUser = () => {
    // TODO: Remove and connect to API once API will be ready
    console.info('ADD or UPDATE OPERATOR: ', selectedUser)
    onRequestClose()
  }

  return (
    <>
      <SpacedRow>
        <input
          type='search'
          onChange={e => setSearchFilter(e.target.value)}
          value={searchFilter}
          placeholder='Search'
        />
        <button onClick={openAddUserForm}>Add User</button>
      </SpacedRow>

      <UsersGrid users={OPERATORS_MOCK_DATA} onUserSelect={onUserSelect} />

      {selectedUser && (
        <UserForm
          user={selectedUser}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onStatusChange={onStatusChange}
          onLevelChange={onLevelChange}
          onRequestClose={onRequestClose}
          onAddOrUpdateUser={onAddOrUpdateUser}
        />
      )}
    </>
  )
}

UsersContainer.displayName = 'UsersContainer'
