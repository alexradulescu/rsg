import React, { FC, useState } from 'react'

import { SpacedRow } from 'src/global'

import { Role } from '../interfaces'
import { ROLES_MOCK_DATA } from '../mockData'
import { RoleForm } from './RoleForm'
import { RolesGrid } from './RolesGrid'

export const RolesContainer: FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>()
  const [searchFilter, setSearchFilter] = useState('')

  const onRoleSelect = (item: Role) => {
    const role = ROLES_MOCK_DATA.find((role: Role) => role.id === item.id)
    setSelectedRole(role)
  }

  const openAddRoleForm = () => {
    setSelectedRole({
      id: '',
      label: '',
      description: '',
      permissions: [],
    })
  }

  const onLabelChange = (label: string) => {
    if (selectedRole) {
      setSelectedRole({
        ...selectedRole,
        label,
      })
    }
  }
  const onDescriptionChange = (description: string) => {
    if (selectedRole) {
      setSelectedRole({
        ...selectedRole,
        description,
      })
    }
  }

  const onRoleDelete = (roleId: string) => {
    console.info(`DELETE role with id: ${roleId}`)
  }

  const onRequestClose = () => {
    setSelectedRole(null)
  }
  const onAddOrUpdateRole = () => {
    // TODO: Remove and connect to API once API will be ready
    console.info('ADD or UPDATE ROLE: ', selectedRole)
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
        <button onClick={openAddRoleForm}>Add Role</button>
      </SpacedRow>

      <RolesGrid roles={ROLES_MOCK_DATA} onRoleSelect={onRoleSelect} onRoleDelete={onRoleDelete} />

      {selectedRole && (
        <RoleForm
          role={selectedRole}
          onLabelChange={onLabelChange}
          onDescriptionChange={onDescriptionChange}
          onRequestClose={onRequestClose}
          onAddOrUpdateRole={onAddOrUpdateRole}
        />
      )}
    </>
  )
}

RolesContainer.displayName = 'RolesContainer'
