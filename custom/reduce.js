// ?  If initialValue is specified, that also causes currentValue to be initialized to the first value in the array
/* const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);
console.log(total) */

// ? If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
});
console.log(total)