import './css/style.css'
import router from './js/router'
import './js/ui/global/components/LogoutButton.js'
import './js/ui/global/components/NavBar.js'

window.addEventListener('load', async () => {
   await router(window.location.pathname)
})
