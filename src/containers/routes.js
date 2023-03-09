import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HOME_ROUTE } from '../utils/routes'

const Home = React.lazy(() => import('../pages/index'))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
