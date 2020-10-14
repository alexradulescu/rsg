import { UserStatus } from './enums'
import { Level, User } from './interfaces'

export const LEVELS_MOCK_DATA: Level[] = [
  {
    id: 'a01',
    label: 'Super Wizard',
    value: 'superwizard',
  },
  {
    id: 'b01',
    label: 'Wizard',
    value: 'wizard',
  },

  {
    id: 'c01',
    label: 'Warlock',
    value: 'warlock',
  },

  {
    id: 'd01',
    label: 'Apprentice',
    value: 'apprentice',
  },

  {
    id: 'e01',
    label: 'Muggle',
    value: 'muggle',
  },
]

export const OPERATORS_MOCK_DATA: User[] = [
  {
    id: 'a01',
    name: 'Di Wu',
    email: 'di.wu@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
  {
    id: 'a02',
    name: 'Andrew Tran',
    email: 'andrew.tran@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
  {
    id: 'a03',
    name: 'Dominic Tobias',
    email: 'dominic.tobias@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
  {
    id: 'a04',
    name: 'Pak Kian Lew',
    email: 'pak-kian.lew@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
  {
    id: 'a05',
    name: 'Mariah Bragg',
    email: 'mariah.bragg@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
  {
    id: 'a06',
    name: 'Tara Tritt',
    email: 'tara.tritt@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
  {
    id: 'a07',
    name: 'Alex Radulescu',
    email: 'alex.radulescu@block.one',
    level: 'apprentice',
    age: 20,
    status: UserStatus.ACTIVE,
  },
]
