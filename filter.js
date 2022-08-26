const numbers = [23, 12, 10, 34, 33, 19, 1, 5, 56, 43];
/* const bigNums = numbers.filter(bigNumbers);
function bigNumbers(nums){
    return nums > 20;
} */
const bigNums = numbers.filter(num => num > 20)
const tiny = numbers.filter(num => num < 20);
const even = numbers.filter(num => num % 2 === 0);
// console.log(even)
// console.log(tiny)
// console.log(bigNums)

const products = [
    {id: 1, name: 'macbook', price: 95000},
    {id: 2, name: 'iphone', price: 65000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'ipad', price: 45000}
]

// const heighest = products.filter(product => product.price > 100000);
// const heighest = products.filter(product => product.price > 10000);
const heighest = products.filter(product => product.price < 10000);
console.log(heighest)