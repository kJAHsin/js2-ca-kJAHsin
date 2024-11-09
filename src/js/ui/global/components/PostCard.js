export class PostCard {
	constructor(id, title, tags = [], media = {url: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400', alt: 'Just decoration!'}) {
		this.id = id
        this.title = title
        this.tags = [...tags]
        this.media = media
	}

	renderCard() {
		const shadow = this.attachShadow({ mode: 'open' })
		const card = document.createElement('div')
		card.className = 'post-card wrapper'

		// attaching stylesheet
		const style = this.getStyleSheet()

		shadow.appendChild(style)
		shadow.appendChild(post-card)

        this.createCard(card)
	}

    createCard(card) {
        const title = document.createElement('h2')
        const tags = document.createElement('ul')
        const image = document.createElement('img')

        const elements = [title, tags, image]
        elements.forEach(el => card.appendChild(el))
    }

    
}
