// THE THIS KEYWORD
// let b = 'Adams';

// function name(){
//     let c = 'David';
//     console.log(c);
//     console.log(b)
// }
// name();
// function name1(){
//     let e = 'Caleb';
//     console.log(e);
//     // console.log(c);
//     console.log(b);
// }
// name1();

// console.log(b)
// console.log(c)
// console.log(e)

const person1 = {
    firstName: 'Mustapha',
    lastName: 'Ahmad',
    fullName: function () { return this.firstName + ' ' + this.lastName}
}
// displaying using property names
document.getElementById('codeschool').innerHTML  = person1.fullName();

const person2 = {
    firstName: 'Reuben',
    lastName: 'Baba'
}

// displaying using loops

let info = '';
for (x1 in person2) {
    info += person2[x1] + ' ';
}

document.getElementById('codeschool1').innerHTML  = info;

const person3 = {
    firstName: 'Esther',
    lastName: 'Oche'
}
// displaying using Object.values()
let person3Array = Object.values(person3);
document.getElementById('codeschool2').innerHTML  = person3Array;

const person4 = {
    firstName: 'Aisha',
    lastName: 'Zubair'
}
// displaying using JSON.stringify()
let theString = JSON.stringify(person4)
document.getElementById('codeschool3').innerHTML  = theString;

// CALLING THIS ALONE
let y = this;
console.log(y);

// CALLING THIS WITH HELPER FUNCTIONS (OBJECT BINDING FUNCTIONS)
// FUNCTION CALL()
let x = person1.fullName.call(person2);
console.log(x);

// FUNCTION BIND()
let m = person1.fullName.bind(person2);
console.log(m());

// FUNCTION APPLY()
let n = person1.fullName.apply(person2);
console.log(n);

// CREATING JS  OBJECTS
// 1. OBJECT LITERAL
// const person1 = {
//     // firstName: 'Mustapha',
//     // lastName: 'Ahmad',
//     fullName: function () { return this.firstName + ' ' + this.lastName}
// }
// const person = {};
// person.name = 'Emeka Author';
// person.age = 40;
// person.address = 'Barnawa';

// 2. THE KEYWORD NEW
const mac = new Object();
mac.firstName = 'Apple';
mac.lastName = 'MacBook';
mac.fullName = mac.firstName + ' ' + mac.lastName;

console.log(mac);

// delete mac['lastName'];
console.log(mac);