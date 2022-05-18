// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SocialLinks } from '@deck-app/ui'
import { Route, Routes } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import Dashboard from './components/pages/Dashboard'
import ForgotPassword from './components/auth/ForgotPassword'
import Profile from './components/pages/Profile'

const routes = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/signup',
    element: <SignUp />,
    isPrivate: false
  },
  {
    path: '/login',
    element: <Login />,
    isPrivate: false
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    isPrivate: false
  }
]

export function App () {
  return (
    <AuthProvider>
      <SocialLinks />
      <Routes>
        {routes.map(route => {
          const { isPrivate = true, element, path } = route
          return (
            <Route
              path={path}
              element={
                isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element
              }
            />
          )
        })}
      </Routes>
    </AuthProvider>
  )
}

export default App
