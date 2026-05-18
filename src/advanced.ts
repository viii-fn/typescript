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
//  Exporting
export function sum(x: number, y: number) {
    return x + y;
}

// Importing
// import { sum } from "./helper";
// sum(1, 2);


// Type assertion using the 'as' operator

const inputElement2 = document.querySelector('#input') as HTMLInputElement;

console.log(inputElement2.value);

// This operator is commonly used when you meet a variable of any type, such as when receiving a response from the fetch API call:

fetch('https://abc.com')
    .then(response => response.json())
    .then(data => {
        //...
    });

// If you know the exact data type of the returned DataTransfer, create a type for the data then call the 'as' operator to assert the data variable like this

type Task = {
    id: number;
    title: string;
};

fetch('https://abc.com')
    .then(response => response.json())
    .then(data => {
        (data as Task).title;
    });


// Discriminating Unions
// Network request simulation

type successResponse = {
    state:'success';
    data: { title: string };
};

type failResponse = {
    state: 'failed';
    error: { message: string };
};

type ApiResponse = successResponse | failResponse;

function handleResponse(res: ApiResponse) {
    if (res.state === 'success') {
        console.log(res.data.title);
    } else {
        console.log(res.error.message);
    }
}