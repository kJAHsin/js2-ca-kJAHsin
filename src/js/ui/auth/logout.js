import { clearData } from '../../api/storage'
import { Toast } from '../toast/Toast.js'

/**
 * This function should log the user out by removing appropriate user data from the browser.
 */

export function onLogout() {
   // stored keys
   const storageItems = ['profile', 'accessToken']

   storageItems.forEach((item) => {
      try {
         // function that removes keys from localStorage
         clearData(item)
      } catch (err) {
         console.error(
            `The item you are trying to remove is not present: \n\t${item} \n\t${err}`,
         )
      }
      // check to make sure we are in a browser environment for node testing
      if (typeof window !== 'undefined') {
         const toast = new Toast(
            'success',
            'You were successfully logged out!',
         )

         toast.toastEl.addEventListener(
            'animationend',
            function onAnimationEnd(e) {
               window.location.href = '/auth/login/'
            },
         )
      }
   })
}
