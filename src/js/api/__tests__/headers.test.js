import { headers } from '../headers.js'
import { describe, test, expect, beforeEach, vi, beforeAll } from 'vitest'

describe('headers', () => {
   beforeAll(() => {
      const localStorageMock = (() => {
         let store = {}
         return {
            getItem: (key) => store[key] || null,
            setItem: (key, value) => (store[key] = value),
            removeItem: (key) => delete store[key],
            clear: () => (store = {}),
         }
      })()

      Object.defineProperty(global, 'localStorage', {
         value: localStorageMock,
      })
      localStorage.setItem('accessToken', 'mockedToken')
   })

   test('adds proper values to headers when API_KEY and accessToken are set', () => {
      // Mocking API_KEY and loadData for this test
      const mockAPI_KEY = 'zippityDOOdah'
      const mockAccessToken = localStorage.getItem('accessToken')

      const headersResult = headers(mockAPI_KEY, mockAccessToken)

      // Check if the headers contain the expected values
      expect(headersResult.get('X-Noroff-API-Key')).toBe(mockAPI_KEY)
      expect(headersResult.get('Authorization')).toBe(
         `Bearer ${mockAccessToken}`,
      )
      expect(headersResult.get('Content-Type')).toBe('application/json')
   })

   test('should return an error if api key is an empty string', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error')
      const mockAccessToken = 'mockedToken'
      const mockAPI_KEY = ''

      headers(mockAPI_KEY, mockAccessToken)

      // make sure console error when API_KEY is an empty string
      expect(consoleErrorSpy).toHaveBeenCalledWith(
         'OH NO! API key is just an empty string!',
      )
   })
})
