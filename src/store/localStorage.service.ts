export const setLocalStorageAccessToken = (accessToken: string) =>
   localStorage.setItem('accessToken', accessToken)

export const getLocalStorageAccessToken = () =>
   localStorage.getItem('accessToken')

export const removeLocalStorageAccessToken = () => {
   localStorage.removeItem('accessToken')
}
