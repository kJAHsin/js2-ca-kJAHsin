import { loadData } from '../../../api/storage/load.js'

export default class NavBar extends HTMLElement {
   constructor(linkArr) {
      super()

      this.isUserLoggedIn = false
      this.linkArr = [
         {
            name: 'My Profile',
            href: '/profile/',
            id: 'profileLink',
            auth: true,
         },
         {
            name: 'Login',
            href: '/auth/login/',
            id: 'loginLink',
            auth: false,
         },
         {
            name: 'Register',
            href: '/auth/register/',
            id: 'registerLink',
            auth: false,
         },
      ]

      // check if user is logged in on render of component
      this.isLoggedIn()
   }

   connectedCallback() {
      // creating elements
      const shadow = this.attachShadow({ mode: 'open' })
      const navbar = document.createElement('div')
      const logo = document.createElement('img')
      // setting attributes
      navbar.className = 'nav-bar'
      navbar.role = 'navigation'
      logo.className = 'nav-logo'
      logo.src = '../../images/noroff-logo.png'
      logo.alt = 'Noroff Logo'

      const style = this.getStyleSheet()

      shadow.appendChild(style)
      shadow.appendChild(navbar)
      navbar.appendChild(logo)

      this.createNavigation(navbar)
      this.clickableLogo(logo)
   }

   //   import stylesheet
   getStyleSheet() {
      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('href', '../../src/css/components/NavBar.css')

      return link
   }

   createNavigation(parent) {
      const navLinks = document.createElement('ul')
      const logoutBtn = document.createElement('logout-button')

      navLinks.className = 'nav-links'

      if (this.linkArr.length > 0) {
         this.linkArr.forEach((link) => {
            if (
               this.isUserLoggedIn === link.auth &&
               link.href !== window.location.pathname
            ) {
               this.createLink(link, navLinks)
            }
         })
      }

      navLinks.append(logoutBtn)

      parent.appendChild(navLinks)
   }

   createLink(link, parent) {
      const linkEl = document.createElement('li')
      linkEl.className = 'link'
      linkEl.innerHTML = `
         <a href="${link.href}">${link.name}</a>
      `
      parent.appendChild(linkEl)
   }

   clickableLogo(el) {
      el.addEventListener('click', () => {
         window.location.href = '/'
      })
   }

   isLoggedIn() {
      const userToken = loadData('accessToken')

      if (userToken && userToken !== null) {
         this.isUserLoggedIn = true
      } else {
         this.isUserLoggedIn = false
      }
   }
}

customElements.define('skinny-navbar', NavBar)
