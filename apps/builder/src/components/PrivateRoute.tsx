import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const { currentUser } = useAuth()
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return currentUser ? <>{children}</> : <Navigate to='/login' />
}

export default PrivateRoute
