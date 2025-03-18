import useAuth from '@/hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

interface IPrivateRouteProps {
  element: React.ReactNode
}

export default function PrivateRoute({ element }: IPrivateRouteProps) {
  const auth = useAuth()
	const location = useLocation()

  if (!auth.signIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return element
}
