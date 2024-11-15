import '../../../css/toast/toast.css'

/**
 * Toast notification component.
 * Displays a temporary notification on the screen with customizable type and text.
 */
export class Toast {
   /**
    * Creates a new Toast instance.
    * @param {string} type - Type of the toast (e.g., 'success', 'warning') for styling.
    * @param {string} text - Text content to display in the toast.
    */
   constructor(type, text) {
      this.type = type
      this.text = text
      this.toastEl = null

      this.toastIt()
   }

   /**
    * Creates and appends the toast element to the document body.
    * Sets the appropriate class based on the toast type.
    */
   createToast() {
      const newToast = document.createElement('div')
      newToast.className = `toast ${this.type}`
      newToast.innerHTML = `<p>${this.text}</p>`
      document.body.appendChild(newToast)
      this.toastEl = newToast
   }

   /**
    * Removes the toast element from the document body.
    */
   removeToast() {
      if (this.toastEl) {
         document.body.removeChild(this.toastEl)
         this.toastEl = null
      }
   }

   /**
    * Initiates the toast display and removal process.
    * Plays an intro and exit animation after a delay, then removes the toast from the DOM.
    */
   toastIt() {
      this.createToast()

      // Removes the toast after the toastOut animation ends
      this.toastEl.addEventListener(
         'animationend',
         () => this.removeToast(),
         { once: true },
      )
   }
}
