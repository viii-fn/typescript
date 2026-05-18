"use strict";
// Generics
// When used in functions, generics enable  you to define the type for parameter(s) and return values of the function when you call the function, not when you define the function. Generics are specified using angle brackets <> next to the function name
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=advanced.js.map