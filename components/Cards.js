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

// const cardSection = document.querySelector('cards-container');

// function cardMaker(articleObj){
//     const cardDiv = document.createElement('div');
//     const articleHeadline = document.createElement('div');
//     const author = document.createElement('div');
//     const imgDiv = document.createElement('div');
//     const image = document.createElement('img');
//     const authorCredit = document.createElement('span');

//     cardSection.appendChild(cardDiv);
//     cardDiv.appendChild(articleHeadline);
//     cardDiv.appendChild(author);
//     author.appendChild(imgDiv);
//     imgDiv.appendChild(image);
//     author.appendChild(authorCredit);

//     articleHeadline.textContent = `{placeholder}`;
//     image.src = ('url')
//     authorCredit.textContent = `{placeholder}`;

//     return cardDiv;
// }