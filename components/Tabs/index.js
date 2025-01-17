// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            let topicArr = response.data.topics
            let all = document.createElement('div')
                all.classList.add('tab')
                all.innerText = "All"
                let DOM = document.querySelector('.topics')
                DOM.appendChild(all)
                
            topicArr.forEach(element => {
                let div = document.createElement('div')
                div.classList.add('tab')
                div.innerText = element
                DOM.appendChild(div)
            
            });
        });


