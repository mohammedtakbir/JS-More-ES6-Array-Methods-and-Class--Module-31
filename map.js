const numbers = [4, 5, 6, 7, 8, 9, 10]

/* function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubledIt(number);
        output.push(doubled);
    }
    return output;
} */
// ? regular function
/* function doubleItOld(number){
    return number * 2;
} */
// ? arrow function
const doubledIt = number => number * 2; 

// * map()
const makeDouble = numbers.map(doubledIt);
const makeDoubleDirect = numbers.map(math = num => num * 2);
const makeFive = [1,2,3,4,5].map(x=>x*5);
const makeSqure = [4, 9, 16, 25].map(Math.sqrt);
console.log(makeSqure)
console.log(makeFive)
console.log(makeDoubleDirect);
console.log(makeDouble)


// ? 1. get an array 
// ? 2. for every elements of the arry do something
// ? 3. store the result in an array
// ? 4. return the result array



// const result = getDouble(numbers);
// console.log(result);