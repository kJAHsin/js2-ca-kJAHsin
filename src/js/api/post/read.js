import { API_SOCIAL_POSTS } from '../constants.js'
/**
 * Reads a single post by its ID.
 *
 * @param {string|number} id - The ID of the post to read.
 * @returns {Promise<object>} The response data.
 * @throws {Error} If the API request fails.
 */
export async function readPost(id) {
    try {
        const response = await fetch (API_SOCIAL_POSTS, {
            method: 'POST',
			headers: headers(),
			body: JSON.stringify({id}),
        })
        if (!response.ok) {
			const errorMsg = await response.json()
			throw new Error(
				`Network response for fetching post not ok: ${response.status} - ${errorMsg.status} - ${errorMsg.errors[0].message}`
			)
		}

		const data = await response.json()
		return data
    } catch (err) {
        console.error('There was a problem creating your post: ', err)
		throw err
    }
}

/**
 * Reads multiple posts with optional pagination and tagging.
 *
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<Object>} An object containing an array of posts in the `data` field, and information in a `meta` field.
 * @throws {Error} If the API request fails.
 */
export async function readPosts(limit = 12, page = 1, tag) {}

/**
 * Reads multiple posts by a specific user with optional pagination and tagging.
 *
 * @param {string} username - The username of the user whose posts to read.
 * @param {number} [limit=12] - The maximum number of posts to return.
 * @param {number} [page=1] - The page number for pagination.
 * @param {string} [tag] - An optional tag to filter posts.
 * @returns {Promise<object>} Object with data and meta fields.
 * @throws {Error} If the API request fails.
 */
export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
