import { updatePost } from '../../api/post/update.js'
import { Toast } from '../toast/Toast.js'
import { saveData } from '../../api/storage/save.js'
import '../../../css/pages/create-post.css'

/**
 * Passes data to the updatePost function in api/post and handles the response
 *
 * @param {Event} e to prevent default form submission
 */
export async function onUpdatePost(e) {
   e.preventDefault(e)

   const formData = new FormData(e.target)
   const data = Object.fromEntries(formData.entries())

   try {
      const { id, ...postData } = data
      const response = await updatePost(Number(id), postData)

      if (response) {
         // Handle successful creation of post
         const toast = new Toast(
            'success',
            `Way to go! You updated the post ${response.data.title} with id ${response.data.id}`,
         )
         saveData('most-recent-post-update', response.data.id)

         toast.toastEl.addEventListener(
            'animationend',
            () => (window.location.href = '/post/'),
         )
      }
   } catch (err) {
      console.error('Could not create post', err)
      new Toast('warning', 'Ooops!<br>Could not update post...')
   }
}
