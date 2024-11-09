import { readPost } from '../../api/post/read.js'
import { Toast } from '../toast/Toast.js'

export async function onSearchPost() {
    e.preventDefault();

    const formData = new FormData(e.target)
	const data = Object.fromEntries(formData.entries())

    try {
		const response = await readPost(data)
		if (response) {
			// Handle successful creation of post
			const toast = new Toast(
				'success',
				`Way to go! You found the post ${response}`
			)
			toast.toastIt()
		}
	} catch (err) {
		console.error('Could not retrieve post', err)
        throw err
	}
}