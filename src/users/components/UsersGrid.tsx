import React, { FC } from 'react'

import { Table, RightAligned } from 'src/global'

import { User } from '../interfaces'
import { UserStatus } from '../enums'

interface Props {
  users: User[]
  onUserSelect: (item: User) => void
}

export const UsersGrid: FC<Props> = ({ users, onUserSelect }) => {
  const renderStatus = (status: User['status']) =>
    status === UserStatus.ACTIVE ? <ins>Active</ins> : <del>Disabled</del>

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Level</th>
          <th>Status</th>
          <th>
            <RightAligned>Actions</RightAligned>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => (
          <tr key={user.id} onClick={() => onUserSelect(user)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <kbd>{user.level}</kbd>
            </td>
            <td>{renderStatus(user.status)}</td>
            <td>
              <RightAligned>
                <button>Edit</button>
              </RightAligned>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

UsersGrid.displayName = 'UsersGrid'
