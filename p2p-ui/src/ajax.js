import axios from 'axios'

// const instance = axios.create({
//   baseURL: '/',
//   timeout: 3000,
//   // headers: {'X-Custom-Header': 'foobar'}
// })
//
// export default {
//   instance
// }

export default axios.create({
  baseURL: '/',
  timeout: 3000,
  // headers: {'X-Custom-Header': 'foobar'}
})
