function Car(brand,color,model){
    this.brand = brand;
    this.color = color;
    this.model = model;
}

let saloon = new Car('Benz','Black','c320');

class Car1{
    constructor(brand, color,model){
        this.brand = brand;
        this.color = color;
        this.model = model;
    }
}

let suv = new Car1('Toyota', 'Grey', 'Rav4');
suv.year = '2014';
console.log()

let truck = new Car1('Ford', 'Dark Green', 'F150');

Car.prototype.info = function(){
    return 'I have a ' + this.brand + ' ' + this.model + ', which is ' + this.color + ' in color.'
}

Car1.prototype.info = function(){
    return 'I have a ' + this.brand + ' ' + this.model + ', which is ' + this.color + ' in color.'
}

document.getElementById('saloon').innerHTML = saloon.info();
document.getElementById('suv').innerHTML = suv.info();
document.getElementById('truck').innerHTML = truck.info();