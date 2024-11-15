export default class NavBar extends HTMLElement {
   constructor(arr) {
      super()

      this.arr = arr
   }

   connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' })
      const logo = document.createElement('span')
      logo.className = 'nav-logo'

      const style = this.getStyleSheet()
   }

   //   import stylesheet
   getStyleSheet() {
      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('href', '../../src/css/components/NavBar.css')

      return link
   }

   createLinks() {
      if (this.arr.length > 0) {
         this.arr.forEach((link) => {
            const linkEl = document.createElement
         })
      }
   }
}

customElements.define('skinny-navbar', NavBar)
