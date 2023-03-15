// OBJECT ACCESSORS
// 1. GETTERS
const person = {
    firstName: 'Aliyu',
    lastName: 'Mustapha',
    language: 'hausa',
    get lang() {
        return this.language.toUpperCase();
    }
}
console.log(person.lang);
// 2. SETTERS
const person1 = {
    firstName: 'Aliyu',
    lastName: 'Mustapha',
    language: '',
    set lang(lang) {
       return this.language = lang;
    }
}
person1.lang = 'English';

console.log(person1.language);

// OBJECT CONSTRUCTORS (FUNCTION CONSTRUCTORS & CLASS CONSTRUCTORS)
// FUNCTION CONSTRUCTORS
// function Person(){
//     this.name = 'Precious';
//     this.skin = 'Dark';
// };

function Person(first, last, age, complexion){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.complexion = complexion;
}

let classRep = new Person('David','Humble', 34, 'Brown');
let johnObj = new Person('John', 'Wick', 40, 'Light Skinned');
classRep.height = '1.65ft';

console.log(classRep);
let checks = classRep instanceof Person;
console.log(checks);

console.log(johnObj);

// ownProps = [];
// for (property in classRep){
//     if (classRep.hasOwnProperty(property)){
//         ownProps.push(property);
//     }
// }
// console.log(ownProps);

// CLASS CONSTRUCTORS
class Bird {
    constructor(name,color,size){
        this.name = name;
        this.color = color;
        this.size = size;
        this.legs = 2;
    }
};

let flying = new Bird('parrot','blue','small');
let soaring = new Bird('Eagle','black','large');
let walking = new Bird('Hen','multi','medium');

console.log(flying);
console.log(soaring);
console.log(walking);

// PROTOTYPES

Person.prototype.nationality = 'Nigerian';

console.log(johnObj.nationality);