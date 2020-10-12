import React, { FC } from 'react'

import { Operator } from '../interfaces'

interface Props {
  operator: Operator
  onNameChange: (name: string) => void
  onEmailChange: (email: string) => void
  onStatusChange: (status: string | number) => void
  onRoleChange: (role: string | number) => void
  onRequestClose: () => void
  onAddOrUpdateOperator: () => void
}

export const OperatorForm: FC<Props> = ({
  operator,
  onNameChange,
  onEmailChange,
  onStatusChange,
  onRoleChange,
  onRequestClose,
  onAddOrUpdateOperator,
}) => {
  const isNewOperator = !operator.id

  return (
    <form onSubmit={onAddOrUpdateOperator}>
      <fieldset>
        <h3>{isNewOperator ? 'Add Operator' : operator.name}</h3>

        <label>
          Full name
          <input value={operator.name} type='text' required onChange={e => onNameChange(e.target.value)} />
        </label>
        <label>
          Email
          <input value={operator.email} type='email' required onChange={e => onEmailChange(e.target.value)} />
        </label>
        <label>
          Status
          <select value={operator.status} onChange={e => onStatusChange(e.target.value)}>
            <option value='active'>Active</option>
            <option value='disabled'>Disabled</option>
          </select>
        </label>
        <label>
          Role
          <select value={operator.role} onChange={e => onRoleChange(e.target.value)}>
            <option value='admin'>Admin</option>
            <option value='operator'>Operator</option>
          </select>
        </label>

        <aside>
          <button onClick={onRequestClose}>Cancel</button>
          <button type='submit'>{isNewOperator ? 'Add Operator' : 'Update Operator'}</button>
        </aside>
      </fieldset>
    </form>
  )
}

OperatorForm.displayName = 'OperatorForm'
