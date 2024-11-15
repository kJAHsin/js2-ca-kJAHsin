import { API_SOCIAL_POSTS } from '../constants.js'
import { headers } from '../headers.js'

/**
 * Updates an existing post by sending updated data to the API.
 *
 * @param {string|number} id - The ID of the post to update.
 * @param {Object} params - The updated post parameters.
 * @param {string} [params.title] - The updated title of the post.(optional)
 * @param {string} [params.body] - The updated body of the post.(optional)
 * @param {string[]} [params.tags] - Array of updated tags associated with the post.(optional)
 * @param {Object} [params.media] - Updated media object containing URL and alt text.(optional)
 * @param {string} [params.media.url] - The updated URL of the media.
 * @param {string} [params.media.alt] - Updated alt text for the media.
 * @returns {Promise<Object>} The updated post data from the API.
 * @throws {Error} If the API request fails.
 */
export async function updatePost(
   id,
   { title, body, tags, mediaUrl, mediaAlt },
) {
   try {
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
         method: 'PUT',
         headers: headers(),
         body: JSON.stringify({
            ...(title && { title }),
            ...(body && { body }),
            ...(tags && { tags: [...tags] }),
            ...(mediaUrl && {
               media: {
                  ...(mediaUrl && { url: mediaUrl }),
                  ...(mediaAlt && { alt: mediaAlt }),
               },
            }),
         }),
      })

      if (!response.ok) {
         const errorMsg = await response.json()
         throw new Error(
            `Network response for updating post not ok: ${response.status} - ${errorMsg.status} - ${errorMsg.errors[0].message}`,
         )
      }

      const data = await response.json()
      return data
   } catch (err) {
      console.error('There was a problem updating your post: ', err)
      throw err
   }
}
