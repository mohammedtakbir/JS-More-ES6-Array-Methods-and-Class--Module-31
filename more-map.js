const numbers = [48, 78, 34, 90, 45, 23];
const half = numbers.map(x => x/2);
const third = numbers.map(x => x/3);
// console.log(third)
// console.log(half)

const friends = ['Tom Hiddilson', 'Tom Holand', 'Tom Hanks', 'Tom Hardy'];
const firstLetters = friends.map(friend => friend[0]);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);
// console.log(firstLetters);

const products = [
    {id: 1, name: 'macbook', price: 95000},
    {id: 2, name: 'iphone', price: 65000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'ipad', price: 45000}
]
// const productsName = products.map(name => name.name);
// const productsName = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(price => price.price)
console.log(items)
console.log(prices)