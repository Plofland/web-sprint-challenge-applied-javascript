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



// ***GOAL: Get the array with relevent data to display, if can do that, then I can access that data for the rest of task in this file*** 
// ***TEMPLATE: (code); //(logic behind the attempt) --- (result of attempt)***

// console.log(axios.get("https://lambda-times-api.herokuapp.com/topics")); //Change the out the variable to the axios.get --- Returns a promise
// console.log(result.data); object notation attempt --- undefined
// console.log(result.topics); object notation attempt --- undefined
// console.log(result.data.topics); object notation attempt --- TypeError
// console.log(result.data["topics"]);object notation attempt --- TypeError, does not like 'topics'
// console.log(result[0]);//tried calling an array item out of desparation --- undefined
// console.log(result[1]);//tried calling an array item out of desparation --- undefined
// console.log(Object.keys(result));// try to at least get the promise object keys to display---returns an empty array
// const topcisArray = ["javascript","bootstrap","technology","jquery","node.js"];// See if I can get any array to display --- displays the array with no issues
//console.log(Array.from(result)); // convert the promise into an array --- returns an empty array
// console.log(result.join('-'));// try to use an array method on the obj --- TypeError, of course it doesn't work
// console.log(Object.getOwnPropertyNames(result));//try to get the key of the key:value pairs of the promise object --- returns an empty string
// console.log(Object.getOwnPropertyNames(result.data));//try to get the key of the key:value pairs of the promise object featuring object dot notaion --- TypeError
// console.log(Object.getOwnPropertyNames(result.data.topics));//try to get the key of the key:value pairs of the promise object featuring object dot notaion pt.2 --- TypeError






const topicsSection = document.querySelector('topics');
// debugger

result.forEach((item) => {
    axios
    .get("https://lambda-times-api.herokuapp.com/topics");
    .then(res => {
        console.log(res)
        const topicData = res.data.topics;
        const newTopic = document.createElement('div')
        newTopic.classList.add('tab');
        newTopic.textContent = item;
        topicsSection.appendChild(newTopic);
    })
    .catch(error => {
        console.log(error);
    })
});


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