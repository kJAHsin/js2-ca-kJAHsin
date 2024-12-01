import { authGuard } from '../../utilities/authGuard.js'
import { onUpdatePost } from '../../ui/post/update.js'

authGuard()

const form = document.forms.editPost

form.addEventListener('submit', onUpdatePost)
