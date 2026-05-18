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
// Parameters. Having strong knowledge in both C# and Javascript is making this too easy. No need for explanation
class paramUser {
    constructor(name, id, _age) {
        this.name = name;
        this.id = id;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
;
const paramElvis = new paramUser('Elvis', 1, 18);
console.log(paramElvis.age);
// Static Modifier
// The static modifier is used to create properties and methods that belong to the class instead of the object created from that class.
class Square {
    static calculatePerimeter(side) {
        return Square.sides * side;
    }
}
Square.sides = 4;
const perimeter = Square.calculatePerimeter(5);
console.log(perimeter);
// The Abstract Modifier
// The classes, methods, and properties you create in TypeScript can be modified as abstract. Similar to type alias, abstract is used to define the specification of methods and properties.
class Shape {
    constructor(size) {
        this.size = size;
    }
}
class Square2 extends Shape {
    constructor(size) {
        super(size);
    }
    getArea() {
        return Math.pow(this.size, 2);
    }
}
export {};
//# sourceMappingURL=classes.js.map