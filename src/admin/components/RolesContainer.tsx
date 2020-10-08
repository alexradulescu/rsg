import React, { FC, useState } from 'react'

import { Role } from '../interfaces'
import { ROLES_MOCK_DATA } from '../mockData'
import { RoleModal } from './RoleModal'
import { RolesGrid } from './RolesGrid'

export const RolesContainer: FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>()
  const [searchFilter, setSearchFilter] = useState('')

  const onRoleSelect = (item: Role) => {
    const role = ROLES_MOCK_DATA.find((role: Role) => role.id === item.id)
    setSelectedRole(role)
  }

  const openAddRoleModal = () => {
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

  const togglePermission = (permissionId: string) => {
    if (selectedRole) {
      const updatedPermissions = selectedRole.permissions.map(permission =>
        permission.id === permissionId
          ? {
              ...permission,
              active: !permission.active,
            }
          : permission
      )

      setSelectedRole({
        ...selectedRole,
        permissions: updatedPermissions,
      })
    }
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
      <div>
        <input
          type='search'
          onChange={e => setSearchFilter(e.target.value)}
          value={searchFilter}
          placeholder='Search'
        />
        <button onClick={openAddRoleModal}>Add Role</button>
      </div>

      <RolesGrid roles={ROLES_MOCK_DATA} onRoleSelect={onRoleSelect} />

      {selectedRole && (
        <RoleModal
          role={selectedRole}
          onLabelChange={onLabelChange}
          onDescriptionChange={onDescriptionChange}
          onRequestClose={onRequestClose}
          onAddOrUpdateRole={onAddOrUpdateRole}
          togglePermission={togglePermission}
        />
      )}
    </>
  )
}

RolesContainer.displayName = 'RolesContainer'
