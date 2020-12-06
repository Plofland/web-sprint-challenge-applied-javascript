// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerSection = document.querySelector('.header-container')

function header() {
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const siteHeadline = document.createElement('h1');
    const currentTemp = document.createElement('span');

    headerDiv.classList.add('header');
    date.classList.add('date');
    currentTemp.classList.add('temp');

    headerSection.appendChild(headerDiv);
    headerDiv.appendChild(date);
    headerDiv.appendChild(siteHeadline);
    headerDiv.appendChild(currentTemp);

    date.textContent = "MARCH 28, 2020";
    siteHeadline.textContent = "Lambda Times";
    currentTemp.textContent = "98°";

    return headerDiv;
}

header();