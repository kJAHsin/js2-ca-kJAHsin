import { deletePost } from '../../api/post/delete.js'
import { Toast } from '../toast/Toast.js'
import { saveData } from '../../api/storage/save.js'
/**
 * Passes data to the createPost function in api/post and handles the response
 */
export async function onDeletePost(e) {
   e.preventDefault()

   const formData = new FormData(e.target)
   const data = Object.fromEntries(formData.entries())
   const id = data.id

   deletePost(id)
   closeModal()

   new Toast(
      'warning',
      `Hope that wasn't a mistake hahaha. You've deleted post ${id}`,
   )

   saveData('most-recent-deletion', response.data.id)
}

function closeModal() {
   const deleteModal = document.getElementById('delete-modal')
   deleteModal.classList.remove('open')
}
