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
      const style = document.createElement('style')
      style.textContent = `
      /* resets */
      * {
         &::before,
         &::after,
         & {
            box-sizing: inherit;
            padding: 0;
            margin: 0;
         }
      }

      body {
         box-sizing: border-box;
         margin: 0;
         font-family: var(--font-fam);
      }

      a {
         color: inherit;
         text-decoration: none;
      }

      ul,
      li {
         list-style: none;
      }

      /* variables */
      :root {
         /* Font families */
         --font-fam: system-ui, -apple-system, 'ubuntu', 'Open Sans',
            'Helvetica Neue', sans-serif;
         --font-link: 1.125rem;
         --weight-link: 500;

         /* Theme colors */
         --bg-light: rgb(255 240 255);
         --orange-400: rgb(255 186 117);
         --orange-600: rgb(255 128 0);
         --orange-800: rgb(209 104 0);
         --blue-400: rgb(150 121 255);
         --blue-600: rgb(91 46 255);
         --blue-800: rgb(34 0 156);

         /* layout */
         --border-rad: 7px;
         --border-width: 3px;
         --spacing: calc(0.25rem + 2vw);

         /* transition */
         --trans-btn-hov: background 280ms ease-in, color 100ms ease-out 150ms;
         --trans-btn-leave: background 120ms ease-in, color 50ms ease-out 50ms;
      }

      /* layout */
      .logout-btn {
         display: inline-block;
         border-radius: var(--border-rad);
         color: var(--orange-800);
         padding: 0.75rem 2rem;
         border: var(--border-width) solid var(--orange-800);
         height: 100%;
         font-size: var(--font-link);
         font-weight: var(--weight-link);
         background: linear-gradient(
            80deg,
            var(--bg-light) 40%,
            var(--orange-800) 75%
         );
         background-size: 500%;
         background-position-x: left;
         transition: var(--trans-btn-leave);
         cursor: pointer;

         &:hover,
         &:focus-visible {
            background-position-x: right;
            color: var(--bg-light);
            transition: var(--trans-btn-hov);
         }

         &.hidden {
            display: none;
         }
      }
      `
      return style
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
