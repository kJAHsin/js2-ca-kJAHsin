/**
 * creates a card for each post
 *
 * @class
 */
export class PostCard {
   constructor(
      author,
      id,
      title,
      body,
      media = {
         url: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400',
         alt: 'Just decoration!',
      },
   ) {
      this.id = id
      this.title = title
      this.body = body
      this.media = media
      this.author = author
      this.cardEl
   }

   renderCard() {
      const cardContainer = document.getElementById('cards')
      const card = document.createElement('div')
      card.className = 'post-card'
      this.createCard(card)
      cardContainer.appendChild(card)
   }

   createCard(card) {
      const title = document.createElement('h2')
      const body = document.createElement('p')
      const author = document.createElement('span')
      const image = document.createElement('img')

      const elements = [title, body, author, image]
      elements.forEach((el) => card.appendChild(el))

      title.textContent = `${this.title} - ${this.id}`
      this.body && (body.innerText = this.body)
      this.author && (author.innerText = this.author.name)
      this.media && (image.src = this.media.url)
      this.media && this.media.alt && (image.alt = this.media.alt)
   }
}
