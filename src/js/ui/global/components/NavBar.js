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
      .nav-bar {
         display: flex;
         justify-content: space-between;
         padding-block: var(--spacing);
         width: 100%;

         img {
            object-fit: contain;
            width: calc(2rem + 6vw);
            object-fit: contain;
            filter: invert(1) brightness(0.25);
            cursor: pointer;
         }

         ul.nav-links {
            display: flex;
            gap: var(--spacing);
            align-items: center;

            li.link {
               border-radius: var(--border-rad);
               border: var(--border-width) solid var(--blue-800);

               a {
                  display: inline-block;
                  padding: 0.75rem 2rem;
                  text-decoration: none;
                  font-family: inherit;
                  font-weight: var(--weight-link);
                  font-size: var(--font-link);
                  color: var(--blue-800);
                  background-color: var(--bg-light);
                  transition: var(--trans-btn-leave);

                  &:hover,
                  &:focus-visible {
                     background-color: var(--blue-800);
                     color: var(--bg-light);
                     transition: var(--trans-btn-hov);
                  }
               }
            }
         }

         logout-button {
            height: 100%;
         }
      }

      `
      return style
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
