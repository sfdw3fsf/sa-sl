import { useAuthStore } from '../../store/authStore'

export const useLogout = () => {
   const { resetAccessToken, resetUserInfo } = useAuthStore()
   const logout = () => {
      resetAccessToken()
      resetUserInfo()
   }

   return { logout }
}
