import React, { FC } from 'react'

import { Role } from '../interfaces'

interface Props {
  role: Role
  onLabelChange: (label: string) => void
  onDescriptionChange: (description: string) => void
  onRequestClose: () => void
  onAddOrUpdateRole: () => void
}

export const RoleForm: FC<Props> = ({
  role,
  onLabelChange,
  onDescriptionChange,
  onRequestClose,
  onAddOrUpdateRole,
}) => {
  const isNewRole = !role.id

  return (
    <form onSubmit={onAddOrUpdateRole}>
      <fieldset>
        <h3>{isNewRole ? 'Add Role' : role.label}</h3>

        <label>
          Label
          <input value={role.label} type='text' required onChange={e => onLabelChange(e.target.value)} />
        </label>
        <label>
          Description
          <input value={role.description} type='text' onChange={e => onDescriptionChange(e.target.value)} />
        </label>

        <aside>
          <button onClick={onRequestClose}>Cancel</button>
          <button type='submit'>{isNewRole ? 'Add Role' : 'Update Role'}</button>
        </aside>
      </fieldset>
    </form>
  )
}

RoleForm.displayName = 'RoleForm'
