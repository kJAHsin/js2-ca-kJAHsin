import { readPost } from '../../api/post/read.js'
import { PostCard } from '../global/components/PostCard.js';
import { Toast } from '../toast/Toast.js'

export async function onSearchPost(e) {
    e.preventDefault();

    const formData = new FormData(e.target)
	const data = Object.fromEntries(formData.entries())

    try {
		const response = await readPost(data)
		if (response) {
			const {author, body, id, media, title} = response	
			// Handle successful creation of post
			const toast = new Toast(
				'success',
				`Way to go! You found the post ${title}`
			)
			toast.toastIt()
			const card = new PostCard(author, id, title, body, media)
			card.renderCard()
		}
	} catch (err) {
		console.error('Could not retrieve post', err)
        throw err
	}
}