//html elements connections
const averagePriceSpan = document.getElementById("price");
const table = document.getElementById("table");
let averagePrice = 0;
let addedPeople = 0;
let setValid;

//Freelancers copy of block
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener"},
    { name: "Dr. Pressure", price: 51, occupation: "programmer"},
    { name: "Prof. Possibility", price: 43, occupation: "teacher"},
    { name: "Prof. Prism", price: 81, occupation: "teacher"},
    { name: "Dr. Impulse", price: 43, occupation: "teacher"}, 
    { name: "Prof. Spark", price: 76, occupation: "programmer"},
    { name: "Dr. Wire", price: 47, occupation: "teacher"},
    { name: "Prof. Goose", price: 72, occupation: "driver"},
];

const addFreelancer = (freelancer) => {

//Build of the table row and assigning the data structure
const tableRow = document.createElement("tr");
const freelancerName = document.createElement("td");
    freelancerName.textContent = freelancer.name;
const occupation = document.createElement("td");
    occupation.textContent = freelancer.occupation;
const price = document.createElement("td");
    price.textConent = freelancer.price;

//Data and table appended row
tableRow.append(freelancerName, occupation, price);
table.append(tableRow);

//Update Freelancers and prices
addedPeople++
averagePriceSpan.textConent = Math.floor((averagePrice + freelancer.price)/addedPeople)
averagePrice = averagePrice + freelancer.price/addedPeople;
}

//HTML connecters and loop
        //Error in the loop, will need help in the future
setValid = setValid()  {
    if(addedPeople < 8); {
        addFreelancer(freelancers[addedPeople]);
    } else {
        clearInterval(setValid);
    }
}.500