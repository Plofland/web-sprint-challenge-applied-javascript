// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// import axios from 'axios'

const result = axios.get("https://lambda-times-api.herokuapp.com/topics");
console.log(result); //WORKS!!! Returns a promise

console.log(Object.keys(result));//returns an empty array

//Use this for now
const topcisArray = ["javascript","bootstrap","technology","jquery","node.js"];

console.log(topcisArray);

// console.log(result.data); undefined
// console.log(result.topics); undefined
// console.log(result.data.topics); TypeError
// console.log(result.data["topics"]);TypeError, does not like 'topics'
// console.log(result[0]);//undefined
// console.log(result.[1]);//undefined
// console.log(axios.get("https://lambda-times-api.herokuapp.com/topics")); //Returns a promise

const topicsSection = document.querySelector('topics');
// debugger

// result.forEach((item) => {
//     axios
//     .get("https://lambda-times-api.herokuapp.com/topics");
//     .then(res => {
//         console.log(res)
//         const topicData = res.data.topics;
//         const newTopic = document.createElement('div')
//         newTopic.classList.add('tab');
//         newTopic.textContent = topicData;
//         topicsSection.appendChild(newTopic);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// });


// Attempt at putting the forEach loop inside axios 
// axios
//     .get("https://lambda-times-api.herokuapp.com/topics");
//     .then(res => {
//         console.log(res)
//         const topicData = res.data.topics;
//         topicData.forEach-----
//         const newTopic = document.createElement('div')
//         newTopic.classList.add('tab');
//         newTopic.textContent = topicData;
//         topicsSection.appendChild(newTopic);
//     })
//     .catch(error => {
//         console.log(error);
//     })
