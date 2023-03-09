import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/styles'

import AppRoutes from './routes'
import Loading from '../components/loading'
import theme from '../utils/theme'

const NavBar = React.lazy(() => import('../components/navbar'))

function App () {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <NavBar />
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
