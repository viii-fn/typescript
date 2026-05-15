// Classes and OOP

class Vehicle {
    color: string
    wheels: number

    constructor(color: string, wheels: number) {
        this.color = color;
        this.wheels = wheels;
    }

    warning(): void {
        console.log('Honk');
    }

    drive(speed: number): void {
        console.log(`Driving at ${speed} mph`);
    }
}

const myCar = new Vehicle('silver', 4);

myCar.warning();
myCar.drive(40);


// inheritance

class Car extends Vehicle {
    name: string
    transmission: string

    constructor(color: string, wheels: number, name: string, transmission: string) {
        super(color, wheels);
        this.name = name;
        this.transmission = transmission;
    }
}

const myBmw = new Car ('red', 4, 'BMW M8 Competition', 'Auto & Manual');

myBmw.drive(280);

// Overrides

class RaceCar extends Car {
    override warning(): void {
        console.log('Exceeding speed limit');
    }
}

const myPagani = new RaceCar('black', 4, 'Huayra BC', 'Auto & Manual');

myPagani.warning();


// Value Modfiers 

class NewUser {
    readonly id: number
    name: string
    picture?: string

    constructor(id: number, name: string, picture?: string) {
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
    private _name: string

    constructor(name: string) {
        this._name = name;
    }
}

class PrivateExtending extends PrivateUser {
    name: string

    constructor(_name: string, name: string) {
        super(_name);
        this.name = name;
    }

    // getName() {
    //     return this._name;
    // }
    // this will throw an error -- "Property '_name' is private and only accessible within class 'PrivateUser'."
}

const elvis = new PrivateUser('Elvis');

const elvis2 = new PrivateExtending('irhaye', 'elvis');


// Protected Modifier
// The protected modifier makes a property or a class accessible from the class and all its child classes, but not from outside:

class ProtectedUser {
    protected name: string

    constructor(name: string) {
        this.name = name;
    }
}

class Account extends ProtectedUser {
    email: string
    
    constructor(name: string, email: string) {
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
    readonly id: number
    name: string
    private _age: number

    constructor(id: number, name: string, _age: number) {
        this.id = id;
        this.name = name;
        this._age = _age;
    }
}


// Parameters. Having strong knowledge in both C# and Javascript is making this too easy. No need for explanation

class paramUser {
    constructor(
        public name: string,
        readonly id: number,
        private _age: number
    ) {}

    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
};

const paramElvis = new paramUser('Elvis', 1, 18);

console.log(paramElvis.age);


// Static Modifier
// The static modifier is used to create properties and methods that belong to the class instead of the object created from that class.

class Square {
    static sides: number = 4;

    static calculatePerimeter(side: number) {
        return Square.sides * side;
    }
}

const perimeter = Square.calculatePerimeter(5);
console.log(perimeter);


// The Abstract Modifier
// The classes, methods, and properties you create in TypeScript can be modified as abstract. Similar to type alias, abstract is used to define the specification of methods and properties.

abstract class Shape {
    constructor(public size: number) {}
    abstract getArea(): number;
}

class Square2 extends Shape {
    constructor(size: number) {
        super(size);
    }

    getArea(): number {
        return this.size ** 2;
    }
}


// Interface
// An interface is used to define the shape of a class, much like the abstract class.

interface Shape2 {
    size: number
    getArea(): number
}