
const callback = number => number * 5

const numbers = [4, 5, 6, 7, 8, 9, 10]
// const doubled = numbers.map(num => num * 2);
const doubled = numbers.map(callback)
const sqrt = numbers.map(Math.sqrt);
const pow = numbers.map(element => Math.pow(element,5))
// console.log(doubled);
// console.log(pow);

// * How to use map() over an array of objects
// ? join the values of  firstName and lastName using map()
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
const join = users.map(
    function element(name){
        // console.log(name.firstName.concat(name.lastName))
        return `${name.firstName} ${name.lastName}`;
    }
)
// console.log(join)
// ? return the first letter
const friends = ['Tom Hiddilson', 'Tom Holand', 'Tom Hanks', 'Tom Hardy'];
const firstLetters = friends.map(letter => letter[0])
// console.log(firstLetters);

const products = [
    {id: 1, name: 'macbook', price: 95000},
    {id: 2, name: 'iphone', price: 65000},
    {id: 3, name: 'watch', price: 25000},
    {id: 4, name: 'ipad', price: 45000}
]
const name = products.map(product => product.name)
console.log(name)