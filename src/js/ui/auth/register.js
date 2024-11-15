import { register } from '../../api/auth/register'
import { Toast } from '../toast/Toast.js'

/**
 * This function should pass data to the register function in api/auth and handle the response
 */

export async function onRegister(e) {
   e.preventDefault()

   const formData = new FormData(e.target)
   const data = Object.fromEntries(formData.entries())

   try {
      const response = await register(data)
      if (response) {
         // Handle successful registration (e.g., redirect to login page)
         console.log('Registration successful')
         console.log(`User info: ${response}`)
         const toast = new Toast(
            'success',
            'You were successfully registered!',
         )
         toast.toastEl.addEventListener(
            'animationend',
            function onAnimationEnd(e) {
               // check to makes sure it is 'toastOut' (the final animation)
               if (e.animationName === 'toastOut') {
                  // change page after short toast animation
                  window.location.href = '/profile/'
               }
            },
         )
      } else {
         // Handle registration failure (e.g., show error message)
         console.error(
            'Registration failed: ',
            response.message || response,
         )
      }
   } catch (error) {
      console.error('An error occurred during registration:', error)
   }
}
