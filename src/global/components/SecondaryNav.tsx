import React from 'react'
import { NavLink } from 'react-router-dom'

export interface MenuItemProps {
  dataTestSelector: string
  title: string
  to: string
  comingSoon?: boolean
  exact?: boolean
}

interface Props {
  menuItems: MenuItemProps[]
}

export const SecondaryNav: React.FC<Props> = ({ menuItems }) => {
  return (
    <nav>
      {menuItems.map(item => (
        <NavLink
          to={item.to}
          exact={item.exact}
          data-test-selector={item.dataTestSelector}
          key={item.to}
          activeStyle={{ color: 'var(--white)', backgroundColor: 'var(--blue)' }}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  )
}

SecondaryNav.displayName = 'SecondaryNav'
