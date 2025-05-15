import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../store/authStore'

function AuthRoute() {
   const { accessToken } = useAuthStore()

   if (!accessToken) return <Navigate to={'/login'} />

   return <Outlet />
}

export default AuthRoute
