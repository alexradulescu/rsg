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
  adminOperators: {
    url: '/admin',
    title: 'Operators',
  },
  adminRoles: {
    url: '/admin/roles',
    title: 'Roles',
  },
}

export const PUBLIC_ROUTES = [ROUTES.login.url]
