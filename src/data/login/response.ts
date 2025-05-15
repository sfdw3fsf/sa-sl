enum UserGender {
   male = 'male',
   female = 'female',
   other = 'other',
}

export type LoginResp = {
   id: number
   username: string
   email: string
   firstName: string
   lastName: string
   gender: UserGender
   image: string
   accessToken: string
   refreshToKen: string
}

// {
//   "id": 1,
//   "username": "emilys",
//   "email": "emily.johnson@x.dummyjson.com",
//   "firstName": "Emily",
//   "lastName": "Johnson",
//   "gender": "female",
//   "image": "https://dummyjson.com/icon/emilys/128",
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // refreshToken in response and cookies
// }
