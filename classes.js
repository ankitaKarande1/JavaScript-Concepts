

//ES5
var Person5 = function(name , yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = 2019 - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1998, 'teacher');
john5.calculateAge();

//ES6
class Person6 {

    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = 2019 - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey There');
    }
}

const john6 = new Person6('John', 1990, 'Professor');
Person6.greeting();
john6.calculateAge();

//INHERITANCE

class Vehicle {
 
    constructor (name, type) {
      this.name = name;
      this.type = type;
    }
   
    getName () {
      return this.name;
    }
   
    getType () {
      return this.type;
    }
   
  }
  class Car extends Vehicle {
   
    constructor (name) {
      super(name, 'car');
    }
   
    getName () {
      return 'It is a car: ' + super.getName();
    }
   
  }
  let car = new Car('Tesla');
  console.log(car.getName()); 
  console.log(car.getType()); 