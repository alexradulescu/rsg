import React, { FC } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { ProvidedThemeProps } from 'src/global'

import { Operator } from '../interfaces'
import { OperatorStatus } from '../enums'

interface Props {
  operators: Operator[]
  onOperatorSelect: (item: Operator) => void
}

export const OperatorsGrid: FC<Props> = ({ operators, onOperatorSelect }) => {
  const renderStatus = (status: Operator['status']) =>
    status === OperatorStatus.ACTIVE ? <ins>Active</ins> : <del>Disabled</del>

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th css={rightAligned}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {operators.map((operator: Operator) => (
          <tr key={operator.id} onClick={() => onOperatorSelect(operator)}>
            <td>{operator.name}</td>
            <td>{operator.email}</td>
            <td>
              <kbd>{operator.role}</kbd>
            </td>
            <td>{renderStatus(operator.status)}</td>
            <td css={rightAligned}>
              <button>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

OperatorsGrid.displayName = 'OperatorsGrid'

const Table = styled.table<ProvidedThemeProps>`
  width: 100%;
  margin: ${({ theme }) => theme.layout.margin.regular} 0;
`

const rightAligned = css`
  text-align: right;
`