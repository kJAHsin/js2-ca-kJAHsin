import { authGuard } from '../../utilities/authGuard'
import { onCreatePost } from '../../ui/post/create'

authGuard()

const form = document.forms.createPost

form.addEventListener('submit', onCreatePost)
