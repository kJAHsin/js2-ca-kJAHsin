import { onLogout } from '../auth/logout.js'
import { Toast } from '../toast/Toast.js'

/**
 * Functions you attach to logout events that calls ui/auth/logout function
 */
export function setLogoutListener(el) {
	el.addEventListener('click', (e) => {
		e.preventDefault()
		onLogout()

		// Handle successful creation of post
		const toast = new Toast(
			'success',
			`You have now been logged out!`
		)
		toast.toastIt()

		toast.toastEl.addEventListener(
			'animationend',
			() => (window.location.href = '/')
		)
	})
}
