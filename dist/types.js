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
//# sourceMappingURL=types.js.map