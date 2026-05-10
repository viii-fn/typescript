"use strict";
// Object shapes with types
Object.defineProperty(exports, "__esModule", { value: true });
const sender = {
    id: 1,
    name: 'Elvis'
};
const recipient = {
    id: 2,
    name: 'Tegha'
};
// Union Types
function calculateProfit(revenue) {
    if (typeof revenue === 'number') {
        revenue.toFixed;
    }
    else {
        revenue.toString();
    }
}
const myAssociate = {
    name: 'Elvis',
    email: 'elvisirhaye@gmail.com'
};
// Literal Types
const newNumber = 20;
// Unknown type
function process(something) {
    if (typeof something === 'string') {
        something.toUpperCase();
    }
    if (typeof something === 'number') {
        something.toFixed();
    }
}
// Never Type
function reject(message) {
    throw new Error(message);
}
;
const conference = {
    title: 'TS Conference',
    schedule: new Date('2024-04-10'),
    description: 'The Annual TypeScript Conference is here!'
};
const myProfile = {
    name: 'Elvis',
    age: 18
};
function getValue(key, obj) {
    return obj[key];
}
const age = getValue('age', myProfile);
// Tuples
const myTuple = [1, 'Elvis', true];
// Enum
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "s";
    Sizes["Medium"] = "m";
    Sizes["Large"] = "l";
})(Sizes || (Sizes = {}));
console.log(Sizes.Small);
console.log(Sizes.Medium);
console.log(Sizes.Large);
// Classes and OOP
class Vehicle {
    constructor(color, wheels) {
        this.color = color;
        this.wheels = wheels;
    }
    warning() {
        console.log('Honk');
    }
    drive(speed) {
        console.log(`Driving at ${speed} mph`);
    }
}
const myCar = new Vehicle('silver', 4);
myCar.warning();
myCar.drive(40);
// inheritance
class Car extends Vehicle {
    constructor(color, wheels, name, transmission) {
        super(color, wheels);
        this.name = name;
        this.transmission = transmission;
    }
}
const myBmw = new Car('red', 4, 'BMW M8 Competition', 'Auto & Manual');
myBmw.drive(280);
// Overrides
class RaceCar extends Car {
    warning() {
        console.log('Exceeding speed limit');
    }
}
const myPagani = new RaceCar('black', 4, 'Huayra BC', 'Auto & Manual');
myPagani.warning();
// Value Modfiers 
class NewUser {
    constructor(id, name, picture) {
        this.id = id;
        this.name = name;
        if (picture) {
            this.picture = picture;
        }
    }
}
// Visibily / Access modfiers
// Private Modifier
//The private modifier is used to make properties and methods accessible only from the class itself.
class PrivateUser {
    constructor(name) {
        this._name = name;
    }
}
class PrivateExtending extends PrivateUser {
    constructor(_name, name) {
        super(_name);
        this.name = name;
    }
}
const elvis = new PrivateUser('Elvis');
const elvis2 = new PrivateExtending('irhaye', 'elvis');
// Protected Modifier
// The protected modifier makes a property or a class accessible from the class and all its child classes, but not from outside:
class ProtectedUser {
    constructor(name) {
        this.name = name;
    }
}
class Account extends ProtectedUser {
    constructor(name, email) {
        super(name);
        this.email = email;
    }
    getUsername() {
        return this.name;
    }
}
const protectedUser = new Account('Elvis', 'irhayeelvisebah@gmail.com');
// console.log(protectedUser.name)  ---  this will throw and error to the compiler -- "Property 'name' is protected and only accessible within class 'ProtectedUser' and its subclasses."
class MixedUser {
    constructor(id, name, _age) {
        this.id = id;
        this.name = name;
        this._age = _age;
    }
}
//# sourceMappingURL=types.js.map