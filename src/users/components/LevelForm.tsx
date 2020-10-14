import React, { FC } from 'react'

import { Level } from '../interfaces'

interface Props {
  level: Level
  onLabelChange: (label: string) => void
  onRequestClose: () => void
  onAddOrUpdateLevel: () => void
}

export const LevelForm: FC<Props> = ({ level, onLabelChange, onRequestClose, onAddOrUpdateLevel }) => {
  const isNewLevel = !level.id

  return (
    <form onSubmit={onAddOrUpdateLevel}>
      <fieldset>
        <h3>{isNewLevel ? 'Add Level' : level.label}</h3>

        <label>
          Label
          <input value={level.label} type='text' required onChange={e => onLabelChange(e.target.value)} />
        </label>
        <label>
          Value
          <input value={level.value} type='text' readOnly />
        </label>

        <aside>
          <button onClick={onRequestClose}>Cancel</button>
          <button type='submit'>{isNewLevel ? 'Add Level' : 'Update Level'}</button>
        </aside>
      </fieldset>
    </form>
  )
}

LevelForm.displayName = 'LevelForm'
