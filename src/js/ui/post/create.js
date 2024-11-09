import { createPost } from '../../api/post/create.js'
import { Toast } from '../toast/Toast.js'
import { saveData } from '../../api/storage/save.js'
import '../../../css/pages/create-post.css'
/**
 * Passes data to the createPost function in api/post and handles the response
 */

export async function onCreatePost(e) {
	e.preventDefault()

	const formData = new FormData(e.target)
	const data = Object.fromEntries(formData.entries())

	try {
		const response = await createPost(data)
		if (response) {
			// Handle successful creation of post
			const toast = new Toast(
				'success',
				`Way to go! You created the post ${response.data.title} with id ${response.data.id}`
			)
				saveData('most-recent-post', response.data.id)
			toast.toastIt()

			toast.toastEl.addEventListener(
				'animationend',
				() => (window.location.href = '/profile/')
			)
		}
	} catch (err) {
		console.error('Could not create post', err)
	}
}
