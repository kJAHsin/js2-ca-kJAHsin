import { onSearchPost } from '../../ui/post/search.js'
import { onDeletePost } from '../../ui/post/delete.js'
import { authGuard } from '../../utilities/authGuard.js'
import '../../../css/pages/post.css'

authGuard()

const form = document.forms.searchPost
const deleteForm = document.forms.deletePost
const openDeleteModalBtn = document.getElementById('open-delete-modal')

form.addEventListener('submit', onSearchPost)
deleteForm.addEventListener('submit', onDeletePost)
openDeleteModalBtn.addEventListener('click', () => {
   const deleteModal = document.getElementById('delete-modal')
   deleteModal.classList.add('open')
})
