import React, { FC } from 'react'

import { Role } from '../interfaces'
import { PermissionsPicker } from './PermissionsPicker'

interface Props {
  role: Role
  onLabelChange: (label: string) => void
  onDescriptionChange: (description: string) => void
  onRequestClose: () => void
  onAddOrUpdateRole: () => void
  togglePermission: (permissionId: string) => void
}

export const RoleModal: FC<Props> = ({
  role,
  onLabelChange,
  onDescriptionChange,
  onRequestClose,
  onAddOrUpdateRole,
  togglePermission,
}) => {
  const isNewRole = !role.id

  return (
    <div />
    // <Modal isOpen={Boolean(role)} onRequestClose={onRequestClose}>
    //   <form onSubmit={onAddOrUpdateRole}>
    //     <Heading size='heading' textAlign='center' marginBottom='large'>
    //       {isNewRole ? 'Add Role' : role.label}
    //     </Heading>

    //     <Row marginX='small'>
    //       <TextInput value={role.label} type='text' required label='Label' onChange={onLabelChange} />
    //     </Row>
    //     <Row marginX='small'>
    //       <TextInput
    //         value={role.description}
    //         type='text'
    //         label='Description'
    //         onChange={onDescriptionChange}
    //       />
    //     </Row>

    //     <PermissionsPicker permissions={role.permissions} togglePermission={togglePermission} />

    //     <FlexRow justifyContent='space-between' marginTop='large'>
    //       <Button emphasis='outline' size='wide' onClick={onRequestClose}>
    //         Cancel
    //       </Button>
    //       <Button emphasis='fill' size='wide' type='submit'>
    //         {isNewRole ? 'Add Role' : 'Update Role'}
    //       </Button>
    //     </FlexRow>
    //   </form>
    // </Modal>
  )
}

RoleModal.displayName = 'RoleModal'
