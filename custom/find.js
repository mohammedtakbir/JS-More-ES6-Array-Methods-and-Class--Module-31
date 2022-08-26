const numbers = [23, 43, 35, 25, 5, 50, 6];
const fives = numbers.find(num => num % 5 === 0);
const five = numbers.filter(n => n % 5=== 0);
console.log(five);
console.log(fives);