import React, { FC } from 'react'

import { User } from 'src/api'

interface Props {
  user: User
  onNameChange: (name: string) => void
  onEmailChange: (email: string) => void
  onStatusChange: (status: string | number) => void
  onLevelChange: (level: string | number) => void
  onRequestClose: () => void
  onAddOrUpdateUser: () => void
}

export const UserForm: FC<Props> = ({
  user,
  onNameChange,
  onEmailChange,
  onStatusChange,
  onLevelChange,
  onRequestClose,
  onAddOrUpdateUser,
}) => {
  const isNewUser = !user.id

  return (
    <form onSubmit={onAddOrUpdateUser}>
      <fieldset>
        <h3>{isNewUser ? 'Add User' : user.name}</h3>

        <label>
          Full name
          <input value={user.name} type='text' required onChange={e => onNameChange(e.target.value)} />
        </label>
        <label>
          Email
          <input value={user.email} type='email' required onChange={e => onEmailChange(e.target.value)} />
        </label>
        <label>
          Status
          <select value={user.status} onChange={e => onStatusChange(e.target.value)}>
            <option value='active'>Active</option>
            <option value='disabled'>Disabled</option>
          </select>
        </label>
        <label>
          Level
          <select value={user.level} onChange={e => onLevelChange(e.target.value)}>
            <option value='admin'>Admin</option>
            <option value='user'>User</option>
          </select>
        </label>

        <aside>
          <button onClick={onRequestClose}>Cancel</button>
          <button type='submit'>{isNewUser ? 'Add User' : 'Update User'}</button>
        </aside>
      </fieldset>
    </form>
  )
}

UserForm.displayName = 'UserForm'
