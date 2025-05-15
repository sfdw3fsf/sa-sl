import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '../store/authStore'

function UnAuthRoute() {
   const { accessToken } = useAuthStore()

   if (accessToken) {
      return <Navigate to={'/menu'} replace />
   }

   return <Outlet />
}

export default UnAuthRoute
