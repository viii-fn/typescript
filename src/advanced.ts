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