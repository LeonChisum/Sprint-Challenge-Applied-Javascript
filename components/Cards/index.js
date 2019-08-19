// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
            .then(response => {
                console.log(response.data.articles)
                let bootstrap = response.data.articles.bootstrap
                let javascript = response.data.articles.javascript
                let jquery = response.data.articles.jquery
                let node = response.data.articles.node
                let technology = response.data.articles.technology

                bootstrap.forEach(element => {
                    let newCards = Cards(element)
                    document.querySelector('.cards-container').appendChild(newCards)
                })

                javascript.forEach(element => {
                    let newCards = Cards(element)
                    document.querySelector('.cards-container').appendChild(newCards)
                })

                jquery.forEach(element => {
                    let newCards = Cards(element)
                    document.querySelector('.cards-container').appendChild(newCards)
                })

                node.forEach(element => {
                    let newCards = Cards(element)
                    document.querySelector('.cards-container').appendChild(newCards)
                })

                technology.forEach(element => {
                    let newCards = Cards(element)
                    document.querySelector('.cards-container').appendChild(newCards)
                })

            })


function Cards(topic){
    let card = document.createElement('div')
    card.classList.add('card')

    let headliner = document.createElement('div')
    headliner.classList.add('headline')
    headliner.innerText = topic.headline

    let author = document.createElement('div')
    author.classList.add('author')

    let imageContainer = document.createElement('div')
    imageContainer.classList.add('img-container')

    let image = document.createElement('img')
    image.src = topic.authorPhoto

    let span = document.createElement('span')
    span.innerText = `By: ${topic.authorName}`

    // Appending elements
    imageContainer.appendChild(image)
    author.appendChild(imageContainer)
    author.appendChild(span)
    card.appendChild(headliner)
    card.appendChild(author)
    

    return card
}