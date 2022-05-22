// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SocialLinks } from '@deck-app/ui'
import { Route, Routes } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import Deck from './components/pages/Deck'
import ForgotPassword from './components/auth/ForgotPassword'
import Profile from './components/pages/Profile'
import { ErrorPage } from './components/pages/404'

const routes = [
  {
    path: '/',
    element: <Profile />
  },
  {
    path: '/d/:deckId',
    element: <Deck />
  },
  {
    path: '/u/:profileId',
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
  },
  {
    path: '/oops',
    element: <ErrorPage />,
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
              key={path}
              path={path}
              element={
                isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element
              }
            />
          )
        })}
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
