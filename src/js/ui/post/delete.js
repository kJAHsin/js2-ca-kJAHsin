import { deletePost } from '../../api/post/delete.js'
/**
 * Passes data to the createPost function in api/post and handles the response
 */
export async function onDeletePost(e) {
   e.preventDefault()

   const id = e.target.dataset.postID

   deletePost(id)
}
