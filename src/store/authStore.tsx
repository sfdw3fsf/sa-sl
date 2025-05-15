import { create } from 'zustand'
import { LoginResp } from '../data/login/response'
import {
   getLocalStorageAccessToken,
   removeLocalStorageAccessToken,
   setLocalStorageAccessToken,
} from './localStorage.service'

type UserState = {
   userInfo: LoginResp | null
   accessToken: string | null
   setUserInfo: (userInfo: LoginResp) => void
   setAccessToken: (accessToken: string) => void
   resetUserInfo: () => void
   resetAccessToken: () => void
}

export const useAuthStore = create<UserState>((set) => ({
   userInfo: null,
   accessToken: getLocalStorageAccessToken(),
   setUserInfo: (userInfo) => set(() => ({ userInfo })),
   setAccessToken: (accessToken) => {
      set(() => ({ accessToken }))
      setLocalStorageAccessToken(accessToken)
   },
   resetUserInfo: () => set(() => ({ userInfo: null })),
   resetAccessToken: () => {
      set(() => ({ accessToken: null }))
      removeLocalStorageAccessToken()
   },
}))

//Offical Guide
// const useStore = create((set) => ({
//    bears: 0,
//    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//    removeAllBears: () => set({ bears: 0 }),
//    updateBears: (newBears) => set({ bears: newBears }),
// }))
