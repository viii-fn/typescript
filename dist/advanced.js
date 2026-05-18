// Generics
// When used in functions, generics enable  you to define the type for parameter(s) and return values of the function when you call the function, not when you define the function. Generics are specified using angle brackets <> next to the function name
function createArray(value) {
    return [value];
}
const users = createArray('Elvis');
const scores = createArray(100);
function createValue(value) {
    return value;
}
function getData(url) {
    return {
        data: null,
        error: null
    };
}
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pairOne = new KeyValuePair('age', 18);
const pairTwo = new KeyValuePair('successful', true);
class ArrayHelper {
    static createArray(value) {
        return [value];
    }
}
ArrayHelper.createArray('Elvis');
ArrayHelper.createArray(18);
// simulation of fetching data from a HTML input
const inputElement = document.querySelector('#input');
inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
// Modules in ts 
//  Exporting
export function sum(x, y) {
    return x + y;
}
// Importing
// import { sum } from "./helper";
// sum(1, 2);
//# sourceMappingURL=advanced.js.map