import React from 'react'

import { PATHS } from './constants'
const HomePage = React.lazy(() => import('@pages/HomePage'))

const ROUTES = [
  {
    path: PATHS.main,
    component: HomePage,
    private: 0,
  },
]

export const getRoutes = () => {
  return ROUTES
}

export default ROUTES
