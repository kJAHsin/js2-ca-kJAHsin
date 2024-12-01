import { onSearchPost } from '../../ui/post/search.js'
import '../../../css/pages/post.css'

const form = document.forms.searchPost

form.addEventListener('submit', onSearchPost)
