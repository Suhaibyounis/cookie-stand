'use strict';

let workingHours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// Seattle
const Seattle = {
  City: 'Seattle',
  minCust: 23,
  maxCust: 65,
  numOfCookies: [],
  custPerHour :[],
  avgCookies: 6.3,
  total : 0,
  getNumOfCookies: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let cookie = Math.ceil( generateRandomNumber( this.minCust, this.maxCust ) * this.avgCookies );
      this.numOfCookies.push( cookie );
      this.total = this.total + cookie;
    }

  },

  getCustPerHour: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let custmer = generateRandomNumber( this.minCust, this.maxCust ) ;
      this.custPerHour.push( custmer );
    }
  },


  render: function(){
    const parentElement = document.getElementById( 'salesInfo' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h1Element = document.createElement( 'h1' );
    articleElement.appendChild( h1Element );
    h1Element.textContent = this.City;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );
    for( let i = 0; i < workingHours.length; i++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.';
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} cookies`;
  }
};
Seattle.getNumOfCookies();
Seattle.getCustPerHour();
Seattle.render();
console.log( Seattle.numOfCookies );

///
//Tokyo

const Tokyo = {
  City: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  numOfCookies: [],
  custPerHour :[],
  avgCookies: 1.2,
  total : 0,
  getNumOfCookies: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let cookie = Math.ceil( generateRandomNumber( this.minCust, this.maxCust ) * this.avgCookies );
      this.numOfCookies.push( cookie );
      this.total = this.total + cookie;
    }

  },

  getCustPerHour: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let custmer = generateRandomNumber( this.minCust, this.maxCust ) ;
      this.custPerHour.push( custmer );
    }
  },


  render: function(){
    const parentElement = document.getElementById( 'salesInfo' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h1Element = document.createElement( 'h1' );
    articleElement.appendChild( h1Element );
    h1Element.textContent = this.City;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );
    for( let i = 0; i < workingHours.length; i++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.';
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} cookies`;
  }
};
Tokyo.getNumOfCookies();
Tokyo.getCustPerHour();
Tokyo.render();
console.log( Tokyo.numOfCookies );


///
//Dubai
const Dubai = {
  City: 'Dubai',
  minCust: 11,
  maxCust: 38,
  numOfCookies: [],
  custPerHour :[],
  avgCookies: 3.7,
  total : 0,
  getNumOfCookies: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let cookie = Math.ceil( generateRandomNumber( this.minCust, this.maxCust ) * this.avgCookies );
      this.numOfCookies.push( cookie );
      this.total = this.total + cookie;
    }

  },



  render: function(){
    const parentElement = document.getElementById( 'salesInfo' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );


  for( let i = 0; i < workingHours.length; i++ ){
    const thElement = document.createElement( 'th' );
    tr8Element.appendChild( thElement );

    let dailyHourTotalAllShops = 0;
    for ( let j = 0; j < SalmonStand.allCity.length; j++ ) {
      // console.log( Shop.allShop[j].NumberOfCookiesPerHour[i] );
      dailyHourTotalAllShops += SalmonStand.allCity[j].numOfCookies[i];

    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} cookies`;
  }
};
Dubai.getNumOfCookies();
Dubai.getCustPerHour();
Dubai.render();
console.log( Dubai.numOfCookies );

///
//Paris

const Paris = {
  City: 'Paris',
  minCust: 20,
  maxCust: 38,
  numOfCookies: [],
  custPerHour :[],
  avgCookies: 2.3,
  total : 0,
  getNumOfCookies: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let cookie = Math.ceil( generateRandomNumber( this.minCust, this.maxCust ) * this.avgCookies );
      this.numOfCookies.push( cookie );
      this.total = this.total + cookie;
    }

  },

  getCustPerHour: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let custmer = generateRandomNumber( this.minCust, this.maxCust ) ;
      this.custPerHour.push( custmer );
    }
  },


  render: function(){
    const parentElement = document.getElementById( 'salesInfo' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h1Element = document.createElement( 'h1' );
    articleElement.appendChild( h1Element );
    h1Element.textContent = this.City;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );
    for( let i = 0; i < workingHours.length; i++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.';
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} cookies`;
  }
};
Paris.getNumOfCookies();
Paris.getCustPerHour();
Paris.render();

Lima.render();

// console.log( Seattle.numOfCookies );
// console.log( Tokyo.numOfCookies );
// console.log( Dubai.numOfCookies );
// console.log( Paris.numOfCookies );
// console.log( Lima.numOfCookies );


// console.log( Seattle );
// console.log( Tokyo );
// console.log( Dubai );
// console.log( Paris );
// console.log( Lima );


  },

  getCustPerHour: function(){
    for ( let i = 0; i < workingHours.length; i++ ) {
      let custmer = generateRandomNumber( this.minCust, this.maxCust ) ;
      this.custPerHour.push( custmer );
    }
  },


  render: function(){
    const parentElement = document.getElementById( 'salesInfo' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h1Element = document.createElement( 'h1' );
    articleElement.appendChild( h1Element );
    h1Element.textContent = this.City;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );
    for( let i = 0; i < workingHours.length; i++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = workingHours[i] + ': ' + this.numOfCookies[i] + '.';
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} cookies`;
  }
};
Lima.getNumOfCookies();
Lima.getCustPerHour();
Lima.render();
console.log( Lima.numOfCookies );

///


function generateRandomNumber( minCust, maxCust ) {
  return Math.ceil( Math.random() * ( maxCust - minCust + 1 ) + minCust ) ;
}

);