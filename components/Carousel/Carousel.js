/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(){
  let div = document.createElement('div')
  div.classList.add('carousel')

  let leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.innerText = '<'

  let mountains = document.createElement('img')
  mountains.src = "./assets/carousel/mountains.jpeg"

  let computer = document.createElement('img')
  computer.src = "./assets/carousel/computer.jpeg"

  let trees = document.createElement('img')
  trees.src = "./assets/carousel/trees.jpeg"

  let turntable = document.createElement('img')
  turntable.src = "./assets/carousel/turntable.jpeg"

  let rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.innerText = ">"

  // Append Elements
  div.appendChild(leftButton)
  div.appendChild(mountains)
  div.appendChild(computer)
  div.appendChild(trees)
  div.appendChild(turntable)
  div.appendChild(rightButton)

  return div
}

let newCarousel = Carousel();
document.querySelector('.carousel-container').appendChild(newCarousel)