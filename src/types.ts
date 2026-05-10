// Object shapes with types

type User = {
    readonly id: number,
    name: string
}

type CalculateProfitFn = (revenue: number, expense: number) => number;

const sender: User = {
    id: 1,
    name: 'Elvis'
};

const recipient: User = {
    id: 2,
    name:'Tegha'
};

// Union Types

function calculateProfit(revenue: number | string) {
    if (typeof revenue === 'number') {
        revenue.toFixed
    } else {
        revenue.toString();
    }
}

// Intersection Types

type Person = {
    name: string;
};

type Contact = {
    email: string;
};

type Associate = Person & Contact;

const myAssociate: Associate = {
    name: 'Elvis',
    email: 'elvisirhaye@gmail.com'
}

// Literal Types

const newNumber: 20 | 30 = 20;

// Unknown type

function process(something: unknown) {
    if (typeof something === 'string') {
        something.toUpperCase();
    }
    if (typeof something === 'number') {
        something.toFixed();
    }
}

// Never Type

function reject(message: string) :never {
    throw new Error(message);
};

// reject('Fail to execute');
// console.log('Process done');


// Satisfies Operator

type Conference = {
    title: string;
    schedule: string | Date;
    description: string;
};

const conference = {
    title: 'TS Conference',
    schedule: new Date('2024-04-10'),
    description: 'The Annual TypeScript Conference is here!'
} satisfies Conference;


// Key of 

type Human = {
    name: string;
    age: number;
};

const myProfile: Human = {
    name: 'Elvis',
    age: 18
};

type LockedHuman = {
    readonly [K in keyof Human]: Human[K];
}

function getValue(key: keyof Human, obj: Human) {
    return obj[key];
}

const age = getValue('age', myProfile);

type Feature = {
    darkMode: string;
    newLayout: string;
}

// type mapping :

type FeatureOptions = {
    [K in keyof Feature]: boolean;
}

// Tuples

const myTuple :[number, string, boolean] = [1, 'Elvis', true];

// Enum

enum Sizes { Small = 's', Medium = 'm', Large = 'l' }

console.log(Sizes.Small);
console.log(Sizes.Medium);
console.log(Sizes.Large);

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

class paramUser {
    constructor(
        public name: string,
        readonly id: number,
        private _age: numeber;
    )
}

const paramElvis = new paramUser('Elvis', 1, 18)