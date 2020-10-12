import React, { FC } from 'react'

import { Table, rightAligned } from 'src/global'

import { Role } from '../interfaces'

interface Props {
  roles: Role[]
  onRoleSelect: (role: Role) => void
  onRoleDelete: (roleId: string) => void
}

export const RolesGrid: FC<Props> = ({ roles, onRoleSelect, onRoleDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Description</th>
          <th css={rightAligned}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role: Role) => (
          <tr key={role.id} onClick={() => onRoleSelect(role)}>
            <td>{role.label}</td>
            <td>{role.description}</td>
            <td css={rightAligned}>
              <button>Edit</button>
              <button
                onClick={e => {
                  e.stopPropagation()
                  onRoleDelete(role.id)
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

RolesGrid.displayName = 'RolesGrid'
