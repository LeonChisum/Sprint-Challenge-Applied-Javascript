// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(date, temp) {
    let div = document.createElement('div')// Header
    div.classList.add('header')

    let span = document.createElement('span')// Date
    span.classList.add('date')
    span.innerText = date;

    let h1 = document.createElement('h1') // Title
    h1.innerText = "Lambda Times"

    let temperature = document.createElement('span')// Weather
    temperature.classList.add('temp')
    temperature.innerText = `${temp} \xB0`

    //Append Elements
    div.appendChild(span)
    div.appendChild(h1)
    div.appendChild(temperature)

    return div
}

let newHeader = Header("March 28, 2019", "98")
console.log(newHeader)
let headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(newHeader)