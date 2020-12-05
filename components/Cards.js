// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const { default: Axios } = require("axios");

const cardSection = document.querySelector('.cards-container');
const cardIndividual = document.querySelector('.card')

function cardMaker(articleObj){
    const cardDiv = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imgDiv = document.createElement('div');
    const image = document.createElement('img');
    const authorCredit = document.createElement('span');

    // cardSection.appendChild(cardDiv);
    cardDiv.appendChild(articleHeadline);
    cardDiv.appendChild(author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(image);
    author.appendChild(authorCredit);

    articleHeadline.textContent = `${articleObj.headline}`;
    image.src = ('articleObj.authorPhoto')
    authorCredit.textContent = `${articleObj.authorName}`;

    cardIndividual.addEventListener('click', () => {
        console.log(`${articleObj.headline}`)
    })
    debugger;
    return cardDiv;
}



axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
        console.log(res.data.articles);
        const testRun = res.data.articles;
        testRun.forEach((item) => {
            console.log(item);
            item.forEach((elem) => {
                console.log(elem);
                cardSection.appendChild(cardMaker(elem));
            });

        })
    })
    .catch(error => {
        console.log(error)
    })

    // testRun.forEach((elem) => {
    //     debugger;
    //     elem.map((item) => {
    //         debugger;
    //         console.log(item);
    //         debugger;
    //         cardMaker(item);
    //     })
    // })