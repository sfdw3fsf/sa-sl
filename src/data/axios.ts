import axios from 'axios'
import qs from 'query-string'

const API_URL = 'https://react-fast-pizza-api.jonas.io/api'

///AXIOS

export const instance = axios.create({
    baseURL: API_URL,
    paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'comma' }) //for example
        // const response = await api.get('/users', {
        //   params: { ids: [1, 2, 3] },
        // }); qs.string help from /users?ids[]=1&ids[]=2&ids[]=3 -> /users?ids=1,2,3
    },
})

const responseFunction = (response) => {
    return response.data
}

instance.interceptors.response.use(responseFunction)

// instance.interceptors.request.use(function () {/*...*/});

// GUIDE INTERCEPTORS
// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });
