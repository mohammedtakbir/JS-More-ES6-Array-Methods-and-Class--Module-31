const numbers = [23, 43, 35, 25, 5, 50, 6];
const fives = numbers.find(num => num % 5 === 0);
const allFives = numbers.filter(num => num % 5 === 0);
// console.log(allFives);
// console.log(fives);

const products = [
    {id: 1, name: 'macbook', price: 95000},
    {id: 2, name: 'iphone', price: 65000},
    {id: 4, name: 'ipad', price: 45000},
    {id: 3, name: 'watch', price: 25000}
]
const cheap = products.find(product => product.price < 60000);
console.log(cheap);