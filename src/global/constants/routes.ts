export interface RouteItem {
  url: string
  title: string
}

export const ROUTES: { [key: string]: RouteItem } = {
  login: {
    url: '/login',
    title: 'Login',
  },
  home: {
    url: '/',
    title: 'Home',
  },
  users: {
    url: '/users',
    title: 'Users',
  },
  levels: {
    url: '/users/level',
    title: 'Levels',
  },
}

export const PUBLIC_ROUTES = [ROUTES.login.url]
