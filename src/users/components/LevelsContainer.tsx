import React, { FC, useState } from 'react'

import { SpacedRow } from 'src/global'
import { Level, useLevelsQuery } from 'src/api'

import { LevelForm } from './LevelForm'
import { LevelsGrid } from './LevelsGrid'

export const LevelsContainer: FC = () => {
  const { data, loading, error } = useLevelsQuery()

  const [selectedLevel, setSelectedLevel] = useState<Level | null>()
  const [searchFilter, setSearchFilter] = useState('')

  const onLevelSelect = (item: Level) => {
    const level = data.find((level: Level) => level.id === item.id)
    setSelectedLevel(level)
  }

  const openAddLevelForm = () => {
    setSelectedLevel({
      id: '',
      value: '',
      label: '',
    })
  }

  const onLabelChange = (label: string) => {
    if (selectedLevel) {
      setSelectedLevel({
        ...selectedLevel,
        label,
        value: label.toLowerCase(),
      })
    }
  }

  const onLevelDelete = (levelId: string) => {
    console.info(`DELETE level with id: ${levelId}`)
  }

  const onRequestClose = () => {
    setSelectedLevel(null)
  }
  const onAddOrUpdateLevel = () => {
    // TODO: Remove and connect to API once API will be ready
    console.info('ADD or UPDATE ROLE: ', selectedLevel)
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
        <button onClick={openAddLevelForm}>Add Level</button>
      </SpacedRow>
      {loading && <h4>Loading...</h4>}
      {error && <h4>Error...</h4>}
      {!loading && data && (
        <>
          <LevelsGrid levels={data} onLevelSelect={onLevelSelect} onLevelDelete={onLevelDelete} />

          {selectedLevel && (
            <LevelForm
              level={selectedLevel}
              onLabelChange={onLabelChange}
              onRequestClose={onRequestClose}
              onAddOrUpdateLevel={onAddOrUpdateLevel}
            />
          )}
        </>
      )}
    </>
  )
}

LevelsContainer.displayName = 'LevelsContainer'
