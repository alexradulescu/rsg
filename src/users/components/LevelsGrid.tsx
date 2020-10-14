import React, { FC } from 'react'

import { Table, RightAligned } from 'src/global'
import { Level } from 'src/api'

interface Props {
  levels: Level[]
  onLevelSelect: (level: Level) => void
  onLevelDelete: (levelId: string) => void
}

export const LevelsGrid: FC<Props> = ({ levels, onLevelSelect, onLevelDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>
            <RightAligned>Actions</RightAligned>
          </th>
        </tr>
      </thead>
      <tbody>
        {levels.map((level: Level) => (
          <tr key={level.id} onClick={() => onLevelSelect(level)}>
            <td>{level.label}</td>
            <td>
              <samp>{level.value}</samp>
            </td>
            <td>
              <RightAligned>
                <button>Edit</button>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    onLevelDelete(level.id)
                  }}
                >
                  Delete
                </button>
              </RightAligned>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

LevelsGrid.displayName = 'LevelsGrid'
