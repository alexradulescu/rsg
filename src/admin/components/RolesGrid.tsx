import React, { FC } from 'react'

import { Role } from '../interfaces'

interface Props {
  roles: Role[]
  onRoleSelect: (item: Role) => void
}

export const RolesGrid: FC<Props> = ({ roles, onRoleSelect }) => {
  const deleteRole = (roleId: string) => {
    alert(`PLACEHOLDER: Deleting a role confirmation with id: ${roleId}`)
  }

  const rolesColumns = [
    {
      key: 'label',
      headerRenderer: 'Label',
      cellRenderer: (item: Role) => <Text>{item.label}</Text>,
    },
    {
      key: 'description',
      headerRenderer: 'Description',
      cellRenderer: (item: Role) => <Text>{item.description}</Text>,
    },
    {
      key: 'actions',
      headerRenderer: 'Actions',
      align: CELL_ALIGN.RIGHT,
      cellRenderer: (item: Role) => (
        <FlexRow childrenGap='tiny'>
          <Button size='medium' emphasis='outline'>
            Edit
          </Button>
          <Button
            size='medium'
            emphasis='ghost'
            color='danger'
            onClick={e => {
              e.stopPropagation()
              deleteRole(item.id)
            }}
          >
            Delete
          </Button>
        </FlexRow>
      ),
    },
  ]

  return (
    <div />
    // <ContentBox>
    //   <ContentBody>
    //     <ResponsiveGrid<Role>
    //       data={roles}
    //       pageItemCount={4}
    //       columns={rolesColumns}
    //       cardTitle={(item: Role) => <Text>{item.label}</Text>}
    //       getItemId={(item: Role) => item.id}
    //       onItemClick={onRoleSelect}
    //       data-test-selector='ResponsiveGrid-ExampleTestSelector'
    //     />
    //   </ContentBody>
    // </ContentBox>
  )
}

RolesGrid.displayName = 'RolesGrid'
