import { loadData } from '../../api/storage'

const profileLink = document.getElementById('profileLink')

const token = loadData('accessToken')

if (!token) {
   profileLink.ariaDisabled = true
   profileLink.classList.add('disabled')
}
