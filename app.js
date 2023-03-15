// JAVASCRIPT OBJECTS
// 1.OBJECT DEFINITION
// let human = "Grace";

const car = {
    brand: "Mercedes Benz",
    model: "c300",
    year: "2017",
    color: "black"
}

// ACCESSING OBJECT PROPERTIES
// 1. DOT NOTATION
let manufacturedYear = car.year;

let message = `In the year ${car.year}, a ${car.brand}, ${car.color} in color, with a model of  ${car.model} was created!.`;

alert(message);

// 2. BRACKET NOTATION
let brand = car["model"];
alert(brand);

// OBJECT METHODS
const person = {
    firstName: "Esther",
    lastName: "Oche",
    age: 22,
    height: "1.64feets",
    complexion: "Dark Skinned",
    fullName: function (){ return `${this.lastName}, ${this.firstName}`}
}

console.log(person.fullName);
console.log(person.fullName());

// NESTED OBJECTS

const locationOne = {
    long: '132deg',
    lat: '154deg',
    continent: ['East Africa', "West Africa", "South Africa"],
    country: {
        name: "Nigeria",
        state: "Kaduna",
        Address: {
            houseNumber: 4,
            street: "Barnawa Close",
            city: 'Barnawa, Kaduna'
        }
    },
    size: '1milsqr'
}

let fullAddress = locationOne.continent[1];

alert(fullAddress);

// TYPE CONVERSION/COERCION
// STRINGS
let val = 20;
console.log(val);
console.log(typeof(val));
val = '20';
console.log(val);
console.log(typeof(val));
val = '20' + 20;
console.log(val);
console.log(typeof(val));
val = '20' * 20;
console.log(val);
console.log(typeof(val));
val = Number(val);
console.log(val); 
console.log(typeof(val));

