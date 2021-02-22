'use strict'
let workingHours = ['6am', '7am', '8am', '9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let dailyLocationTotal =[];

const table = document.getElementById('table'), totalPerHour =0;

const tableElement = document.createElement('table');
   table.appendChild(tableElement);

    const tr1Element = document.createElement('tr');
    tableElement.appendChild(tr1Element);


    const th1Element = document.createElement('th');
    tr1Element.appendChild(th1Element);
    th1Element.textContent = '';

    const th2Element = document.createElement('th');
    tr1Element.appendChild(th2Element);
    th2Element.textContent = '6:00 am';

    const th3Element = document.createElement('th');
    tr1Element.appendChild(th3Element);
    th3Element.textContent = '7:00 am';
  
    const th4Element = document.createElement('th');
    tr1Element.appendChild(th4Element);
    th4Element.textContent = '8:00 am'

    const th5Element = document.createElement('th');
    tr1Element.appendChild(th5Element);
    th5Element.textContent = '9:00 am';

    const th6Element = document.createElement('th');
    tr1Element.appendChild(th6Element);
    th6Element.textContent = '10:00 am';
  
    const th7Element = document.createElement('th');
    tr1Element.appendChild(th7Element);
    th7Element.textContent = '11:00 am'

    const th8Element = document.createElement('th');
    tr1Element.appendChild(th8Element);
    th8Element.textContent = '12:00 pm';

    const th9Element = document.createElement('th');
    tr1Element.appendChild(th9Element);
    th9Element.textContent = '1:00 pm';
  
    const th10Element = document.createElement('th');
    tr1Element.appendChild(th10Element);
    th10Element.textContent = '2:00 pm'

    const th11Element = document.createElement('th');
    tr1Element.appendChild(th11Element);
    th11Element.textContent = '3:00 pm';

    const th12Element = document.createElement('th');
    tr1Element.appendChild(th12Element);
    th12Element.textContent = '4:00 pm';
  
    const th13Element = document.createElement('th');
    tr1Element.appendChild(th13Element);
    th13Element.textContent = '5:00 pm'

    const th14Element = document.createElement('th');
    tr1Element.appendChild(th14Element);
    th14Element.textContent = '6:00 pm';

    const th15Element = document.createElement('th');
    tr1Element.appendChild(th15Element);
    th15Element.textContent = '7:00 pm';
  
    const th16Element = document.createElement('th');
    tr1Element.appendChild(th16Element);
    th16Element.textContent = 'Total'
   


// Seattle

function SalmonStand (city, minCust, maxCust, avgCookies){
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.numOfCookies = [];
    this.custPerHour = [];
    this.avgCookies = avgCookies;
    this.total = 0;
    

};

SalmonStand.prototype.getNumOfCookies = function(minCust, maxCust) {
    for (let i = 0; i < workingHours.length; i++) {
        let cookie = Math.ceil(generateRandomNumber(this.minCust, this.maxCust) * this.avgCookies);
        this.numOfCookies.push(cookie);
        this.total = this.total + cookie;
       

}
dailyLocationTotal.push(this.total);
console.log(dailyLocationTotal);
};



SalmonStand.prototype.getCustPerHour = function (minCust, maxCust){
    for (let i = 0; i < workingHours.length; i++) {
        let custmer = generateRandomNumber(this.minCust, this.maxCust);
        this.custPerHour.push(custmer);
 }
};






SalmonStand.prototype.render = function(){
    const parentElement = document.getElementById('salesInfo');
    
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    
    const h1Element = document.createElement('h1');
    articleElement.appendChild(h1Element);
    h1Element.textContent = this.City;
      
    

    // Table
   


    // Table layout
    const rowElement = document.createElement('tr');
    tableElement.appendChild(rowElement);
    
    const tdElement = document.createElement('td');
    rowElement.appendChild(tdElement);
    tdElement.textContent = this.city; 


    for( let i = 0; i < workingHours.length; i++){
    const tdElement = document.createElement('td');
    rowElement.appendChild(tdElement);
    tdElement.textContent = this.numOfCookies[i]; 
    
    }

      
    const thElement = document.createElement('th');
    rowElement.appendChild(thElement);
    thElement.textContent = this.total; 


    //FooterFunction
    
    function tableFooter(){

        const trElement = document.createElement( 'tr' );
        trfootElement.appendChild( trElement );
        const th21Element = document.createElement( 'th' );
        trElement.appendChild( th21Element );
        th21Element.textContent = 'total';
        //
        for( let i = 0; i < workingHours.length; i++ ){
          const thElement = document.createElement( 'th' );
          trElement.appendChild( thElement );
          thElement.textContent = seattle.numOfCookies[i] + tokyo.numOfCookies[i] + dubai.numOfCookies[i]
           + paris.numOfCookies[i] + lima.numOfCookies[i];
        }
        // calculate the total of the Daily Location Total
        for ( let i = 0; i < dailyLocationTotal.length; i++ ) {
          total += dailyLocationTotal[i];
        }
        const th23Element = document.createElement( 'th' );
        trElement.appendChild( th23Element );
        th23Element.textContent = total;
      }
    
};

 
const Seattle = new SalmonStand('Seattle', 23, 65,'6.3');
const Tokyo = new SalmonStand('Tokyo', 3, 24, '1.2')
const Dubai = new SalmonStand('Dubai', 11, 38, '3.7')
const Paris = new SalmonStand('Paris', 20, 38, '2.3')
const Lima = new SalmonStand('Lima', 2, 16, '4.6')

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

console.log(Seattle.numOfCookies);
console.log(Tokyo.numOfCookies);
console.log(Dubai.numOfCookies);
console.log(Paris.numOfCookies);
console.log(Lima.numOfCookies);


console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);

tableFooter();

function generateRandomNumber(minCust, maxCust) {
    return Math.ceil(Math.random() * (maxCust - minCust + 1) + minCust); 
  }
  
// console.log(generateRandomNumber(minCust, maxCust))