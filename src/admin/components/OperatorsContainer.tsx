import React, { FC, useState } from 'react'
import styled from '@emotion/styled'

import { ProvidedThemeProps, ROLES } from 'src/global'

import { OperatorStatus } from '../enums'
import { Operator } from '../interfaces'
import { OPERATORS_MOCK_DATA } from '../mockData'
import { OperatorsGrid } from './OperatorsGrid'
import { OperatorForm } from './OperatorForm'

export const OperatorsContainer: FC = () => {
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>()
  const [searchFilter, setSearchFilter] = useState('')

  const onOperatorSelect = (item: Operator) => {
    const operator = OPERATORS_MOCK_DATA.find((operator: Operator) => operator.id === item.id)
    setSelectedOperator(operator)
  }

  const openAddOperatorForm = () => {
    setSelectedOperator({
      id: '',
      name: '',
      email: '',
      role: ROLES.USER,
      status: OperatorStatus.ACTIVE,
    })
  }

  const onNameChange = (name: string) => {
    if (selectedOperator) {
      setSelectedOperator({
        ...selectedOperator,
        name,
      })
    }
  }
  const onEmailChange = (email: string) => {
    if (selectedOperator) {
      setSelectedOperator({
        ...selectedOperator,
        email,
      })
    }
  }
  const onStatusChange = (status: string | number) => {
    if (selectedOperator) {
      setSelectedOperator({
        ...selectedOperator,
        status: status as OperatorStatus,
      })
    }
  }
  const onRoleChange = (role: string | number) => {
    if (selectedOperator) {
      setSelectedOperator({
        ...selectedOperator,
        role: role as ROLES,
      })
    }
  }
  const onRequestClose = () => {
    setSelectedOperator(null)
  }
  const onAddOrUpdateOperator = () => {
    // TODO: Remove and connect to API once API will be ready
    console.info('ADD or UPDATE OPERATOR: ', selectedOperator)
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
        <button onClick={openAddOperatorForm}>Add Operator</button>
      </SpacedRow>

      <OperatorsGrid operators={OPERATORS_MOCK_DATA} onOperatorSelect={onOperatorSelect} />

      {selectedOperator && (
        <OperatorForm
          operator={selectedOperator}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onStatusChange={onStatusChange}
          onRoleChange={onRoleChange}
          onRequestClose={onRequestClose}
          onAddOrUpdateOperator={onAddOrUpdateOperator}
        />
      )}
    </>
  )
}

OperatorsContainer.displayName = 'OperatorsContainer'

const SpacedRow = styled.div<ProvidedThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${({ theme }) => theme.layout.margin.regular} 0;
`
