import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getRoutes } from './routes'
import Loading from '@components/Loading'

export const Router = () => (
  <Suspense fallback={<Loading width="100%" />}>
    <Routes>
      {getRoutes().map((route) => {
        const Component = <route.component />

        return (
          <Route
            key={`ROUTE${route.path}`}
            path={route.path}
            element={Component}
          />
        )
      })}
    </Routes>
  </Suspense>
)

export default Router
