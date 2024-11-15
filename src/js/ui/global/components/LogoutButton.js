import { loadData } from '../../../api/storage/load.js'
import { setLogoutListener } from '../logout.js'

export class LogoutButton extends HTMLElement {
   constructor() {
      super()
   }

   connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' })
      const button = document.createElement('button')
      button.id = 'logOutBtn'
      button.className = 'btn logout-btn'
      button.innerText = 'Log out'

      // attaching stylesheet
      const style = this.getStyleSheet()

      shadow.appendChild(style)
      shadow.appendChild(button)
      this.setListener()
      this.checkLoggedin(button)
   }

   // attach listener for logout function
   setListener() {
      const btn = this.shadowRoot.getElementById('logOutBtn')

      if (btn) {
         setLogoutListener(btn)
      }
   }

   //   import stylesheet
   getStyleSheet() {
      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute(
         'href',
         '../../src/css/components/LogoutButton.css',
      )

      return link
   }

   //   check if user is logged in and show log out button if so
   checkLoggedin(el) {
      const token = loadData('accessToken')

      if (!token) {
         el.classList.add('hidden')
      }
   }
}

customElements.define('logout-button', LogoutButton)
