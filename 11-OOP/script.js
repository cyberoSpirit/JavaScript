'use strict';

// const Person = function (fullName, birthYear) {
//   //Instance properties
//   this.fullName = fullName;
//   this.birthYear = birthYear;

//   //   //Never create methods in constructor
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1990);
// //1. New object {} is created
// //2. function is called, this = {}
// //3.{} linked to prototype
// //4. function automatically return {}

// const mathilda = new Person('Mathilda', 1970);
// const jack = new Person('Jack', 1999);
// console.log(jonas);
// console.log(mathilda, jack);

// console.log(jonas instanceof Person);

// //Prototype
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, mathilda.species);
// console.log(jonas.hasOwnProperty('fullName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 5, 5, 6, 7];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__.__proto__);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1);
// console.dir(x => x + 1);

/* 
//---------------------------------------------------
// //class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Inctance method
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log(`Hey there :)`);
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
jessica.greet();
const walter = new PersonCl('Walter White', 1965);
//walter.fullName = 'gfegr';

//Static methods
PersonCl.hey = function () {
  console.log(`Hey there :)`);
  console.log(this);
};
PersonCl.hey();

//Don't work
//jessica.hey();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`I'm ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} ooooold`);
  }
}

const martha = new StudentCl('Martha Pu', 2012, 'Math');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

/*
//1.Classes are NOT hoisted
//2.Class are first-class citizens
//3.Classes are executed in strict mode

const account = {
  owner: 'Julia',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

account.latest = 50;
console.log(account.movements);
*/

/* 
//---------------------------------------------------
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`I'm ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jane', 1986, 'Nature');
jay.introduce();
jay.calcAge();

console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah);
*/

/*
//---------------------------------------------------
//Inheritance

const Person = function (fullName, birthYear) {
  //Instance properties
  this.fullName = fullName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (fullName, birthYear, course) {
  Person.call(this, fullName, birthYear);
  this.course = course;
};

//Linking prototypes
//Should be executed right after constructor and before all oher methods
//otherwise other methods will be owerriden
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`I'm ${this.fullName} and I study ${this.course}`);
};

//const per = new Person('Mia', 2000);
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

//Fake incapsulation
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     //Protected property
//     this._movements = [];
//     this._pin = pin;
//     this.locale = navigator.language;

//     console.log(`Thanks for opening account ${this.owner}`);
//   }

//   //Public interface
//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

/*
//Real incapsulation
class Account {
  //Public fields (instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    //Protected property
    this.#pin = pin;

    console.log(`Thanks for opening account ${this.owner}`);
  }

  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  //Static
  // static helper(){

  // }

  //Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('JJ', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);
console.log(acc1.getMovements());
acc1.deposit(250);
acc1.withdraw(-140);
acc1.requestLoan(1000);
//acc1.#approveLoan(100);

//console.log(acc1.#movements);

//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/
