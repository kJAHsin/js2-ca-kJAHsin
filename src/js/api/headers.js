import { API_KEY } from './constants.js'
import { loadData } from './storage/load.js'

const accessToken = loadData('accessToken')

export function headers(key = API_KEY, token = accessToken) {
   const headers = new Headers()

   if (key && key !== '') {
      headers.append('X-Noroff-API-Key', key)
   } else {
      console.error('OH NO! API key is just an empty string!')
   }

   if (token) {
      headers.append('Authorization', `Bearer ${token}`)
   }

   headers.append('Content-Type', 'application/json')

   return headers
}
