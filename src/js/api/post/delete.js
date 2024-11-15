import { API_SOCIAL_POSTS } from '../constants.js'
import { headers } from '../headers.js'

/**
 * Deletes a post by its ID.
 *
 * @param {?} id - The ID of the post to delete. Fill in the appropriate type.
 * @returns {?} What the function returns. Choose an appropriate return type.
 * @throws {Error} If the API request fails.
 */
export async function deletePost(id) {
   try {
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
         method: 'DELETE',
         headers: headers(),
      })
      if (!response.ok) {
         const errorMsg = response.json()
         throw new Error(
            `Error deleting post: (status: ok = ${response.ok}) - ${errorMsg.status} - ${errorMsg.errors[0].message}`,
         )
      }

      console.log(response)
      return response
   } catch (err) {
      console.error('There was a problem deleting this post: ', err)
      throw err
   }
}
