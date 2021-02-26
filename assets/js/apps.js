'use strict';
let workingHours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let dailyLocationTotal =[];
SalmonStand.allCity=[];

const table = document.getElementById( 'table' );

const tableElement = document.createElement( 'table' );
table.appendChild( tableElement );

const tr1Element = document.createElement( 'tr' );
tableElement.appendChild( tr1Element );

const th1 = document.createElement( 'th' );
tr1Element.appendChild( th1 );
th1.textContent = 'Location';

for ( let i= 0; i < workingHours.length; i++ ){
  const th2 = document.createElement( 'th' );
  tr1Element.appendChild( th2 );
  th2.textContent = workingHours[i];

}
const th3 = document.createElement( 'th' );
tr1Element.appendChild( th3 );
th3.textContent = 'Total of Total';

function SalmonStand ( city, minCust, maxCust, avgCookies ){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.numOfCookies = [];
  this.custPerHour = [];
  this.avgCookies = avgCookies;
  this.total = 0;
  SalmonStand.allCity.push( this );

}

SalmonStand.prototype.getNumOfCookies = function() {
  for ( let i = 0; i < workingHours.length; i++ ) {
    let cookie = Math.ceil( generateRandomNumber( this.minCust, this.maxCust ) * this.avgCookies );
    this.numOfCookies.push( cookie );
    this.total = this.total + cookie;


  }
  dailyLocationTotal.push( this.total );
  console.log( dailyLocationTotal );
};

SalmonStand.prototype.getCustPerHour = function (){
  for ( let i = 0; i < workingHours.length; i++ ) {
    let custmer = generateRandomNumber( this.minCust, this.maxCust );
    this.custPerHour.push( custmer );
  }
};

SalmonStand.prototype.render = function(){
  const parentElement = document.getElementById( 'salesInfo' );

  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  const h1Element = document.createElement( 'h1' );
  articleElement.appendChild( h1Element );
  h1Element.textContent = this.City;


  // Table
  // Table layout
  const rowElement = document.createElement( 'tr' );
  tableElement.appendChild( rowElement );

  const tdElement = document.createElement( 'td' );
  rowElement.appendChild( tdElement );
  tdElement.textContent = this.city;


  for( let i = 0; i < workingHours.length; i++ ){
    const tdElement = document.createElement( 'td' );
    rowElement.appendChild( tdElement );
    tdElement.textContent = this.numOfCookies[i];

  }


  const thElement = document.createElement( 'th' );
  rowElement.appendChild( thElement );
  thElement.textContent = this.total;

};

//FooterFunction

function footerOfTable (){

  const tr8Element = document.createElement( 'tr' );
  tableElement.appendChild( tr8Element );

  // tr8Element.classList.add("Tablefooter");


  const th21Element = document.createElement( 'th' );
  tr8Element.appendChild( th21Element );
  th21Element.textContent = 'total';
  //
  // for( let i = 0; i < workingHours.length; i++ ){
  //   const th20Element = document.createElement('th');
  //   tr8Element.appendChild( th20Element );
  //   th20Element.textContent = Seattle.numOfCookies[i] + Tokyo.numOfCookies[i] + Dubai.numOfCookies[i]
  //    + Paris.numOfCookies[i] + Lima.numOfCookies[i];
  // }

  for( let i = 0; i < workingHours.length; i++ ){
    const thElement = document.createElement( 'th' );
    tr8Element.appendChild( thElement );
    // thElement.textContent = seattle.NumberOfCookiesPerHour[i] + tokyo.NumberOfCookiesPerHour[i] + dubai.NumberOfCookiesPerHour[i] + paris.NumberOfCookiesPerHour[i] + lima.NumberOfCookiesPerHour[i];
    let dailyHourTotalAllShops = 0;
    for ( let j = 0; j < SalmonStand.allCity.length; j++ ) {
      // console.log( Shop.allShop[j].NumberOfCookiesPerHour[i] );
      dailyHourTotalAllShops += SalmonStand.allCity[j].numOfCookies[i];
    }
    // console.log( dailyHourTotalAllShops );
    thElement.textContent = dailyHourTotalAllShops;
  }


  // calculate the total of the Daily Location Total
  let totals = 0;
  for ( let i = 0; i < dailyLocationTotal.length; i++ ){
    totals += dailyLocationTotal[i];
  }
  const th23Element = document.createElement( 'th' );
  tr8Element.appendChild( th23Element );
  th23Element.textContent = totals;
}



console.log( SalmonStand.allCity );

const Seattle = new SalmonStand( 'Seattle', 23, 65,'6.3' );
const Tokyo = new SalmonStand( 'Tokyo', 3, 24, '1.2' );
const Dubai = new SalmonStand( 'Dubai', 11, 38, '3.7' );
const Paris = new SalmonStand( 'Paris', 20, 38, '2.3' );
const Lima = new SalmonStand( 'Lima', 2, 16, '4.6' );

Seattle.getNumOfCookies();
Tokyo.getNumOfCookies();
Dubai.getNumOfCookies();
Paris.getNumOfCookies();
Lima.getNumOfCookies();

Seattle.getCustPerHour();
Tokyo.getCustPerHour();
Dubai.getCustPerHour();
Paris.getCustPerHour();
Lima.getCustPerHour();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

console.log( Seattle.numOfCookies );
console.log( Tokyo.numOfCookies );
console.log( Dubai.numOfCookies );
console.log( Paris.numOfCookies );
console.log( Lima.numOfCookies );


console.log( Seattle );
console.log( Tokyo );
console.log( Dubai );
console.log( Paris );
console.log( Lima );

footerOfTable();

function generateRandomNumber( minCust, maxCust ) {
  return Math.ceil( Math.random() * ( maxCust - minCust + 1 ) + minCust );
}

// console.log(generateRandomNumber(minCust, maxCust))

const formElement = document.getElementById ( 'addNewCity' );

formElement.addEventListener( 'submit', function( event ){

  event.preventDefault();

  tableElement.removeChild( tableElement.lastChild );

  const cityName = event.target.cityName.value;
  const minCust =  parseFloat( event.target.minCust.value );
  const maxCust = parseFloat( event.target.maxCust.value );
  const avgCookies = parseFloat( event.target.avgCookies.value );

  const cityNameNew = new SalmonStand ( cityName,minCust, maxCust, avgCookies );

  cityNameNew.getNumOfCookies();
  cityNameNew.render();

  formElement.reset();
  footerOfTable();
  console.log( cityName );
  console.log( minCust );
  console.log( maxCust );
}
);

