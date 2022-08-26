const numbers = [23, 12, 10, 34, 33, 19, 1, 5, 56, 43];
const largest = numbers.filter(element => element > 20 );
const lowest = numbers.filter(element => element < 20);
const even = numbers.filter(element => element % 2 === 0);
const odd = numbers.filter(element => element % 2 !== 0);
// console.log(odd)
// console.log(even)
// console.log(lowest)
// console.log(largest)

const products = [
    {id: 1, name: 'macbook', price: 95000},
    {id: 2, name: 'iphone', price: 65000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'ipad', price: 45000}
]
const heighest = products.filter(product => product.price > 50000);
console.log(heighest)