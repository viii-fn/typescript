// Generics
// When used in functions, generics enable  you to define the type for parameter(s) and return values of the function when you call the function, not when you define the function. Generics are specified using angle brackets <> next to the function name


function createArray<T>(value: T) {
    return [value];
}

const users = createArray('Elvis');
const scores = createArray(100);

function createValue<T>(value: T) :T {
    return value;
}

// custom types simulating fetching data from API endpoints

type Result<T> = {
    data: T | null;
    error: string | null;
}

function getData<T>(url: string): Result<T> {
    return {
        data: null,
        error: null
    }
}

class KeyValuePair<T, U> {
    constructor(public key: T, public value: U) {}
}

const pairOne = new KeyValuePair<string, number>('age', 18);
const pairTwo = new KeyValuePair<string, boolean>('successful', true);

class ArrayHelper {
    static createArray<T>(value: T) {
        return [value];
    }
}

ArrayHelper.createArray<string>('Elvis');
ArrayHelper.createArray<number>(18);


// simulation of fetching data from a HTML input

const inputElement = document.querySelector<HTMLInputElement>('#input');
inputElement?.value;


// Modules in ts 

// Export a function
// Export the function
function sum(x: number, y: number) {
    return x + y;
}
exports.sum = sum;

// Import the function
const { sum } = require("./helper");
sum(1, 2)