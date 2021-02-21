'use strict'

let workingHours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', 'Total'];
// Seattle
const Seattle = {
    City: 'Seattle',
    minCust: 23,
    maxCust: 65,
    numOfCookies: [], 
    avgCookies: 6.3,
    getNumOfCookies: function(minCust, maxCust){
        for (let i = 0; i < (workingHours.length - 1 ); i++) {
            this.numOfCookies.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.avgCookies)) ;
        }
        let total = this.numOfCookies[0] + this.numOfCookies[1] + this.numOfCookies[2] +this.numOfCookies[3] +this.numOfCookies[4] +this.numOfCookies[5] +this.numOfCookies[6] +this.numOfCookies[7] +this.numOfCookies[8] +this.numOfCookies[9] +this.numOfCookies[10] +this.numOfCookies[11] +this.numOfCookies[12] +this.numOfCookies[13]; 
        this.numOfCookies.push(total);
    },
    render: function() {
    const parentElement = document.getElementById('salesInfo');
    
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    
    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;
    
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for( let i = 0; i < workingHours.length; i++){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.'; 
    }
}
};
Seattle.getNumOfCookies();
Seattle.render();
console.log(Seattle.numOfCookies);

///
// Tokyo

const Tokyo = {
    City: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    numOfCookies: [], 
    avgCookies: 1.2,
    getNumOfCookies: function(minCust, maxCust){
        for (let i = 0; i < (workingHours.length - 1 ); i++) {
            this.numOfCookies.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.avgCookies)) ;
        }
        let total = this.numOfCookies[0] + this.numOfCookies[1] + this.numOfCookies[2] +this.numOfCookies[3] +this.numOfCookies[4] +this.numOfCookies[5] +this.numOfCookies[6] +this.numOfCookies[7] +this.numOfCookies[8] +this.numOfCookies[9] +this.numOfCookies[10] +this.numOfCookies[11] +this.numOfCookies[12] +this.numOfCookies[13]; 
        this.numOfCookies.push(total);
    },
    render: function() {
    const parentElement = document.getElementById('salesInfo');
    
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    
    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;
    
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for( let i = 0; i < workingHours.length; i++){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.'; 
    }
}
};
Tokyo.getNumOfCookies();
Tokyo.render();
console.log(Tokyo.numOfCookies);

///

// Dubai
const Dubai = {
    City: 'Dubai',
    minCust: 11,
    maxCust: 38,
    numOfCookies: [], 
    avgCookies: 3.7,
    getNumOfCookies: function(minCust, maxCust){
        for (let i = 0; i < (workingHours.length - 1 ); i++) {
            this.numOfCookies.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.avgCookies)) ;
        }
        let total = this.numOfCookies[0] + this.numOfCookies[1] + this.numOfCookies[2] +this.numOfCookies[3] +this.numOfCookies[4] +this.numOfCookies[5] +this.numOfCookies[6] +this.numOfCookies[7] +this.numOfCookies[8] +this.numOfCookies[9] +this.numOfCookies[10] +this.numOfCookies[11] +this.numOfCookies[12] +this.numOfCookies[13]; 
        this.numOfCookies.push(total);
    },
    render: function() {
    const parentElement = document.getElementById('salesInfo');
    
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    
    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;
    
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for( let i = 0; i < workingHours.length; i++){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.'; 
    }
}
};
Dubai.getNumOfCookies();
Dubai.render();
console.log(Dubai.numOfCookies);

///

// Paris
const Paris = {
    City: 'Paris',
    minCust: 20,
    maxCust: 38,
    numOfCookies: [], 
    avgCookies: 2.3,
    getNumOfCookies: function(minCust, maxCust){
        for (let i = 0; i < (workingHours.length - 1 ); i++) {
            this.numOfCookies.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.avgCookies)) ;
        }
        let total = this.numOfCookies[0] + this.numOfCookies[1] + this.numOfCookies[2] +this.numOfCookies[3] +this.numOfCookies[4] +this.numOfCookies[5] +this.numOfCookies[6] +this.numOfCookies[7] +this.numOfCookies[8] +this.numOfCookies[9] +this.numOfCookies[10] +this.numOfCookies[11] +this.numOfCookies[12] +this.numOfCookies[13]; 
        this.numOfCookies.push(total);
    },
    render: function() {
    const parentElement = document.getElementById('salesInfo');
    
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    
    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;
    
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for( let i = 0; i < workingHours.length; i++){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.'; 
    }
}
};
Paris.getNumOfCookies();
Paris.render();
console.log(Paris.numOfCookies);


///

// Lima
const Lima = {
    City: 'Lima',
    minCust: 2,
    maxCust: 16,
    numOfCookies: [], 
    avgCookies: 4.6,
    getNumOfCookies: function(minCust, maxCust){
        for (let i = 0; i < (workingHours.length - 1 ); i++) {
            this.numOfCookies.push(parseInt(generateRandomNumber(this.minCust, this.maxCust) * this.avgCookies)) ;
        }
        let total = this.numOfCookies[0] + this.numOfCookies[1] + this.numOfCookies[2] +this.numOfCookies[3] +this.numOfCookies[4] +this.numOfCookies[5] +this.numOfCookies[6] +this.numOfCookies[7] +this.numOfCookies[8] +this.numOfCookies[9] +this.numOfCookies[10] +this.numOfCookies[11] +this.numOfCookies[12] +this.numOfCookies[13]; 
        this.numOfCookies.push(total);
    },
    render: function() {
    const parentElement = document.getElementById('salesInfo');
    
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    
    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;
    
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for( let i = 0; i < workingHours.length; i++){
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.'; 
    }
}
};
Lima.getNumOfCookies();
Lima.render();
console.log(Lima.numOfCookies);


function generateRandomNumber(minCust, maxCust) {
    return Math.ceil(Math.random() * (maxCust - minCust + 1) + minCust) ; 
  }
